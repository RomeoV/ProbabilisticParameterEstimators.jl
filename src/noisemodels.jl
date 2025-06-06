
"""
    NoiseModel

Abstract base type for noise models.

# Fields:
$(TYPEDFIELDS)
"""
abstract type NoiseModel end

"Noise model with no correlation between observations."
abstract type UncorrNoiseModel <: NoiseModel end

"""
    UncorrGaussianNoiseModel{DT}

Model Gaussian noise *within* observations, but without correlation between observations.

# Fields:
$(TYPEDFIELDS)
"""
struct UncorrGaussianNoiseModel{DT} <:
       UncorrNoiseModel where {DT <: Union{<:MvNormal, <:Normal}}
    """
    A vector of (possibly multivariate) Gaussian noise distributions with type `DT`,
    one for each observation.
    """
    noisedistributions::Vector{DT}
end

"""
    UncorrProductNoiseModel{DT}

Model arbitrary noise for univariate observations, without correlation between observations.

# Fields:
$(TYPEDFIELDS)
"""
struct UncorrProductNoiseModel{DT} <:
       UncorrNoiseModel where {DT <: Distribution{Univariate, Continuous}}
    """
    A vector of univariate noise distributions of any kind with type `DT`. Can not model
    correlations within a single observation.
    """
    noisedistributions::Vector{DT}
end

"""
    CorrGaussianNoiseModel{DT}

Model noise possibly correlated between observations with a single large MvNormal.
"""
struct CorrGaussianNoiseModel{DT} <: NoiseModel where {DT <: MvNormal}
    """
    A single multivariate normal distribution with type `DT`, with a noise component 
    for each component in each observation.
    """
    noisedistribution::DT
end

"""
    covmatrix(noisemodel)

Construct a single N by N covariance matrix for flat vector of observations.

May be a special matrix type such as `Diagonal` or `BlockDiagonal`, depending on the noise 
model.
"""
function covmatrix(::NoiseModel) end
function covmatrix(model::UncorrGaussianNoiseModel{<:Normal})
    Diagonal(var.(model.noisedistributions))
end
function covmatrix(model::UncorrGaussianNoiseModel{<:MvNormal})
    BlockDiagonal(Matrix.(cov.(model.noisedistributions)))
end
covmatrix(model::CorrGaussianNoiseModel) = cov(model.noisedistribution)
function covmatrix(model::UncorrProductNoiseModel)
    cov(product_distribution(model.noisedistributions))
end

"""
    mvnoisedistribution(noisemodel)

Construct a samplable noise distribution (e.g. `Product` or `MvNormal`).
"""
function mvnoisedistribution(::NoiseModel) end
function mvnoisedistribution(model::UncorrGaussianNoiseModel{<:Normal})
    MvNormal(zeros(length(model.noisedistributions)),
        covmatrix(model))
end
function mvnoisedistribution(model::UncorrGaussianNoiseModel{<:MvNormal})
    MvNormal(zeros(sum(length.(model.noisedistributions))),
        covmatrix(model))
end
mvnoisedistribution(model::CorrGaussianNoiseModel) = model.noisedistribution
function mvnoisedistribution(model::UncorrProductNoiseModel)
    product_distribution(model.noisedistributions)
end
