# Blind Vision Agent & Skills System

This folder contains the specialist team that audits and improves the Blind Vision Media platform.

## Team structure

| Agent | Primary responsibility |
|---|---|
| `security.md` | AppSec, auth, authorization, secrets, storage, payments, abuse paths |
| `architecture.md` | System boundaries, data model, integrations, maintainability |
| `code-review.md` | Diff inspection, regression risk, implementation quality |
| `qa.md` | Test strategy, regression coverage, edge cases |
| `performance.md` | Frontend/backend performance, Core Web Vitals, query and bundle efficiency |
| `accessibility.md` | WCAG-oriented UI review, keyboard, semantics, contrast, focus |
| `research.md` | Evidence-backed technical research and dependency evaluation |

## Workflow

1. **Discover** — identify changed files, affected trust boundaries, user flows, dependencies, and data.
2. **Route** — assign the relevant specialist agents.
3. **Inspect** — read implementation and configuration before forming conclusions.
4. **Test** — reproduce problems with deterministic steps where possible.
5. **Report** — produce structured findings with severity and repository evidence.
6. **Remediate** — implement the smallest safe fix.
7. **Verify** — rerun tests/scans and explicitly close or downgrade findings only with evidence.
8. **Trace** — link findings to issues, PRs, commits, or release reports.

## Required output directories

Agents may write generated reports under:

```text
reports/
  security/
  architecture/
  qa/
  performance/
  accessibility/
  release/
```

Generated reports should not contain secrets or raw private client data.

## Skills

Reusable operating procedures live under `.agent-system/skills/`.

## Schemas

Machine-readable report schemas live under `.agent-system/schemas/`.

## Principle

The agent system is advisory and implementation-capable, but it must remain evidence-driven. A confident statement without repository evidence is not a completed finding.
