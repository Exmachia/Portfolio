"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent, type AppId } from "@/lib/desktop-content";
import { useTheme } from "@/lib/theme";
import { useWM } from "@/components/desktop/wm";

// Apps listed in the menu bar on desktop, in dock order.
const MENU_APPS: AppId[] = [
  "finder",
  "figma",
  "claude",
  "notion",
  "photobooth",
  "contacts",
  "preview",
  "trash",
];

function Check({ on }: { on: boolean }) {
  return (
    <span className="inline-block w-4 text-[12px]">{on ? "✓" : ""}</span>
  );
}

function Clock({ locale }: { locale: "en" | "es" }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setNow(new Date());
    const id = window.setInterval(() => setNow(new Date()), 20_000);
    return () => window.clearInterval(id);
  }, []);

  if (!now) return <span className="w-24" />;
  const tag = locale === "es" ? "es-MX" : "en-US";
  const date = now.toLocaleDateString(tag, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
  const time = now.toLocaleTimeString(tag, {
    hour: "numeric",
    minute: "2-digit",
  });
  return (
    <span className="hidden whitespace-nowrap tabular-nums sm:inline">
      {date}&nbsp;&nbsp;{time}
    </span>
  );
}

export function MenuBar() {
  const { locale, setLocale, t } = useLocale();
  const dc = desktopContent[locale];
  const { theme, setTheme } = useTheme();
  const { wins, focused, open: openApp } = useWM();
  // On phones an open app is full screen, with nothing above it but its own nav bar.
  const appOpen = Object.values(wins).some((w) => w && !w.minimized);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const item =
    "flex w-full items-center rounded-md px-2 py-1 text-left text-[13px] hover:bg-accent hover:text-accent-fg";

  return (
    <>
    <div className="menubar fixed inset-x-0 top-0 z-[2000] flex h-7 items-center justify-between px-3 text-[13px] max-md:hidden">
      <div className="flex items-center gap-1" ref={menuRef}>
        <button
          type="button"
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-6 items-center gap-2 rounded px-2 font-bold tracking-tight hover:bg-hover"
        >
          <span className="grid h-[15px] w-[15px] place-items-center rounded-[4px] bg-fg text-[8px] font-extrabold text-win">
            LC
          </span>
        </button>
        <span className="px-2 font-semibold lg:hidden">
          {focused ? dc.apps[focused] : "Luis Chacón"}
        </span>
        <span className="px-2 font-semibold max-lg:hidden">Luis Chacón</span>
        <nav aria-label="Apps" className="flex items-center max-lg:hidden">
          {MENU_APPS.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => openApp(id)}
              aria-current={focused === id ? "true" : undefined}
              className={`h-6 rounded px-2 whitespace-nowrap hover:bg-hover ${
                focused === id ? "font-semibold" : ""
              }`}
            >
              {dc.apps[id]}
            </button>
          ))}
        </nav>

        {open && (
          <div
            role="menu"
            className="pop absolute top-8 left-2 w-56 rounded-2xl p-1.5 max-md:top-12"
          >
            <p className="px-2 pt-1 pb-0.5 text-[11px] font-semibold text-muted">
              {dc.menu.language}
            </p>
            {(["en", "es"] as const).map((l) => (
              <button
                key={l}
                role="menuitemradio"
                aria-checked={locale === l}
                className={item}
                onClick={() => setLocale(l)}
              >
                <Check on={locale === l} />
                {l === "en" ? "English" : "Español"}
              </button>
            ))}
            <div className="my-1 h-px bg-line" />
            <p className="px-2 pt-1 pb-0.5 text-[11px] font-semibold text-muted">
              {dc.menu.appearance}
            </p>
            {(["light", "dark"] as const).map((m) => (
              <button
                key={m}
                role="menuitemradio"
                aria-checked={theme === m}
                className={item}
                onClick={() => setTheme(m)}
              >
                <Check on={theme === m} />
                {dc.menu[m]}
              </button>
            ))}
            <div className="my-1 h-px bg-line" />
            <a
              role="menuitem"
              href={t.site.cvHref}
              download
              className={item}
              onClick={() => setOpen(false)}
            >
              <Check on={false} />
              {dc.menu.downloadCV}
            </a>
          </div>
        )}
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setLocale(locale === "en" ? "es" : "en")}
          aria-label={dc.menu.language}
          className="rounded px-1.5 py-0.5 text-[12px] font-semibold tracking-wide hover:bg-hover"
        >
          {locale === "en" ? "EN" : "ES"}
        </button>
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={dc.menu.appearance}
          className="grid h-6 w-6 place-items-center rounded hover:bg-hover"
        >
          {theme === "dark" ? (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
            </svg>
          )}
        </button>
        <Clock locale={locale} />
      </div>
    </div>

    {/* Phones: no bar, just glass bubbles floating over the home screen (the
        same ones the apps use for back and actions). Hidden under an open app. */}
    <div
      className={`fixed inset-x-0 top-0 z-[2000] flex items-center justify-between px-4 pt-[max(8px,env(safe-area-inset-top))] pb-2 md:hidden ${
        appOpen ? "hidden" : ""
      }`}
    >
      <span className="ios-bubble text-[15px] font-semibold">Luis Chacón</span>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setLocale(locale === "en" ? "es" : "en")}
          aria-label={dc.menu.language}
          className="ios-bubble text-[14px] font-semibold tracking-wide"
        >
          {locale === "en" ? "EN" : "ES"}
        </button>
        <button
          type="button"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={dc.menu.appearance}
          className="ios-bubble"
        >
          {theme === "dark" ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
            </svg>
          )}
        </button>
      </div>
    </div>
    </>
  );
}
