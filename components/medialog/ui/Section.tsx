import { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-6 py-14 md:py-16">
      <h2 className="text-2xl font-semibold text-[#1b252a] md:text-3xl">{title}</h2>
      <div className="mt-6">{children}</div>
    </section>
  );
}
