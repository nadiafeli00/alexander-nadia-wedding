import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, DM_Sans } from 'next/font/google';
import '@/styles/globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata: Metadata = {
  title: 'Alexander & Nadia Wedding',
  description: 'Join us for our wedding celebration on November 7, 2026 in Surabaya',
  keywords: ['wedding', 'invitation', 'Alexander', 'Nadia'],
  authors: [{ name: 'Alexander & Nadia' }],
  openGraph: {
    title: 'Alexander & Nadia Wedding',
    description: 'Join us for our wedding celebration on November 7, 2026',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} ${dmSans.variable}`}
    >
      <body className="bg-ivory text-dark-taupe">{children}</body>
    </html>
  );
}
