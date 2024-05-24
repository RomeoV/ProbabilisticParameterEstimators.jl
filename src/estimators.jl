abstract type EstimationMethod end
Base.show(io::Base.IO, est::EstimationMethod) = print(io, typeof(est))

"""
    predictsamples(::EstimationMethod, f, xs, ys, paramprior::Sampleable, noise_model::AbstractNoiseModel, nsamples)

Solve the parameter estimation problem ``y = f(x, θ) + ε`` and return samples of the probability distribution of θ.

Depending on the method, the samples are either generated directly, or sampled from the predicted distribution.
The `paramprior` is used either as a prior for bayesian methods, or to sample initial guesses for iterative methods.
"""
function predictsamples(::EstimationMethod, f, xs, ys, paramprior::Sampleable, noise_model::AbstractNoiseModel, nsamples) end

"""
    predictdistr(::EstimationMethod, f, xs, ys, paramprior, noise_model)

Solve the parameter estimation problem ``y = f(x, θ) + ε`` and directly return the distribution of θ.

Depending on the method, the distribution is either generated directly, or constructed by fitting a multivariate normal distribution to generated samples.
The `paramprior` is used either as a prior for bayesian methods, or to sample initial guesses for iterative methods.
"""
function predictdistr(::EstimationMethod, f, xs, ys, paramprior::Sampleable, noise_model::AbstractNoiseModel) end

include("mcmcestimator.jl")
include("lsqestimator.jl")
include("linearapproxestimator.jl")
