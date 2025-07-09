window.BENCHMARK_DATA = {
  "lastUpdate": 1752089168980,
  "repoUrl": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl",
  "entries": {
    "Julia benchmark result": [
      {
        "commit": {
          "author": {
            "email": "romeov@stanford.edu",
            "name": "Romeo Valentin",
            "username": "RomeoV"
          },
          "committer": {
            "email": "romeov@stanford.edu",
            "name": "Romeo Valentin",
            "username": "RomeoV"
          },
          "distinct": true,
          "id": "6ddc284b617945af4b612727099519fb0da1f201",
          "message": "Make benchmark Project.toml package path relative, rm Manifest.",
          "timestamp": "2025-07-09T21:17:48+02:00",
          "tree_id": "ca5ec1bb84dd4965ec9b5923cc47bf1cb4896a77",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/6ddc284b617945af4b612727099519fb0da1f201"
        },
        "date": 1752089168458,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 58016259,
            "unit": "ns",
            "extra": "gctime=5949453\nmemory=88306504\nallocs=857488\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 33981525,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32450040\nallocs=494950\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 413061141,
            "unit": "ns",
            "extra": "gctime=101781289\nmemory=1484072496\nallocs=4904527\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 109610980,
            "unit": "ns",
            "extra": "gctime=34958286\nmemory=701442872\nallocs=1849930\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 695921,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3034376\nallocs=10301\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 201988,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1426080\nallocs=4022\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}