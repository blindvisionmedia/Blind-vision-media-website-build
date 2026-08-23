import type { Metadata } from "next";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <>
      <PageIntro
        eyebrow="Selected work"
        title="Proof over filler."
        copy="This page is intentionally structured for verified projects, case studies and results rather than invented portfolio material."
      />
      <section className="empty-state shell">
        <p className="eyebrow">Portfolio system ready</p>
        <h2>Projects will appear here as the work is cleared for publication.</h2>
        <p>Each business case study will follow: client → problem → insight → execution → deliverables → results.</p>
      </section>
    </>
  );
}
