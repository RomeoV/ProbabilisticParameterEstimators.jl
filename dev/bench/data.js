window.BENCHMARK_DATA = {
  "lastUpdate": 1716533242010,
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
      }
    ]
  }
}