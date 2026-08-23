# Skill: Pull Request Review

## Purpose

Review a PR as a production change, not as isolated syntax.

## Procedure

1. Read PR intent and linked issue/spec.
2. Inspect full diff and changed-file list.
3. Read surrounding code for every material change.
4. Identify affected user journeys, roles, data, and integrations.
5. Route specialist review:
   - security for trust/auth/data/payment/file changes
   - architecture for boundaries/schema/integrations
   - QA for behavior/test changes
   - performance for media/query/bundle changes
   - accessibility for UI changes
6. Verify tests cover success and failure paths.
7. Review configuration, migrations, environment variables, and deployment impact.
8. Check for accidental secrets, debug code, dead code, temporary bypasses, or unsafe TODOs.
9. Summarize blocking vs non-blocking findings.

## Required conclusion

Return one of:

- **APPROVE** — no blocking issues found.
- **REQUEST CHANGES** — correctness/security/release blockers remain.
- **COMMENT** — questions or non-blocking improvements only.

State exactly which checks were and were not executed.
