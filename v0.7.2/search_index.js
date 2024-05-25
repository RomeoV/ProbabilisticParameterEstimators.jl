var documenterSearchIndex = {"docs":
[{"location":"noisemodels/#Noise-Models","page":"Noise Models","title":"Noise Models","text":"","category":"section"},{"location":"noisemodels/","page":"Noise Models","title":"Noise Models","text":"We are currently considering three different possible noise models. To understand their difference, consider again how we may have an observation (x_i y_i), and each y_i may be multi-dimensional. The first question is: Is noise correlated /across/ multiple observations y_i and y_j, i neq j?","category":"page"},{"location":"noisemodels/","page":"Noise Models","title":"Noise Models","text":"If there is no correlation between observations, we can use the noise models","category":"page"},{"location":"noisemodels/","page":"Noise Models","title":"Noise Models","text":"UncorrGaussianNoiseModel for (possibly multivariate) Gaussian noise, and\nUncorrProductNoiseModel  for univariate noise with arbitrary distributions.","category":"page"},{"location":"noisemodels/","page":"Noise Models","title":"Noise Models","text":"If there is correlation between observations, we can use","category":"page"},{"location":"noisemodels/","page":"Noise Models","title":"Noise Models","text":"CorrGaussianNoiseModel and provide a single multivariate normal distribution.","category":"page"},{"location":"noisemodels/#Noise-Models-2","page":"Noise Models","title":"Noise Models","text":"","category":"section"},{"location":"noisemodels/","page":"Noise Models","title":"Noise Models","text":"ProbabilisticParameterEstimators.NoiseModel\nUncorrGaussianNoiseModel\nUncorrProductNoiseModel\nCorrGaussianNoiseModel","category":"page"},{"location":"noisemodels/#ProbabilisticParameterEstimators.NoiseModel","page":"Noise Models","title":"ProbabilisticParameterEstimators.NoiseModel","text":"NoiseModel\n\nAbstract base type for noise models.\n\nFields:\n\n\n\n\n\n","category":"type"},{"location":"noisemodels/#ProbabilisticParameterEstimators.UncorrGaussianNoiseModel","page":"Noise Models","title":"ProbabilisticParameterEstimators.UncorrGaussianNoiseModel","text":"UncorrGaussianNoiseModel{DT}\n\nModel Gaussian noise within observations, but without correlation between observations.\n\nFields:\n\nnoisedistributions::Vector: A vector of (possibly multivariate) Gaussian noise distributions with type DT, one for each observation.\n\n\n\n\n\n","category":"type"},{"location":"noisemodels/#ProbabilisticParameterEstimators.UncorrProductNoiseModel","page":"Noise Models","title":"ProbabilisticParameterEstimators.UncorrProductNoiseModel","text":"UncorrProductNoiseModel{DT}\n\nModel arbitrary noise for univariate observations, without correlation between observations.\n\nFields:\n\nnoisedistributions::Vector: A vector of univariate noise distributions of any kind with type DT. Can not model correlations within a single observation.\n\n\n\n\n\n","category":"type"},{"location":"noisemodels/#ProbabilisticParameterEstimators.CorrGaussianNoiseModel","page":"Noise Models","title":"ProbabilisticParameterEstimators.CorrGaussianNoiseModel","text":"CorrGaussianNoiseModel{DT}\n\nModel noise possibly correlated between observations with a single large MvNormal.\n\n\n\n\n\n","category":"type"},{"location":"noisemodels/#Utility-Functions","page":"Noise Models","title":"Utility Functions","text":"","category":"section"},{"location":"noisemodels/","page":"Noise Models","title":"Noise Models","text":"mvnoisedistribution","category":"page"},{"location":"noisemodels/#ProbabilisticParameterEstimators.mvnoisedistribution","page":"Noise Models","title":"ProbabilisticParameterEstimators.mvnoisedistribution","text":"mvnoisedistribution(noisemodel)\n\nConstruct a samplable noise distribution (e.g. Product or MvNormal).\n\n\n\n\n\n","category":"function"},{"location":"noisemodels/","page":"Noise Models","title":"Noise Models","text":"covmatrix","category":"page"},{"location":"noisemodels/#ProbabilisticParameterEstimators.covmatrix","page":"Noise Models","title":"ProbabilisticParameterEstimators.covmatrix","text":"covmatrix(noisemodel)\n\nConstruct a single N by N covariance matrix for flat vector of observations.\n\nMay be a special matrix type such as Diagonal or BlockDiagonal, depending on the noise model.\n\n\n\n\n\n","category":"function"},{"location":"noisemodels/#Noise-Model-Examples","page":"Noise Models","title":"Noise Model Examples","text":"","category":"section"},{"location":"noisemodels/","page":"Noise Models","title":"Noise Models","text":"## UncorrGaussianNoiseModel\nxs = rand(5)\n# one (uni- or multivariate) normal distribution per observation\nnoises = [MvNormal(zeros(2), I) for _ in eachindex(xs)]\nnoisemodel = UncorrGaussianNoiseModel(noises)\nθtrue = [1.0, 2.0]\nysmeas = f.(xs, [θtrue]) .+ rand.(noises)\n\n## UncorrProductNoiseModel\nxs = eachcol(rand(2,30))\n# one univariate distribution per observation\nproductnoise = [truncated(0.1*Normal(), 0, Inf) for _ in 1:length(xs)]\nnoisemodel = UncorrProductNoiseModel(productnoise)\nθtrue = [5., 10]\nysmeas = f.(xs, [θtrue]) .+ rand.(productnoise)\n\n## CorrGaussianNoiseModel\nxs = 5 * eachcol(rand(2,30))\nn = length(xs)\n# one large Gaussian relating all observations\ncorrnoise = MvNormal(zeros(n), I(n) + 1/5*hermitianpart(rand(n, n)))\nnoisemodel = CorrGaussianNoiseModel(corrnoise)\nθtrue = [5., 10]\nysmeas = f.(xs, [θtrue]) .+ rand(corrnoise)","category":"page"},{"location":"estimators/#Making-Predictions-And-Estimation-Methods","page":"Making Predictions And Estimation Methods","title":"Making Predictions And Estimation Methods","text":"","category":"section"},{"location":"estimators/","page":"Making Predictions And Estimation Methods","title":"Making Predictions And Estimation Methods","text":"Given that we have uncertainty in the observations, we are interested in constructing a probabilistic description p_bartheta(theta mid y) of the parameters theta, either as a distribution, or as a set of samples. We implement three estimators for this task, namely","category":"page"},{"location":"estimators/","page":"Making Predictions And Estimation Methods","title":"Making Predictions And Estimation Methods","text":"LSQEstimator, \nLinearApproxEstimator, and\nMCMCEstimator.","category":"page"},{"location":"estimators/","page":"Making Predictions And Estimation Methods","title":"Making Predictions And Estimation Methods","text":"Each estimator constructs predictions either as samples or as a distribution; via predictsamples and predictdist, respectively. The conversion between samples and a distribution can be done automatically via sampling or fitting a multivariate normal distribution.","category":"page"},{"location":"estimators/","page":"Making Predictions And Estimation Methods","title":"Making Predictions And Estimation Methods","text":"(Image: Estimator Overview)","category":"page"},{"location":"estimators/#Making-Predictions","page":"Making Predictions And Estimation Methods","title":"Making Predictions","text":"","category":"section"},{"location":"estimators/","page":"Making Predictions And Estimation Methods","title":"Making Predictions And Estimation Methods","text":"ProbabilisticParameterEstimators.predictdist\nProbabilisticParameterEstimators.predictsamples\nProbabilisticParameterEstimators.EstimationMethod","category":"page"},{"location":"estimators/#ProbabilisticParameterEstimators.predictdist","page":"Making Predictions And Estimation Methods","title":"ProbabilisticParameterEstimators.predictdist","text":"predictdist(::EstimationMethod, f, xs, ys, paramprior::Sampleable, noise_model::NoiseModel)\n\nSolve the parameter estimation problem y = f(x θ) + ε and directly return the distribution of θ.\n\nDepending on the method, the distribution is either generated directly, or constructed by fitting a multivariate normal distribution to generated samples. The paramprior is used either as a prior for bayesian methods, or to sample initial guesses for iterative methods.\n\n\n\n\n\n","category":"function"},{"location":"estimators/#ProbabilisticParameterEstimators.predictsamples","page":"Making Predictions And Estimation Methods","title":"ProbabilisticParameterEstimators.predictsamples","text":"predictsamples(::EstimationMethod, f, xs, ys, paramprior::Sampleable, noise_model::NoiseModel, nsamples)\n\nSolve the parameter estimation problem y = f(x θ) + ε and return samples of the probability distribution of θ.\n\nDepending on the method, the samples are either generated directly, or sampled from the predicted distribution. The paramprior is used either as a prior for bayesian methods, or to sample initial guesses for iterative methods.\n\n\n\n\n\n","category":"function"},{"location":"estimators/#ProbabilisticParameterEstimators.EstimationMethod","page":"Making Predictions And Estimation Methods","title":"ProbabilisticParameterEstimators.EstimationMethod","text":"abstract type EstimationMethod\n\nAbstract base type for the different estimators.\n\n\n\n\n\n","category":"type"},{"location":"estimators/#Estimation-Methods","page":"Making Predictions And Estimation Methods","title":"Estimation Methods","text":"","category":"section"},{"location":"estimators/","page":"Making Predictions And Estimation Methods","title":"Making Predictions And Estimation Methods","text":"LSQEstimator\nLinearApproxEstimator\nMCMCEstimator","category":"page"},{"location":"estimators/#ProbabilisticParameterEstimators.LSQEstimator","page":"Making Predictions And Estimation Methods","title":"ProbabilisticParameterEstimators.LSQEstimator","text":"$(TYPEDEF)\n\nThe LSQEstimator works by sampling noise varepsilon^(k) from the noise model and repeatedly solving a least-squares parameter estimation problem for modified observations y - varepsilon^(k), i.e.\n\ntheta = arg min_theta sum_i ((y_i - varepsilon_i^(k)) - f(x_i theta))^2 cdot w_i\n\nfor uncorrelated noise, where the weights w_i are chosen as the inverse variance. For correlated noise, the weight results from the whole covariance matrix. The paramprior is used to sample initial guesses for theta.\n\nTherefore predictsamples will solve nsamples optimization problems and return a sample each. predictdist will do the same, and then fit a MvNormal distribution.\n\nFields\n\nTYPEDFIELDS\n\n\n\n\n\n","category":"type"},{"location":"estimators/#ProbabilisticParameterEstimators.LinearApproxEstimator","page":"Making Predictions And Estimation Methods","title":"ProbabilisticParameterEstimators.LinearApproxEstimator","text":"$(TYPEDEF)\n\nThe LinearApproxEstimator solves a similar optimization problem as LSQEstimator, but solves it just once, and then constructs a multivariate normal distribution centered at the solution. The covariance is constructed by computing the Jacobian of f(x theta) and (roughly) multiplying it with the observation uncertainty. See also this wikipedia link. The paramprior is used to sample initial guesses for theta.\n\nBecause a distribution is directly constructed predictdist will only solve one optimization problem and compute one Jacobian, directly yielding a MvNormal and making it very efficient. predictsamples will simply sample from this distribution, which is also very fast.\n\nFields\n\nTYPEDFIELDS\n\n\n\n\n\n","category":"type"},{"location":"estimators/#ProbabilisticParameterEstimators.MCMCEstimator","page":"Making Predictions And Estimation Methods","title":"ProbabilisticParameterEstimators.MCMCEstimator","text":"struct MCMCEstimator{ST<:Turing.InferenceAlgorithm, SAT<:NamedTuple} <: EstimationMethod\n\nThe MCMCEstimator simply phrases the problem as a Monte-Carlo Markov-Chain inference problem, which we solve using Turing.jl. Therefore, predictions will always first create samples (after skipping a number of warmup steps), to which a distribution may be fitted.\n\nSee also predictdist and predictsamples.\n\nFields\n\nsamplealg::Turing.Inference.InferenceAlgorithm: Inference algorithm type for MCMC sampling. Defaults to NUTS.\nsampleargs::NamedTuple: kwargs passed to Turing.sample. Defaults to (; drop_warmup=true, progress=false, verbose=false).\n\n\n\n\n\n","category":"type"},{"location":"#ProbabilisticParameterEstimators.jl","page":"ProbabilisticParameterEstimators.jl","title":"ProbabilisticParameterEstimators.jl","text":"","category":"section"},{"location":"","page":"ProbabilisticParameterEstimators.jl","title":"ProbabilisticParameterEstimators.jl","text":"Implementation of different parameter estimators that take in measures under uncertainty and produce a probability distribution over the parameters.","category":"page"},{"location":"#Problem-Setup","page":"ProbabilisticParameterEstimators.jl","title":"Problem Setup","text":"","category":"section"},{"location":"","page":"ProbabilisticParameterEstimators.jl","title":"ProbabilisticParameterEstimators.jl","text":"We assume parameters theta in mathbbR^m, inputs x in mathbbR^n, and observations y in mathbbR^l, linked by a observation function","category":"page"},{"location":"","page":"ProbabilisticParameterEstimators.jl","title":"ProbabilisticParameterEstimators.jl","text":"y = f(x theta) + varepsilon","category":"page"},{"location":"","page":"ProbabilisticParameterEstimators.jl","title":"ProbabilisticParameterEstimators.jl","text":"where varepsilon is sampled from a known noise distribution p_barvarepsilon. Further assumptions of the noise models are discussed below. Notice also that x, y, and theta may all be multidimensional, with different dimensions.","category":"page"},{"location":"#High-Level-Example","page":"ProbabilisticParameterEstimators.jl","title":"High Level Example","text":"","category":"section"},{"location":"","page":"ProbabilisticParameterEstimators.jl","title":"ProbabilisticParameterEstimators.jl","text":"# observation function with multivariate observations\nf(x, p) = [(x + 1)^2 - sum(p);\n           (x + 1)^3 + diff(p)[1]]\n\n# true parameter (to be estimated) and a prior belief\nθtrue = [1.0, 2.0]\nparamprior = MvNormal(zeros(2), 4.0 * I)\n\n# observation noise\nobsnoises = [rand()/10 * I(2) * MvNormal(zeros(2), I) for _ in eachindex(xs)]\nnoisemodel = UncorrGaussianNoiseModel(obsnoises)\n\n# noisy observations x and y\nxs = rand(5)\nysmeas = f.(xs, [θtrue]) .+ rand.(noises)\n\n# find a probabilistic description of θ either as samples or as a distribution\n# currently we provide three methods\nfor est in [MCMCEstimator(),\n            LinearApproxEstimator(),\n            LSQEstimator()]\n    # either\n    samples =  predictsamples(est, f, xs, ysmeas, paramprior, noisemodel, 100)\n    # or\n    dist    =  predictdist(est, f, xs, ysmeas, paramprior, noisemodel; nsamples=100)\nend","category":"page"}]
}