"use client";

import { useEffect, type ReactNode } from "react";
import { IconClose } from "@/components/icons";

export function Modal({
  open,
  onClose,
  closeLabel,
  children,
}: {
  open: boolean;
  onClose: () => void;
  closeLabel: string;
  children: ReactNode;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 transition-opacity duration-200 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className={`paper relative w-full max-w-sm rounded-2xl p-6 transition-all duration-200 ${
          open ? "translate-y-0 scale-100" : "translate-y-2 scale-95"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          tabIndex={open ? 0 : -1}
          className="absolute top-4 right-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-accent"
        >
          <IconClose className="h-4 w-4" />
        </button>
        {children}
      </div>
    </div>
  );
}
