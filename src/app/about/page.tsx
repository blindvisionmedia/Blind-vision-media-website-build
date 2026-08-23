import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <PageIntro
        eyebrow="About Blind Vision"
        title="Seeing the vision where nobody else can."
        copy="Blind Vision Media sits between studio culture and commercial creative production, using the same core discipline in both: understand the idea first, then execute it properly."
      />
      <section className="statement-grid shell">
        <div>
          <p className="eyebrow">Studio</p>
          <h2>Music with identity, not just files delivered.</h2>
        </div>
        <div>
          <p className="eyebrow">Business</p>
          <h2>Creative production connected to an actual objective.</h2>
        </div>
      </section>
    </>
  );
}
