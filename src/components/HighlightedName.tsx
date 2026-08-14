export function HighlightedName({
  name,
  highlight,
}: {
  name: string;
  highlight: string;
}) {
  const index = name.indexOf(highlight);
  if (index === -1) return <>{name}</>;

  const before = name.slice(0, index);
  const after = name.slice(index + highlight.length);

  return (
    <>
      {before}
      <span className="text-accent">{highlight}</span>
      {after}
    </>
  );
}
