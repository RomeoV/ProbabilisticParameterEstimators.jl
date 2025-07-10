window.BENCHMARK_DATA = {
  "lastUpdate": 1752147790815,
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
          "id": "a7680c37392fea72996fe3ebbfcff11216a4e55a",
          "message": "Trigger CI",
          "timestamp": "2025-07-10T13:40:54+02:00",
          "tree_id": "c77a135ed9f9b46dd6fae46f63096bdfc07905c7",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/a7680c37392fea72996fe3ebbfcff11216a4e55a"
        },
        "date": 1752147790212,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 55695699.5,
            "unit": "ns",
            "extra": "gctime=5464871.5\nmemory=88060616\nallocs=855392\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 33220755,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32512952\nallocs=495901\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 338764513,
            "unit": "ns",
            "extra": "gctime=73898820\nmemory=1484072496\nallocs=4904527\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 92665562,
            "unit": "ns",
            "extra": "gctime=29131797\nmemory=701442872\nallocs=1849930\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 610967,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3034376\nallocs=10301\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 177663,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1426080\nallocs=4022\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}