import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <section className="hero shell">
        <p className="eyebrow">Blind Vision Media / Brisbane</p>
        <h1>
          SEE THE VISION
          <span>BEFORE IT EXISTS.</span>
        </h1>
        <p className="hero-copy">
          One creative company. Two connected lanes. Built for artists with something to say and businesses that need people to pay attention.
        </p>
        <div className="hero-actions">
          <Link className="button button-primary" href="/studio">
            Enter Studio
          </Link>
          <Link className="button button-ghost" href="/business">
            Business Services
          </Link>
        </div>
      </section>

      <section className="lane-grid shell" aria-label="Blind Vision services">
        <Link className="lane-card" href="/studio">
          <span className="lane-index">01</span>
          <div>
            <p className="eyebrow">For artists</p>
            <h2>Studio</h2>
            <p>Recording, production, mixing, creative direction and artist development.</p>
          </div>
          <span className="lane-arrow" aria-hidden="true">↗</span>
        </Link>

        <Link className="lane-card" href="/business">
          <span className="lane-index">02</span>
          <div>
            <p className="eyebrow">For business</p>
            <h2>Business</h2>
            <p>Content, photography, video, campaigns, branding and creative production.</p>
          </div>
          <span className="lane-arrow" aria-hidden="true">↗</span>
        </Link>
      </section>

      <section className="manifesto shell">
        <p className="eyebrow">The operating idea</p>
        <p className="manifesto-copy">
          The strongest work starts before the camera turns on or the record button gets hit. It starts by finding the idea worth building around.
        </p>
        <Link href="/about">About Blind Vision →</Link>
      </section>
    </>
  );
}
