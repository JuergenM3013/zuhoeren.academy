import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  asChild?: boolean;
  href?: string;
};

export function Button({ className, variant = "primary", asChild, href, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition shadow-sm";
  const styles = {
    primary: "bg-neutral-900 text-white hover:bg-neutral-800",
    secondary: "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50",
    ghost: "bg-transparent text-neutral-900 hover:bg-neutral-100",
  }[variant];

  if (asChild && href) {
    return (
      <Link href={href} className={cn(base, styles, className)}>
        {props.children}
      </Link>
    );
  }

  return <button className={cn(base, styles, className)} {...props} />;
}
