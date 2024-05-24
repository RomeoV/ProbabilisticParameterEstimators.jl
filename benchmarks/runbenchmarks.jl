using ProbabilisticParameterEstimators
import ProbabilisticParameterEstimators: maybeflatten
using BenchmarkTools
using StaticArraysCore
using Distributions
using LinearAlgebra

suite = BenchmarkGroup()
for est_t in [MCMCEstimator, LSQEstimator, LinearApproxEstimator]
    suite[string(est_t)] = let
        f(x, p) = [(x + 1)^2 - sum(p);
                (x + 1)^3 + diff(p)[1]]
        θtrue = [1.0, 2.0]
        prior = MvNormal(zeros(2), 4.0 * I)

        suite = BenchmarkGroup()
        nsamplesdict =
            Dict("small" => 5,
                "medium" => 20,
                "large"=>100)
        for size in ["small", "medium"] #, "large"]
            suite[size] = @benchmarkable predictsamples(est, xs, ysmeas, noisemodel, 500) setup = begin
                xs = rand($nsamplesdict[$size])
                n = length(xs)
                corrnoise = let n = 2*n
                    1/10 * I(n) * MvNormal(zeros(n), I(n) + 1/5*hermitianpart(rand(n, n)))
                end
                noisemodel = CorrGaussianNoiseModel(corrnoise)
                ysmeas = maybeflatten($f.(xs, [$θtrue])) .+ rand(corrnoise)

                est = $est_t($prior, $f)
            end
        end
        suite
    end
end

tune!(suite)
results = run(suite)
BenchmarkTools.save("benchmarkresults.json", median(results))
