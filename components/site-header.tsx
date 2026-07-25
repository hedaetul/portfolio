"use client";

import { Github, Mail, Menu, Moon, Phone, Sun } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks, portfolio } from "@/lib/portfolio";
import { cn } from "@/lib/utils";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      className={className}
      onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
    >
      {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </Button>
  );
}

function NavLink({
  href,
  label,
  pathname,
  onNavigate,
  className,
}: {
  href: string;
  label: string;
  pathname: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const active = isActivePath(pathname, href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={cn(
        "nav-link font-mono transition",
        active ? "text-terminal" : "text-muted-foreground hover:text-terminal",
        className,
      )}
    >
      {label}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="section-shell flex h-14 items-center justify-between gap-3">
        <Link href="/" className="flex min-w-0 items-center gap-2 font-mono text-sm text-foreground">
          <span className="text-terminal">●</span>
          <span className="truncate">
            {portfolio.firstName.toLowerCase()}<span className="text-muted-foreground">.dev</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} pathname={pathname} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden" aria-label="Open navigation menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col">
              <SheetHeader>
                <SheetTitle>
                  <span className="text-terminal">●</span> {portfolio.firstName.toLowerCase()}.dev
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <NavLink
                      href={link.href}
                      label={link.label}
                      pathname={pathname}
                      className="rounded-md px-3 py-3 text-base"
                    />
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-auto space-y-4 border-t border-white/10 pt-6">
                <ThemeToggle className="sm:hidden" />
                <SocialLinks />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
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
