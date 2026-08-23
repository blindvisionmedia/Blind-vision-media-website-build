# Blind Vision Media — Security Baseline

This document defines minimum controls for implementation. Technology-specific controls may exceed this baseline.

## 1. Identity and session

- Use a proven authentication system rather than custom password/session cryptography.
- Verify identity server-side on every protected request/action.
- Protect authentication endpoints against brute force and abuse.
- Use secure session/cookie configuration appropriate to the chosen auth architecture.
- Support session revocation/logout correctly.

## 2. Authorization

Authorization must evaluate both **role** and **resource ownership/scope**.

### Baseline access matrix

| Resource/action | Anonymous | ARTIST | BUSINESS | ADMIN |
|---|---:|---:|---:|---:|
| Public marketing pages | Allow | Allow | Allow | Allow |
| Public enquiry/booking request | Allow | Allow | Allow | Allow |
| Artist private dashboard | Deny | Own only | Deny | Allow as admin function |
| Artist projects/files | Deny | Own/assigned only | Deny | Authorized admin |
| Business dashboard | Deny | Deny | Own organization only | Allow as admin function |
| Business projects/files/reports | Deny | Deny | Own organization only | Authorized admin |
| Admin panel/actions | Deny | Deny | Deny | Allow |

The exact model may later include team memberships, project collaborators, or granular permissions, but default access must remain deny-by-default.

## 3. Tenant isolation

Every tenant-owned record should have an explicit ownership relationship such as `artist_id`, `business_id`, `organization_id`, or project membership.

Protected queries should include ownership/authorization constraints at the authoritative data boundary. Fetching a record globally and relying on the UI to hide it is prohibited.

Where the chosen database/platform supports row-level security or equivalent policy enforcement, evaluate using it as defense in depth.

## 4. Files and object storage

- Client files private by default.
- No guessable permanent public URLs for private material.
- Authorize before issuing access.
- Prefer short-lived signed URLs or server-authorized delivery.
- Enforce upload size limits.
- Validate type/content expectations server-side.
- Randomize or safely normalize object keys.
- Do not render untrusted active content in the primary application origin without appropriate isolation.
- Prevent path traversal and bucket/object enumeration.

## 5. Input/output handling

- Validate external input at the server boundary.
- Use parameterized database queries / safe ORM APIs.
- Escape output by context.
- Avoid unsafe raw HTML APIs; sanitize when unavoidable.
- Validate redirect destinations.
- Restrict server-side URL fetching to intended protocols/hosts where used.
- Validate identifiers and state transitions rather than coercing arbitrary values.

## 6. Payments

- Use a reputable payment provider.
- Never store raw card details unless a compliant architecture explicitly requires it.
- Treat browser/client payment state as untrusted.
- Verify provider webhook signatures.
- Use idempotency and duplicate-event handling.
- Reconcile payment state server-side.
- Log payment event IDs/status changes without leaking sensitive payment data.

## 7. Webhooks and integrations

- Authenticate provider events using signatures/tokens documented by the provider.
- Verify raw-body requirements when applicable.
- Reject stale/invalid events where supported.
- Make handlers idempotent.
- Scope integration credentials minimally.
- Separate development/staging/production credentials.

## 8. Secrets

Secrets must not appear in:

- repository files/history,
- client-side bundles,
- public environment variables,
- screenshots/logs,
- example payloads,
- test fixtures,
- generated agent reports.

If a real secret is committed, rotate/revoke it. Removing it from the latest commit alone does not make it safe.

## 9. Logging and observability

Do not log passwords, session tokens, authorization headers, private keys, full payment details, or unnecessary private client content.

Security-relevant events should be observable enough to investigate abuse, especially admin actions, authentication failures, permission failures, and provider/webhook failures.

## 10. Browser security

When deployment is established, review:

- HTTPS enforcement
- HSTS
- Content Security Policy
- clickjacking protections (`frame-ancestors` / equivalent)
- MIME sniffing protection
- referrer policy
- permissions policy as appropriate
- CORS configuration

CORS is not authorization.

## 11. Dependencies and CI/CD

- Commit a reproducible lockfile.
- Review meaningful new dependencies.
- Monitor high-severity production dependency advisories.
- Use least-privilege CI permissions.
- Do not expose secrets to untrusted PR execution.
- Pin and review sensitive third-party automation where practical.

## 12. Testing requirements

For protected resources, test:

1. anonymous denial,
2. correct-role success,
3. wrong-role denial,
4. cross-tenant denial,
5. invalid/missing resource denial,
6. expected admin behavior.

For payments/webhooks, test invalid signatures and duplicate events.

For file access, test direct cross-tenant download attempts.

## Release gate

Any credible Critical or High issue affecting account security, private client data, admin privileges, payments, or privileged credentials blocks release until remediated or explicitly risk-accepted by the owner with documented reasoning.
