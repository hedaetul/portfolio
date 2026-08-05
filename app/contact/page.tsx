import type { Metadata } from "next";

import { ContactSection } from "@/components/sections";
import { CommandHeading, PageBreadcrumb } from "@/components/terminal-ui";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for projects and opportunities.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main>
      <section className="relative scroll-mt-24 pt-28 sm:pt-32">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,black,transparent_90%)]" />
        <div className="section-shell relative pb-6">
          <PageBreadcrumb segments={["contact"]} />
          <CommandHeading command='mail -s "hello"' className="mt-8" />
          <p className="mt-4 font-mono text-sm text-muted-foreground">{"// compose a message to reach me directly"}</p>
        </div>
      </section>
      <ContactSection />
    </main>
  );
}
