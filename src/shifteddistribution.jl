import Distributions: ContinuousMultivariateDistribution, length, sampler, eltype,
                      _rand!, loglikelihood, _logpdf, _logpdf!, mean, var, entropy, cov
import Random

struct ShiftedDistribution{DT <: ContinuousMultivariateDistribution, ST} <:
       ContinuousMultivariateDistribution
    D::DT
    shift::ST
    function ShiftedDistribution(
            D::DT, shift::ST) where {DT <: ContinuousMultivariateDistribution, ST}
        @assert length(D) == length(shift)
        new{DT, ST}(D, shift)
    end
end

length(Ds::ShiftedDistribution) = length(Ds.D)
eltype(Ds::ShiftedDistribution) = eltype(Ds.D)
function _rand!(rng::Random.AbstractRNG, Ds::ShiftedDistribution, x::AbstractVector{<:Real})
    _rand!(rng, Ds.D, x)
    x .+= Ds.shift
end
function loglikelihood(Ds::ShiftedDistribution, x::AbstractVector{<:Real})
    loglikelihood(Ds.D, x - Ds.shift)
end
_logpdf(Ds::ShiftedDistribution, x::AbstractVector{<:Real}) = _logpdf(Ds.D, x - Ds.shift)
mean(Ds::ShiftedDistribution) = mean(Ds.D) + Ds.shift
var(Ds::ShiftedDistribution) = var(Ds.D)
cov(Ds::ShiftedDistribution) = cov(Ds.D)
entropy(Ds::ShiftedDistribution) = entropy(Ds.D)
sampler(Ds::ShiftedDistribution) = Ds
