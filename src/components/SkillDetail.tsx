import { StarRating } from "@/components/StarRating";
import type { Skill } from "@/lib/content";

export function SkillDetail({
  skill,
  yearsOfExperienceLabel,
  proficiencyLabel,
}: {
  skill: Skill;
  yearsOfExperienceLabel: string;
  proficiencyLabel: string;
}) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <h3 className="font-display text-2xl font-medium">{skill.name}</h3>
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {skill.years} {yearsOfExperienceLabel}
      </p>
      <div className="mt-2 flex flex-col items-center gap-2">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">
          {proficiencyLabel}
        </p>
        <StarRating rating={skill.rating} />
      </div>
    </div>
  );
}
