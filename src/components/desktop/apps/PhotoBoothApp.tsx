"use client";

import Image from "next/image";
import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import { PHOTO_SLOTS, photos } from "@/lib/photos";
import { Window } from "@/components/desktop/Window";
import type { WinState } from "@/components/desktop/wm";

const TINTS = [
  ["#3a2a5e", "#1c1236"],
  ["#1f4a63", "#0e2433"],
  ["#5e2a3a", "#2e1019"],
  ["#2a5e4a", "#10281f"],
  ["#5e4a2a", "#2e2210"],
];

export function PhotoBoothApp({ win }: { win: WinState }) {
  const { locale } = useLocale();
  const dc = desktopContent[locale].photobooth;
  const [index, setIndex] = useState(0);
  const [flash, setFlash] = useState(0);

  const slots = Array.from(
    { length: Math.max(photos.length, PHOTO_SLOTS) },
    (_, k) => photos[k] ?? null,
  );
  const go = (n: number) => setIndex((n + slots.length) % slots.length);
  const current = slots[index];

  const tile = (k: number) => {
    const [a, b] = TINTS[k % TINTS.length];
    return { background: `linear-gradient(160deg, ${a}, ${b})` };
  };

  return (
    <Window win={win} title="Photo Booth" width={820} height={660}>
      <div
        className="flex h-full flex-col bg-win text-fg outline-none"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") go(index - 1);
          if (e.key === "ArrowRight") go(index + 1);
        }}
      >
        <div className="relative min-h-0 flex-1 overflow-hidden bg-black">
          {current ? (
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="(min-width: 840px) 820px, 100vw"
              className="object-contain"
              priority={index === 0}
            />
          ) : (
            <div
              className="absolute inset-0 grid place-items-center text-[13px] text-white/60"
              style={tile(index)}
            >
              {dc.empty}
            </div>
          )}
          {flash > 0 && (
            <div key={flash} className="photo-flash pointer-events-none absolute inset-0 bg-white" />
          )}
          <button
            type="button"
            aria-label="Previous"
            onClick={() => go(index - 1)}
            className="absolute top-1/2 left-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M15 5l-7 7 7 7" /></svg>
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => go(index + 1)}
            className="absolute top-1/2 right-3 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="relative flex shrink-0 items-center justify-center gap-2 border-t border-line bg-win2 px-4 py-3">
          <div className="flex min-w-0 max-w-full items-center gap-2 overflow-x-auto py-0.5">
            {slots.map((p, k) => (
              <button
                key={k}
                type="button"
                aria-label={`Photo ${k + 1}`}
                aria-current={k === index}
                onClick={() => setIndex(k)}
                className={`relative h-[54px] w-[72px] shrink-0 overflow-hidden rounded-md transition ${
                  k === index
                    ? "ring-2 ring-white"
                    : "opacity-70 hover:opacity-100"
                }`}
                style={p ? undefined : tile(k)}
              >
                {p && (
                  <Image src={p.src} alt="" fill sizes="72px" className="object-cover" />
                )}
              </button>
            ))}
          </div>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => {
              setFlash((f) => f + 1);
              go(index + 1);
            }}
            className="absolute right-4 grid h-11 w-11 place-items-center rounded-full bg-white/15 ring-1 ring-white/25 transition hover:bg-white/25 max-sm:hidden"
          >
            <span className="h-7 w-7 rounded-full bg-[#ff453a] shadow-inner" />
          </button>
        </div>
      </div>
    </Window>
  );
}
