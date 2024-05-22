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
include("lsqestimator.jl")

@kwdef struct LinearApproxEstimator <: EstimationMethod
    paramprior
    f
    solveargs = (; reltol=1e-3)
end
LinearApproxEstimator(paramprior, f) = LinearApproxEstimator(paramprior=paramprior, f=f)
paramprior(est::LinearApproxEstimator) = est.paramprior
mappingfn(est::LinearApproxEstimator) = est.f
solveargs(est::LinearApproxEstimator) = est.solveargs


function g(θ, (; xs, ys, noisemodel, f))
    W = covmatrix(noisemodel)
    # ys_ = reduce(vcat, ys)
    preds_ = reduce(vcat, f.(xs, [θ]))
    rs = ys - preds_
    lu(W).L \ rs
    rs
end

function predictdist(est::LinearApproxEstimator, xs, ysmeas, noisemodel; nsamples=nothing)
    # nsamples is provided for compatibility only
    d = length(xs)
    ysmeas_ = reduce(vcat, ysmeas)
    ps = (; xs, ys=ysmeas_, noisemodel, f = mappingfn(est))
    # solve once for init
    θ₀ = rand(paramprior(est))
    prob = NonlinearLeastSquaresProblem(g, θ₀, ps)
    alg = NewtonRaphson(; autodiff = AutoForwardDiff(; chunksize = pickchunksize(θ₀)))
    # alg = FastShortcutNLLSPolyalg(; autodiff = AutoForwardDiff(; chunksize = pickchunksize(θ₀)))
    θmean = let
        sol = solve(prob, alg; solveargs(est)...)
        @assert sol.retcode ∈ [ReturnCode.Success, ReturnCode.Stalled] "$((display(sol); sol.retcode))"
        sol.u
    end

    f = mappingfn(est)
    J = jacobian(θ->reduce(vcat, f.(xs, [θ])), θmean)
    @show size(J)
    Σy = covmatrix(noisemodel)
    W = inv(Σy)
    A = (J' * W * J) \ (J' * W)
    # Σθ = A * Σy * A'
    # MvNormal(θmean, Σθ)

    # px = pos_estimate_stripped + A * (py - f(pos_estimate_stripped))
    fpred = f.(xs, [θmean])
    fpred_ = reduce(vcat, fpred)
    pred = θmean + A * (MvNormal(ysmeas_, Σy) - fpred_)
end

function predictsamples(est::LinearApproxEstimator, xs, ys_meas, noisemodel, nsamples)
    dist = predictdist(est, xs, ys_meas, noisemodel)
    eachcol(rand(dist, nsamples))
end
end # module ProbabilisticParameterEstimators
