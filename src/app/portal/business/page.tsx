import { PortalShell, StatGrid } from '@/components/Portal';
import { businessProject } from '@/lib/portal-data';
import { Progress } from '@/components/Portal';
export default function Page(){return <PortalShell type="business"><div className="moduleShell"><p className="portalType">BUSINESS PORTAL</p><h1>Dashboard</h1><StatGrid items={['Upcoming Session','Active Projects','Files Awaiting Review','Billing Status']}/><Progress steps={businessProject.steps} current={businessProject.current}/></div></PortalShell>}
