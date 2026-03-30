export default function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-block rounded border border-border bg-surface px-3 py-1.5 font-mono text-sm text-accent-green">
      {name}
    </span>
  );
}
