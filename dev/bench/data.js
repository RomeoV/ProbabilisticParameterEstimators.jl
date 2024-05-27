window.BENCHMARK_DATA = {
  "lastUpdate": 1716792076519,
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
          "id": "4e16792aa4195e0c07624efcd7a555cbddaada6c",
          "message": "Only check julia 1.10 on CI.\n\n- 1.6 fails because of NonlinearSolve compat\n- nightly fails because of some JET error.",
          "timestamp": "2024-05-26T23:38:57-07:00",
          "tree_id": "acacf78bbf17f779f7999116f37a509a3bcf6bdf",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/4e16792aa4195e0c07624efcd7a555cbddaada6c"
        },
        "date": 1716792075995,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 130874737,
            "unit": "ns",
            "extra": "gctime=9337123\nmemory=429080576\nallocs=607238\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 61025192,
            "unit": "ns",
            "extra": "gctime=2215614\nmemory=60237120\nallocs=417757\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 412682849,
            "unit": "ns",
            "extra": "gctime=18013375.5\nmemory=1002872432\nallocs=1652136\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 94127141.5,
            "unit": "ns",
            "extra": "gctime=3599805\nmemory=109263152\nallocs=739630\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 965306,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087904\nallocs=3682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 253594,
            "unit": "ns",
            "extra": "gctime=0\nmemory=248160\nallocs=1744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}