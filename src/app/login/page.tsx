import type { Metadata } from "next";
import Link from "next/link";
import { PageIntro } from "@/components/page-intro";

export const metadata: Metadata = { title: "Login" };

export default function LoginPage() {
  return (
    <>
      <PageIntro
        eyebrow="Client access"
        title="Portal access is being built behind the public site."
        copy="Artist and Business portal authentication will be introduced as a separate security-reviewed phase. No placeholder login form is exposed before the authorization model exists."
      />
      <section className="empty-state shell">
        <h2>Public V1 first. Secure client access next.</h2>
        <p>This route reserves the product surface without pretending authentication is already implemented.</p>
        <Link href="/contact">Need something now? Contact Blind Vision →</Link>
      </section>
    </>
  );
}
