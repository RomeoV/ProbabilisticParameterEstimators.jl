@kwdef struct MCMCEstimator <: EstimationMethod
    paramprior
    f
end
paramprior(est::MCMCEstimator) = est.paramprior
mappingfn(est::MCMCEstimator) = est.f

@model function bayesianmodel(estimator::MCMCEstimator, xs, ysmeas, noisemodel)
    θ ~ paramprior(estimator)
    f = mappingfn(estimator)
    ys = reduce(vcat, f.(xs, [θ]))
    # TODO: This shouldn't be a MvNormal
    ysmeas ~ MvNormal(ys, covmatrix(noisemodel))
    return
end

function predictsamples(est::MCMCEstimator, xs, ysmeas, noisemodel, nsamples;
                        drop_warmup=true, progress=false, verbose=false,
                        kwargs...)
    chain = with_logger(ConsoleLogger(Warn)) do
        sample(bayesianmodel(est, xs, reduce(vcat, ysmeas), noisemodel), NUTS(), nsamples;
            drop_warmup, progress, verbose, kwargs...)
    end
    d = length(paramprior(est))
    θsamples = stack([chain[Symbol("θ[$i]")][:] for i in 1:d]; dims=1)
    eachcol(θsamples)
end
function predictdist(est::MCMCEstimator, xs, ys_meas, noisemodel;
                     nsamples=100)
    samples = predictsamples(est, xs, ys_meas, noisemodel, nsamples)
    fit(MvNormal, parent(samples))
end
