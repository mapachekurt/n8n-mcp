window.BENCHMARK_DATA = {
  "lastUpdate": 1758355832470,
  "repoUrl": "https://github.com/mapachekurt/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23327f5dc72270cf77cd87779779fdd237c7a15c",
          "message": "Merge pull request #106 from czlonkowski/fix/docker-config-file-support\n\nfix: add Docker configuration file support (fixes #105)",
          "timestamp": "2025-07-31T18:07:48+02:00",
          "tree_id": "ee973173090c4b224f364e2e1f313c9c23d7bf89",
          "url": "https://github.com/mapachekurt/n8n-mcp/commit/23327f5dc72270cf77cd87779779fdd237c7a15c"
        },
        "date": 1754063262791,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0191,
            "unit": "ms",
            "range": 0.256,
            "extra": "52285 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1372,
            "unit": "ms",
            "range": 0.5401000000000002,
            "extra": "319 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0047,
            "unit": "ms",
            "range": 0.2776,
            "extra": "214995 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0971,
            "unit": "ms",
            "range": 0.374,
            "extra": "10294 ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "c5aebc14504ecb60a8f9dbfc36f5e6e33d0b8e95",
          "message": "Merge pull request #212 from czlonkowski/fix/multi-tenant-header-extraction\n\nFix: Multi-tenant support with dynamic tool registration",
          "timestamp": "2025-09-20T08:51:09+02:00",
          "tree_id": "d5e52298a531a73e100b6933ff4944d24245611a",
          "url": "https://github.com/mapachekurt/n8n-mcp/commit/c5aebc14504ecb60a8f9dbfc36f5e6e33d0b8e95"
        },
        "date": 1758355832109,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0192,
            "range": "0.39330000000000004",
            "unit": "ms",
            "extra": "52095 ops/sec"
          },
          {
            "name": "sample - array sorting - large",
            "value": 3.1765,
            "range": "0.714",
            "unit": "ms",
            "extra": "315 ops/sec"
          },
          {
            "name": "sample - string concatenation",
            "value": 0.0049,
            "range": "0.2668",
            "unit": "ms",
            "extra": "203524 ops/sec"
          },
          {
            "name": "sample - object creation",
            "value": 0.0668,
            "range": "0.3346",
            "unit": "ms",
            "extra": "14979 ops/sec"
          }
        ]
      }
    ]
  }
}