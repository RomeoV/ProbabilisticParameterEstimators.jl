window.BENCHMARK_DATA = {
  "lastUpdate": 1759460760426,
  "repoUrl": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl",
  "entries": {
    "Julia benchmark result": [
      {
        "commit": {
          "author": {
            "email": "compathelper_noreply@julialang.org",
            "name": "CompatHelper Julia"
          },
          "committer": {
            "email": "valentin.romeo@gmail.com",
            "name": "RomeoV",
            "username": "RomeoV"
          },
          "distinct": true,
          "id": "49256c8d977d0755a4bd6b14670912f17598ceae",
          "message": "CompatHelper: bump compat for NonlinearSolveBase to 2, (keep existing compat)",
          "timestamp": "2025-10-02T20:03:15-07:00",
          "tree_id": "02f1ebe75229ffe1848a2e9e5d02aad12c0b8d69",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/49256c8d977d0755a4bd6b14670912f17598ceae"
        },
        "date": 1759460759403,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 448.8686868686869,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":198,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 459.49494949494954,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":198,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 331938488,
            "unit": "ns",
            "extra": "gctime=65642661\nmemory=1481281288\nallocs=4825159\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 90430914.5,
            "unit": "ns",
            "extra": "gctime=26685727\nmemory=698651664\nallocs=1770562\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 554787,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3019384\nallocs=9943\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 136264.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1411088\nallocs=3664\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}