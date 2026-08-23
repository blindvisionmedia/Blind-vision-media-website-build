import { PortalShell, StatGrid } from '@/components/Portal';

export default function Page(){return <PortalShell type="admin"><div className="moduleShell"><p className="portalType">BV ADMIN</p><h1>Studio</h1><StatGrid items={['Queue','Records','Recent Activity','Permissions']}/><div className="notice">Admin module scaffolded for database-backed operations, role policies and future integrations.</div></div></PortalShell>}
