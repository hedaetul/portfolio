import type { Metadata } from "next";

import { ProfilePhoto } from "@/components/profile-photo";
import { InfoTable, TerminalPageShell } from "@/components/terminal-ui";
import { portfolio } from "@/lib/portfolio";

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
    </TerminalPageShell>
  );
}
