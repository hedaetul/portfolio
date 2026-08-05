import type { Metadata } from "next";

import { ProfilePhoto } from "@/components/profile-photo";
import { InfoTable, TerminalPageShell } from "@/components/terminal-ui";
import { portfolio } from "@/lib/portfolio";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: portfolio.aboutBio,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <TerminalPageShell breadcrumb={["about"]} command="whoami" aside={<ProfilePhoto />}>
      <p className="mt-6 font-mono text-xl text-foreground sm:text-2xl">
        Hedaetul Islam
        <span className="text-terminal"> @{portfolio.username}</span>
      </p>

      <p className="mt-8 max-w-2xl font-mono text-sm leading-7 text-muted-foreground sm:text-[15px]">
        <span className="text-terminal">{portfolio.titleLine}</span>
        {" "}and {portfolio.role.toLowerCase()}. {portfolio.aboutBio}
      </p>

      <InfoTable rows={[...portfolio.aboutFacts]} />

      <Link
        href={portfolio.resume.viewPath}
        className="mt-10 inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2.5 font-mono text-sm text-foreground transition hover:border-terminal/40 hover:text-terminal"
      >
        $ cat resume.pdf
      </Link>
    </TerminalPageShell>
  );
}
