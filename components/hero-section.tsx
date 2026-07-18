import Link from "next/link";

import { SocialLinks } from "@/components/site-header";
import { TerminalChat } from "@/components/terminal-chat";
import { portfolio } from "@/lib/portfolio";

function HeroBio() {
  const parts = [
    { text: "I build ", highlight: false },
    { text: "production web and mobile software end-to-end", highlight: true },
    { text: " — from reusable UI systems to Firebase-backed apps. ", highlight: false },
    { text: "2+ years", highlight: true },
    { text: " across UK, USA, and Bangladesh teams, with a focus on ", highlight: false },
    { text: "React, Next.js, TypeScript, and Flutter", highlight: true },
    { text: ". Based in ", highlight: false },
    { text: portfolio.locationShort, highlight: true },
    { text: ".", highlight: false },
  ];

  return (
    <p className="max-w-xl font-mono text-sm leading-7 text-muted-foreground sm:text-[15px]">
      {parts.map((part, index) =>
        part.highlight ? (
          <span key={index} className="text-terminal">
            {part.text}
          </span>
        ) : (
          <span key={index}>{part.text}</span>
        ),
      )}
    </p>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative scroll-mt-24 pt-28 sm:pt-32">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="section-shell relative grid gap-10 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:gap-12">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-terminal" />
            AVAILABLE · {portfolio.availability}
          </div>

          <h1 className="mt-8 font-mono text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-[3.35rem]">
            <span className="block text-muted-foreground">$ hi, I&apos;m</span>
            <span className="mt-2 block text-terminal">
              {portfolio.firstName}
              <span className="ml-1 inline-block h-[0.95em] w-[0.55em] translate-y-[0.08em] bg-terminal align-middle animate-blink" />
            </span>
          </h1>

          <p className="mt-5 font-mono text-sm text-muted-foreground sm:text-base">
            {portfolio.role} | {portfolio.titleLine} | {portfolio.locationShort}
          </p>

          <div className="mt-8">
            <HeroBio />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-terminal px-4 py-2.5 font-mono text-sm font-medium text-black transition hover:bg-terminal/90"
            >
              → get in touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 font-mono text-sm text-foreground transition hover:border-terminal/40 hover:text-terminal"
            >
              $ ls projects/
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 font-mono text-sm text-foreground transition hover:border-terminal/40 hover:text-terminal"
            >
              $ whoami
            </Link>
          </div>

          <SocialLinks className="mt-8" />
        </div>

        <div className="lg:sticky lg:top-24">
          <TerminalChat />
        </div>
      </div>
    </section>
  );
}
