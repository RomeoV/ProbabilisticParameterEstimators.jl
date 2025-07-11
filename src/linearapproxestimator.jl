import Random: rand!
import SciMLBase.get_root_indp

# as of SciMLBase v2.102.1 this is required to not trigger a type inference issue...
SciMLBase.get_root_indp(prob::NonlinearLeastSquaresProblem) = prob.p

"""
    $(TYPEDEF)

The `LinearApproxEstimator` solves a similar optimization problem as [`LSQEstimator`](@ref),
but solves it just once, and then constructs a multivariate normal distribution centered at
the solution.
The covariance is constructed by computing the Jacobian of ``f(x, \\theta)`` and (roughly)
multiplying it with the observation uncertainty.
See also [this wikipedia link](https://en.wikipedia.org/wiki/Non-linear_least_squares#Extension_by_weights).
The `paramprior` is used to sample initial guesses for ``\\theta``.

Because a distribution is directly constructed [`predictdist`](@ref) will only solve one
optimization problem and compute one Jacobian, directly yielding a `MvNormal` and making
it very efficient.
[`predictsamples`](@ref) will simply sample from this distribution, which is also very fast.

# Fields
$(TYPEDFIELDS)
"""
@kwdef struct LinearApproxEstimator{ST <: Function, SAT <: NamedTuple} <: EstimationMethod
    "Function that creates solver algorithm; will be called with autodiff method fixed."
    solvealg::ST = (; kwargs...) -> SimpleNewtonRaphson(; kwargs...)
    "kwargs passed to `NonlinearSolveBase.solve`. Defaults to `(; )`."
    solveargs::SAT = (; reltol = 1e-3)
end
solvealg(est::LinearApproxEstimator) = est.solvealg
solveargs(est::LinearApproxEstimator) = est.solveargs

function predictdist(est::LinearApproxEstimator, f, xs, ysmeas,
        paramprior::Sampleable, noisemodel::NoiseModel;
        nsamples = nothing)
    # nsamples is provided for compatibility only
    ysmeas_ = maybeflatten(ysmeas)
    ps = (; xs, ys = ysmeas_, noisemodel, f)
    # solve once for init
    θ₀ = rand!(paramprior, similar(mean(paramprior)))
    # in-place doesn't work for our case because size(dr) != size(θ)
    prob = with_logger(NullLogger) do
        NonlinearLeastSquaresProblem{false}(g, θ₀, ps)
    end
    alg = solvealg(est)(; autodiff = AutoForwardDiff())
    θmean = let
        # By default "simple" methods do not check for stalled convergence and then just hit maxiters.
        # See https://github.com/SciML/NonlinearSolve.jl/blob/3c111412b0886c24007d4ec6dc945449793db2fa/lib/NonlinearSolveBase/src/termination_conditions.jl#L276-L296.
        # Because "whitened" NLLQ problems such as ours typically stall due to the noise we use the "non-simple" termination condition here.
        # This is essentially because the noise makes it that the residual is always approximately the norm of white noise with dimension d, which evaluates to `sqrt(d)`.
        # @RomeoV has more discussion saved in [[id:87424319-6656-44a0-9415-56ebdaedb13a][955b5c32-0c77-4baa-bb32-c61948b8000e.org]].
        termination_condition = AbsNormSafeBestTerminationMode(
            Base.Fix2(norm, 2); max_stalled_steps = 32)
        sol = solve(prob, alg; termination_condition, solveargs(est)...)
        # @assert successful_retcode(sol) "$(sol.retcode)"
        sol.u
    end

    f_ = θ -> maybeflatten(f.(xs, [θ]))
    J = jacobian(f_, AutoForwardDiff(), θmean)
    Σy = covmatrix(noisemodel)
    W = inv(Σy)
    A = (J' * W * J) \ (J' * W)

    fpred_ = maybeflatten(f.(xs, [θmean]))

    θmean + A * (MvNormal(ysmeas_, Σy) - fpred_)
end

function predictsamples(est::LinearApproxEstimator, f, xs, ysmeas,
        paramprior::Sampleable, noisemodel::NoiseModel, nsamples)
    dist = predictdist(est, f, xs, ysmeas, paramprior, noisemodel)
    eachcol(rand(dist, nsamples))
end
