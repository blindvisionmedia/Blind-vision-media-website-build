# Platform Bootstrap Security Audit

## Metadata

- **Scope:** Initial Next.js/Supabase scaffold imported to `feat/1-platform-bootstrap`
- **Bootstrap commit:** `2d46489177eaa34386a507f00e54887020b44e90`
- **Tracking:** #1, security hardening gate #2
- **Review:** Security + Architecture + QA triage

## Executive summary

The scaffold is suitable as a design/application starting point but is **not production-ready and must not merge to `main` yet**.

The public sitemap and portal/admin module structure are present. The critical gap is that the authenticated surfaces are currently demonstration shells: portal/admin routes are not authenticated, the database authorization layer needs hardening, private Storage policies are not implemented, and the dependency graph is not reproducible.

## Findings summary

| ID | Severity | Title | Status |
|---|---|---|---|
| SEC-001 | High | Portal and admin routes are not authenticated | Open |
| SEC-002 | Medium | RLS helper functions are self-referential and membership is incomplete | Open |
| SEC-003 | High | Business request insert policy does not verify business ownership | Open |
| SEC-004 | High | Private Storage access policies are not implemented | Open |
| SEC-005 | High | Public-schema data tables lack explicit exposure/RLS controls | Open |
| SEC-006 | Medium | Dependencies are unpinned and no lockfile exists | Open |

Machine-readable details: `reports/security/2026-08-23-platform-bootstrap-findings.json`.

## External implementation evidence

The hardening recommendations align with current primary-source guidance:

- Supabase recommends enabling RLS on every table/view exposed through the Data API and making Data API grants intentional.
- Supabase documents SECURITY DEFINER helpers as a way to avoid RLS recursion/join-table policy problems, with the function placed outside exposed schemas and an empty `search_path`.
- Supabase's current Next.js SSR guidance uses `@supabase/ssr`, cookie-backed server/browser clients, and verified claims/user state for protected pages/data.
- Next.js 16 renamed `middleware.ts` to `proxy.ts` and explicitly warns that Proxy should not be treated as the application's complete authorization/session layer.

References:

- https://supabase.com/docs/guides/database/postgres/row-level-security
- https://supabase.com/docs/guides/api/securing-your-api
- https://supabase.com/docs/guides/auth/server-side/creating-a-client
- https://nextjs.org/docs/app/getting-started/proxy

## Required remediation order

1. Establish deterministic framework/dependency versions and lockfile.
2. Add Supabase SSR clients and real login/session flow.
3. Add authoritative server-side route/role guards for artist, business and admin trees.
4. Harden RLS functions/policies and explicit API grants.
5. Add private Storage bucket/object policies before implementing uploads.
6. Add negative authorization tests.
7. Run dependency, CodeQL, QA, accessibility/performance and release review.

## Checks executed

- Repository/source inspection of public, portal, admin, auth helper, proxy/middleware and SQL migration.
- RLS policy review against current Supabase guidance.
- Next.js route-boundary review against current Next.js 16 guidance.
- Asset review; unused multi-megabyte blue logo was intentionally not imported and the two used logos were optimized before Git import.

## Not yet executed

- `npm ci` / build / typecheck / lint — no lockfile/dependency install exists yet.
- Live Supabase RLS tests — no configured project/environment has been connected to this branch.
- Browser E2E/mobile/accessibility runs — application dependencies are not installed yet.
- Storage policy tests — Storage policies do not exist yet.

## Final verdict

`BLOCK`

The scaffold stays on `feat/1-platform-bootstrap`. Do not merge or deploy until #2 is satisfied and the original failure scenarios are independently verified.
