using Test
using ParameterEstimators
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
