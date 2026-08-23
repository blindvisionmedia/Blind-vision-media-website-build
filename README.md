# Blind Vision Media — Website & Client Platform

This repository is the production source of truth for the Blind Vision Media public website, future Artist and Business client portals, administrative platform, and the engineering/security agent system that governs the build.

## Product direction

Blind Vision operates across two connected service lanes:

- **Studio** — artists, recording, production, mixing, creative direction, artist development.
- **Business** — content, photography, video, campaigns, branding, creative direction, entertainment, and growth.

The public experience should be premium, dark, cinematic, editorial, and media-led — not a generic SaaS/AI template. See `docs/PROJECT_SCOPE.md` for the canonical product scope.

## Agent & assurance system

The repository includes a specialist team for:

- Orchestration
- Architecture
- Full-stack implementation
- Security
- Privacy/data governance
- Integration auditing
- QA
- Code review
- Brand/UX
- Accessibility
- Performance
- Research
- Release auditing

Start with:

- `AGENTS.md` — repository-wide rules
- `.agent-system/MASTER_PROMPT.md` — master operating prompt
- `.agent-system/README.md` — team workflow
- `.agent-system/agents/` — specialist roles
- `.agent-system/skills/` — reusable review/audit procedures
- `.agent-system/policies/` — risk and approval policies
- `.agent-system/config/` — team/risk routing config
- `.agent-system/templates/` — audit/ADR/release templates
- `.agent-system/schemas/` — structured finding/report schemas

## Security baseline

Security, evidence, and Git traceability are first-class requirements.

See:

- `SECURITY.md`
- `docs/SECURITY_BASELINE.md`
- `docs/GIT_TRACEABILITY.md`

Critical/High findings affecting authentication, authorization, client/private data, files, payments, privileged credentials, or admin access are release blockers unless explicitly risk-accepted under policy.

## Automated guardrails

GitHub Actions currently includes:

- Repository guardrails / high-confidence secret pattern checks
- Structured finding validation
- Production dependency audit when an npm lockfile exists
- Pull-request dependency review
- CodeQL static analysis for JavaScript/TypeScript and Python

These automated checks supplement specialist review; they do not replace authorization, privacy, or business-logic testing.

## Reports

Agent/audit reports belong under `reports/` and should tie findings to concrete files, commits, PRs, issues, tests, or reproducible evidence.

## Current phase

The repository control layer is established. Application code can now be introduced under these controls and audited from the first implementation commit onward.
