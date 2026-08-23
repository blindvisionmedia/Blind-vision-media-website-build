# Skill: Security Audit

## Purpose

Run a repeatable application-security review against the repository or a specified change set.

## Inputs

- Audit scope: full repository, branch, PR, feature, route, or service
- Environment: local/staging/production if authorized
- Known architecture and auth/storage/payment providers

## Procedure

### 1. Map attack surface
Identify:
- Public endpoints/routes
- Authenticated endpoints/routes
- Admin endpoints
- API/server actions
- Database access paths
- File upload/download paths
- Webhooks
- Third-party integrations
- Environment/secrets usage

### 2. Map roles and ownership
Build a matrix of role → resource → allowed action. At minimum consider anonymous, ARTIST, BUSINESS, and ADMIN when those roles exist.

### 3. Inspect trust boundaries
Trace untrusted input from request/UI/provider through validation, authorization, persistence, rendering, and downstream calls.

### 4. Test authorization
Attempt or statically inspect:
- unauthenticated access
- wrong-role access
- cross-user/cross-tenant access
- guessed/modified resource IDs
- direct endpoint invocation without UI

### 5. Inspect data/storage
Confirm private data is private by default, access is scoped, links are signed/expiring where appropriate, and sensitive data is not unnecessarily retained/logged.

### 6. Inspect common vulnerability classes
Review for injection, XSS, CSRF, SSRF, open redirects, unsafe deserialization, path traversal, insecure uploads, weak crypto, secret leakage, dependency vulnerabilities, race/idempotency issues, and insecure defaults.

### 7. Inspect external event trust
For webhooks/payment callbacks, verify signatures, event authenticity, replay/idempotency, and server-side state derivation.

### 8. Produce findings
Use the finding schema. Do not inflate severity. Include an abuse scenario and evidence.

### 9. Verify remediation
After fixes, rerun the relevant test/inspection. A finding is not closed because code changed; it is closed because the vulnerable behavior is shown to be removed.

## Exit criteria

- Attack surface documented sufficiently for the scope
- All critical/high findings recorded
- Verification steps supplied
- Unknowns explicitly listed
- Release recommendation: PASS, PASS WITH CONDITIONS, or BLOCK
