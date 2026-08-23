# Integration Policy

Every external integration must have an owner, a documented business purpose, and the narrowest practical permission set.

## Required documentation

- Provider
- Environment
- Authentication method
- Requested scopes/permissions
- Credentials and storage location
- Data read
- Data written
- Data deleted
- Data retained
- Webhook events and verification
- Failure behavior
- Revocation process
- Privacy/client impact

## Least privilege

Do not grant broad mailbox, Drive, GitHub, database, analytics, social, or other account permissions when a narrower capability satisfies the feature.

Read-only is preferred where write is unnecessary. App-owned/project-scoped access is preferred over account-wide access.

## Secrets

Provider secrets belong in approved server-side secret storage or environment configuration. They must not be committed to Git or exposed to the browser.

## Production changes

OAuth scope expansion, privileged provider credentials, destructive provider permissions, or production client-data access are High-risk changes and require independent review plus human approval.
