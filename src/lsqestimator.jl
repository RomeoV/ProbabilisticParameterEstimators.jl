@kwdef struct LSQEstimator <: EstimationMethod
    paramprior
    f
    solveargs = (; reltol=1e-3)
end
LSQEstimator(paramprior, f) = LSQEstimator(paramprior=paramprior, f=f)
paramprior(est::LSQEstimator) = est.paramprior
mappingfn(est::LSQEstimator) = est.f
solveargs(est::LSQEstimator) = est.solveargs


function g(θ, (; xs, ys, noisemodel, f))
    W = covmatrix(noisemodel)
    # ys_ = reduce(vcat, ys)
    preds_ = reduce(vcat, f.(xs, [θ]))
    rs = ys - preds_
    lu(W).L \ rs
    rs
end

function predictsamples(est::LSQEstimator, xs, ysmeas, noisemodel, nsamples)
    d = length(xs)
    ps = (; xs, ys=reduce(vcat, ysmeas), noisemodel, f = mappingfn(est))
    # solve once for init
    θ₀ = rand(paramprior(est))
    prob = NonlinearLeastSquaresProblem(g, θ₀, ps)
    alg = NewtonRaphson(; autodiff = AutoForwardDiff(; chunksize = pickchunksize(θ₀)))
    # alg = FastShortcutNLLSPolyalg(; autodiff = AutoForwardDiff(; chunksize = pickchunksize(θ₀)))
    θinit = let
        sol = solve(prob, alg; solveargs(est)...)
        @assert sol.retcode ∈ [ReturnCode.Success, ReturnCode.Stalled] "$((display(sol); sol.retcode))"
        sol.u
    end
    prob = remake(prob; u0=θinit)

    # solve for all noise samples
    θs = map(1:nsamples) do _
        samplednoise = rand(mvnoisedistribution(noisemodel))
        ps_ = @set ps.ys = ps.ys - samplednoise
        prob_ = remake(prob, p=ps_)
        sol = solve(prob_, alg; solveargs(est)...)
        @assert sol.retcode ∈ [ReturnCode.Success, ReturnCode.Stalled] "$((display(sol); sol.retcode))"
        sol.u
    end
end

function predictdist(est::LSQEstimator, xs, ys_meas, noisemodel;
                     nsamples=100)
    samples = predictsamples(est, xs, ys_meas, noisemodel, nsamples)
    fit(MvNormal, stack(samples; dims=2))
end
