import Link from 'next/link';
import { BrandMark } from './Brand';

export function PortalShell({ type, children }: { type: 'artist'|'business'|'admin'; children: React.ReactNode }) {
  const links = type === 'artist'
    ? [['Dashboard','/portal/artist'],['Projects','/portal/artist/projects'],['Sessions','/portal/artist/sessions'],['Files','/portal/artist/files'],['Bookings','/portal/artist/bookings'],['Billing','/portal/artist/billing'],['Account','/portal/artist/account']]
    : type === 'business'
    ? [['Dashboard','/portal/business'],['Projects','/portal/business/projects'],['Requests','/portal/business/requests'],['Approvals','/portal/business/approvals'],['Files','/portal/business/files'],['Performance','/portal/business/performance'],['Reports','/portal/business/reports'],['Billing','/portal/business/billing'],['Account','/portal/business/account']]
    : [['Dashboard','/admin'],['CRM','/admin/crm'],['Artists','/admin/artists'],['Businesses','/admin/businesses'],['Projects','/admin/projects'],['Studio','/admin/studio'],['Requests','/admin/requests'],['Approvals','/admin/approvals'],['Files','/admin/files'],['Finance','/admin/finance'],['Performance','/admin/performance'],['Website Content','/admin/website-content'],['Users','/admin/users'],['Settings','/admin/settings']];
  return <div className={`portal ${type}`}><aside><BrandMark compact/><p className="portalType">{type === 'admin' ? 'BV ADMIN' : `${type.toUpperCase()} PORTAL`}</p>{links.map(([label,href])=><Link key={href} href={href}>{label}</Link>)}</aside><main>{children}</main></div>
}

export function StatGrid({ items }: { items: string[] }) { return <div className="statGrid">{items.map((item,i)=><div className="stat" key={item}><span>{String(i+1).padStart(2,'0')}</span><strong>{item}</strong><p>Connected to database-ready module.</p></div>)}</div> }

export function Progress({ steps, current }: { steps: string[]; current: number }) { return <ol className="progress">{steps.map((s,i)=><li className={i<=current?'active':''} key={s}><span>{i+1}</span>{s}</li>)}</ol> }
