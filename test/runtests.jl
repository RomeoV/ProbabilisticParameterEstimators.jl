using Test
using ProbabilisticParameterEstimators
using Distributions
using LinearAlgebra
using Aqua
using JET

@testset "ProbabilisticParameterEstimators.jl" begin
    @testset "Code quality (Aqua.jl)" begin
        # gotta split this: see https://github.com/JuliaTesting/Aqua.jl/issues/77
        Aqua.test_all(ProbabilisticParameterEstimators, ambiguities = false)
        Aqua.test_ambiguities(ProbabilisticParameterEstimators)
    end

    @testset "Code linting (JET.jl)" begin
        JET.test_package(ProbabilisticParameterEstimators;
            target_defined_modules = true)
    end

    @testset "mvnoisedistribution" begin
        model1 = @test_nowarn UncorrGaussianNoiseModel(
            [Normal(), 2 * Normal()]
        )
        @test_nowarn mvnoisedistribution(model1)

        model2 = @test_nowarn UncorrGaussianNoiseModel(
            [MvNormal(zeros(3), I), 2 * I(2) * MvNormal(zeros(2), I)]
        )
        @test_nowarn mvnoisedistribution(model2)
    end

    @testset "predictsamples and predictdist" begin
        @testset "univariate measurements" begin
            f(xs, ps) =
                sum(enumerate(zip(ps, xs))) do (k, (p, x))
                    p * x^k
                end

            xs = 5 * eachcol(rand(2, 8))
            θtrue = [5.0, 10]
            prior = MvNormal(θtrue, 0.5^2 * I)
            noises = [0.1 * rand() * Normal() for _ in eachindex(xs)]
            noisemodel = UncorrGaussianNoiseModel(noises)
            ysmeas = f.(xs, [θtrue]) .+ rand.(noises)

            @testset for est in [MCMCEstimator(),
                LinearApproxEstimator(),
                LSQEstimator()]
                samples = @test_nowarn predictsamples(
                    est, f, xs, ysmeas, prior, noisemodel, 100)
                @test mean(samples)≈θtrue rtol=1e-1
                pred = @test_nowarn predictdist(
                    est, f, xs, ysmeas, prior, noisemodel; nsamples = 100)
                @test mean(pred)≈θtrue rtol=1e-1
            end
        end
        @testset "multivariate measurements" begin
            f(x, p) = [(x + 1)^2 - sum(p);
                       (x + 1)^3 + diff(p)[1]]

            xs = rand(5)
            θtrue = [1.0, 2.0]
            prior = MvNormal(zeros(2), 1.0 * I)
            noises = [rand() / 10 * I(2) * MvNormal(zeros(2), I) for _ in eachindex(xs)]
            # noises = [rand() * Normal() for _ in eachindex(xs)]
            noisemodel = UncorrGaussianNoiseModel(noises)
            ysmeas = f.(xs, [θtrue]) .+ rand.(noises)

            @testset for est in [MCMCEstimator(),
                LinearApproxEstimator(),
                LSQEstimator()]
                samples = @test_nowarn predictsamples(
                    est, f, xs, ysmeas, prior, noisemodel, 100)
                @test mean(samples)≈θtrue rtol=1e-1
                pred = @test_nowarn predictdist(
                    est, f, xs, ysmeas, prior, noisemodel; nsamples = 100)
                @test mean(pred)≈θtrue rtol=1e-1
            end
        end
        @testset "correlated gaussian noise" begin
            f(xs, ps) =
                sum(enumerate(zip(ps, xs))) do (k, (p, x))
                    p * x^k
                end

            xs = 5 * eachcol(rand(2, 30))
            θtrue = [5.0, 10]
            prior = MvNormal(θtrue, 0.5^2 * I)
            n = length(xs)
            corrnoise = MvNormal(zeros(n), I(n) + 1 / 5 * hermitianpart(rand(n, n)))
            noisemodel = CorrGaussianNoiseModel(corrnoise)

            ysmeas = f.(xs, [θtrue]) .+ rand(corrnoise)

            @testset for est in [MCMCEstimator(),
                LinearApproxEstimator(),
                LSQEstimator()]
                samples = @test_nowarn predictsamples(
                    est, f, xs, ysmeas, prior, noisemodel, 100)
                @test mean(samples)≈θtrue rtol=1e-1
                pred = @test_nowarn predictdist(
                    est, f, xs, ysmeas, prior, noisemodel; nsamples = 100)
                @test mean(pred)≈θtrue rtol=1e-1
            end
        end
        @testset "multivariate measurements correlated gaussian noise" begin
            f(x, p) = [(x + 1)^2 - sum(p);
                       (x + 1)^3 + diff(p)[1]]

            xs = rand(50)
            θtrue = [1.0, 2.0]
            prior = MvNormal(zeros(2), 4.0 * I)

            n = length(xs)
            # because observation are two dimensional
            corrnoise = let n = 2 * n
                Σ = zeros(n, n)
                while !isposdef(Σ)
                    Σ .= I(n) + 1 / 5 * hermitianpart(rand(n, n))
                end
                1 / 10 * I(n) * MvNormal(zeros(n), Σ)
            end

            noisemodel = CorrGaussianNoiseModel(corrnoise)

            ysmeas = reduce(vcat, f.(xs, [θtrue])) .+ rand(corrnoise)

            @testset for est in [MCMCEstimator(),
                LinearApproxEstimator(),
                LSQEstimator()]
                samples = @test_nowarn predictsamples(
                    est, f, xs, ysmeas, prior, noisemodel, 100)
                @test mean(samples)≈θtrue rtol=1e-1
                pred = @test_nowarn predictdist(
                    est, f, xs, ysmeas, prior, noisemodel; nsamples = 100)
                @test mean(pred)≈θtrue rtol=1e-1
            end
        end
        @testset "product noise" begin
            f(xs, ps) =
                sum(enumerate(zip(ps, xs))) do (k, (p, x))
                    p * x^k
                end

            xs = 5 * eachcol(rand(2, 30))
            θtrue = [5.0, 10]
            prior = MvNormal(θtrue, 0.5^2 * I)
            n = length(xs)
            productnoise = [truncated(0.1 * Normal(), 0, Inf) for _ in 1:length(xs)]
            noisemodel = UncorrProductNoiseModel(productnoise)

            ysmeas = f.(xs, [θtrue]) .+ rand.(productnoise)

            @testset for est in [MCMCEstimator(),
                LinearApproxEstimator(),
                LSQEstimator()]
                samples = @test_nowarn predictsamples(
                    est, f, xs, ysmeas, prior, noisemodel, 100)
                @test mean(samples)≈θtrue rtol=1e-1
                pred = @test_nowarn predictdist(
                    est, f, xs, ysmeas, prior, noisemodel; nsamples = 100)
                @test mean(pred)≈θtrue rtol=1e-1
            end
        end
    end
end
