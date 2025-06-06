"""
    struct MCMCEstimator{ST<:Turing.InferenceAlgorithm, SAT<:NamedTuple} <: EstimationMethod

The `MCMCEstimator` simply phrases the problem as a Monte-Carlo Markov-Chain inference
problem, which we solve using `Turing.jl`. Therefore, predictions will always first create
samples (after skipping a number of warmup steps), to which a distribution may be fitted.

See also [`predictdist`](@ref) and [`predictsamples`](@ref).

# Fields
$(TYPEDFIELDS)
"""
@kwdef struct MCMCEstimator{ST <: Turing.InferenceAlgorithm, SAT <: NamedTuple} <:
              EstimationMethod
    "Inference algorithm type for MCMC sampling. Defaults to `NUTS`."
    samplealg::ST = NUTS()

    """
    kwargs passed to `Turing.sample`. 
    Defaults to `(; drop_warmup=true, progress=false, verbose=false)`.
    """
    sampleargs::SAT = (; drop_warmup = true, progress = false, verbose = false)
end
solvealg(est::MCMCEstimator) = est.samplealg
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
