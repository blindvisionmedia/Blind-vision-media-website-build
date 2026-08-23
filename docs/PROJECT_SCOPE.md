# Blind Vision Media — Platform Scope

## Product objective

Build a premium public creative-company website plus a secure client platform that can expand without requiring a full rebuild.

## Brand/product split

Blind Vision Media operates across two connected service areas:

- **Studio** — music, artists, recording, production, mixing, creative direction, artist development.
- **Business** — content, photography, video, campaigns, branding, creative direction, entertainment, and business growth.

The public site should feel cinematic, editorial, premium, and media-led rather than like a generic SaaS landing page. Authenticated portals can be more functional and application-like.

## Public sitemap

```text
HOME
├── STUDIO
│   ├── About the Studio
│   ├── Pricing / Packages
│   ├── Recent Projects
│   ├── Studio Availability
│   ├── Book a Session
│   └── Artist Login
├── BUSINESS
│   ├── About
│   ├── Business Services
│   ├── Case Studies
│   ├── Packages
│   ├── Request Consultation
│   └── Business Login
├── WORK / PORTFOLIO
├── ABOUT
├── CONTACT
└── LOGIN
```

## Authentication and roles

Use a single authentication system with explicit roles:

- `ARTIST`
- `BUSINESS`
- `ADMIN`

Role labels must never replace resource-level authorization. A user must also be authorized for the specific tenant/project/file/resource they request.

## Artist portal target

- Dashboard
- Projects
- Sessions
- Files
- Bookings
- Billing
- Account

Typical actions:
- Check upcoming session
- Upload/download allowed files
- Leave feedback
- Request/book a session
- Review/pay billing items

## Business portal target

- Dashboard
- Projects
- Requests
- Approvals
- Files
- Performance
- Reports
- Billing
- Account

Typical actions:
- Submit a request
- Approve content
- Request changes
- Download deliverables
- View performance/reporting
- Review/pay billing items

## Admin target

- Dashboard
- CRM
- Projects
- Studio
- Requests
- Approvals
- Files
- Finance
- Website
- Reporting
- Users
- Settings

Admin capabilities are high-risk and require explicit server-side authorization and auditability.

## Booking flow

```text
Choose Service
→ Date
→ Time
→ Client Details
→ Package
→ Deposit / Payment
→ Confirmation
```

Booking and payment state must be server-authoritative. The client may request actions but must not be able to declare payment success.

## Case study structure

```text
Client
→ Problem
→ Insight / Idea
→ Execution
→ Deliverables
→ Results
```

Potential result metrics include reach, engagement, leads, traffic, views, followers, conversion, and revenue where evidence exists.

## Platform roadmap

### V1
Public site, Studio, Business, Work, About, Contact, availability, enquiries.

### V2
Artist Portal.

### V3
Business Portal.

### V4
Business intelligence and performance reporting.

### V5
Expanded Blind Vision admin operations.

## Architecture requirements

- Secure server-side authorization
- Tenant isolation
- Private file storage
- Mobile-first critical actions
- Accessible UI
- SEO basics for public pages
- Strong performance despite photography/video-heavy presentation
- Auditable payment/provider events
- Extensible integrations
- Environment separation
- No secrets in frontend bundles or repository history

## Planned integrations

Potential integrations may include payments, calendar, analytics/social platforms, project/document storage, accounting, email, and other provider APIs. Every integration requires dependency/security review before implementation.
