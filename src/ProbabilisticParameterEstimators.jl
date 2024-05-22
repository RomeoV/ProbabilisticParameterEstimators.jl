module ProbabilisticParameterEstimators
import BlockDiagonals: BlockDiagonal
import LinearAlgebra: Diagonal, lu, diag, I
import Distributions: Normal, MvNormal, var, cov, fit, Distribution, Univariate, Continuous, product_distribution
import Turing: @model, sample, NUTS
import Logging: with_logger, ConsoleLogger, Warn
import Accessors: @set
import NonlinearSolve: NewtonRaphson, solve, NonlinearLeastSquaresProblem, remake, pickchunksize, AutoForwardDiff, FastShortcutNLLSPolyalg
import NonlinearSolve.ReturnCode
import NonlinearSolve
import ForwardDiff.jacobian

import Base: show

export UncorrGaussianNoiseModel, CorrGaussianNoiseModel, UncorrProductNoiseModel
export MCMCEstimator, LSQEstimator, LinearApproxEstimator
export predictsamples, predictdist
export mvnoisedistribution, covmatrix

abstract type AbstractNoiseModel end
abstract type UncorrNoiseModel <: AbstractNoiseModel end
struct UncorrGaussianNoiseModel{DT} <: UncorrNoiseModel where {DT<:Union{<:MvNormal,<:Normal}}
    noisedistributions::Vector{DT}
end
struct UncorrProductNoiseModel{DT} <: UncorrNoiseModel where {DT<:Distribution{Univariate, Continuous}}
    noisedistributions::Vector{DT}
end
struct CorrGaussianNoiseModel{DT} <: AbstractNoiseModel where {DT<:MvNormal}
    noisedistribution::DT
end

function covmatrix(::AbstractNoiseModel) end
function mvnoisedistribution(::AbstractNoiseModel) end

covmatrix(model::UncorrGaussianNoiseModel{<:Normal}) =
    Diagonal(var.(model.noisedistributions))
covmatrix(model::UncorrGaussianNoiseModel{<:MvNormal}) =
    BlockDiagonal(cov.(model.noisedistributions))
covmatrix(model::CorrGaussianNoiseModel) =
    cov(model.noisedistribution)
covmatrix(model::UncorrProductNoiseModel) =
    cov(product_distribution(model.noisedistributions))

mvnoisedistribution(model::UncorrGaussianNoiseModel{<:Normal}) =
    MvNormal(zeros(length(model.noisedistributions)),
             covmatrix(model))
mvnoisedistribution(model::UncorrGaussianNoiseModel{<:MvNormal}) =
    MvNormal(zeros(sum(length.(model.noisedistributions))),
             covmatrix(model))
mvnoisedistribution(model::CorrGaussianNoiseModel) =
    model.noisedistribution
mvnoisedistribution(model::UncorrProductNoiseModel) =
    product_distribution(model.noisedistributions)


abstract type EstimationMethod end
function predictsamples(::EstimationMethod, xs, ys, noise_model, nsamples) end
function predictdistr(::EstimationMethod, xs, ys, noise_model) end
Base.show(io::Base.IO, est::EstimationMethod) = print(io, typeof(est))

include("mcmcestimator.jl")
include("lsqestimator.jl")
include("linearapproxestimator.jl")
end # module ProbabilisticParameterEstimators
