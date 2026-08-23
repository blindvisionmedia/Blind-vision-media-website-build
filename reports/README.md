# Agent Reports

Generated and reviewed reports belong under this directory.

```text
reports/
├── security/
├── architecture/
├── qa/
├── performance/
├── accessibility/
└── release/
```

## Rules

- Do not include secrets, credentials, auth tokens, private keys, raw private client files, or unnecessary personal information.
- JSON findings must conform to `.agent-system/schemas/finding.schema.json` and are checked by CI.
- Markdown reports should use `.agent-system/templates/audit-report.md` where applicable.
- Link findings to GitHub issues/PRs when remediation work is created.
- Preserve evidence needed to reproduce the finding without exposing sensitive data.
