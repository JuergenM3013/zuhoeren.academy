export function Tiles({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
      {items.map((t) => (
        <div
          key={t}
          className="rounded-2xl border border-[#e6edf0] bg-white/60 p-4 transition hover:bg-white"
        >
          <span className="text-sm font-medium text-[#2f3e46]">{t}</span>
        </div>
      ))}
    </div>
  );
}
