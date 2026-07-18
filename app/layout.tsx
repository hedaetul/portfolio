import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";

import { SiteFooter } from "@/components/sections";
import { SiteHeader } from "@/components/site-header";
import { portfolio } from "@/lib/portfolio";

import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${portfolio.firstName} — ${portfolio.role}`,
    template: `%s | ${portfolio.firstName}`,
  },
  description: portfolio.summary,
  keywords: ["Software Engineer", "Frontend Engineer", "React", "Next.js", "TypeScript", "Flutter"],
  authors: [{ name: portfolio.name }],
  creator: portfolio.name,
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    title: `${portfolio.firstName} — ${portfolio.role}`,
    description: portfolio.summary,
    siteName: portfolio.domain,
  },
  twitter: {
    card: "summary",
    title: `${portfolio.firstName} — ${portfolio.role}`,
    description: portfolio.summary,
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${jetbrainsMono.variable} min-h-screen bg-background font-mono text-foreground antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
