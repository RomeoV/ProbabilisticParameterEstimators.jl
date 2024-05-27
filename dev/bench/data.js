window.BENCHMARK_DATA = {
  "lastUpdate": 1716790921371,
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
          "id": "8ffb473e74fd94ff975369fc03ffe413488a42b4",
          "message": "Fix string escape in docstrings.",
          "timestamp": "2024-05-25T01:58:39-07:00",
          "tree_id": "cd17793864333c64a9283efbd88a1e20c9af0130",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/8ffb473e74fd94ff975369fc03ffe413488a42b4"
        },
        "date": 1716627666666,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 126477979,
            "unit": "ns",
            "extra": "gctime=9110191\nmemory=423389216\nallocs=601213\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 59220379,
            "unit": "ns",
            "extra": "gctime=2151100\nmemory=60467664\nallocs=419049\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 410304158,
            "unit": "ns",
            "extra": "gctime=18653749.5\nmemory=1000993712\nallocs=1649481\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 96913482,
            "unit": "ns",
            "extra": "gctime=4233432\nmemory=109305232\nallocs=739855\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 951877,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087904\nallocs=3682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 250117,
            "unit": "ns",
            "extra": "gctime=0\nmemory=248160\nallocs=1744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
          "id": "4ac3c5273ada1a927595850be292666b0c271f22",
          "message": "Add dependabot.",
          "timestamp": "2024-05-26T23:19:26-07:00",
          "tree_id": "8e5feb6c5029d5e725992d3265858e9262c929eb",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/4ac3c5273ada1a927595850be292666b0c271f22"
        },
        "date": 1716790920848,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 143490515,
            "unit": "ns",
            "extra": "gctime=12196551\nmemory=430215728\nallocs=608318\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 62499716,
            "unit": "ns",
            "extra": "gctime=2620569\nmemory=60479088\nallocs=419033\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 428564594,
            "unit": "ns",
            "extra": "gctime=22706653\nmemory=1001255536\nallocs=1649901\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 99277007.5,
            "unit": "ns",
            "extra": "gctime=4419362.5\nmemory=109427568\nallocs=740443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 987900,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087904\nallocs=3682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 258160,
            "unit": "ns",
            "extra": "gctime=0\nmemory=248160\nallocs=1744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}