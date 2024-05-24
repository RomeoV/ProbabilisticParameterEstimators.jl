abstract type EstimationMethod end
Base.show(io::Base.IO, est::EstimationMethod) = print(io, typeof(est))

function predictsamples(::EstimationMethod, f, xs, ys, paramprior::Sampleable, noise_model::AbstractNoiseModel, nsamples) end

function predictdistr(::EstimationMethod, f, xs, ys, paramprior::Sampleable, noise_model::AbstractNoiseModel) end

include("mcmcestimator.jl")
include("lsqestimator.jl")
include("linearapproxestimator.jl")
