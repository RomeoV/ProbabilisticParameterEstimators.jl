@kwdef struct LinearApproxEstimator <: EstimationMethod
    paramprior
    f
    solveargs = (; reltol=1e-3)
end
LinearApproxEstimator(paramprior, f) = LinearApproxEstimator(paramprior=paramprior, f=f)
paramprior(est::LinearApproxEstimator) = est.paramprior
mappingfn(est::LinearApproxEstimator) = est.f
solveargs(est::LinearApproxEstimator) = est.solveargs

function predictdist(est::LinearApproxEstimator, xs, ysmeas, noisemodel; nsamples=nothing)
    # nsamples is provided for compatibility only
    d = length(xs)
    ysmeas_ = reduce(vcat, ysmeas)
    ps = (; xs, ys=ysmeas_, noisemodel, f = mappingfn(est))
    # solve once for init
    θ₀ = rand(paramprior(est))
    prob = NonlinearLeastSquaresProblem(g, θ₀, ps)
    alg = NewtonRaphson(; autodiff = AutoForwardDiff(; chunksize = pickchunksize(θ₀)))
    # alg = FastShortcutNLLSPolyalg(; autodiff = AutoForwardDiff(; chunksize = pickchunksize(θ₀)))
    θmean = let
        sol = solve(prob, alg; solveargs(est)...)
        @assert sol.retcode ∈ [ReturnCode.Success, ReturnCode.Stalled] "$((display(sol); sol.retcode))"
        sol.u
    end

    f = mappingfn(est)
    J = jacobian(θ->reduce(vcat, f.(xs, [θ])), θmean)
    Σy = covmatrix(noisemodel)
    W = inv(Σy)
    A = (J' * W * J) \ (J' * W)
    # Σθ = A * Σy * A'
    # MvNormal(θmean, Σθ)

    # px = pos_estimate_stripped + A * (py - f(pos_estimate_stripped))
    fpred = f.(xs, [θmean])
    fpred_ = reduce(vcat, fpred)
    pred = θmean + A * (MvNormal(ysmeas_, Σy) - fpred_)
end

function predictsamples(est::LinearApproxEstimator, xs, ys_meas, noisemodel, nsamples)
    dist = predictdist(est, xs, ys_meas, noisemodel)
    eachcol(rand(dist, nsamples))
end
