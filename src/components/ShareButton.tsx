"use client";

import { useState } from "react";
import { IconCheckCircle, IconLink } from "@/components/icons";

export function ShareButton({
  url,
  label,
  copiedLabel,
}: {
  url: string;
  label: string;
  copiedLabel: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard API unavailable — silently ignore, link stays shareable via browser URL bar.
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-full border px-4 py-1.5 font-mono text-xs uppercase tracking-widest transition-colors ${
        copied
          ? "border-accent text-accent"
          : "border-border text-foreground hover:border-accent hover:text-accent"
      }`}
    >
      {copied ? (
        <>
          <IconCheckCircle className="h-3.5 w-3.5" />
          {copiedLabel}
        </>
      ) : (
        <>
          <IconLink className="h-3.5 w-3.5" />
          {label}
        </>
      )}
    </button>
  );
}
