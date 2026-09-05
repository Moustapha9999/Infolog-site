import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

const LOGO = {
  src: "/brand/infolog-mark.png",
  width: 859,
  height: 428,
} as const;

export function Logo({
  compact = false,
  large = false,
  onDark = false,
  href = "/",
}: {
  inverted?: boolean;
  compact?: boolean;
  large?: boolean;
  onDark?: boolean;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex shrink-0 items-center focus-visible:outline-offset-4"
      aria-label="INFOLOG — accueil"
    >
      <Image
        src={LOGO.src}
        alt="INFOLOG"
        width={LOGO.width}
        height={LOGO.height}
        priority={large || onDark}
        className={cn(
          "w-auto",
          large ? "h-[68px]" : compact ? "h-11" : "h-14",
          onDark && "mix-blend-screen",
        )}
      />
    </Link>
  );
}
