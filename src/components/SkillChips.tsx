import type { Skill } from "@/lib/content";

export function SkillChips({
  skills,
  onSelect,
}: {
  skills: Skill[];
  onSelect: (skill: Skill) => void;
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li key={skill.name}>
          <button
            type="button"
            onClick={() => onSelect(skill)}
            className="cursor-pointer rounded-full border border-border bg-card px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {skill.name}
          </button>
        </li>
      ))}
    </ul>
  );
}
