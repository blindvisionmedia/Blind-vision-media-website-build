import { PortalShell, StatGrid } from '@/components/Portal';
import { adminMetrics } from '@/lib/portal-data';
export default function Page(){return <PortalShell type="admin"><div className="moduleShell"><p className="portalType">BV ADMIN</p><h1>Dashboard</h1><StatGrid items={adminMetrics}/><div className="notice">Admin module scaffolded for database-backed operations, role policies and future integrations.</div></div></PortalShell>}
