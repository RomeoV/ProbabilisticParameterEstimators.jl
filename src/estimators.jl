"""
    abstract type EstimationMethod

Abstract base type for the different estimators.
"""
abstract type EstimationMethod end
Base.show(io::Base.IO, est::EstimationMethod) = print(io, typeof(est))

"""
    predictsamples(::EstimationMethod, f, xs, ys, paramprior::Sampleable, noise_model::NoiseModel, nsamples)

Solve the parameter estimation problem ``y = f(x, θ) + ε`` and return samples of the
probability distribution of θ.

Depending on the method, the samples are either generated directly, or sampled from the
predicted distribution. The `paramprior` is used either as a prior for bayesian methods,
or to sample initial guesses for iterative methods.
"""
function predictsamples(::EstimationMethod, f, xs, ys, paramprior::Sampleable,
        noise_model::NoiseModel, nsamples) end

"""
    predictdist(::EstimationMethod, f, xs, ys, paramprior::Sampleable, noise_model::NoiseModel)

Solve the parameter estimation problem ``y = f(x, θ) + ε`` and directly return the
distribution of θ.

Depending on the method, the distribution is either generated directly, or constructed by
fitting a multivariate normal distribution to generated samples. The `paramprior` is used
either as a prior for bayesian methods, or to sample initial guesses for iterative methods.
"""
function predictdist(
        ::EstimationMethod, f, xs, ys, paramprior::Sampleable, noise_model::NoiseModel) end

include("mcmcestimator.jl")
include("lsqestimator.jl")
include("linearapproxestimator.jl")
