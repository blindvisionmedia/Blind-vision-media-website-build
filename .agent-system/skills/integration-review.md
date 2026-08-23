# Skill: Integration Review

Use before adding or expanding any external integration.

## Procedure

1. Identify provider and business purpose.
2. Map the complete data flow.
3. Document authentication method and credential location.
4. Record exact requested permissions/OAuth scopes.
5. Apply least privilege to every scope.
6. Identify data read, written, deleted, retained, or exported.
7. Review webhook/event authenticity and replay handling.
8. Review token expiry, refresh, rotation, and revocation.
9. Review failure modes and graceful degradation.
10. Review privacy/client-data impact.
11. Identify monitoring/audit requirements.
12. Classify risk and required approval.

## Scope table

For OAuth or similar permission systems, document:

| Scope/permission | Why required | Read | Write | Delete | Can be narrower? |
|---|---|---:|---:|---:|---|

## Output

- Provider
- Business purpose
- Data flow
- Authentication
- Permissions/scopes
- Secret/token storage
- Webhooks
- Failure/revocation behavior
- Privacy impact
- Security risks
- Recommendation
- Human approval required: yes/no

Do not approve broad permissions on the argument that they may be useful later.
