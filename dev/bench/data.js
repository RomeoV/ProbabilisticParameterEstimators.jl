window.BENCHMARK_DATA = {
  "lastUpdate": 1716627198442,
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
          "id": "b1baf728d1828a7d3674df09ffa74e59fe0f986a",
          "message": "Bump versions.",
          "timestamp": "2024-05-25T01:49:21-07:00",
          "tree_id": "a10d63ad3568c6ee2378e00c2fb73f4eddb249a6",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/b1baf728d1828a7d3674df09ffa74e59fe0f986a"
        },
        "date": 1716627197883,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 129488939,
            "unit": "ns",
            "extra": "gctime=9253007\nmemory=430974864\nallocs=609127\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 58713015,
            "unit": "ns",
            "extra": "gctime=2063490.5\nmemory=61076048\nallocs=422361\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 403308999.5,
            "unit": "ns",
            "extra": "gctime=17519564\nmemory=1001181328\nallocs=1649865\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 95502028.5,
            "unit": "ns",
            "extra": "gctime=3601543\nmemory=109327344\nallocs=739926\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 925893,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2242240\nallocs=3904\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 246739,
            "unit": "ns",
            "extra": "gctime=0\nmemory=248160\nallocs=1744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}