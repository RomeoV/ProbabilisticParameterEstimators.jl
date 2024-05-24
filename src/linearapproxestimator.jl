@kwdef struct LinearApproxEstimator{PT, FT, ST, SAT} <: EstimationMethod
    paramprior::PT
    f::FT
    solvealg::ST = TrustRegion
    solveargs::SAT = (; reltol=1e-3)
end
LinearApproxEstimator(paramprior, f) = LinearApproxEstimator(paramprior=paramprior, f=f)
paramprior(est::LinearApproxEstimator) = est.paramprior
mappingfn(est::LinearApproxEstimator) = est.f
solvealg(est::LinearApproxEstimator) = est.solvealg
solveargs(est::LinearApproxEstimator) = est.solveargs

function predictdist(est::LinearApproxEstimator, xs, ysmeas, noisemodel; nsamples=nothing)
    # nsamples is provided for compatibility only
    ysmeas_ = maybeflatten(ysmeas)
    ps = (; xs, ys=ysmeas_, noisemodel, f = mappingfn(est))
    # solve once for init
    θ₀ = rand(paramprior(est))
    # in-place doesn't work for our case because size(dr) != size(θ)
    prob = NonlinearLeastSquaresProblem{false}(g, θ₀, ps)
    alg = solvealg(est)(; autodiff = AutoForwardDiff(; chunksize = 1))
    θmean = let
        sol = solve(prob, alg; solveargs(est)...)
        @assert sol.retcode ∈ [ReturnCode.Success, ReturnCode.Stalled] "$((display(sol); sol.retcode))"
        sol.u
    end

    f = mappingfn(est)
    f_ = θ->maybeflatten(f.(xs, [θ]))
    jaccfg = ForwardDiff.JacobianConfig(f_, θmean, ForwardDiff.Chunk{1}())
    J = jacobian(f_, θmean, jaccfg)
    Σy = covmatrix(noisemodel)
    W = inv(Σy)
    A = (J' * W * J) \ (J' * W)

    fpred_ = maybeflatten(f.(xs, [θmean]))

    θmean + A * (MvNormal(ysmeas_, Σy) - fpred_)
end

function predictsamples(est::LinearApproxEstimator, xs, ys_meas, noisemodel, nsamples)
    dist = predictdist(est, xs, ys_meas, noisemodel)
    eachcol(rand(dist, nsamples))
end
