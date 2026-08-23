import Link from "next/link";
import { siteNavigation } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="wordmark" href="/" aria-label="Blind Vision Media home">
          <span>BLIND VISION</span>
          <small>MEDIA</small>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {siteNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="nav-cta" href="/login">
            Login
          </Link>
        </nav>

        <details className="mobile-nav">
          <summary aria-label="Open navigation">Menu</summary>
          <nav aria-label="Mobile navigation">
            {siteNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/login">Login</Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
