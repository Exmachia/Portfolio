import type { ReactNode } from "react";

// Small "+" registration mark, drawn where a thin rule meets the page frame.
export function Cross({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 block h-[17px] w-[17px] ${className}`}
    >
      <span className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-muted/70" />
      <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-muted/70" />
    </span>
  );
}

// A framed section: a thin rule on top, marks on both frame edges, and a
// numbered heading whose own line runs out to the edge.
export function Section({
  id,
  index,
  title,
  children,
}: {
  id: string;
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="relative scroll-mt-4 border-t border-line px-6 py-14 sm:px-10 sm:py-16"
    >
      <Cross className="-top-2 -left-2 max-sm:hidden" />
      <Cross className="-top-2 -right-2 max-sm:hidden" />
      <div className="flex items-center gap-4">
        <span className="font-mono text-[11px] tracking-[0.16em] text-muted">{index}</span>
        <h2 className="font-display text-[clamp(1.7rem,3.4vw,2.2rem)] leading-tight font-semibold tracking-tight">
          {title}
        </h2>
        <span aria-hidden className="h-px flex-1 bg-line" />
      </div>
      {children}
    </section>
  );
}

// Mono label that sits above a group inside a section.
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <h3 className="flex items-center gap-3 font-mono text-[11px] font-medium tracking-[0.14em] text-muted uppercase">
      {children}
      <span aria-hidden className="h-px flex-1 bg-line" />
    </h3>
  );
}
