@kwdef struct LSQEstimator{ST, SAT} <: EstimationMethod
    solvealg::ST = TrustRegion
    solveargs::SAT = (; reltol=1e-3)
end
solvealg(est::LSQEstimator) = est.solvealg
solveargs(est::LSQEstimator) = est.solveargs


function g(θ, (; xs, ys, noisemodel, f))
    W = covmatrix(noisemodel)
    preds_ = maybeflatten(f.(xs, [θ]))
    rs = ys - preds_
    lu(W).L \ rs
end

# this doesn't really work for our case because size(dr) != size(θ)
# function g!(dr, θ, (; xs, ys, noisemodel, f))
#     W = covmatrix(noisemodel)
#     # ys_ = reduce(vcat, ys)
#     # preds_ = reduce(vcat, f.(xs, [θ]))
#     preds_ = maybeflatten(f.(xs, [θ]))
#     rs = ys - preds_
#     @show size(rs)
#     @show size(dr)
#     dr .= lu(W).L \ rs
#     return dr
# end

function predictsamples(est::LSQEstimator, f, xs, ysmeas, paramprior::Sampleable, noisemodel::NoiseModel, nsamples)
    ysmeas_ = maybeflatten(ysmeas)
    ps = (; xs, ys=ysmeas_, noisemodel, f)
    # solve once for init
    θ₀ = rand(paramprior)
    # in-place doesn't work for our case because size(dr) != size(θ)
    prob = NonlinearLeastSquaresProblem{false}(g, θ₀, ps)
    alg = solvealg(est)(; autodiff = AutoForwardDiff(; chunksize = 1))
    θinit = let
        sol = solve(prob, alg; solveargs(est)...)
        @assert sol.retcode ∈ [ReturnCode.Success, ReturnCode.Stalled] "$((display(sol); sol.retcode))"
        sol.u
    end
    prob′ = remake(prob; u0=θinit)

    # solve for all noise samples
    θs = map(1:nsamples) do _
        samplednoise = rand(mvnoisedistribution(noisemodel))
        ps_ = @set ps.ys = ps.ys - samplednoise
        prob′′ = remake(prob′, p=ps_)
        sol = solve(prob′′, alg; solveargs(est)...)
        @assert sol.retcode ∈ [ReturnCode.Success, ReturnCode.Stalled] "$((display(sol); sol.retcode))"
        sol.u
    end
    θs
end

function predictdist(est::LSQEstimator, f, xs, ysmeas, paramprior::Sampleable, noisemodel::NoiseModel;
                     nsamples=100)
    samples = predictsamples(est, f, xs, ysmeas, paramprior, noisemodel, nsamples)
    fit(MvNormal, stack(samples; dims=2))
end
