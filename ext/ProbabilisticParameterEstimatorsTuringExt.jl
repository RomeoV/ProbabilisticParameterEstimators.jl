module ProbabilisticParameterEstimatorsTuringExt

using ProbabilisticParameterEstimators
using Turing
using Turing: @model, sample, NUTS
using Distributions: Sampleable, MvNormal, fit
using LinearAlgebra: diag
using Logging
using Logging: ConsoleLogger, Warn, global_logger
using Accessors: @set

# Re-export the MCMCEstimator type and related functions
export MCMCEstimator, predictsamples, predictdist

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
              ProbabilisticParameterEstimators.EstimationMethod
    "Inference algorithm type for MCMC sampling. Defaults to `NUTS`."
    samplealg::ST = NUTS()

    """
    kwargs passed to `Turing.sample`. 
    Defaults to `(; drop_warmup=true, progress=false, verbose=false)`.
    """
    sampleargs::SAT = (; drop_warmup = true, progress = false, verbose = false)
end

ProbabilisticParameterEstimators.solvealg(est::MCMCEstimator) = est.samplealg
ProbabilisticParameterEstimators.solveargs(est::MCMCEstimator) = est.sampleargs

@model function bayesianmodel(estimator::MCMCEstimator, f, xs, ysmeas,
        paramprior::Sampleable, noisemodel::ProbabilisticParameterEstimators.NoiseModel)
    θ ~ paramprior
    ys = ProbabilisticParameterEstimators.maybeflatten(f.(xs, [θ]))
    ysmeas ~ ProbabilisticParameterEstimators.ShiftedDistribution(
        ProbabilisticParameterEstimators.mvnoisedistribution(noisemodel), ys)
    return
end

function ProbabilisticParameterEstimators.predictsamples(est::MCMCEstimator, f, xs, ysmeas,
        paramprior::Sampleable, noisemodel::ProbabilisticParameterEstimators.NoiseModel, nsamples::Int)
    # we used to have this `with_logger` closure, however it's giving JET trouble
    # correctly inferring the type of `est` somehow.
    # chain = with_logger(ConsoleLogger(Warn)) do  # ignore "Info" outputs.
    original_logger = global_logger() # Store the current global logger
    chain = try
        global_logger(ConsoleLogger(stderr, Logging.Warn))
        alg = ProbabilisticParameterEstimators.solvealg(est)
        sample(bayesianmodel(est, f, xs, ProbabilisticParameterEstimators.maybeflatten(ysmeas), paramprior, noisemodel),
            alg, nsamples;
            ProbabilisticParameterEstimators.solveargs(est)...)
    finally
        global_logger(original_logger) # Always restore the original logger
    end
    d = length(paramprior)
    θsamples = stack([chain[Symbol("θ[$i]")][:] for i in 1:d]; dims = 1)
    eachcol(θsamples)
end

function ProbabilisticParameterEstimators.predictdist(
        est::MCMCEstimator, f, xs, ys_meas, paramprior::Sampleable, noisemodel::ProbabilisticParameterEstimators.NoiseModel;
        nsamples::Int = 100)
    samples = ProbabilisticParameterEstimators.predictsamples(est, f, xs, ys_meas, paramprior, noisemodel, nsamples)
    fit(MvNormal, parent(samples))
end

end # module ProbabilisticParameterEstimatorsTuringExt