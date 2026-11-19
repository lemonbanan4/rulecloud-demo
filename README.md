# RuleCloud demo

Minimal sample repo for [RuleCloud](https://rulecloud.vercel.app) **PR Guardrail** webhooks.

## What’s here

| Path | Purpose |
|------|---------|
| `guardrail.yaml` | Rules loaded on each PR scan (see [RuleCloud `github_api.py`](https://github.com/lemonbanan4/rulecloud)) |
| `internal/presentation/` | UI / API surface (should stay thin) |
| `internal/data/` | Data access layer |

## Try it

1. Connect **`lemonbanan4/rulecloud-demo`** in RuleCloud → **Dashboard → Integrations**.
2. Add the webhook URL + per-repo **Secret** under **Settings → Webhooks** (event: **Pull requests**).
3. Open a PR — RuleCloud comments with pass/violations and links to **Dashboard → Scans**.

The branch `test/violate-rules` on this repo intentionally breaks the rules for demos.

## Rules (summary)

- No hardcoded credentials (`API_KEY = "…"`).
- Presentation must not import `internal/data`.
- No unresolved `TODO` / `FIXME` in scanned sources.