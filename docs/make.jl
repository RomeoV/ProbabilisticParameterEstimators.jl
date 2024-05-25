using Documenter
using ProbabilisticParameterEstimators

makedocs(
    sitename = "ProbabilisticParameterEstimators",
    format = Documenter.HTML(),
    clean = true,
    checkdocs=:exports,
    modules = [ProbabilisticParameterEstimators],
    repo = Remotes.GitHub("RomeoV", "ProbabilisticParameterEstimators.jl");
    pages = [
        "index.md",
        "estimators.md",
        "noisemodels.md"
    ]
)

# Documenter can also automatically deploy documentation to gh-pages.
# See "Hosting Documentation" and deploydocs() in the Documenter manual
# for more information.
deploydocs(
    repo = "github.com/RomeoV/ProbabilisticParameterEstimators.jl.git";
)
