# Skill: Threat Model

## Purpose

Create or update a practical threat model for a feature before implementation or release.

## Procedure

### 1. Define assets
Examples: accounts, sessions, unreleased media, business files, invoices, bookings, admin controls, payment state, provider credentials.

### 2. Define actors
At minimum consider:
- anonymous visitor
- legitimate ARTIST user
- legitimate BUSINESS user
- ADMIN
- compromised account
- malicious authenticated user
- external attacker
- third-party provider

### 3. Draw data flow
For the scoped feature identify browser/client, server/API, database, object storage, queues/jobs, payment/provider services, and admin tooling.

### 4. Identify trust boundaries
Mark every transition where data or authority crosses between actors, services, tenants, public/private networks, or privilege levels.

### 5. Enumerate abuse cases
Consider spoofing, tampering, repudiation/audit gaps, information disclosure, denial of service/abuse, elevation of privilege, tenant crossover, malicious uploads, webhook forgery, and secrets leakage.

### 6. Map controls
For each material threat identify preventive, detective, and recovery controls.

### 7. Record residual risk
State what remains possible after controls and whether the residual risk is acceptable.

## Output

- Scope
- Assets
- Actors
- Data-flow description
- Trust boundaries
- Threat table
- Existing/proposed controls
- Residual risks
- Required security tests

Threat models should be updated when architecture, auth, storage, payment, or integration boundaries materially change.
