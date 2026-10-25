import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Monark | The Quiet North',
  description: 'Monark Fall/Winter 2026 collection.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
