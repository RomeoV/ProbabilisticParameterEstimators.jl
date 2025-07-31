"""
    struct MCMCEstimator{ST<:Turing.InferenceAlgorithm, SAT<:NamedTuple} <: EstimationMethod

The `MCMCEstimator` simply phrases the problem as a Monte-Carlo Markov-Chain inference
problem, which we solve using `Turing.jl`. Therefore, predictions will always first create
samples (after skipping a number of warmup steps), to which a distribution may be fitted.

See also [`predictdist`](@ref) and [`predictsamples`](@ref).

# Fields
$(TYPEDFIELDS)
"""
@kwdef struct MCMCEstimator{ST, SAT <: NamedTuple} <:
              EstimationMethod
    "Inference algorithm type for MCMC sampling. Defaults to `NUTS`."
    samplealg::ST = nothing

    """
    kwargs passed to `Turing.sample`.
    Defaults to `(; drop_warmup=true, progress=false, verbose=false)`.
    """
    sampleargs::SAT = (; drop_warmup = true, progress = false, verbose = false)
end
