window.BENCHMARK_DATA = {
  "lastUpdate": 1717737520017,
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
          "id": "900336f31af08688bff8c29638ac4c8d06ee77cc",
          "message": "Bunch benchmark Manifest.",
          "timestamp": "2024-06-06T22:07:32-07:00",
          "tree_id": "220b29c615c57bb30428469f792d8d50d82036a4",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/900336f31af08688bff8c29638ac4c8d06ee77cc"
        },
        "date": 1717737238119,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 68468721.5,
            "unit": "ns",
            "extra": "gctime=5038329.5\nmemory=94026880\nallocs=582886\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 49826201,
            "unit": "ns",
            "extra": "gctime=2623941.5\nmemory=37991632\nallocs=400712\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 444843185,
            "unit": "ns",
            "extra": "gctime=26266383\nmemory=1002685248\nallocs=1651811\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 100437998,
            "unit": "ns",
            "extra": "gctime=4671831\nmemory=109439136\nallocs=740564\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 985810,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087904\nallocs=3682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 268909.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=248160\nallocs=1744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      },
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
          "id": "3c0cb771d8fc3e2a02c737b72863841264362d90",
          "message": "Merge pull request #4 from RomeoV/compathelper/new_version/2024-06-07-03-28-23-948-03550304852\n\nCompatHelper: bump compat for Turing to 0.33, (keep existing compat)",
          "timestamp": "2024-06-06T22:12:21-07:00",
          "tree_id": "9c0454662daea327fea63ccc05133e3d09f97d05",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/3c0cb771d8fc3e2a02c737b72863841264362d90"
        },
        "date": 1717737519109,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 68523374,
            "unit": "ns",
            "extra": "gctime=4946164\nmemory=93803440\nallocs=581646\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 50232772,
            "unit": "ns",
            "extra": "gctime=2662465\nmemory=38228800\nallocs=402926\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 417288727,
            "unit": "ns",
            "extra": "gctime=23429338\nmemory=1001581792\nallocs=1658857\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 100634339,
            "unit": "ns",
            "extra": "gctime=4559802\nmemory=109842080\nallocs=749565\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 971599,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2088672\nallocs=3700\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 274632,
            "unit": "ns",
            "extra": "gctime=0\nmemory=248928\nallocs=1762\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}