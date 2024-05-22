module ProbabilisticParameterEstimators
import BlockDiagonals: BlockDiagonal
import LinearAlgebra: Diagonal, lu, diag
import Distributions: Normal, MvNormal, var, cov, fit
import Turing: @model, sample, NUTS
import Logging: with_logger, ConsoleLogger, Warn
import Accessors: @set
import NonlinearSolve: NewtonRaphson, solve, NonlinearLeastSquaresProblem, remake, pickchunksize, AutoForwardDiff, FastShortcutNLLSPolyalg
import NonlinearSolve.ReturnCode
import NonlinearSolve

export UncorrGaussianNoiseModel
export MCMCEstimator, LSQEstimator
export predictsamples, predictdist
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


abstract type EstimationMethod end
function predictsamples(::EstimationMethod, xs, ys, noise_model, nsamples) end
function predictdistr(::EstimationMethod, xs, ys, noise_model) end

include("mcmcestimator.jl")
end # module ProbabilisticParameterEstimators
