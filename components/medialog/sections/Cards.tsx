export function Cards({
  cards,
  columns = 3,
}: {
  cards: { title: string; text: string }[];
  columns?: 3 | 4;
}) {
  const grid = columns === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  return (
    <div className={`grid gap-4 ${grid}`}>
      {cards.map((c) => (
        <div
          key={c.title}
          className="rounded-2xl border border-[#e6edf0] bg-white/80 p-5 shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
        >
          <h3 className="text-base font-semibold text-[#2f3e46]">{c.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-[#53636b]">{c.text}</p>
        </div>
      ))}
    </div>
  );
}
