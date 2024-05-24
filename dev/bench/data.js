window.BENCHMARK_DATA = {
  "lastUpdate": 1716526460592,
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
          "id": "eeb15dc69a53408535adae5c008a13429478460e",
          "message": "Add `tune!` and change `mean` to `median` in benchmark.",
          "timestamp": "2024-05-23T21:47:49-07:00",
          "tree_id": "98687b3ff998d7b9a7569998ac3a6bf6f7a85ae4",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/eeb15dc69a53408535adae5c008a13429478460e"
        },
        "date": 1716526457586,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 119292243.5,
            "unit": "ns",
            "extra": "gctime=8613784\nmemory=402030736\nallocs=555811\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 54599572.5,
            "unit": "ns",
            "extra": "gctime=2413262.5\nmemory=56892768\nallocs=415978\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 417495906,
            "unit": "ns",
            "extra": "gctime=19722461\nmemory=1001601680\nallocs=1650195\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 96922845,
            "unit": "ns",
            "extra": "gctime=3727049\nmemory=109107984\nallocs=738845\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 931616,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078224\nallocs=3482\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 234072.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=238576\nallocs=1547\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "eeb15dc69a53408535adae5c008a13429478460e",
          "message": "Add `tune!` and change `mean` to `median` in benchmark.",
          "timestamp": "2024-05-23T21:47:49-07:00",
          "tree_id": "98687b3ff998d7b9a7569998ac3a6bf6f7a85ae4",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/eeb15dc69a53408535adae5c008a13429478460e"
        },
        "date": 1716526460115,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 119362253,
            "unit": "ns",
            "extra": "gctime=8707594\nmemory=394980864\nallocs=548799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 55021217,
            "unit": "ns",
            "extra": "gctime=2331019\nmemory=55785232\nallocs=410777\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 429797048,
            "unit": "ns",
            "extra": "gctime=19159113\nmemory=1000284784\nallocs=1648414\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 97411137,
            "unit": "ns",
            "extra": "gctime=3891565\nmemory=109210032\nallocs=739239\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 951672.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078256\nallocs=3483\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 234593.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=238576\nallocs=1547\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}