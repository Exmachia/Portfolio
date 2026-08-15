import { IconLock } from "@/components/icons";

export function ConfidentialityNote({
  label,
  note,
  className = "",
}: {
  label: string;
  note: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-start gap-3 rounded-xl border border-dashed border-border px-4 py-3 ${className}`}
    >
      <IconLock className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
      <p className="text-sm leading-relaxed text-muted-foreground">
        <span className="font-mono text-xs font-medium tracking-widest text-accent uppercase">
          {label}
        </span>{" "}
        — {note}
      </p>
    </div>
  );
}
