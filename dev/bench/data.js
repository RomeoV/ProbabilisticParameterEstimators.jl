window.BENCHMARK_DATA = {
  "lastUpdate": 1753941456882,
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
          "id": "2200b23c4f9da2d316ee2a35af354c3b43bc1e6b",
          "message": "Try to make test more stable.",
          "timestamp": "2025-07-11T15:30:14+02:00",
          "tree_id": "9775aba57f2db2e21658fc9693be50b04f4096c6",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/2200b23c4f9da2d316ee2a35af354c3b43bc1e6b"
        },
        "date": 1752241040244,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 53606764,
            "unit": "ns",
            "extra": "gctime=4928247\nmemory=88248952\nallocs=857064\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 32260050,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32353064\nallocs=493524\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 335752688,
            "unit": "ns",
            "extra": "gctime=70192015\nmemory=1481291704\nallocs=4825364\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 93576445,
            "unit": "ns",
            "extra": "gctime=27512231\nmemory=698662080\nallocs=1770767\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 627964.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3029800\nallocs=10148\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 173717,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1421504\nallocs=3869\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
            "email": "valentin.romeo@gmail.com",
            "name": "RomeoV",
            "username": "RomeoV"
          },
          "distinct": true,
          "id": "2582291672df3d4065adcdbe8840458a6dee040b",
          "message": "Move Turing stuff to package extension",
          "timestamp": "2025-07-30T22:54:37-07:00",
          "tree_id": "7286a9ccdb52ddbc25b6c4e5a3f582ed124e6ffc",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/2582291672df3d4065adcdbe8840458a6dee040b"
        },
        "date": 1753941456342,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 461.11167512690355,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":197,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 467.06598984771574,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":197,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 334266557,
            "unit": "ns",
            "extra": "gctime=66898485.5\nmemory=1481291704\nallocs=4825364\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 90302774,
            "unit": "ns",
            "extra": "gctime=26314207\nmemory=698662080\nallocs=1770767\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 596177.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3029800\nallocs=10148\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 172773,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1421504\nallocs=3869\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}