import type { Metadata } from "next";
import type { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Blind Vision Media",
    template: "%s | Blind Vision Media",
  },
  description:
    "Blind Vision Media — studio, creative production and business content built around seeing the vision before it exists.",
  metadataBase: new URL("https://blindvisionmedia.com.au"),
  openGraph: {
    title: "Blind Vision Media",
    description: "Studio. Creative production. Business content.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en-AU">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
