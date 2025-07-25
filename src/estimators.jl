import SciMLBase
import SciMLBase.get_root_indp

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

make_g(f) = (θ, ps)->begin
    (; xs, ys, noisemodel) = ps
    Σ = covmatrix(noisemodel)
    preds_ = maybeflatten([f(x, θ) for x in xs])
    rs = ys - preds_
    cholesky(Σ).L \ rs
end

@kwdef struct ProblemParams{XT, YT, NT<:NoiseModel}
  xs::XT
  ys::YT
  noisemodel::NT
end
# at the time of writing, with SciMLBase v2.102.1, this is required to not trigger a type inference issue...
SciMLBase.get_root_indp(prob::NonlinearLeastSquaresProblem{_inplace, _spec, <:ProblemParams}) where {_inplace, _spec} = prob.p

include("linearapproxestimator.jl")
include("lsqestimator.jl")
include("mcmcestimator.jl")
