"use client";

import { Github, Mail, Moon, Phone, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navLinks, portfolio } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="section-shell flex h-14 items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-mono text-sm text-foreground">
          <span className="text-terminal">●</span>
          <span>
            {portfolio.firstName.toLowerCase()}<span className="text-muted-foreground">.dev</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
              className={cn(
                "nav-link font-mono",
                isActivePath(pathname, link.href) && "text-terminal",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle theme"
            onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
            className="grid size-8 place-items-center rounded-md border border-white/10 text-muted-foreground transition hover:border-terminal/30 hover:text-terminal"
          >
            {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </button>
        </div>
      </div>

      <nav className="section-shell flex gap-4 overflow-x-auto border-t border-white/5 py-2 lg:hidden" aria-label="Mobile">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={isActivePath(pathname, link.href) ? "page" : undefined}
            className={cn(
              "nav-link shrink-0 font-mono text-xs",
              isActivePath(pathname, link.href) && "text-terminal",
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <a
        href={portfolio.github}
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
        className="grid size-9 place-items-center rounded-md border border-white/10 text-muted-foreground transition hover:border-terminal/30 hover:text-terminal"
      >
        <Github className="size-4" />
      </a>
      <a
        href={`mailto:${portfolio.email}`}
        aria-label="Email"
        className="grid size-9 place-items-center rounded-md border border-white/10 text-muted-foreground transition hover:border-terminal/30 hover:text-terminal"
      >
        <Mail className="size-4" />
      </a>
      <a
        href={`tel:${portfolio.phone.replace(/\s/g, "")}`}
        aria-label="Phone"
        className="grid size-9 place-items-center rounded-md border border-white/10 text-muted-foreground transition hover:border-terminal/30 hover:text-terminal"
      >
        <Phone className="size-4" />
      </a>
    </div>
  );
}
