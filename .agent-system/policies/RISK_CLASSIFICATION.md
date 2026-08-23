# Risk Classification

## LOW

Cosmetic, documentation, or isolated non-sensitive change with no private-data/security impact.

Examples:
- copy correction
- documentation
- non-sensitive styling polish

## MEDIUM

Functional change with bounded impact and no privileged access/control.

Examples:
- new public form
- analytics event
- non-privileged integration
- performance refactor

## HIGH

Touches or can materially affect:

- authentication
- authorization
- tenant/client boundaries
- private files
- payments
- OAuth
- webhooks
- admin privileges
- database security policy
- production client-data movement

Requires independent Security + QA review and human approval where defined by policy.

## CRITICAL

Known or credible path to:

- account/authentication bypass
- cross-client data exposure
- production-secret compromise
- payment manipulation
- arbitrary code execution
- destructive unauthorized production action
- broad private-file exposure

Critical issues block merge/release until resolved or handled through an explicit exceptional risk-acceptance decision by the owner.

## Classification rule

When genuinely uncertain between two levels, use the higher level until a specialist review justifies downgrading it.
