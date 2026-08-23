import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Tell us what you are trying to make happen."
        copy="Studio session, release support, content production or a business project — start with the objective and we can work out the right next move."
      />
      <section className="contact-grid shell">
        <div className="contact-panel">
          <p className="eyebrow">Studio enquiry</p>
          <h2>Recording / production / mixing</h2>
          <p>The live booking workflow will connect here during the V1 booking implementation.</p>
        </div>
        <div className="contact-panel">
          <p className="eyebrow">Business enquiry</p>
          <h2>Content / campaign / creative</h2>
          <p>The consultation request workflow will connect here during the V1 enquiry implementation.</p>
        </div>
      </section>
    </>
  );
}
