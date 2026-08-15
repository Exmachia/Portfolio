import { IconStar } from "@/components/icons";

export function StarRating({
  rating,
  max = 5,
  className = "h-5 w-5",
}: {
  rating: number;
  max?: number;
  className?: string;
}) {
  return (
    <div className="flex items-center gap-1" role="img" aria-label={`${rating} / ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <IconStar
          key={i}
          filled={i < rating}
          className={`${className} ${i < rating ? "text-accent" : "text-border"}`}
        />
      ))}
    </div>
  );
}
