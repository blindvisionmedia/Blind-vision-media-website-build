import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";
import { businessServices } from "@/lib/site";

export const metadata: Metadata = { title: "Business" };

export default function BusinessPage() {
  return (
    <>
      <PageIntro
        eyebrow="Business"
        title="Creative work built to earn attention."
        copy="Blind Vision helps businesses turn an objective into content people can actually see, understand and remember."
      />
      <section className="service-list shell">
        {businessServices.map((service, index) => (
          <div className="service-row" key={service}>
            <span>0{index + 1}</span>
            <h2>{service}</h2>
          </div>
        ))}
      </section>
      <section className="cta-band shell">
        <div>
          <p className="eyebrow">Start with the problem</p>
          <h2>Then build the right creative response.</h2>
        </div>
        <Link className="button button-primary" href="/contact">Request consultation</Link>
      </section>
    </>
  );
}
