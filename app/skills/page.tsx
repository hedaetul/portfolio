import type { Metadata } from "next";

import { SkillsSection } from "@/components/sections";
import { CommandHeading, PageBreadcrumb } from "@/components/terminal-ui";

export const metadata: Metadata = {
  title: "Skills",
  description: "Languages, frameworks, tools, and workflow.",
  alternates: { canonical: "/skills" },
};

export default function SkillsPage() {
  return (
    <main>
      <section className="relative scroll-mt-24 pt-28 sm:pt-32">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="section-shell relative pb-6">
          <PageBreadcrumb segments={["skills"]} />
          <CommandHeading command="apt list --installed" className="mt-8" />
          <p className="mt-4 font-mono text-sm text-muted-foreground">{"// filtering packages tagged: frontend, mobile, tooling"}</p>
        </div>
      </section>
      <SkillsSection />
    </main>
  );
}
