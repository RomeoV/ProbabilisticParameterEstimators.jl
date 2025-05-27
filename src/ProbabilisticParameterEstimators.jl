module ProbabilisticParameterEstimators
import BlockDiagonals: BlockDiagonal
import LinearAlgebra: Diagonal, lu, diag, I, cholesky, norm
import Distributions: Normal, MvNormal, var, cov, fit, Distribution, Univariate, Continuous,
                      product_distribution, Sampleable
import Turing
import Turing: @model, sample, NUTS
import Logging: with_logger, ConsoleLogger, Warn
import Accessors: @set
import SimpleNonlinearSolve: SimpleNewtonRaphson, solve, NonlinearLeastSquaresProblem,
                             remake, pickchunksize, AutoForwardDiff, SimpleTrustRegion
import NonlinearSolveBase.ReturnCode
import NonlinearSolveBase: AbsNormSafeBestTerminationMode
import NonlinearSolveBase.SciMLBase: successful_retcode
import SimpleNonlinearSolve
import ForwardDiff.jacobian
import ForwardDiff
using DocStringExtensions

import Base: show

export UncorrGaussianNoiseModel, CorrGaussianNoiseModel, UncorrProductNoiseModel
export MCMCEstimator, LSQEstimator, LinearApproxEstimator
export predictsamples, predictdist
export mvnoisedistribution, covmatrix

"""
    maybeflatten(elems::AbstractVector{<:AbstractVector{T}}) where {T<:Real}
    maybeflatten(elems::AbstractVector{T}) where {T<:Real}

Flatten a vector of vectors into a single vector if the elements are vectors
themselves. Otherwise, just return the input vector unchanged.
"""
maybeflatten(elems::AbstractVector{<:AbstractVector{T}}) where {T <: Real} = reduce(
    vcat, elems; init = T[])
maybeflatten(elems::AbstractVector{T}) where {T <: Real} = elems

include("noisemodels.jl")
include("shifteddistribution.jl")
include("estimators.jl")

end # module ProbabilisticParameterEstimators
