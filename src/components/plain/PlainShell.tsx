"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import { useTheme } from "@/lib/theme";

const SCROLL_ID = "plain-scroll";

const SECTIONS = [
  { key: "projects", id: "proyectos" },
  { key: "experience", id: "experiencia" },
  { key: "processNav", id: "proceso" },
  { key: "aiNav", id: "ia" },
  { key: "about", id: "sobre-mi" },
  { key: "contact", id: "contacto" },
] as const;

const round =
  "grid h-9 min-w-9 place-items-center rounded-full px-2.5 text-[12.5px] font-semibold transition-colors hover:bg-hover";

// The regular-page version of the site: a floating glass nav that follows the
// reader, and a framed column with thin rules around the content. It is its own
// scroll container because the desktop locks html/body scrolling.
export function PlainShell({ children }: { children: ReactNode }) {
  const { locale, setLocale, t } = useLocale();
  const dc = desktopContent[locale];
  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState("");

  // Landing on /pagina#section from another page: the router scrolls the
  // document, but here the page scrolls inside this container.
  useEffect(() => {
    // The router writes the hash right after this component mounts.
    const timer = window.setTimeout(() => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
    }, 80);
    return () => window.clearTimeout(timer);
  }, []);

  // Highlights the nav link of the section currently under the reader's eye.
  useEffect(() => {
    const root = document.getElementById(SCROLL_ID);
    if (!root) return;
    const seen = new Map<string, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) seen.set(e.target.id, e.isIntersecting);
        const current = SECTIONS.find((s) => seen.get(s.id));
        setActive(current?.id ?? "");
      },
      { root, rootMargin: "-35% 0px -60% 0px" },
    );
    for (const s of SECTIONS) {
      const el = document.getElementById(s.id);
      if (el) io.observe(el);
    }
    return () => io.disconnect();
  }, []);

  return (
    <div
      id={SCROLL_ID}
      className="fixed inset-0 overflow-x-hidden overflow-y-auto overscroll-x-none bg-win text-fg [scroll-behavior:smooth]"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, var(--line) 0 1px, transparent 1px 9px)",
      }}
    >
      <header className="pointer-events-none fixed inset-x-0 top-3 z-40 flex justify-center px-3 sm:top-4">
        <div className="pop pointer-events-auto flex h-12 w-full max-w-[860px] items-center gap-1 rounded-full pr-1.5 pl-5">
          <Link
            href="/pagina"
            className="mr-1 font-display text-[15px] font-semibold tracking-tight whitespace-nowrap"
          >
            Luis Chacón
          </Link>
          <nav
            aria-label={dc.plain.menu}
            className="ml-2 flex items-center gap-0.5 text-[13.5px] max-lg:hidden"
          >
            {SECTIONS.map((s) => (
              <Link
                key={s.key}
                href={`/pagina#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={`rounded-full px-3 py-1.5 transition-colors hover:text-fg ${
                  active === s.id ? "bg-sel font-medium text-fg" : "text-muted hover:bg-hover"
                }`}
              >
                {dc.plain[s.key]}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-0.5">
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "es" : "en")}
              aria-label={dc.plain.language}
              className={round}
            >
              {locale === "en" ? "EN" : "ES"}
            </button>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={dc.plain.theme}
              className={round}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                {theme === "dark" ? (
                  <>
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </>
                ) : (
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
                )}
              </svg>
            </button>
            <Link
              href="/"
              aria-label={dc.plain.viewDesktop}
              className="ml-1 flex h-9 items-center gap-2 rounded-full bg-accent px-3.5 text-[12.5px] font-semibold whitespace-nowrap text-accent-fg hover:opacity-90"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="4" width="18" height="12" rx="2" />
                <path d="M8 20h8M12 16v4" />
              </svg>
              <span className="max-sm:hidden">{dc.plain.viewDesktop}</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto min-h-full max-w-[1120px] border-x border-line bg-win pt-24">
        {children}
        <footer className="relative border-t border-line px-6 py-8 text-[13px] text-muted sm:px-10">
          © {new Date().getFullYear()} {t.site.name}
        </footer>
      </div>
    </div>
  );
}
