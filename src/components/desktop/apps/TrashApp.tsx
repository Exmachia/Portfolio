"use client";

import { useState } from "react";
import { useLocale } from "@/lib/locale-context";
import { desktopContent } from "@/lib/desktop-content";
import { Window } from "@/components/desktop/Window";
import type { WinState } from "@/components/desktop/wm";

type Row = {
  name: string;
  kind: string;
  note?: string;
  secret?: boolean;
};

function FileGlyph({ secret }: { secret?: boolean }) {
  return (
    <svg viewBox="0 0 24 28" className="h-7 w-6 shrink-0" aria-hidden>
      <path
        d="M4 1h11l6 6v18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2z"
        fill={secret ? "#fff7d6" : "#fff"}
        stroke="#b9bfc9"
      />
      <path d="M15 1v5a1 1 0 0 0 1 1h5" fill="#e8ebf0" stroke="#b9bfc9" />
      <path
        d={secret ? "M7 13h10M7 17h10M7 21h6" : "M7 14h10M7 18h7"}
        stroke="#c4cad4"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function TrashApp({ win }: { win: WinState }) {
  const { t, locale } = useLocale();
  const dc = desktopContent[locale].trash;
  const [emptied, setEmptied] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [lockedShown, setLockedShown] = useState(false);

  const secret: Row = { name: dc.secretName, kind: dc.hidden, secret: true };
  const rows: Row[] = emptied ? [secret] : [...dc.items, secret];
  const current = rows.find((r) => r.name === selected) ?? null;

  const emptyTrash = () => {
    setEmptied(true);
    setSelected(null);
    setLockedShown(true);
  };

  return (
    <Window
      win={win}
      title={desktopContent[locale].apps.trash}
      width={780}
      height={470}
      glass
      mobile={{
        actions: (
          <button
            type="button"
            disabled={emptied}
            onClick={emptyTrash}
            className="ios-action"
          >
            {dc.emptyButton}
          </button>
        ),
      }}
      toolbar={
        <div className="flex w-full items-center justify-between gap-3">
          <span className="text-[13px] font-semibold">
            {desktopContent[locale].apps.trash}
          </span>
          <button
            type="button"
            disabled={emptied}
            onClick={emptyTrash}
            className="rounded-md bg-hover px-2.5 py-1 text-[12px] font-medium hover:bg-sel disabled:opacity-40"
          >
            {dc.emptyButton}
          </button>
        </div>
      }
    >
      <div className="h-full p-2 pt-0 max-md:p-0">
      <div className="flex h-full overflow-hidden rounded-[20px] bg-win shadow-[0_0_0_0.5px_var(--line)] max-md:rounded-none max-md:shadow-none max-md:flex-col">
        <div className="min-w-0 flex-1 overflow-y-auto">
          <div className="sticky top-0 grid grid-cols-[1fr_140px] border-b border-line bg-win px-4 py-1.5 text-[11px] font-semibold text-muted max-sm:grid-cols-1">
            <span>{desktopContent[locale].finder.name}</span>
            <span className="max-sm:hidden">{dc.kindLabel}</span>
          </div>
          {lockedShown && (
            <p className="mx-4 mt-3 rounded-lg bg-sel px-3 py-2 text-[12px]">
              {dc.locked}
            </p>
          )}
          <ul>
            {rows.map((r) => (
              <li key={r.name}>
                <button
                  type="button"
                  onClick={() => setSelected(r.name)}
                  className={`grid w-full grid-cols-[1fr_140px] items-center gap-2 px-4 py-1.5 text-left text-[13px] max-sm:grid-cols-1 ${
                    selected === r.name
                      ? "bg-accent text-accent-fg"
                      : "hover:bg-hover"
                  }`}
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <FileGlyph secret={r.secret} />
                    <span className="truncate">{r.name}</span>
                  </span>
                  <span
                    className={`truncate max-sm:hidden ${
                      selected === r.name ? "opacity-85" : "text-muted"
                    }`}
                  >
                    {r.kind}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <aside className="w-[290px] shrink-0 border-l border-line bg-win2 p-5 max-md:w-full max-md:border-t max-md:border-l-0">
          {current ? (
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="scale-[1.8] py-3">
                <FileGlyph secret={current.secret} />
              </div>
              <p className="text-[13px] font-semibold break-all">{current.name}</p>
              <p className="text-[12px] text-muted">{current.kind}</p>
              {current.secret ? (
                <>
                  <p className="text-[13px] leading-relaxed">{dc.secretIntro}</p>
                  <a
                    href={`mailto:${t.site.email}`}
                    className="mt-1 rounded-full bg-accent px-4 py-1.5 text-[12px] font-semibold text-accent-fg"
                  >
                    {dc.secretCta}
                  </a>
                </>
              ) : (
                <p className="text-[13px] leading-relaxed text-muted">
                  {current.note}
                </p>
              )}
            </div>
          ) : (
            <p className="mt-16 text-center text-[12px] text-muted">
              {emptied ? dc.empty : desktopContent[locale].finder.pick}
            </p>
          )}
        </aside>
      </div>
      </div>
    </Window>
  );
}
