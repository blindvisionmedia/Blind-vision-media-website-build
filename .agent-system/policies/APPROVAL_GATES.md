# Approval Gates

## Low risk

Documentation, internal analysis, non-sensitive UI polishing, and test generation may proceed without separate human approval when the work is in scope.

## Review required

Feature implementation, schema additions, new forms, analytics, dependency additions, and non-privileged integrations require PR/review discipline.

## Human approval required

The repository owner must approve changes involving:

- Production deployment
- Authentication architecture
- Authorization / RLS / tenant-boundary changes
- Payment configuration
- Production secrets/credentials
- OAuth scope expansion
- Destructive database migrations
- Client-data movement/deletion
- Admin privilege expansion

## Security block

Critical/High security findings affecting authentication, authorization, private client data, files, payments, privileged credentials, or admin access block release until remediated or explicitly risk-accepted.

## Separation of duties

For High/Critical work, the builder may explain and remediate findings but must not be the only reviewer declaring the work safe.
