window.BENCHMARK_DATA = {
  "lastUpdate": 1752239883134,
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
          "id": "018c9c2f54aee6fe580db36a15cd58e202e64531",
          "message": "Bump version",
          "timestamp": "2025-07-11T15:15:41+02:00",
          "tree_id": "ac4459830c11ae8b2c612bb01b027c9a6d29c6d4",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/018c9c2f54aee6fe580db36a15cd58e202e64531"
        },
        "date": 1752239882652,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 55869630.5,
            "unit": "ns",
            "extra": "gctime=6164473\nmemory=88416504\nallocs=858527\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 33577643,
            "unit": "ns",
            "extra": "gctime=0\nmemory=31937064\nallocs=487336\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 378955478,
            "unit": "ns",
            "extra": "gctime=79209577.5\nmemory=1481291704\nallocs=4825364\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 99417881,
            "unit": "ns",
            "extra": "gctime=30276594\nmemory=698662080\nallocs=1770767\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 659182,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3029800\nallocs=10148\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 180778,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1421504\nallocs=3869\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}