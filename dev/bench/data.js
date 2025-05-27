window.BENCHMARK_DATA = {
  "lastUpdate": 1748326676801,
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
          "id": "5bd8cc7ce70388a851cdc63f1e056de35a059dfc",
          "message": "Remove `with_logger` closure\n\nwe used to have this `with_logger` closure, however it's giving JET trouble\ncorrectly inferring the type of `est` somehow.\nShould fix github tests.",
          "timestamp": "2025-05-26T23:12:28-07:00",
          "tree_id": "d742e2380c5d72dcb1a43e64ce3aac2deb0dfb2b",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/5bd8cc7ce70388a851cdc63f1e056de35a059dfc"
        },
        "date": 1748326676070,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 71803372,
            "unit": "ns",
            "extra": "gctime=6506813.5\nmemory=98174872\nallocs=971945\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 52755276,
            "unit": "ns",
            "extra": "gctime=3568247\nmemory=41316360\nallocs=597101\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 315075933,
            "unit": "ns",
            "extra": "gctime=61554322.5\nmemory=1484072496\nallocs=4904527\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 87144917,
            "unit": "ns",
            "extra": "gctime=24741276\nmemory=701442872\nallocs=1849930\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 572421.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3034376\nallocs=10301\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 174976,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1426080\nallocs=4022\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}