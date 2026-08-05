import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono } from 'next/font/google';

import { SiteFooter } from '@/components/sections';
import { SiteHeader } from '@/components/site-header';
import { portfolio } from '@/lib/portfolio';
import { getSiteUrl } from '@/lib/site';

import './globals.css';

const siteUrl = getSiteUrl();

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${portfolio.firstName} — ${portfolio.role}`,
    template: `%s | ${portfolio.firstName}`,
  },
  description: portfolio.summary,
  keywords: [
    'Software Engineer',
    'Frontend Engineer',
    'React',
    'Next.js',
    'TypeScript',
    'Flutter',
    portfolio.firstName,
    portfolio.domain,
  ],
  authors: [{ name: portfolio.name, url: siteUrl }],
  creator: portfolio.name,
  publisher: portfolio.name,
  robots: { index: true, follow: true },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteUrl,
    title: `${portfolio.firstName} — ${portfolio.role}`,
    description: portfolio.summary,
    siteName: portfolio.domain,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${portfolio.firstName} — ${portfolio.role}`,
    description: portfolio.summary,
    creator: `@${portfolio.username}`,
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang='en' className='dark scroll-smooth'>
      <body
        className={`${jetbrainsMono.variable} min-h-screen bg-background font-mono text-foreground antialiased`}
      >
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
