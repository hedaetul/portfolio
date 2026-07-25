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
    <section id="home" className="page-top relative">
      <div className="dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="section-shell relative grid gap-8 pb-16 sm:gap-10 sm:pb-20 lg:grid-cols-[1.05fr_.95fr] lg:items-start lg:gap-12">
        <div className="min-w-0">
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-[11px] text-muted-foreground sm:text-xs">
            <span className="size-2 shrink-0 rounded-full bg-terminal" />
            <span className="break-words">AVAILABLE · {portfolio.availability}</span>
          </div>

          <h1 className="mt-6 font-mono text-[2rem] font-semibold leading-tight tracking-tight text-foreground sm:mt-8 sm:text-5xl lg:text-[3.35rem]">
            <span className="block text-muted-foreground">$ hi, I&apos;m</span>
            <span className="mt-2 block text-terminal">
              {portfolio.firstName}
              <span className="ml-1 inline-block h-[0.95em] w-[0.55em] translate-y-[0.08em] bg-terminal align-middle animate-blink" />
            </span>
          </h1>

          <p className="mt-4 max-w-xl font-mono text-xs leading-6 text-muted-foreground sm:mt-5 sm:text-sm sm:leading-7 md:text-base">
            <span className="block sm:inline">{portfolio.role}</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">{portfolio.titleLine}</span>
            <span className="hidden sm:inline"> | </span>
            <span className="block sm:inline">{portfolio.locationShort}</span>
          </p>

          <div className="mt-8">
            <HeroBio />
          </div>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-terminal px-4 py-2.5 font-mono text-sm font-medium text-black transition hover:bg-terminal/90 sm:w-auto"
            >
              → get in touch
            </Link>
            <Link
              href="/projects"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-2.5 font-mono text-sm text-foreground transition hover:border-terminal/40 hover:text-terminal sm:w-auto"
            >
              $ ls projects/
            </Link>
            <Link
              href="/about"
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-white/15 px-4 py-2.5 font-mono text-sm text-foreground transition hover:border-terminal/40 hover:text-terminal sm:w-auto"
            >
              $ whoami
            </Link>
          </div>

          <SocialLinks className="mt-6 sm:mt-8" />
        </div>

        <div className="min-w-0 lg:sticky lg:top-20 lg:self-start">
          <TerminalChat />
        </div>
      </div>
    </section>
  );
}
