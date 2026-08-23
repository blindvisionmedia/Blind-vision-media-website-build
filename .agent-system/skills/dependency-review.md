# Skill: Dependency Review

## Purpose

Assess a new or updated package/service before it becomes part of the production dependency chain.

## Checks

1. Why is the dependency needed?
2. Can the platform/runtime solve the requirement without another package?
3. Is the project maintained?
4. Are releases and security advisories current?
5. What license applies?
6. What direct and transitive packages are added?
7. Does it execute install/postinstall scripts?
8. Does it require privileged credentials or broad OAuth scopes?
9. Does it send client/user data to a third party?
10. What is the frontend bundle/runtime impact?
11. What is the migration cost if it is removed later?
12. Are versions locked reproducibly?

## Security checks

- Review known advisories.
- Avoid packages with unexplained ownership changes or suspicious release behavior.
- Prefer least-privilege integrations.
- Never expose server credentials to client-side packages.
- Treat SDK defaults as untrusted until verified against official docs.

## Output

Return `ACCEPT`, `ACCEPT_WITH_CONTROLS`, or `REJECT`, with evidence and required controls.
