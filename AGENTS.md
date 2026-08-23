# Blind Vision Media Agent Instructions

This file defines the repository-wide operating rules for AI agents and human contributors.

## Mission

Build and maintain the Blind Vision Media website and client platform as a production-grade system with strong security, privacy, reliability, performance, accessibility, and traceability.

## Core rules

1. **Inspect before changing.** Read the relevant code, configuration, tests, and surrounding architecture before proposing or making edits.
2. **Evidence over opinion.** Every substantive finding must cite concrete repository evidence: file path, line/range where available, commit, PR, issue, test output, workflow result, or reproducible command.
3. **Security is a release gate.** Critical and high-risk security findings block release unless explicitly accepted by the owner with documented rationale.
4. **No silent scope expansion.** Do not refactor unrelated code while fixing a focused issue unless the dependency is necessary and documented.
5. **Prefer minimal, reversible changes.** Small PRs with clear intent are preferred over broad rewrites.
6. **Never commit secrets.** API keys, tokens, private keys, passwords, credentials, production cookies, raw customer data, or service-account material must never enter the repository.
7. **Treat all client data as sensitive.** Artist and business portal data must follow least-privilege access controls.
8. **Authentication is not authorization.** Every protected resource must enforce server-side authorization independently of UI state.
9. **Validate untrusted input.** Validate and normalize all external input at trust boundaries.
10. **Fail closed.** Security-sensitive code should deny access on uncertainty rather than grant access.
11. **Report uncertainty.** If evidence is incomplete, state what is unknown and what must be checked next.
12. **Tie work back to Git.** Findings and changes should map to issues, PRs, commits, tests, or reports whenever practical.

## Required specialist review

Use the specialist instructions under `.agent-system/agents/` when work touches the corresponding area:

- Security / auth / permissions / storage / payments / secrets
- Architecture / data model / integrations / API boundaries
- QA / regression / test coverage
- Performance / Core Web Vitals / bundle or query efficiency
- Accessibility / WCAG / keyboard / semantics
- Research / dependency or implementation decisions
- Code review / PR readiness

## Severity model

- **Critical** — exploitable path to account takeover, unauthorized private data access, payment compromise, remote code execution, destructive production impact, or secret disclosure.
- **High** — serious privilege bypass, insecure direct object reference, major injection risk, broad data exposure, missing access enforcement, or high-probability operational failure.
- **Medium** — meaningful weakness requiring remediation but with constrained impact or exploitability.
- **Low** — defense-in-depth issue, quality risk, maintainability concern, or minor standards gap.
- **Info** — observation, recommendation, or non-blocking improvement.

## Standard finding format

Every finding should contain:

- ID
- Title
- Severity
- Category
- Evidence
- Affected files/components
- Attack/failure scenario
- Impact
- Recommendation
- Validation / reproduction steps
- Status

Use `.agent-system/schemas/finding.schema.json` for machine-readable reports.

## Definition of done

A change is not complete until the applicable checks pass:

- Build/typecheck/lint where configured
- Relevant tests
- Security review for trust-boundary changes
- No secrets introduced
- Authorization reviewed for protected data paths
- Error states handled
- Mobile behavior checked
- Accessibility checked for UI changes
- Documentation updated when behavior or architecture changes

## Prohibited behavior

Agents must not:

- Disable security controls merely to make tests pass.
- Weaken authorization to simplify implementation.
- Expose private storage buckets or client files publicly.
- Log secrets, auth tokens, passwords, full payment data, or unnecessary personal data.
- Invent test results or claim checks were run when they were not.
- Merge or recommend release with known critical/high findings unless explicitly risk-accepted.
