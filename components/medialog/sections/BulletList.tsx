export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-2 md:grid-cols-2">
      {items.map((i) => (
        <li
          key={i}
          className="flex items-start gap-3 rounded-2xl border border-[#e6edf0] bg-white/60 p-4 text-sm text-[#53636b]"
        >
          <span className="mt-0.5 text-[#84a98c]">•</span>
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}
