window.BENCHMARK_DATA = {
  "lastUpdate": 1716626274845,
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
          "id": "6f9803e05ba2c79289607c5e9d180048e2454b36",
          "message": "Try to cache everything in CI.",
          "timestamp": "2024-05-23T22:30:47-07:00",
          "tree_id": "a0823ad1f25c704f9d152bf984293a634cc47702",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/6f9803e05ba2c79289607c5e9d180048e2454b36"
        },
        "date": 1716529024308,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 113654887,
            "unit": "ns",
            "extra": "gctime=7443303\nmemory=395553920\nallocs=549217\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 53973651.5,
            "unit": "ns",
            "extra": "gctime=2042020.5\nmemory=55820512\nallocs=409665\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 406228555,
            "unit": "ns",
            "extra": "gctime=16446694.5\nmemory=1002581136\nallocs=1659990\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 95503239,
            "unit": "ns",
            "extra": "gctime=3376866.5\nmemory=109616816\nallocs=748590\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 909643,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2079024\nallocs=3501\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 228926,
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
          "id": "6f9803e05ba2c79289607c5e9d180048e2454b36",
          "message": "Try to cache everything in CI.",
          "timestamp": "2024-05-23T22:30:47-07:00",
          "tree_id": "a0823ad1f25c704f9d152bf984293a634cc47702",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/6f9803e05ba2c79289607c5e9d180048e2454b36"
        },
        "date": 1716529029671,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 127629167,
            "unit": "ns",
            "extra": "gctime=10336760\nmemory=399135376\nallocs=552756\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 57562911,
            "unit": "ns",
            "extra": "gctime=2574550\nmemory=56753408\nallocs=415223\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 436096082,
            "unit": "ns",
            "extra": "gctime=23606957\nmemory=998479184\nallocs=1646007\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 97592801.5,
            "unit": "ns",
            "extra": "gctime=4142538\nmemory=108893840\nallocs=737843\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 950557,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078224\nallocs=3482\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 235894,
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
          "id": "12832d943c8ceb6f6ce8419006ba719a042a93b7",
          "message": "Chance \"actions/cache\" to \"julia-actions/cache\"",
          "timestamp": "2024-05-23T22:46:04-07:00",
          "tree_id": "1eb82e4cc9ee37ad2c9d9d3f11ad7c66c332bf65",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/12832d943c8ceb6f6ce8419006ba719a042a93b7"
        },
        "date": 1716529961194,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 125460237,
            "unit": "ns",
            "extra": "gctime=10320708\nmemory=392313200\nallocs=545869\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 56466426,
            "unit": "ns",
            "extra": "gctime=2923855\nmemory=57299808\nallocs=418493\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 419989664,
            "unit": "ns",
            "extra": "gctime=20648665\nmemory=1002514192\nallocs=1659900\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 101009977,
            "unit": "ns",
            "extra": "gctime=4619061\nmemory=109655120\nallocs=748467\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 930212,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078992\nallocs=3500\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 240100,
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
          "id": "4b3c683b4417f27a9baa6a1c4453b13d906e1a2a",
          "message": "Change \"actions/cache\" to \"julia-actions/cache\"",
          "timestamp": "2024-05-23T22:47:57-07:00",
          "tree_id": "00f76ac0e1553d0e34eb000873394f6f4b538215",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/4b3c683b4417f27a9baa6a1c4453b13d906e1a2a"
        },
        "date": 1716530065654,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 119249232,
            "unit": "ns",
            "extra": "gctime=8199259\nmemory=387694880\nallocs=541394\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 55201330,
            "unit": "ns",
            "extra": "gctime=2065367\nmemory=55625008\nallocs=408613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 394788252,
            "unit": "ns",
            "extra": "gctime=15858912\nmemory=1000226992\nallocs=1648329\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 91929627,
            "unit": "ns",
            "extra": "gctime=3655255\nmemory=109335088\nallocs=739967\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 891965.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078224\nallocs=3482\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 225892,
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
          "id": "b22aa4d16771b48e9841e4118354456c6642c273",
          "message": "Add CompatHelper.yml",
          "timestamp": "2024-05-23T23:18:59-07:00",
          "tree_id": "ffefc4a6015e610d978643a73dc720ff77010ac8",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/b22aa4d16771b48e9841e4118354456c6642c273"
        },
        "date": 1716531691100,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 123110156,
            "unit": "ns",
            "extra": "gctime=8783096\nmemory=396014064\nallocs=549613\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 59180925,
            "unit": "ns",
            "extra": "gctime=2411586.5\nmemory=56498320\nallocs=413804\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 412057051,
            "unit": "ns",
            "extra": "gctime=18006697\nmemory=1000292976\nallocs=1648389\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 96670796,
            "unit": "ns",
            "extra": "gctime=3729799\nmemory=109282384\nallocs=739660\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 906621,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078256\nallocs=3483\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 232514,
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
          "id": "d50aa4c3ccc3f331270e924a01bc9e71e0cde3d9",
          "message": "Update benchmarks manifest.",
          "timestamp": "2024-05-23T23:45:00-07:00",
          "tree_id": "6f86c59ed49271bdda1d2cca12e89bab24117f69",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/d50aa4c3ccc3f331270e924a01bc9e71e0cde3d9"
        },
        "date": 1716533241691,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 124590981,
            "unit": "ns",
            "extra": "gctime=9768980\nmemory=400408016\nallocs=554057\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 57976289,
            "unit": "ns",
            "extra": "gctime=2330061\nmemory=56448128\nallocs=413318\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 425958661,
            "unit": "ns",
            "extra": "gctime=20861381\nmemory=999081744\nallocs=1646749\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 98742748.5,
            "unit": "ns",
            "extra": "gctime=3792352.5\nmemory=109278544\nallocs=739605\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 949772,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078224\nallocs=3482\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 237277.5,
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
          "id": "730351e7b6b14bdee73d632a6f98b0ef1eefe92f",
          "message": "Update benchmarks manifest.",
          "timestamp": "2024-05-23T23:45:00-07:00",
          "tree_id": "6f86c59ed49271bdda1d2cca12e89bab24117f69",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/730351e7b6b14bdee73d632a6f98b0ef1eefe92f"
        },
        "date": 1716533349887,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 126075011,
            "unit": "ns",
            "extra": "gctime=9642818\nmemory=398905936\nallocs=552569\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 57160068,
            "unit": "ns",
            "extra": "gctime=2431849\nmemory=56479904\nallocs=413596\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 412339336.5,
            "unit": "ns",
            "extra": "gctime=18683491.5\nmemory=1000016112\nallocs=1648061\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 94591589,
            "unit": "ns",
            "extra": "gctime=3662460\nmemory=109389232\nallocs=740098\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 933708,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2078224\nallocs=3482\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 231486.5,
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
          "id": "e7d7c7126fc841222e347ff4c128d20f9ca00cb7",
          "message": "Fix benchmarks.",
          "timestamp": "2024-05-24T14:08:54-07:00",
          "tree_id": "8c5a571a64e32101d469e7aad0af82554c35f8ec",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/e7d7c7126fc841222e347ff4c128d20f9ca00cb7"
        },
        "date": 1716585133021,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 131115380,
            "unit": "ns",
            "extra": "gctime=9031035\nmemory=432409600\nallocs=612596\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 59018714,
            "unit": "ns",
            "extra": "gctime=2052558\nmemory=58469392\nallocs=417138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 408468983.5,
            "unit": "ns",
            "extra": "gctime=16924305.5\nmemory=1003271184\nallocs=1652550\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 95029885,
            "unit": "ns",
            "extra": "gctime=3451187.5\nmemory=109231248\nallocs=739443\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 934973,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087904\nallocs=3682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 249927,
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
          "id": "c1864b40240e9fcfc9cfe6bb968bf45d042fe8aa",
          "message": "Bump version.\n\nBump Manifests.",
          "timestamp": "2024-05-25T01:09:24-07:00",
          "tree_id": "a506e76f25b1365f6c521a8a197659a4d04c7436",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/c1864b40240e9fcfc9cfe6bb968bf45d042fe8aa"
        },
        "date": 1716625081259,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 127595480.5,
            "unit": "ns",
            "extra": "gctime=8738553\nmemory=435778304\nallocs=614110\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 57780879,
            "unit": "ns",
            "extra": "gctime=1912167\nmemory=59991632\nallocs=416371\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 404188546.5,
            "unit": "ns",
            "extra": "gctime=17518366.5\nmemory=1001302480\nallocs=1649928\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 92924642,
            "unit": "ns",
            "extra": "gctime=3188548\nmemory=109345712\nallocs=740180\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 921088,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087904\nallocs=3682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 247232.5,
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
          "id": "1a45cbc94c4d0113dbf6f915b70047524c0bc81c",
          "message": "Bump version.\n\nBump Manifests.",
          "timestamp": "2024-05-25T01:09:24-07:00",
          "tree_id": "23bbdb971f5dd3cfa92f3d39b4d9969572363b33",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/1a45cbc94c4d0113dbf6f915b70047524c0bc81c"
        },
        "date": 1716625227606,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 136404693,
            "unit": "ns",
            "extra": "gctime=10331873\nmemory=429711024\nallocs=607822\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 61394604,
            "unit": "ns",
            "extra": "gctime=2373602\nmemory=59961216\nallocs=416214\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 413351543.5,
            "unit": "ns",
            "extra": "gctime=18278200.5\nmemory=1000774032\nallocs=1649219\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 95403554,
            "unit": "ns",
            "extra": "gctime=3796695\nmemory=109315056\nallocs=739912\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 949067,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087936\nallocs=3683\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 251099.5,
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
          "id": "4ec9245f3c424f4edf8850951efdeaa01e43ba10",
          "message": "Use Documenter fork.",
          "timestamp": "2024-05-25T01:24:00-07:00",
          "tree_id": "bd51897cc938f712666f90516091e10de24ff18d",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/4ec9245f3c424f4edf8850951efdeaa01e43ba10"
        },
        "date": 1716625582270,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 134219379,
            "unit": "ns",
            "extra": "gctime=10637431\nmemory=427182960\nallocs=605205\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 60395547,
            "unit": "ns",
            "extra": "gctime=2233071\nmemory=60008288\nallocs=416491\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 423043812,
            "unit": "ns",
            "extra": "gctime=20830926\nmemory=1000383824\nallocs=1648791\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 98113177.5,
            "unit": "ns",
            "extra": "gctime=4023972.5\nmemory=109055056\nallocs=738662\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 974251.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087904\nallocs=3682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 255056,
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
          "id": "733799a67182f98336c212664c475f86661f217c",
          "message": "Try to remove original cache from documenter workflow.",
          "timestamp": "2024-05-25T01:31:47-07:00",
          "tree_id": "f8c21ef230251cb3bfaa5c20d50ca8a1decd0439",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/733799a67182f98336c212664c475f86661f217c"
        },
        "date": 1716626055116,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 128152293.5,
            "unit": "ns",
            "extra": "gctime=8928912.5\nmemory=423136096\nallocs=600951\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 58733204,
            "unit": "ns",
            "extra": "gctime=1972646\nmemory=60146320\nallocs=417265\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 400031099,
            "unit": "ns",
            "extra": "gctime=16684598\nmemory=1001408304\nallocs=1650074\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 94218543.5,
            "unit": "ns",
            "extra": "gctime=3431311\nmemory=108972368\nallocs=738138\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 925459,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087904\nallocs=3682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 251580,
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
          "id": "300193858a1106d0a27089ad2212fffc1325ac2e",
          "message": "Use upstream Documenter.\n\nTry to remove original cache from documenter workflow.\n\nRevert \"Try to remove original cache from documenter workflow.\"\n\nThis reverts commit 733799a67182f98336c212664c475f86661f217c.\n\nGo back to non-fork",
          "timestamp": "2024-05-25T01:34:55-07:00",
          "tree_id": "d4ebb167e8dafabbf92d323e8d80c65f5e35d9f3",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/300193858a1106d0a27089ad2212fffc1325ac2e"
        },
        "date": 1716626273478,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 130450305.5,
            "unit": "ns",
            "extra": "gctime=9277907.5\nmemory=436285888\nallocs=614696\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 59793117,
            "unit": "ns",
            "extra": "gctime=2141089.5\nmemory=60575232\nallocs=419687\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 403679147.5,
            "unit": "ns",
            "extra": "gctime=17797240\nmemory=1000619920\nallocs=1649004\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 94952140,
            "unit": "ns",
            "extra": "gctime=3499377\nmemory=109476784\nallocs=740843\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 934662,
            "unit": "ns",
            "extra": "gctime=0\nmemory=2087904\nallocs=3682\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 248753,
            "unit": "ns",
            "extra": "gctime=0\nmemory=248160\nallocs=1744\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}