import type { Metadata } from "next";

import { ProjectsSection } from "@/components/sections";
import { CommandHeading, PageBreadcrumb } from "@/components/terminal-ui";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected web and mobile work.",
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="relative scroll-mt-24 pt-28 sm:pt-32">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="section-shell relative pb-6">
          <PageBreadcrumb segments={["projects"]} />
          <CommandHeading command="ls projects/" className="mt-8" />
          <p className="mt-4 font-mono text-sm text-muted-foreground">{"// listing selected repositories and shipped products"}</p>
        </div>
      </section>
      <ProjectsSection />
    </main>
  );
}
