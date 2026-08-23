import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { studioServices } from "@/lib/site";

export const metadata: Metadata = { title: "Studio" };

export default function StudioPage() {
  return (
    <>
      <PageIntro
        eyebrow="Studio"
        title="Build the record. Build the artist."
        copy="A focused studio lane for recording, production, mixing and the creative decisions that make a release feel like one complete world."
      />
      <section className="service-list shell">
        {studioServices.map((service, index) => (
          <div className="service-row" key={service}>
            <span>0{index + 1}</span>
            <h2>{service}</h2>
          </div>
        ))}
      </section>
      <section className="cta-band shell">
        <div>
          <p className="eyebrow">Sessions</p>
          <h2>Come in with an idea. Leave with direction.</h2>
        </div>
        <Link className="button button-primary" href="/contact">Book / enquire</Link>
      </section>
    </>
  );
}
