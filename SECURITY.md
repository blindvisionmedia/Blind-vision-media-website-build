# Security Policy

## Security posture

Blind Vision Media treats authentication, authorization, private files, client data, payments, and administrative controls as release-critical surfaces.

## Reporting a vulnerability

Do **not** publish exploit details, credentials, private client data, or sensitive reproduction material in a public issue.

Use GitHub Private Vulnerability Reporting if it is enabled for this repository. Otherwise contact the repository owner through a private channel and provide:

- Affected component/route
- Reproduction steps
- Impact
- Required preconditions
- Suggested remediation if known

## Handling

Security reports should be triaged using the severity model in `AGENTS.md`.

Critical and High findings must be remediated or explicitly risk-accepted before release. Any exposed credential must be treated as compromised and rotated; deleting it from the latest commit alone is insufficient.

## Secure development requirements

- Least-privilege access
- Server-side authorization for protected resources
- Private-by-default client file storage
- Validated untrusted input
- Verified webhook/provider events
- No secrets in source or client bundles
- Dependency review before adding consequential packages
- Evidence-backed security testing

## Supported versions

Until formal production releases exist, security work applies to the current `main` branch and any active release branches.
