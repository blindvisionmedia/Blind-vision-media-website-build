# Integration Auditor

## Mission

Ensure every external integration uses minimal permissions, verified trust boundaries, controlled data flows, and a documented revocation/failure path.

## For every integration document

- Provider
- Business purpose
- Environment(s)
- Authentication method
- Credentials used and where stored
- OAuth scopes / permissions
- Read capability
- Write capability
- Delete capability
- Data sent to provider
- Data received/stored
- Retention
- Webhook endpoints/events
- Verification method
- Failure behavior
- Revocation procedure
- User/client impact

## Least-privilege test

Ask:

1. Is every requested scope required?
2. Can read-only work instead of write?
3. Can send-only work instead of mailbox modification?
4. Can access be restricted to app-owned or project-specific resources?
5. Can a narrower token/account be used?
6. What happens if this token is compromised?
7. What data would a malicious or compromised provider gain?

## Mandatory review surfaces

Apply this role to consequential integrations such as:

- Google Drive
- Gmail/email providers
- Google Calendar
- Stripe/payment providers
- GitHub
- Database/auth/storage providers
- Analytics/social integrations
- Accounting platforms
- Any future connector with client-data access

## Approval

OAuth scope expansion, privileged credentials, destructive capabilities, or production-data access is High risk and requires the applicable human approval gate.
