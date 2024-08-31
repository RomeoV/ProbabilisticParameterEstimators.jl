window.BENCHMARK_DATA = {
  "lastUpdate": 1725099452901,
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
          "id": "4ae430a62c77cc7854d5d1780b1e2faa90b3d009",
          "message": "Merge pull request #6 from RomeoV/compathelper/new_version/2024-08-31-00-23-50-798-02514477645\n\nCompatHelper: bump compat for Turing to 0.34, (keep existing compat)",
          "timestamp": "2024-08-31T12:10:58+02:00",
          "tree_id": "6ec824e4828b4ce3dfcd7e207fd6a5234d5a32de",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/4ae430a62c77cc7854d5d1780b1e2faa90b3d009"
        },
        "date": 1725099451998,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 75731559,
            "unit": "ns",
            "extra": "gctime=6274295\nmemory=95358336\nallocs=586200\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 55330194,
            "unit": "ns",
            "extra": "gctime=3710470.5\nmemory=38203952\nallocs=399533\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 481498693,
            "unit": "ns",
            "extra": "gctime=37388652\nmemory=1001180800\nallocs=1649363\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 104759123.5,
            "unit": "ns",
            "extra": "gctime=6085666.5\nmemory=109146912\nallocs=738767\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 1030092,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087872\nallocs=3680\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 274628.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=248128\nallocs=1742\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}