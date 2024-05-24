window.BENCHMARK_DATA = {
  "lastUpdate": 1716528850000,
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
          "id": "a13bc7449ba7782062346d177562e938621cc49d",
          "message": "Bump version.",
          "timestamp": "2024-05-23T22:01:46-07:00",
          "tree_id": "9ee46dc61ea0c3aac949af4c4a8d0c2cb4c0a935",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/a13bc7449ba7782062346d177562e938621cc49d"
        },
        "date": 1716527544560,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 125323440,
            "unit": "ns",
            "extra": "gctime=10064006\nmemory=395554240\nallocs=549227\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 55077299,
            "unit": "ns",
            "extra": "gctime=2392999\nmemory=56137632\nallocs=411580\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 431700065,
            "unit": "ns",
            "extra": "gctime=20772242\nmemory=1001235920\nallocs=1649688\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 98165936,
            "unit": "ns",
            "extra": "gctime=4209488.5\nmemory=109368272\nallocs=740074\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 952593,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078224\nallocs=3482\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 235030.5,
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
          "id": "a13bc7449ba7782062346d177562e938621cc49d",
          "message": "Bump version.",
          "timestamp": "2024-05-23T22:01:46-07:00",
          "tree_id": "9ee46dc61ea0c3aac949af4c4a8d0c2cb4c0a935",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/a13bc7449ba7782062346d177562e938621cc49d"
        },
        "date": 1716527545955,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 124390263,
            "unit": "ns",
            "extra": "gctime=9312146.5\nmemory=393241024\nallocs=546889\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 55004580,
            "unit": "ns",
            "extra": "gctime=2525568\nmemory=56265184\nallocs=412311\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 442136946,
            "unit": "ns",
            "extra": "gctime=23169871\nmemory=1001678736\nallocs=1658799\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 100017406,
            "unit": "ns",
            "extra": "gctime=4548735\nmemory=109706256\nallocs=748785\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 970559,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078992\nallocs=3500\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 237565,
            "unit": "ns",
            "extra": "gctime=0\nmemory=239344\nallocs=1565\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
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
          "id": "7fa569ef753d58691f0b600ea437a0baf0b2785e",
          "message": "Clean up TagBot.",
          "timestamp": "2024-05-23T22:27:40-07:00",
          "tree_id": "fbfe50d8064ad2fed6642bba573a03d2fc7d46e2",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/7fa569ef753d58691f0b600ea437a0baf0b2785e"
        },
        "date": 1716528840326,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 119665344.5,
            "unit": "ns",
            "extra": "gctime=8516278\nmemory=391964384\nallocs=545463\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 53496877.5,
            "unit": "ns",
            "extra": "gctime=2309085\nmemory=56183968\nallocs=411928\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 410943982,
            "unit": "ns",
            "extra": "gctime=18160432\nmemory=1000284208\nallocs=1648396\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 96143479,
            "unit": "ns",
            "extra": "gctime=3717876\nmemory=109254832\nallocs=739537\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 917667,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078224\nallocs=3482\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 229379,
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
          "id": "7fa569ef753d58691f0b600ea437a0baf0b2785e",
          "message": "Clean up TagBot.",
          "timestamp": "2024-05-23T22:27:40-07:00",
          "tree_id": "fbfe50d8064ad2fed6642bba573a03d2fc7d46e2",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/7fa569ef753d58691f0b600ea437a0baf0b2785e"
        },
        "date": 1716528849075,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 121537400.5,
            "unit": "ns",
            "extra": "gctime=9445451\nmemory=389774144\nallocs=543419\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 55837814,
            "unit": "ns",
            "extra": "gctime=2468082\nmemory=54403856\nallocs=401862\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 429172338,
            "unit": "ns",
            "extra": "gctime=20394935\nmemory=999284080\nallocs=1647031\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 98115703.5,
            "unit": "ns",
            "extra": "gctime=4046398.5\nmemory=109283120\nallocs=739653\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 957957,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078224\nallocs=3482\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 234671,
            "unit": "ns",
            "extra": "gctime=0\nmemory=238576\nallocs=1547\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}