# Skill: Release Readiness

## Purpose

Decide whether a candidate build is safe to release.

## Required inputs

- Release commit/tag/branch
- Included changes
- Test/CI results
- Open findings/issues
- Deployment/environment changes

## Checklist

### Engineering
- Build succeeds
- Typecheck succeeds where configured
- Lint succeeds where configured
- Automated tests succeed
- Database migrations reviewed and reversible where practical

### Security
- No unresolved Critical findings
- No unresolved High findings unless explicitly risk-accepted
- No secrets detected
- Auth/authorization changes reviewed
- File/storage/payment/webhook changes reviewed where applicable

### Product
- Critical public and authenticated flows smoke-tested
- Mobile behavior checked
- Error/loading/empty states checked
- Accessibility review completed for material UI changes

### Operations
- Required environment variables documented
- Rollback path identified
- Monitoring/logging impact reviewed
- Third-party dependencies/providers healthy enough for launch

## Output

Produce:

- Release identifier
- Checks executed
- Passed/failed/skipped checks
- Open risks
- Blocking findings
- Rollback notes
- Final verdict: `PASS`, `PASS_WITH_CONDITIONS`, or `BLOCK`

A release verdict must be based on observed evidence, not schedule pressure.
