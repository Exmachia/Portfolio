"use client";

import Link from "next/link";
import { useEffect, type ReactNode } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import { useTheme } from "@/lib/theme";

const bubble =
  "grid h-10 min-w-10 place-items-center rounded-full bg-hover px-3 text-[13px] font-semibold hover:bg-sel";

// The regular-page version of the site: a plain header (name, sections,
// language, theme and a way back to the desktop) around the content. It is its
// own scroll container because the desktop locks html/body scrolling.
export function PlainShell({ children }: { children: ReactNode }) {
  const { locale, setLocale, t } = useLocale();
  const dc = desktopContent[locale];
  const { theme, setTheme } = useTheme();

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

  return (
    <div className="fixed inset-0 overflow-y-auto bg-win text-fg [scroll-behavior:smooth]">
      <header className="sticky top-0 z-40 border-b border-line bg-win/85 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1040px] items-center gap-4 px-5">
          <Link href="/pagina" className="font-display text-[17px] font-semibold tracking-tight">
            Luis Chacón
          </Link>
          <nav aria-label={dc.plain.menu} className="ml-4 flex items-center gap-1 text-[14px] max-md:hidden">
            {[
              ["projects", "#proyectos"],
              ["experience", "#experiencia"],
              ["about", "#sobre-mi"],
              ["contact", "#contacto"],
            ].map(([k, h]) => (
              <Link
                key={k}
                href={`/pagina${h}`}
                className="rounded-full px-3 py-1.5 text-muted hover:bg-hover hover:text-fg"
              >
                {dc.plain[k as "projects" | "experience" | "about" | "contact"]}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "es" : "en")}
              aria-label={dc.plain.language}
              className={bubble}
            >
              {locale === "en" ? "EN" : "ES"}
            </button>
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label={dc.plain.theme}
              className={bubble}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
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
              className="flex h-10 items-center gap-2 rounded-full bg-accent px-4 text-[13px] font-semibold text-accent-fg hover:opacity-90"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="4" width="18" height="12" rx="2" />
                <path d="M8 20h8M12 16v4" />
              </svg>
              <span className="max-sm:hidden">{dc.plain.viewDesktop}</span>
            </Link>
          </div>
        </div>
      </header>

      {children}

      <footer className="border-t border-line py-8 text-center text-[13px] text-muted">
        © {new Date().getFullYear()} {t.site.name}
      </footer>
    </div>
  );
}
