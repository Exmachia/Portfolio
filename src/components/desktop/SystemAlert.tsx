"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import { AppIcon } from "@/components/desktop/AppIcons";
import { useWM } from "@/components/desktop/wm";

// How long the desk has to stay empty before the alert shows up.
const DELAY_MS = 30_000;

// A macOS-style alert that offers the projects whenever every window is
// closed or minimized. "Not now" hides it until the desk empties again.
export function SystemAlert() {
  const { locale } = useLocale();
  const dc = desktopContent[locale].alert;
  const { wins, open } = useWM();
  const [shown, setShown] = useState(false);
  const empty = Object.values(wins).every((w) => !w || w.minimized);

  useEffect(() => {
    if (!empty) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setShown(false);
      return;
    }
    const id = window.setTimeout(() => setShown(true), DELAY_MS);
    return () => window.clearTimeout(id);
  }, [empty]);

  useEffect(() => {
    if (!shown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShown(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [shown]);

  if (!shown) return null;

  return (
    <div className="pointer-events-none fixed inset-x-0 top-[18vh] z-[1950] flex justify-center px-6">
      <div
        role="alertdialog"
        aria-labelledby="system-alert-title"
        aria-describedby="system-alert-body"
        className="pop alert-in pointer-events-auto w-[272px] rounded-[26px] px-5 pt-5 pb-4 text-center"
      >
        <span className="mx-auto block h-14 w-14 drop-shadow-md">
          <AppIcon id="figma" />
        </span>
        <p
          id="system-alert-title"
          className="mt-3 text-[14px] leading-snug font-semibold"
        >
          {dc.title}
        </p>
        <p
          id="system-alert-body"
          className="mt-1.5 text-[12px] leading-snug text-muted"
        >
          {dc.body}
        </p>
        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            autoFocus
            onClick={() => open("figma")}
            className="rounded-full bg-accent px-4 py-1.5 text-[13px] font-semibold text-accent-fg hover:opacity-90"
          >
            {dc.open}
          </button>
          <button
            type="button"
            onClick={() => setShown(false)}
            className="rounded-full bg-hover px-4 py-1.5 text-[13px] font-medium hover:bg-sel"
          >
            {dc.later}
          </button>
        </div>
      </div>
    </div>
  );
}
