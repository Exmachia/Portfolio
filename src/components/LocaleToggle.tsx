"use client";

import { useLocale } from "@/lib/locale-context";

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="flex items-center rounded-full border border-border p-0.5 font-mono text-[10px] uppercase tracking-widest">
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`cursor-pointer rounded-full px-2 py-1 transition-colors ${
          locale === "en"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-accent"
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("es")}
        aria-pressed={locale === "es"}
        className={`cursor-pointer rounded-full px-2 py-1 transition-colors ${
          locale === "es"
            ? "bg-accent text-accent-foreground"
            : "text-muted-foreground hover:text-accent"
        }`}
      >
        ES
      </button>
    </div>
  );
}
