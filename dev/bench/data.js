window.BENCHMARK_DATA = {
  "lastUpdate": 1716855296226,
  "repoUrl": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl",
  "entries": {
    "Julia benchmark result": [
      {
        "commit": {
          "author": {
            "email": "romeov@stanford.edu",
            "name": "RomeoV",
            "username": "RomeoV"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "73bb413989607e50f71726df8f631f88c63a5b2b",
          "message": "Merge pull request #2 from RomeoV/dependabot/github_actions/julia-actions/setup-julia-2\n\nBump julia-actions/setup-julia from 1 to 2",
          "timestamp": "2024-05-27T17:12:36-07:00",
          "tree_id": "69f673dbcbcb6d1031aef1f5a751b24a18a5de28",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/73bb413989607e50f71726df8f631f88c63a5b2b"
        },
        "date": 1716855295339,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 135851879.5,
            "unit": "ns",
            "extra": "gctime=11163661\nmemory=422501840\nallocs=600233\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 60327732,
            "unit": "ns",
            "extra": "gctime=2407554\nmemory=60541952\nallocs=419433\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 411892923,
            "unit": "ns",
            "extra": "gctime=18559161\nmemory=999343888\nallocs=1647341\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 97516019,
            "unit": "ns",
            "extra": "gctime=3545083\nmemory=109150832\nallocs=739135\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 938978,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2193600\nallocs=3824\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 256287.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=248160\nallocs=1744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}