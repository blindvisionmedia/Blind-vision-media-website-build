import { PortalShell, StatGrid } from '@/components/Portal';

export default function Page(){return <PortalShell type="business"><div className="moduleShell"><p className="portalType">BUSINESS PORTAL</p><h1>Approvals</h1><StatGrid items={['Upcoming Session','Active Projects','Files Awaiting Review','Billing Status']}/><div className="notice">This module is scaffolded with client-specific database access, permissions and future integration hooks.</div></div></PortalShell>}
