"use client";

import { useEffect, useRef } from "react";

const PATTERNS = [
  "repeating-linear-gradient(45deg, color-mix(in_srgb,var(--accent) 14%, transparent) 0px, color-mix(in_srgb,var(--accent) 14%, transparent) 1px, transparent 1px, transparent 9px)",
  "repeating-linear-gradient(-45deg, color-mix(in_srgb,var(--secondary) 16%, transparent) 0px, color-mix(in_srgb,var(--secondary) 16%, transparent) 1px, transparent 1px, transparent 8px)",
  "repeating-linear-gradient(90deg, color-mix(in_srgb,var(--accent) 12%, transparent) 0px, color-mix(in_srgb,var(--accent) 12%, transparent) 1px, transparent 1px, transparent 7px)",
];

export function PlaceholderImage({
  label,
  pendingLabel = "mockup pending",
  seed = 0,
  className = "",
  aspect = "aspect-[4/3]",
  fill = false,
  showLabel = true,
}: {
  label: string;
  pendingLabel?: string;
  seed?: number;
  className?: string;
  aspect?: string;
  fill?: boolean;
  showLabel?: boolean;
}) {
  const pattern = PATTERNS[seed % PATTERNS.length];
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
  }, []);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el || reducedMotion.current) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * 6;
    const rotateX = (0.5 - py) * 6;
    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01,1.01,1)`;
  }

  function handleMouseLeave() {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`paper group relative flex items-end overflow-hidden rounded-2xl transition-transform duration-200 ease-out will-change-transform ${fill ? "h-full w-full" : aspect} ${className}`}
    >
      <div
        className="absolute inset-0 bg-muted transition-transform duration-500 ease-out group-hover:scale-105"
        style={{ backgroundImage: pattern }}
      />
      {showLabel && (
        <span className="paper relative z-10 m-3 rounded-full px-3 py-1.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          {label} · {pendingLabel}
        </span>
      )}
    </div>
  );
}
