window.BENCHMARK_DATA = {
  "lastUpdate": 1752147326024,
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
          "id": "ca672701d256a960b20d6f4d0554f3df0e5861fd",
          "message": "Rm Manifest from docs dir.",
          "timestamp": "2025-07-10T13:32:36+02:00",
          "tree_id": "0b11942cddb04cff04c61abf0d04df4118f6ca38",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/ca672701d256a960b20d6f4d0554f3df0e5861fd"
        },
        "date": 1752147325712,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 53811538.5,
            "unit": "ns",
            "extra": "gctime=4834047.5\nmemory=87556872\nallocs=851002\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 33157344,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32698040\nallocs=498426\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 332860786,
            "unit": "ns",
            "extra": "gctime=72538371\nmemory=1484072496\nallocs=4904527\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 90290508,
            "unit": "ns",
            "extra": "gctime=28310597\nmemory=701442872\nallocs=1849930\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 603060.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3034376\nallocs=10301\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 176093.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1426080\nallocs=4022\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}