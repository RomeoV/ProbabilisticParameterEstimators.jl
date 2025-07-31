window.BENCHMARK_DATA = {
  "lastUpdate": 1753941499835,
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
          "id": "65038eb59b404d4920a367673ec3aa4897d5f4d5",
          "message": "Bump version",
          "timestamp": "2025-07-30T22:55:07-07:00",
          "tree_id": "58a89c47b703613bace64edee4ec9451785826bc",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/65038eb59b404d4920a367673ec3aa4897d5f4d5"
        },
        "date": 1753941498546,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 470.73604060913704,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":197,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 498.24365482233503,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":197,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 354920470,
            "unit": "ns",
            "extra": "gctime=70551719\nmemory=1481291704\nallocs=4825364\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 93358551.5,
            "unit": "ns",
            "extra": "gctime=28277967\nmemory=698662080\nallocs=1770767\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 626975.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3029800\nallocs=10148\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 175626,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1421504\nallocs=3869\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}