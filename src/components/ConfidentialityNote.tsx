import { IconLock } from "@/components/icons";

export function ConfidentialityNote({
  note,
  className = "",
}: {
  note: string;
  className?: string;
}) {
  return (
    <p
      className={`flex items-start gap-2 text-sm leading-relaxed text-muted-foreground italic ${className}`}
    >
      <IconLock className="mt-0.5 h-3.5 w-3.5 shrink-0 not-italic" />
      <span>{note}</span>
    </p>
  );
}
