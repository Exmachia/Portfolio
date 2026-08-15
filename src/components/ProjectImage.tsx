import Image from "next/image";
import { PlaceholderImage } from "@/components/PlaceholderImage";

export function ProjectImage({
  src,
  label,
  pendingLabel = "mockup pending",
  seed = 0,
  className = "",
  aspect = "aspect-[4/3]",
  fill = false,
  priority = false,
  showLabel = true,
  sizes = "(min-width: 640px) 500px, 100vw",
}: {
  src?: string;
  label: string;
  pendingLabel?: string;
  seed?: number;
  className?: string;
  aspect?: string;
  fill?: boolean;
  priority?: boolean;
  showLabel?: boolean;
  sizes?: string;
}) {
  if (!src) {
    return (
      <PlaceholderImage
        label={label}
        pendingLabel={pendingLabel}
        seed={seed}
        className={className}
        aspect={aspect}
        fill={fill}
        showLabel={showLabel}
      />
    );
  }

  return (
    <div
      className={`group paper relative overflow-hidden rounded-2xl ${fill ? "h-full w-full" : aspect} ${className}`}
    >
      <Image
        src={src}
        alt={label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
    </div>
  );
}
