window.BENCHMARK_DATA = {
  "lastUpdate": 1755149535536,
  "repoUrl": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl",
  "entries": {
    "Julia benchmark result": [
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
          "id": "cf7dbafde1e54b6fc018d6c72ca87830c390605a",
          "message": "Bump actions/checkout from 4 to 5\n\nBumps [actions/checkout](https://github.com/actions/checkout) from 4 to 5.\n- [Release notes](https://github.com/actions/checkout/releases)\n- [Changelog](https://github.com/actions/checkout/blob/main/CHANGELOG.md)\n- [Commits](https://github.com/actions/checkout/compare/v4...v5)\n\n---\nupdated-dependencies:\n- dependency-name: actions/checkout\n  dependency-version: '5'\n  dependency-type: direct:production\n  update-type: version-update:semver-major\n...\n\nSigned-off-by: dependabot[bot] <support@github.com>",
          "timestamp": "2025-08-14T07:27:35+02:00",
          "tree_id": "bf19545ed5fc46b8c61c6faf45fa9c2c9e9794a2",
          "url": "https://github.com/RomeoV/ProbabilisticParameterEstimators.jl/commit/cf7dbafde1e54b6fc018d6c72ca87830c390605a"
        },
        "date": 1755149534876,
        "tool": "julia",
        "benches": [
          {
            "name": "MCMCEstimator/medium",
            "value": 460.55837563451774,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":197,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "MCMCEstimator/small",
            "value": 467.06345177664974,
            "unit": "ns",
            "extra": "gctime=0\nmemory=160\nallocs=4\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":197,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/medium",
            "value": 358116346,
            "unit": "ns",
            "extra": "gctime=73788157\nmemory=1481281288\nallocs=4825159\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LSQEstimator/small",
            "value": 97157579.5,
            "unit": "ns",
            "extra": "gctime=28369042.5\nmemory=698651664\nallocs=1770562\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/medium",
            "value": 612358.5,
            "unit": "ns",
            "extra": "gctime=0\nmemory=3019384\nallocs=9943\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          },
          {
            "name": "LinearApproxEstimator/small",
            "value": 150771,
            "unit": "ns",
            "extra": "gctime=0\nmemory=1411088\nallocs=3664\nparams={\"gctrial\":true,\"time_tolerance\":0.05,\"evals_set\":false,\"samples\":10000,\"evals\":1,\"gcsample\":false,\"seconds\":5,\"overhead\":0,\"memory_tolerance\":0.01}"
          }
        ]
      }
    ]
  }
}