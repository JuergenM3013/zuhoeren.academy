export function InfoCard({ items }: { items: string[] }) {
  return (
    <div className="rounded-2xl border border-[#e6edf0] bg-white/80 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {items.map((i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl border border-[#e6edf0] bg-[#f7f9fa]/70 p-4 text-sm text-[#2f3e46]"
          >
            <span className="text-[#84a98c]">✓</span>
            <span>{i}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
