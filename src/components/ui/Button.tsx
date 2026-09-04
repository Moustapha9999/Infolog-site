import Link from "next/link";
import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-copper text-paper hover:bg-[#a34f27] border border-copper",
  secondary:
    "bg-transparent text-paper border border-paper/40 hover:border-paper hover:bg-paper/5",
  outline:
    "bg-transparent text-ink border border-ink/20 hover:border-plan hover:text-plan",
  dark: "bg-ink text-paper border border-ink hover:bg-[#1a2733]",
} as const;

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: keyof typeof variants;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-medium tracking-wide transition-colors",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
