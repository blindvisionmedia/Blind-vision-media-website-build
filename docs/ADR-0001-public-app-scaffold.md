# ADR-0001 — Public application scaffold

## Status
Accepted for implementation review.

## Context
Blind Vision needs a premium public website now and authenticated Artist, Business and Admin surfaces later. The public marketing layer must not force a rebuild when private application domains are introduced.

## Decision
Use Next.js App Router + React + strict TypeScript for the initial application shell.

Keep the first implementation deliberately public-only:

- `src/app/` owns public route composition.
- `src/components/` holds shared presentation components.
- `src/lib/` holds framework-independent site configuration/domain constants.
- No authentication, database, payments, private files or provider credentials are introduced in this scaffold.

Authenticated domains will be added behind explicit server-side authorization boundaries in later ADRs rather than simulated in the UI now.

## Rationale
- Server and client code can coexist without forcing privileged logic into browser bundles.
- App Router gives route-level metadata and layouts suitable for the public site.
- TypeScript strict mode supports safer growth into typed domain and authorization logic.
- The scaffold remains simple enough to replace individual infrastructure choices later.

## Security implications
Current risk is limited because no private data or privileged operation exists. Future authentication/tenant/file/payment work remains separately gated by `docs/SECURITY_BASELINE.md`.

## Performance implications
The initial design uses no client JavaScript for navigation and no third-party UI/runtime dependencies. Media optimization decisions will be reviewed when real photography/video assets are introduced.

## Rollback
Delete the application scaffold commit or replace `src/` and root application configuration while retaining the repository agent/control layer.
