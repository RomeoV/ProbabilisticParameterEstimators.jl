window.BENCHMARK_DATA = {
  "lastUpdate": 1752239653003,
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
            "email": "valentin.romeo@gmail.com",
            "name": "RomeoV",
            "username": "RomeoV"
          },
          "distinct": true,
          "id": "706bf587ae608a93aeb6f483e492ec6ce1d2ac45",
          "message": "fixup! Add `ProblemParams` type to avoid type piracy",
          "timestamp": "2025-07-11T15:09:24+02:00",
          "tree_id": "bdbfe1a9f4793f5eb5151d1dd78367b0a6e548a4",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/706bf587ae608a93aeb6f483e492ec6ce1d2ac45"
        },
        "date": 1752239652667,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 54743786.5,
            "unit": "ns",
            "extra": "gctime=4503293.5\nmemory=87459064\nallocs=850167\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 33626068.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32308328\nallocs=492813\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 330401772.5,
            "unit": "ns",
            "extra": "gctime=71873647\nmemory=1481291704\nallocs=4825364\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 91150531,
            "unit": "ns",
            "extra": "gctime=27711206\nmemory=698662080\nallocs=1770767\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 579511.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3029800\nallocs=10148\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 167483.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1421504\nallocs=3869\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}