# Contributing to Blind Vision Media

## Before changing code

1. Read `AGENTS.md`.
2. Read `docs/PROJECT_SCOPE.md`.
3. Classify the change using `.agent-system/config/risk-rules.yml`.
4. Read the relevant specialist agent/skill instructions.
5. Identify acceptance criteria and required tests.

## Workflow

For material application changes, prefer:

```text
issue/spec → branch → implementation → automated checks → specialist review → PR → verification → merge
```

See `.agent-system/policies/GITHUB_WORKFLOW.md`.

## Pull requests

Keep PRs scoped. Use `.github/pull_request_template.md` and include only checks actually executed.

High/Critical-risk changes require the applicable independent review and human approval gates.

## Security

Never commit secrets, credentials, auth tokens, private keys, raw private client data, or production-only configuration values.

Read `SECURITY.md` and `docs/SECURITY_BASELINE.md` before changing authentication, authorization, files/storage, payments, webhooks, OAuth, tenant data, or admin privileges.

## Evidence

Material findings and remediation should be traceable to files, commits, PRs, issues, tests, workflows, or reproducible commands.

## Design

Public-facing pages must follow the Blind Vision Brand/UX guidance under `.agent-system/agents/brand-ux-director.md` and `.agent-system/skills/brand-visual-director.md`.
