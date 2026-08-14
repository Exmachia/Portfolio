import Link from "next/link";

export function LinkedText({
  text,
  linkText,
  href,
}: {
  text: string;
  linkText?: string;
  href?: string;
}) {
  if (!linkText || !href) return <>{text}</>;

  const index = text.indexOf(linkText);
  if (index === -1) return <>{text}</>;

  const before = text.slice(0, index);
  const after = text.slice(index + linkText.length);

  return (
    <>
      {before}
      <Link
        href={href}
        className="underline decoration-border underline-offset-2 transition-colors hover:text-accent hover:decoration-accent"
      >
        {linkText}
      </Link>
      {after}
    </>
  );
}
