# Noise Models
We are currently considering three different possible noise models.
To understand their difference, consider again how we may have an observation $(x_i, y_i)$, and each $y_i$ may be multi-dimensional.
The first question is: Is noise correlated /across/ multiple observations $y_i$ and $y_j$, $i \neq j$?

If there is **no** correlation between observations, we can use the noise models
- [`UncorrGaussianNoiseModel`](@ref) for (possibly multivariate) Gaussian noise, and
- [`UncorrProductNoiseModel`](@ref)  for univariate noise with arbitrary distributions.

If there **is** correlation between observations, we can use
 - [`CorrGaussianNoiseModel`](@ref) and provide a single multivariate normal distribution.

## Noise Models
```@docs; canonical=true
ProbabilisticParameterEstimators.NoiseModel
UncorrGaussianNoiseModel
UncorrProductNoiseModel
CorrGaussianNoiseModel
```

## Utility Functions
```@docs; canonical=true
mvnoisedistribution
```
```@docs; canonical=true
covmatrix
```

## Noise Model Examples

``` julia
## UncorrGaussianNoiseModel
xs = rand(5)
# one (uni- or multivariate) normal distribution per observation
noises = [MvNormal(zeros(2), I) for _ in eachindex(xs)]
noisemodel = UncorrGaussianNoiseModel(noises)
θtrue = [1.0, 2.0]
ysmeas = f.(xs, [θtrue]) .+ rand.(noises)

## UncorrProductNoiseModel
xs = eachcol(rand(2,30))
# one univariate distribution per observation
productnoise = [truncated(0.1*Normal(), 0, Inf) for _ in 1:length(xs)]
noisemodel = UncorrProductNoiseModel(productnoise)
θtrue = [5., 10]
ysmeas = f.(xs, [θtrue]) .+ rand.(productnoise)

## CorrGaussianNoiseModel
xs = 5 * eachcol(rand(2,30))
n = length(xs)
# one large Gaussian relating all observations
corrnoise = MvNormal(zeros(n), I(n) + 1/5*hermitianpart(rand(n, n)))
noisemodel = CorrGaussianNoiseModel(corrnoise)
θtrue = [5., 10]
ysmeas = f.(xs, [θtrue]) .+ rand(corrnoise)
```
