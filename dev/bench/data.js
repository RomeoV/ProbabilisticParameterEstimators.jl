window.BENCHMARK_DATA = {
  "lastUpdate": 1752239739123,
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
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "valentin.romeo@gmail.com",
            "name": "RomeoV",
            "username": "RomeoV"
          },
          "distinct": true,
          "id": "bd3da6af32df83290756d6ee6f74f9a017e09f93",
          "message": "Bump codecov/codecov-action from 4 to 5\n\nBumps [codecov/codecov-action](https://github.com/codecov/codecov-action) from 4 to 5.\n- [Release notes](https://github.com/codecov/codecov-action/releases)\n- [Changelog](https://github.com/codecov/codecov-action/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/codecov/codecov-action/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: codecov/codecov-action\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2025-07-11T15:10:41+02:00",
          "tree_id": "960101539f5050a28da364c85c4481aee5f7250b",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/bd3da6af32df83290756d6ee6f74f9a017e09f93"
        },
        "date": 1752239738563,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 56573975,
            "unit": "ns",
            "extra": "gctime=5436769.5\nmemory=88703736\nallocs=861035\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 33948862,
            "unit": "ns",
            "extra": "gctime=0\nmemory=32577064\nallocs=496856\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 335347141,
            "unit": "ns",
            "extra": "gctime=72708511\nmemory=1481291704\nallocs=4825364\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 93457490,
            "unit": "ns",
            "extra": "gctime=28456971.5\nmemory=698662080\nallocs=1770767\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 609851,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3029800\nallocs=10148\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 178434,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1421504\nallocs=3869\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}