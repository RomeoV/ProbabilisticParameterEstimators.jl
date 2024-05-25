@doc raw"""
    $(TYPEDEF)

The `LinearApproxEstimator` solves a similar optimization problem as [`LSQEstimator`](@ref), but solves it just once,
and then constructs a multivariate normal distribution centered at the solution.
The covariance is constructed by computing the Jacobian of ``f(x, \theta)`` and (roughly) multiplying it with the observation uncertainty.
See also [this wikipedia link](https://en.wikipedia.org/wiki/Non-linear_least_squares#Extension_by_weights).
The `paramprior` is used to sample initial guesses for ``\theta``.

Because a distribution is directly constructed [`predictdist`](@ref) will only solve one optimization problem and compute one Jacobian, directly yielding a `MvNormal` and making it very efficient.
[`predictsamples`](@ref) will simply sample from this distribution, which is also very fast.

# Fields
$(TYPEDFIELDS)
"""
@kwdef struct LinearApproxEstimator{ST<:Function, SAT<:NamedTuple} <: EstimationMethod
    "Function that creates solver algorithm; will be called with autodiff method fixed."
    solvealg::ST = TrustRegion
    "kwargs passed to `NonlinearSolve.solve`. Defaults to `(; )`."
    solveargs::SAT = (; reltol=1e-3)
end
solvealg(est::LinearApproxEstimator) = est.solvealg
solveargs(est::LinearApproxEstimator) = est.solveargs

function predictdist(est::LinearApproxEstimator, f, xs, ysmeas, paramprior::Sampleable, noisemodel::NoiseModel;
                     nsamples=nothing)
    # nsamples is provided for compatibility only
    ysmeas_ = maybeflatten(ysmeas)
    ps = (; xs, ys=ysmeas_, noisemodel, f)
    # solve once for init
    θ₀ = rand(paramprior)
    # in-place doesn't work for our case because size(dr) != size(θ)
    prob = NonlinearLeastSquaresProblem{false}(g, θ₀, ps)
    alg = solvealg(est)(; autodiff = AutoForwardDiff(; chunksize = 1))
    θmean = let
        sol = solve(prob, alg; solveargs(est)...)
        @assert sol.retcode ∈ [ReturnCode.Success, ReturnCode.Stalled] "$((display(sol); sol.retcode))"
        sol.u
    end

    f_ = θ->maybeflatten(f.(xs, [θ]))
    jaccfg = ForwardDiff.JacobianConfig(f_, θmean, ForwardDiff.Chunk{1}())
    J = jacobian(f_, θmean, jaccfg)
    Σy = covmatrix(noisemodel)
    W = inv(Σy)
    A = (J' * W * J) \ (J' * W)

    fpred_ = maybeflatten(f.(xs, [θmean]))

    θmean + A * (MvNormal(ysmeas_, Σy) - fpred_)
end

function predictsamples(est::LinearApproxEstimator, f, xs, ysmeas, paramprior::Sampleable, noisemodel::NoiseModel, nsamples)
    dist = predictdist(est, f, xs, ysmeas, paramprior, noisemodel)
    eachcol(rand(dist, nsamples))
end
