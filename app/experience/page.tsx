import type { Metadata } from "next";

import { ExperienceSection } from "@/components/sections";
import { CommandHeading, PageBreadcrumb } from "@/components/terminal-ui";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience across UK, USA, and Bangladeshi teams.",
};

export default function ExperiencePage() {
  return (
    <main>
      <section className="relative scroll-mt-24 pt-28 sm:pt-32">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="section-shell relative pb-6">
          <PageBreadcrumb segments={["experience"]} />
          <CommandHeading command="cat experience.log" className="mt-8" />
          <p className="mt-4 font-mono text-sm text-muted-foreground">{"// tail -f professional history"}</p>
        </div>
      </section>
      <ExperienceSection />
    </main>
  );
}
