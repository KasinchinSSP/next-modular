export type FeatureListProps = { title?: string; items: string[] };

export function FeatureList({ title, items }: FeatureListProps) {
  return (
    <section className="py-8">
      <div className="max-w-[960px] mx-auto px-4">
        {title && <h2 className="text-xl font-semibold mb-3">{title}</h2>}
        <ul className="list-disc pl-6 space-y-1">
          {items.map((it, i) => (
            <li key={i} className="text-[color:var(--nm-fg)] opacity-90">
              {it}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
