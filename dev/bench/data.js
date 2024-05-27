window.BENCHMARK_DATA = {
  "lastUpdate": 1716793168253,
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
          "id": "b643ac0383fe489c32a8870b8e707846460094b6",
          "message": "Bump version.",
          "timestamp": "2024-05-26T23:57:00-07:00",
          "tree_id": "9ebcb8f8bc0aaf4546daa0cfc1a561601f357c75",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/b643ac0383fe489c32a8870b8e707846460094b6"
        },
        "date": 1716793167954,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 143287382,
            "unit": "ns",
            "extra": "gctime=13090093\nmemory=434012032\nallocs=612390\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 62130190,
            "unit": "ns",
            "extra": "gctime=2601306\nmemory=60513760\nallocs=419328\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 419550440,
            "unit": "ns",
            "extra": "gctime=20851005\nmemory=1001457552\nallocs=1650173\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 96473684,
            "unit": "ns",
            "extra": "gctime=3934918\nmemory=109289680\nallocs=740009\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 968428,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087904\nallocs=3682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 252882,
            "unit": "ns",
            "extra": "gctime=0\nmemory=248160\nallocs=1744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}