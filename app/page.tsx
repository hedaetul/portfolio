import { HeroSection } from "@/components/hero-section";
import { CommandHeading, PageBreadcrumb, TerminalLink } from "@/components/terminal-ui";
import { navLinks, portfolio } from "@/lib/portfolio";

export default function HomePage() {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.name,
    jobTitle: portfolio.role,
    email: portfolio.email,
    telephone: portfolio.phone,
    address: { "@type": "PostalAddress", addressLocality: portfolio.location },
    sameAs: [portfolio.github],
    knowsAbout: portfolio.focus,
  };

  const quickLinks = navLinks.filter((link) => link.href !== "/");

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <HeroSection />
      <section className="section-shell border-t border-white/10 pb-20 pt-10">
        <PageBreadcrumb segments={["home"]} />
        <CommandHeading command="help --short" className="mt-8 text-3xl sm:text-4xl" />
        <p className="mt-4 font-mono text-sm text-muted-foreground">{"// available routes in this portfolio shell"}</p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {quickLinks.map((link) => (
            <TerminalLink
              key={link.href}
              href={link.href}
              className="rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-foreground transition hover:border-terminal/30 hover:bg-white/[0.04]"
            >
              {link.label}
            </TerminalLink>
          ))}
        </div>
      </section>
    </main>
  );
}
