module TuringExt
import ProbabilisticParameterEstimators: solvealg, solveargs, predictsamples,
    predictdist, NoiseModel, ShiftedDistribution, maybeflatten, EstimationMethod,
    MCMCEstimator, mvnoisedistribution
import Distributions: Sampleable, MvNormal, fit
using DocStringExtensions
using Logging
import Turing
import Turing: @model, sample, NUTS, parent

solvealg(est::MCMCEstimator) = (isnothing(est.samplealg) ? NUTS() : est.samplealg)
solveargs(est::MCMCEstimator) = est.sampleargs

@model function bayesianmodel(estimator::MCMCEstimator, f, xs, ysmeas,
        paramprior::Sampleable, noisemodel::NoiseModel)
    θ ~ paramprior
    ys = maybeflatten(f.(xs, [θ]))
    ysmeas ~ ShiftedDistribution(mvnoisedistribution(noisemodel), ys)
    return
end

function predictsamples(est::MCMCEstimator, f, xs, ysmeas,
        paramprior::Sampleable, noisemodel::NoiseModel, nsamples::Int)
    # we used to have this `with_logger` closure, however it's giving JET trouble
    # correctly inferring the type of `est` somehow.
    # chain = with_logger(ConsoleLogger(Warn)) do  # ignore "Info" outputs.
    original_logger = global_logger() # Store the current global logger
    chain = try
        global_logger(ConsoleLogger(stderr, Logging.Warn))
        alg = solvealg(est)
        sample(bayesianmodel(est, f, xs, maybeflatten(ysmeas), paramprior, noisemodel),
            alg, nsamples;
            solveargs(est)...)
    finally
        global_logger(original_logger) # Always restore the original logger
    end
    d = length(paramprior)
    θsamples = stack([chain[Symbol("θ[$i]")][:] for i in 1:d]; dims = 1)
    eachcol(θsamples)
end
function predictdist(
        est::MCMCEstimator, f, xs, ys_meas, paramprior::Sampleable, noisemodel::NoiseModel;
        nsamples::Int = 100)
    samples = predictsamples(est, f, xs, ys_meas, paramprior, noisemodel, nsamples)
    fit(MvNormal, parent(samples))
end
end
