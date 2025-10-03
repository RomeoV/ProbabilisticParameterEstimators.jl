window.BENCHMARK_DATA = {
  "lastUpdate": 1759460844086,
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
          "id": "ff1458275eb3bbcd27264fb473cbe5f1032a05a1",
          "message": "Bump version",
          "timestamp": "2025-10-02T20:05:40-07:00",
          "tree_id": "1a208e7d17405546cce365f5a7749187463527f6",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/ff1458275eb3bbcd27264fb473cbe5f1032a05a1"
        },
        "date": 1759460843344,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 449.530303030303,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":198,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 453.9318181818182,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":198,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 323878928.5,
            "unit": "ns",
            "extra": "gctime=64703100\nmemory=1481281288\nallocs=4825159\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 90082457,
            "unit": "ns",
            "extra": "gctime=26407678\nmemory=698651664\nallocs=1770562\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 547527.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3019384\nallocs=9943\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 139292,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1411088\nallocs=3664\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}