"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import { AppIcon } from "@/components/desktop/AppIcons";
import { useWM } from "@/components/desktop/wm";

// How long the desk has to stay empty before the alert shows up.
const DELAY_MS = 15_000;

// First visit only: the welcome alert goes up this long after loading.
const COACH_DELAY_MS = 2_500;
const COACH_KEY = "lc-coach-seen";

// A macOS-style alert that offers the projects whenever every window is
// closed or minimized. "Not now" hides it until the desk empties again.
export function SystemAlert() {
  const { locale } = useLocale();
  const coachDc = desktopContent[locale].coach;
  const dc = desktopContent[locale].alert;
  const { wins, open } = useWM();
  const [shown, setShown] = useState(false);
  const empty = Object.values(wins).every((w) => !w || w.minimized);
  const [coach, setCoach] = useState(false);
  const figmaOpen = Boolean(wins.figma && !wins.figma.minimized);

  // First-visit welcome: says what this screen is and offers the regular page.
  useEffect(() => {
    const id = window.setTimeout(() => {
      try {
        if (!window.localStorage.getItem(COACH_KEY)) setCoach(true);
      } catch {
        setCoach(true);
      }
    }, COACH_DELAY_MS);
    return () => window.clearTimeout(id);
  }, []);

  const endCoach = () => {
    setCoach(false);
    try {
      window.localStorage.setItem(COACH_KEY, "1");
    } catch {
      // private mode: it just shows again next visit
    }
  };

  // Opening the projects answers the welcome, so it retires itself.
  useEffect(() => {
    if (!coach || !figmaOpen) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCoach(false);
    try {
      window.localStorage.setItem(COACH_KEY, "1");
    } catch {
      // ignore
    }
  }, [coach, figmaOpen]);

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

  // Phones: a bar pinned to the bottom of the home screen (the menu), so the
  // projects are one tap away. It only shows there, never over an app.
  const showBar = empty;

  return (
    <>
      {showBar && (
        <div className="pointer-events-none fixed inset-x-3 bottom-[max(12px,env(safe-area-inset-bottom))] z-[1950] md:hidden">
          <button
            type="button"
            onClick={() => open("figma")}
            className="pop alert-in pointer-events-auto flex w-full items-center gap-3 rounded-[24px] p-3 pr-3.5 text-left"
          >
            <span className="block h-11 w-11 shrink-0 drop-shadow-md">
              <AppIcon id="figma" />
            </span>
            <span className="min-w-0 flex-1 text-[14px] leading-snug font-semibold">
              {dc.title}
            </span>
            <span className="shrink-0 rounded-full bg-accent px-3.5 py-1.5 text-[13px] font-semibold text-accent-fg">
              {dc.open}
            </span>
          </button>
        </div>
      )}
      {coach && (
        <div className="pointer-events-none fixed inset-x-0 top-[18vh] z-[1950] flex justify-center px-6 max-md:hidden">
          <div
            role="alertdialog"
            aria-labelledby="coach-title"
            aria-describedby="coach-body"
            className="pop alert-in pointer-events-auto w-[272px] rounded-[26px] px-5 pt-5 pb-4 text-center"
          >
            <span className="mx-auto block h-14 w-14 drop-shadow-md">
              <AppIcon id="figma" />
            </span>
            <p id="coach-title" className="mt-3 text-[14px] leading-snug font-semibold">
              {coachDc.title}
            </p>
            <p id="coach-body" className="mt-1.5 text-[12px] leading-snug text-muted">
              {coachDc.body}
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <button
                type="button"
                autoFocus
                onClick={endCoach}
                className="rounded-full bg-accent px-4 py-1.5 text-[13px] font-semibold text-accent-fg hover:opacity-90"
              >
                {coachDc.dismiss}
              </button>
              <Link
                href="/pagina"
                onClick={endCoach}
                className="rounded-full bg-hover px-4 py-1.5 text-[13px] font-medium hover:bg-sel"
              >
                {coachDc.plain}
              </Link>
            </div>
          </div>
        </div>
      )}
      {shown && !coach && (
        <div className="pointer-events-none fixed inset-x-0 top-[18vh] z-[1950] flex justify-center px-6 max-md:hidden">
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
      )}
    </>
  );
}
