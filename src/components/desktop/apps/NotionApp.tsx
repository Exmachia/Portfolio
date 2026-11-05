"use client";

import { useRef } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import { Window } from "@/components/desktop/Window";
import type { WinState } from "@/components/desktop/wm";

const DOTS = ["#9b9a97", "#2383e2", "#0f7b6c"];

function DocIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v4h4M9 12h6M9 16h6" />
    </svg>
  );
}

export function NotionApp({ win }: { win: WinState }) {
  const { locale } = useLocale();
  const dc = desktopContent[locale].notion;
  const scroller = useRef<HTMLDivElement>(null);
  const anchors = useRef<(HTMLElement | null)[]>([]);

  const jump = (i: number) =>
    anchors.current[i]?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Window
      win={win}
      title="Notion"
      width={1000}
      height={660}
      toolbar={
        <div className="flex min-w-0 items-center gap-1.5 text-[13px]">
          <span className="truncate text-muted">{dc.workspace}</span>
          <span className="text-muted">/</span>
          <span className="flex min-w-0 items-center gap-1.5 truncate font-medium">
            <DocIcon className="h-4 w-4 shrink-0 text-muted" />
            {dc.title}
          </span>
        </div>
      }
    >
      <div className="flex h-full">
        <aside className="flex w-[226px] shrink-0 flex-col gap-0.5 border-r border-line bg-win2 p-2.5 max-md:hidden">
          <div className="flex items-center gap-2 rounded-md px-2 py-1.5 text-[13px] font-semibold">
            <span className="grid h-5 w-5 place-items-center rounded bg-fg text-[10px] font-bold text-win">
              L
            </span>
            <span className="truncate">{dc.workspace}</span>
          </div>
          <div className="mt-2" />
          {dc.sidebar.map((label, i) => (
            <button
              key={label}
              type="button"
              onClick={() => jump(i)}
              className="flex items-center gap-2 rounded-md px-2 py-1 text-left text-[13px] text-muted hover:bg-hover"
            >
              <DocIcon className="h-4 w-4 shrink-0" />
              <span className="truncate">{label}</span>
            </button>
          ))}
        </aside>

        <div ref={scroller} className="min-w-0 flex-1 overflow-y-auto">
          <article className="mx-auto max-w-[740px] px-8 pt-14 pb-20 sm:px-14">
            <section ref={(el) => { anchors.current[0] = el; }} className="scroll-mt-6">
              <DocIcon className="h-14 w-14 text-fg/80" />
              <h1 className="mt-4 font-display text-[40px] leading-tight font-bold tracking-tight">
                {dc.title}
              </h1>
              <div className="mt-6 flex gap-3 rounded-md bg-win2 p-4 text-[15px] leading-relaxed">
                <span aria-hidden className="text-[18px] leading-tight">
                  💡
                </span>
                <p>{dc.callout}</p>
              </div>
            </section>

            <section ref={(el) => { anchors.current[1] = el; }} className="mt-10 scroll-mt-6">
              <h2 className="text-[26px] font-semibold tracking-tight">
                {dc.researchHeading}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-fg/85">
                {dc.researchBody}
              </p>
              <ul className="mt-3 space-y-1.5 text-[15px]">
                {dc.researchBullets.map((b) => (
                  <li key={b} className="flex gap-2.5">
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-fg" />
                    {b}
                  </li>
                ))}
              </ul>
            </section>

            <section ref={(el) => { anchors.current[2] = el; }} className="mt-10 scroll-mt-6">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="text-[26px] font-semibold tracking-tight">
                  {dc.boardHeading}
                </h2>
                <span className="rounded bg-win2 px-1.5 py-0.5 text-[11px] text-muted">
                  {dc.boardLabel}
                </span>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-fg/85">
                {dc.boardBody}
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {dc.columns.map((col, ci) => (
                  <div key={col.name}>
                    <div className="mb-2 flex items-center gap-2 text-[13px] font-medium">
                      <span
                        className="h-2 w-2 rounded-full"
                        style={{ background: DOTS[ci] }}
                      />
                      {col.name}
                      <span className="text-muted">{col.cards.length}</span>
                    </div>
                    <div className="space-y-2">
                      {col.cards.map((card) => (
                        <div
                          key={card}
                          className="rounded-lg border border-line bg-win px-3 py-2.5 text-[13px] leading-snug shadow-[0_1px_2px_rgba(0,0,0,0.08)]"
                        >
                          {card}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </article>
        </div>
      </div>
    </Window>
  );
}
