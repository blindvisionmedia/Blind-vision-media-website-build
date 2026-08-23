# GitHub Workflow

## Standard change flow

1. Create or identify the issue/specification.
2. Classify risk.
3. Create a scoped branch for implementation work when branch workflow is in use.
4. Implement the smallest coherent change.
5. Open a PR using the repository template.
6. Run automated checks.
7. Obtain required specialist reviews.
8. Resolve blocking findings.
9. Obtain human approval where policy requires it.
10. Merge.
11. Run the release-readiness gate before production deployment.

## Branch examples

- `feat/123-studio-booking`
- `fix/221-artist-file-auth`
- `security/304-tighten-authorization`

## Do not

- Hide known failures in PR descriptions.
- Merge unresolved Critical/High security findings.
- Bypass required reviews by splitting a sensitive change into misleadingly small PRs.
- Commit secrets or private client data.
- Claim a check passed if it was not executed.

## Direct-to-main bootstrap exception

Initial repository bootstrap/configuration may be committed directly to `main` when no production application exists yet. Once application development begins, prefer branch + PR review for material changes, especially Medium/High/Critical work.
