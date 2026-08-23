import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="eyebrow">Blind Vision Media</p>
          <p className="footer-statement">See the vision before it exists.</p>
        </div>
        <div className="footer-links">
          <Link href="/studio">Studio</Link>
          <Link href="/business">Business</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <p className="footer-meta">© {new Date().getFullYear()} Blind Vision Media</p>
      </div>
    </footer>
  );
}
