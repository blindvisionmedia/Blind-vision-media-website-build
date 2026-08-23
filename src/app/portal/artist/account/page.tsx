import { PortalShell, StatGrid } from '@/components/Portal';

export default function Page(){return <PortalShell type="artist"><div className="moduleShell"><p className="portalType">ARTIST PORTAL</p><h1>Account</h1><StatGrid items={['Upcoming Session','Active Projects','Files Awaiting Review','Billing Status']}/><div className="notice">This module is scaffolded with client-specific database access, permissions and future integration hooks.</div></div></PortalShell>}
