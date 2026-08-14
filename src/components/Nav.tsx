"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LocaleToggle } from "@/components/LocaleToggle";
import { IconHamburger } from "@/components/icons";
import { useLocale } from "@/lib/locale-context";

export function Nav() {
  const pathname = usePathname();
  const { t } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/proyectos", label: t.nav.projects },
    { href: "/como-trabajo", label: t.nav.howIWork },
    { href: "/experiencia", label: t.nav.experience },
    { href: "/sobre-mi", label: t.nav.about },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4">
      <Container>
        <div className="relative">
          <div
            className={`glass-strong w-full overflow-hidden rounded-[28px] transition-shadow duration-300 ${
              scrolled ? "shadow-lg" : "shadow-sm"
            }`}
          >
            <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-6">
              <Link
                href="/"
                className="font-display text-base font-semibold tracking-tight"
                onClick={() => setOpen(false)}
              >
                Eduardo <span className="text-accent">Chacón</span>
              </Link>

              <nav className="hidden gap-6 font-mono text-xs uppercase tracking-widest sm:flex">
                {links.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`self-center transition-colors hover:text-accent ${
                        active ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="hidden items-center gap-3 sm:flex">
                <LocaleToggle />
                <ThemeToggle />
              </div>

              <div className="flex items-center gap-3 sm:hidden">
                <ThemeToggle />
                <button
                  type="button"
                  className="flex h-8 w-8 cursor-pointer items-center justify-center text-foreground"
                  aria-expanded={open}
                  aria-label={open ? t.nav.close : t.nav.openMenu}
                  onClick={() => setOpen((v) => !v)}
                >
                  <IconHamburger open={open} />
                </button>
              </div>
            </div>
          </div>

          <nav
            aria-hidden={!open}
            className={`glass-opaque absolute inset-x-0 top-full mt-3 flex origin-top flex-col gap-1 rounded-[28px] px-6 py-4 font-mono text-sm uppercase tracking-widest transition-all duration-300 ease-out will-change-transform sm:hidden ${
              open
                ? "translate-y-0 scale-100 opacity-100"
                : "pointer-events-none -translate-y-2 scale-95 opacity-0"
            }`}
          >
            {links.map((link) => {
              const active =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className={`py-2 transition-colors hover:text-accent ${
                    active ? "text-accent" : "text-foreground/80"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-2 border-t border-border pt-3">
              <LocaleToggle />
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
