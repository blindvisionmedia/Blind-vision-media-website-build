import Link from 'next/link';
import { nav } from '@/data/site';
import { BrandMark } from './Brand';

export function Nav() {
  return <header className="topnav">
    <Link href="/" aria-label="Blind Vision Media home"><BrandMark /></Link>
    <nav aria-label="Main navigation">
      {nav.map(item => <div className="navitem" key={item.label}>
        <Link href={item.href}>{item.label}</Link>
        {item.children && <div className="dropdown">
          {item.children.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
        </div>}
      </div>)}
    </nav>
  </header>
}

export function Footer() {
  return <footer className="footer">
    <BrandMark compact />
    <div><strong>Seeing the vision where nobody else can.</strong><p>Studio, business creative production and culture-led media systems from Brisbane.</p></div>
    <div className="footerlinks"><Link href="/studio/book">Book Studio</Link><Link href="/business/consultation">Request Consultation</Link><Link href="/login">Client Login</Link></div>
  </footer>
}
