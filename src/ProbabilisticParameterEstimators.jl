module ProbabilisticParameterEstimators
import BlockDiagonals: BlockDiagonal
import LinearAlgebra: Diagonal, lu, diag
import Distributions: Normal, MvNormal, var, cov, fit
export UncorrGaussianNoiseModel
export mvnoisedistribution, covmatrix
abstract type AbstractNoiseModel end
abstract type UncorrNoiseModel <: AbstractNoiseModel end
struct UncorrGaussianNoiseModel{DT} <: UncorrNoiseModel where {DT<:Union{<:MvNormal,<:Normal}}
    noisemodels::Vector{DT}
end
struct UncorrProductNoiseModel <: UncorrNoiseModel end
struct CorrGaussianNoiseModel <: AbstractNoiseModel end

function covmatrix(::AbstractNoiseModel) end
function mvnoisedistribution(::AbstractNoiseModel) end

covmatrix(model::UncorrGaussianNoiseModel{<:Normal}) =
    Diagonal(var.(model.noisemodels))
covmatrix(model::UncorrGaussianNoiseModel{<:MvNormal}) =
    BlockDiagonal(cov.(model.noisemodels))
mvnoisedistribution(model::UncorrGaussianNoiseModel{<:Normal}) =
    MvNormal(zeros(length(model.noisemodels)),
             covmatrix(model))
mvnoisedistribution(model::UncorrGaussianNoiseModel{<:MvNormal}) =
    MvNormal(zeros(sum(length.(model.noisemodels))),
             covmatrix(model))
end # module ProbabilisticParameterEstimators
