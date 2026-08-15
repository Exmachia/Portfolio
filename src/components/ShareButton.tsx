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
      className="group inline-flex cursor-pointer items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
    >
      {copied ? (
        <>
          <IconCheckCircle className="h-3.5 w-3.5 text-accent" />
          <span className="text-accent">{copiedLabel}</span>
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
