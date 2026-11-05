"use client";

import { useRef, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent, type AppId } from "@/lib/desktop-content";
import { AppIcon } from "@/components/desktop/AppIcons";
import { useWM } from "@/components/desktop/wm";

type DockEntry = { kind: "app"; id: AppId } | { kind: "divider" };

const ENTRIES: DockEntry[] = [
  { kind: "app", id: "finder" },
  { kind: "app", id: "figma" },
  { kind: "app", id: "claude" },
  { kind: "app", id: "notion" },
  { kind: "app", id: "photobooth" },
  { kind: "app", id: "contacts" },
  { kind: "divider" },
  { kind: "app", id: "preview" },
  { kind: "app", id: "trash" },
];

const BASE = 54;
const MAX_SCALE = 1.62;
const GAP = 6;
const DIVIDER_W = 11;
const SIGMA = 62;

const baseWidth = (e: DockEntry) => (e.kind === "divider" ? DIVIDER_W : BASE);

export function Dock() {
  const { locale } = useLocale();
  const dc = desktopContent[locale];
  const { wins, launches, open } = useWM();
  const ref = useRef<HTMLDivElement>(null);
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  // Unmagnified center of every entry, relative to the dock's center. The dock
  // stays centered while it grows, so these are stable and need no measuring.
  const total =
    ENTRIES.reduce((s, e) => s + baseWidth(e), 0) + GAP * (ENTRIES.length - 1);
  const centers: number[] = [];
  let acc = -total / 2;
  for (const e of ENTRIES) {
    centers.push(acc + baseWidth(e) / 2);
    acc += baseWidth(e) + GAP;
  }

  const onMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setMouseX(e.clientX - (rect.left + rect.width / 2));
  };

  const scaleFor = (i: number) => {
    if (mouseX === null || ENTRIES[i].kind === "divider") return 1;
    const d = mouseX - centers[i];
    return 1 + (MAX_SCALE - 1) * Math.exp(-(d * d) / (2 * SIGMA * SIGMA));
  };


  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-2.5 z-[1900] flex justify-center max-md:hidden">
      <div
        ref={ref}
        role="toolbar"
        aria-label="Dock"
        className="lg pointer-events-auto flex items-end rounded-[30px] px-2.5 pt-2 pb-1.5"
        style={{ gap: GAP, height: BASE + 6 + 14 }}
        onMouseMove={onMove}
        onMouseLeave={() => {
          setMouseX(null);
          setHovered(null);
        }}
      >
        {ENTRIES.map((entry, i) => {
          if (entry.kind === "divider") {
            return (
              <div
                key="divider"
                aria-hidden
                className="mb-2 h-[46px] self-end"
                style={{ width: DIVIDER_W }}
              >
                <div className="mx-auto h-full w-px bg-fg/25" />
              </div>
            );
          }
          const id = entry.id;
          const size = BASE * scaleFor(i);
          const isOpen = Boolean(wins[id]);
          const bounceKey = launches[id] ?? 0;
          // Figma holds the projects: it keeps hopping until it's open.
          const nudge = id === "figma" && !isOpen;
          return (
            <div
              key={id}
              className="relative flex flex-col items-center"
              onMouseEnter={() => setHovered(i)}
            >
              {hovered === i && (
                <span
                  role="tooltip"
                  className="pop pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-xl px-3 py-1.5 text-center whitespace-nowrap"
                >
                  <span className="block text-[13px] leading-tight font-semibold">
                    {dc.tips[id]}
                  </span>
                </span>
              )}
              <button
                type="button"
                aria-label={dc.apps[id]}
                onClick={() => open(id)}
                className="block cursor-pointer"
              >
                <span
                  key={bounceKey}
                  className={`dock-item block ${
                    nudge ? "dock-nudge" : bounceKey > 0 ? "dock-bounce" : ""
                  }`}
                  style={{ width: size, height: size }}
                >
                  <AppIcon id={id} />
                </span>
              </button>
              <span
                className={`mt-0.5 h-1 w-1 rounded-full bg-fg/70 ${
                  isOpen ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
