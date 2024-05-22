using Test
using ProbabilisticParameterEstimators
using Distributions
using LinearAlgebra

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

@testset "MCMCEstimator" begin
    @testset "predictsamples and predictdist" begin
        @testset "univariate measurements" begin
            f(x, p) = (x*p[1] + 1)^2 / p[2]
            prior = MvNormal(5*ones(2), 3^2 * I)
            est = MCMCEstimator(prior, f)

            xs = rand(20)
            θtrue = [1.0, 2.0]
            noises = [1/10 * rand() * Normal() for _ in eachindex(xs)]
            noisemodel = UncorrGaussianNoiseModel(noises)
            ysmeas = f.(xs, [θtrue]) .+ rand.(noises)
            chain = @test_nowarn predictsamples(est, xs, ysmeas, noisemodel, 5000)
            @test mean(chain) ≈ θtrue rtol = 1e-1
            pred = @test_nowarn predictdist(est, xs, ysmeas, noisemodel; nsamples=1000)
            @test mean(pred) ≈ θtrue rtol = 1e-1
        end
        @testset "multivariate measurements" begin
            f(x, p) = [(x + 1)^2 - sum(p);
                       (x + 1)^3 + diff(p)[1]]
            prior = MvNormal(5*ones(2), 3^2 * I)
            est = MCMCEstimator(prior, f)

            xs = rand(20)
            θtrue = [1.0, 2.0]
            noises = [rand() * I(2) * MvNormal(zeros(2), 0.1*I) for _ in eachindex(xs)]
            # noises = [rand() * Normal() for _ in eachindex(xs)]
            noisemodel = UncorrGaussianNoiseModel(noises)
            ysmeas = f.(xs, [θtrue]) .+ rand.(noises)
            chain = @test_nowarn predictsamples(est, xs, ysmeas, noisemodel, 1000)
            @test mean(chain) ≈ θtrue rtol = 1e-1
            pred = @test_nowarn predictdist(est, xs, ysmeas, noisemodel; nsamples=1000)
            @test mean(pred) ≈ θtrue rtol = 1e-1
        end
    end
end

@testset "LSQEstimator" begin
    @testset "predictsamples and predictdist" begin
        @testset "univariate measurements" begin
            f(xs, ps) = sum(enumerate(zip(ps, xs))) do (k, (p, x))
                p*x^k
            end

            xs = 5 * eachcol(rand(2,8))
            θtrue = [5., 10]
            prior = MvNormal(θtrue, 0.5^2 * I)
            noises = [0.1 * rand() * Normal() for _ in eachindex(xs)]
            noisemodel = UncorrGaussianNoiseModel(noises)
            ysmeas = f.(xs, [θtrue]) .+ rand.(noises)

            est = LSQEstimator(prior, f)
            samples = @test_nowarn predictsamples(est, xs, ysmeas, noisemodel, 100)
            @test mean(samples) ≈ θtrue rtol = 1e-1
            pred = @test_nowarn predictdist(est, xs, ysmeas, noisemodel; nsamples=100)
            @test mean(pred) ≈ θtrue rtol = 1e-1
        end
        @testset "multivariate measurements" begin
            f(x, p) = [(x + 1)^2 - sum(p);
                       (x + 1)^3 + diff(p)[1]]
            prior = MvNormal(zeros(2), 1.0 * I)
            est = LSQEstimator(prior, f)

            xs = rand(5)
            θtrue = [1.0, 2.0]
            noises = [rand()/10 * I(2) * MvNormal(zeros(2), I) for _ in eachindex(xs)]
            # noises = [rand() * Normal() for _ in eachindex(xs)]
            noisemodel = UncorrGaussianNoiseModel(noises)
            ysmeas = f.(xs, [θtrue]) .+ rand.(noises)
            samples = @test_nowarn predictsamples(est, xs, ysmeas, noisemodel, 100)
            @test mean(samples) ≈ θtrue rtol = 1e-1
            pred = @test_nowarn predictdist(est, xs, ysmeas, noisemodel; nsamples=100)
            @test mean(pred) ≈ θtrue rtol = 1e-1
        end
    end
end

@testset "LinearApproxEstimator" begin
    @testset "predictsamples and predictdist" begin
        @testset "univariate measurements" begin
            f(xs, ps) = sum(enumerate(zip(ps, xs))) do (k, (p, x))
                p*x^k
            end

            xs = 5 * eachcol(rand(2,8))
            θtrue = [5., 10]
            prior = MvNormal(θtrue, 0.5^2 * I)
            noises = [0.1 * rand() * Normal() for _ in eachindex(xs)]
            noisemodel = UncorrGaussianNoiseModel(noises)
            ysmeas = f.(xs, [θtrue]) .+ rand.(noises)

            est = LinearApproxEstimator(prior, f)
            samples = @test_nowarn predictsamples(est, xs, ysmeas, noisemodel, 100)
            @test mean(samples) ≈ θtrue rtol = 1e-1
            pred = @test_nowarn predictdist(est, xs, ysmeas, noisemodel; nsamples=100)
            @test mean(pred) ≈ θtrue rtol = 1e-1
        end
        @testset "multivariate measurements" begin
            f(x, p) = [(x + 1)^2 - sum(p);
                       (x + 1)^3 + diff(p)[1]]
            prior = MvNormal(zeros(2), 1.0 * I)
            est = LinearApproxEstimator(prior, f)

            xs = rand(5)
            θtrue = [1.0, 2.0]
            noises = [rand()/10 * I(2) * MvNormal(zeros(2), I) for _ in eachindex(xs)]
            # noises = [rand() * Normal() for _ in eachindex(xs)]
            noisemodel = UncorrGaussianNoiseModel(noises)
            ysmeas = f.(xs, [θtrue]) .+ rand.(noises)
            samples = @test_nowarn predictsamples(est, xs, ysmeas, noisemodel, 100)
            @test mean(samples) ≈ θtrue rtol = 1e-1
            pred = @test_nowarn predictdist(est, xs, ysmeas, noisemodel; nsamples=100)
            @test mean(pred) ≈ θtrue rtol = 1e-1
        end
    end
end
