import { cn } from "@/lib/cn";

export function Badge({
  children,
  className,
  variant = "default",
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "soft";
}) {
  const styles =
    variant === "soft"
      ? "bg-neutral-100 text-neutral-800 border border-neutral-200"
      : "bg-neutral-900 text-white border border-neutral-900";
  return (
    <span className={cn("inline-flex items-center rounded-full px-3 py-1 text-xs font-medium", styles, className)}>
      {children}
    </span>
  );
}
