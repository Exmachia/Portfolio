"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "@/lib/locale-context";
import {
  desktopContent,
  type ClaudeBlock,
  type ClaudeChat,
} from "@/lib/desktop-content";
import { processPhaseStarts, type ContentBundle } from "@/lib/content";
import { Window } from "@/components/desktop/Window";
import type { WinState } from "@/components/desktop/wm";

// The answer is flattened into a list of text nodes so it can be "typed" out
// one character budget at a time, across blocks.
type Node =
  | { k: "p"; text: string }
  | { k: "li"; title: string; text: string }
  | { k: "h"; text: string }
  | { k: "step"; n: number; title: string; text: string };

const PHASE_STARTS: Record<number, number> = Object.fromEntries(
  processPhaseStarts.map((step, phase) => [step, phase]),
);

function flatten(blocks: ClaudeBlock[], how: ContentBundle["comoTrabajo"]): Node[] {
  const out: Node[] = [];
  for (const b of blocks) {
    if (b.type === "p") out.push({ k: "p", text: b.text });
    else if (b.type === "list")
      for (const it of b.items) out.push({ k: "li", ...it });
    else {
      out.push({ k: "p", text: `${how.kicker}. ${how.intro}` });
      how.steps.forEach((s, i) => {
        const phase = PHASE_STARTS[i];
        if (phase !== undefined) out.push({ k: "h", text: how.phases[phase] });
        out.push({ k: "step", n: i + 1, title: s.title, text: s.description });
      });
      out.push({ k: "p", text: how.closing });
    }
  }
  return out;
}

const nodeLength = (n: Node) =>
  n.k === "li" || n.k === "step" ? n.title.length + n.text.length : n.text.length;

function ClaudeMark({ className = "h-5 w-5" }: { className?: string }) {
  const rays = Array.from({ length: 12 }, (_, i) => {
    const a = (i * 30 * Math.PI) / 180;
    const r2 = i % 2 === 0 ? 11 : 8.5;
    const round = (n: number) => Math.round(n * 100) / 100;
    return [
      round(12 + Math.cos(a) * 3),
      round(12 + Math.sin(a) * 3),
      round(12 + Math.cos(a) * r2),
      round(12 + Math.sin(a) * r2),
    ];
  });
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        {rays.map((r, i) => (
          <line key={i} x1={r[0]} y1={r[1]} x2={r[2]} y2={r[3]} />
        ))}
      </g>
    </svg>
  );
}

function Answer({
  nodes,
  budget,
  streaming,
}: {
  nodes: Node[];
  budget: number;
  streaming: boolean;
}) {
  let left = budget;
  const rendered: React.ReactNode[] = [];
  let caretPlaced = false;
  nodes.forEach((n, i) => {
    if (left <= 0) return;
    const len = nodeLength(n);
    const take = Math.min(len, left);
    left -= take;
    const last = take < len || (left <= 0 && streaming);
    const caret = last && !caretPlaced ? "caret" : "";
    if (caret) caretPlaced = true;
    if (n.k === "p") {
      rendered.push(
        <p key={i} className={caret}>
          {n.text.slice(0, take)}
        </p>,
      );
    } else if (n.k === "h") {
      rendered.push(
        <h3 key={i} className={`mt-5 font-sans text-[11px] font-semibold tracking-widest text-accent uppercase ${caret}`}>
          {n.text.slice(0, take)}
        </h3>,
      );
    } else {
      const titleTake = Math.min(n.title.length, take);
      const textTake = Math.max(0, take - n.title.length);
      rendered.push(
        <div key={i} className="flex gap-3">
          <span className="mt-[0.7em] h-1.5 w-1.5 shrink-0 rounded-full bg-accent/70" />
          <div className={`min-w-0 ${caret}`}>
            <strong className="block font-semibold">
              {n.k === "step" && (
                <span className="mr-2 font-sans text-[12px] font-normal text-muted">
                  {String(n.n).padStart(2, "0")}
                </span>
              )}
              {n.title.slice(0, titleTake)}
            </strong>
            {textTake > 0 && <span className="block">{n.text.slice(0, textTake)}</span>}
          </div>
        </div>,
      );
    }
  });
  return <div className="space-y-3">{rendered}</div>;
}

export function ClaudeApp({ win }: { win: WinState }) {
  const { t, locale } = useLocale();
  const dc = desktopContent[locale].claude;
  const initial = win.props.chat;
  const [convo, setConvo] = useState<string[]>(initial ? [initial] : []);
  // Characters revealed for the latest answer; Infinity = fully shown.
  const [budget, setBudget] = useState<number>(Infinity);
  const scroller = useRef<HTMLDivElement>(null);

  const chats = dc.chats;
  const byId = (id: string): ClaudeChat | undefined =>
    chats.find((c) => c.id === id);
  const lastId = convo[convo.length - 1];
  const lastNodes = useMemo(() => {
    const c = lastId ? byId(lastId) : undefined;
    return c ? flatten(c.answer, t.comoTrabajo) : [];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lastId, locale, t.comoTrabajo]);
  const total = lastNodes.reduce((s, n) => s + nodeLength(n), 0);
  const streaming = budget < total;

  useEffect(() => {
    if (!streaming) return;
    const id = window.setInterval(() => setBudget((b) => b + 14), 16);
    return () => window.clearInterval(id);
  }, [streaming]);

  useEffect(() => {
    const el = scroller.current;
    if (el && streaming) el.scrollTop = el.scrollHeight;
  }, [budget, streaming]);

  const ask = (id: string) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setConvo((c) => [...c, id]);
    setBudget(reduced ? Infinity : 0);
    window.setTimeout(() => {
      const el = scroller.current;
      if (el) el.scrollTop = el.scrollHeight;
    }, 0);
  };
  const fresh = (id: string) => {
    setConvo([]);
    window.setTimeout(() => ask(id), 0);
  };

  const remaining = chats.filter((c) => !convo.includes(c.id));

  return (
    <Window
      win={win}
      title="Claude"
      mobile={{ title: "Claude", largeTitle: false }}
      width={1000}
      height={680}
      toolbar={
        <div className="flex min-w-0 items-center gap-2 text-[13px]">
          <ClaudeMark className="h-4 w-4 shrink-0 text-accent" />
          <span className="truncate font-semibold">
            {lastId ? byId(lastId)?.title : "Claude"}
          </span>
        </div>
      }
    >
      <div className="flex h-full">
        <aside className="flex w-[232px] shrink-0 flex-col gap-1 border-r border-line bg-win2 p-3 max-md:hidden">
          <button
            type="button"
            onClick={() => {
              setConvo([]);
              setBudget(Infinity);
            }}
            className="mb-2 flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[13px] font-medium text-accent hover:bg-hover"
          >
            <span className="grid h-5 w-5 place-items-center rounded-full bg-accent text-accent-fg">
              +
            </span>
            {dc.newChat}
          </button>
          <p className="px-2.5 pt-1 pb-1 text-[11px] font-semibold text-muted">
            {dc.recents}
          </p>
          {chats.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => fresh(c.id)}
              className={`truncate rounded-lg px-2.5 py-1.5 text-left text-[13px] ${
                lastId === c.id && convo.length === 1 ? "bg-sel font-medium" : "hover:bg-hover"
              }`}
            >
              {c.title}
            </button>
          ))}
        </aside>

        <div className="flex min-w-0 flex-1 flex-col">
          <div ref={scroller} className="min-h-0 flex-1 overflow-y-auto px-6 py-6 sm:px-10">
            <div className="mx-auto flex max-w-[680px] flex-col gap-7">
              {convo.length === 0 ? (
                <div className="flex flex-col items-center gap-5 pt-12 text-center">
                  <ClaudeMark className="h-11 w-11 text-accent" />
                  <h1 className="font-serif text-[30px] leading-tight tracking-tight">
                    {dc.suggested}
                  </h1>
                  <div className="flex w-full flex-col gap-2">
                    {chats.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => ask(c.id)}
                        className="rounded-xl border border-line bg-win px-4 py-3 text-left text-[14px] shadow-sm transition-colors hover:bg-sel"
                      >
                        {c.prompt}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                convo.map((id, idx) => {
                  const c = byId(id);
                  if (!c) return null;
                  const isLast = idx === convo.length - 1;
                  const nodes = isLast ? lastNodes : flatten(c.answer, t.comoTrabajo);
                  return (
                    <div key={id} className="flex flex-col gap-5">
                      <div className="ml-auto max-w-[85%] rounded-2xl bg-win2 px-4 py-2.5 text-[14px] leading-relaxed">
                        {c.prompt}
                      </div>
                      <div className="flex gap-3">
                        <ClaudeMark className="mt-1 h-5 w-5 shrink-0 text-accent" />
                        <div
                          className="min-w-0 font-serif text-[16px] leading-[1.65]"
                          onClick={() => isLast && streaming && setBudget(Infinity)}
                        >
                          <Answer
                            nodes={nodes}
                            budget={isLast ? budget : Infinity}
                            streaming={isLast && streaming}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })
              )}

              {convo.length > 0 && !streaming && remaining.length > 0 && (
                <div className="flex flex-wrap gap-2 pl-8">
                  {remaining.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => ask(c.id)}
                      className="rounded-full border border-line px-3.5 py-1.5 text-[13px] hover:bg-sel"
                    >
                      {c.prompt}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="shrink-0 px-6 pb-4 sm:px-10">
            <div className="mx-auto max-w-[680px]">
              <div className="flex items-center gap-3 rounded-2xl border border-line bg-win px-4 py-3 shadow-sm">
                <span className="flex-1 text-[14px] text-muted">{dc.placeholder}</span>
                <span className="grid h-7 w-7 place-items-center rounded-lg bg-accent/40 text-accent-fg">
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                </span>
              </div>
              <p className="mt-2 text-center text-[11px] text-muted">{dc.note}</p>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
