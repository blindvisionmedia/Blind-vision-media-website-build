# Git Traceability Model

The agent team must keep recommendations and remediation tied to GitHub evidence.

## Finding lifecycle

```text
Observation
→ Structured finding/report
→ GitHub issue (when work is required)
→ Remediation branch/commit
→ Pull request
→ Specialist verification
→ Finding marked verified
→ Issue closed
```

## Finding IDs

Use stable IDs such as:

- `SEC-001` — security
- `ARCH-001` — architecture
- `QA-001` — quality/testing
- `PERF-001` — performance
- `A11Y-001` — accessibility
- `PRIV-001` — privacy

Do not reuse an ID for a different finding.

## Evidence references

Preferred references:

- `path/to/file.ts:120-145`
- commit SHA
- PR number
- issue number
- workflow run/job
- test name and command
- deterministic reproduction command/steps

## GitHub issues

Create an issue when a finding:

- requires remediation outside the current PR,
- is accepted as follow-up risk,
- needs ownership or scheduling,
- affects multiple components,
- requires a future architectural decision.

Sensitive exploit details, credentials, or private client information must not be placed in a public issue.

## Pull requests

A remediation PR should reference the finding ID and issue. Example:

```text
Fix SEC-014: enforce project ownership on file download

Closes #123
```

The PR must include verification that directly tests the original failure scenario.

## Closing findings

Statuses:

- `open`
- `accepted_risk`
- `in_progress`
- `fixed`
- `verified`
- `not_applicable`

`fixed` means a change exists. `verified` means the relevant reviewer/test confirmed that the original issue no longer reproduces. Prefer closing issues only after verification.

## Release traceability

Release reports should identify:

- release commit/tag
- included PRs where practical
- unresolved findings
- risk acceptances
- CI/test evidence
- rollback reference

This allows the team to answer not only “is it safe?” but “what evidence supports that conclusion?”
