abstract type EstimationMethod end
Base.show(io::Base.IO, est::EstimationMethod) = print(io, typeof(est))

function predictsamples(::EstimationMethod, xs, ys, noise_model, nsamples) end
function predictdistr(::EstimationMethod, xs, ys, noise_model) end

include("mcmcestimator.jl")
include("lsqestimator.jl")
include("linearapproxestimator.jl")
