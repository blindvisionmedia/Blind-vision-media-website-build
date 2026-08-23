import { PortalShell, StatGrid } from '@/components/Portal';
import { artistProject } from '@/lib/portal-data';
import { Progress } from '@/components/Portal';
export default function Page(){return <PortalShell type="artist"><div className="moduleShell"><p className="portalType">ARTIST PORTAL</p><h1>Dashboard</h1><StatGrid items={['Upcoming Session','Active Projects','Files Awaiting Review','Billing Status']}/><Progress steps={artistProject.steps} current={artistProject.current}/></div></PortalShell>}
