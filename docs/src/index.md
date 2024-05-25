# ProbabilisticParameterEstimators.jl

Implementation of different parameter estimators that take in measures under uncertainty and produce a probability distribution over the parameters.

## Problem Setup
We assume parameters $\theta$ in $\mathbb{R}^m$, inputs $x$ in $\mathbb{R}^n$, and observations $y$ in $\mathbb{R}^l$, linked by a observation function

$$y = f(x, \theta) + \varepsilon$$

where $\varepsilon$ is sampled from a known noise distribution $p_{\bar{\varepsilon}}$.
Further assumptions of the noise models are discussed below.
Notice also that $x$, $y$, and $\theta$ may all be multidimensional, with different dimensions.

## High Level Example
``` julia
# observation function with multivariate observations
f(x, p) = [(x + 1)^2 - sum(p);
           (x + 1)^3 + diff(p)[1]]

# true parameter (to be estimated) and a prior belief
θtrue = [1.0, 2.0]
paramprior = MvNormal(zeros(2), 4.0 * I)

# observation noise
obsnoises = [rand()/10 * I(2) * MvNormal(zeros(2), I) for _ in eachindex(xs)]
noisemodel = UncorrGaussianNoiseModel(obsnoises)

# noisy observations x and y
xs = rand(5)
ysmeas = f.(xs, [θtrue]) .+ rand.(noises)

# find a probabilistic description of θ either as samples or as a distribution
# currently we provide three methods
for est in [MCMCEstimator(),
            LinearApproxEstimator(),
            LSQEstimator()]
    # either
    samples =  predictsamples(est, f, xs, ysmeas, paramprior, noisemodel, 100)
    # or
    dist    =  predictdist(est, f, xs, ysmeas, paramprior, noisemodel; nsamples=100)
end
```
