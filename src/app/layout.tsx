import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'Blind Vision Media', template: '%s | Blind Vision Media' },
  description: 'Premium creative production, recording studio, business content and client platform for Blind Vision Media.',
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
