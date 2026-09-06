import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: "div" | "section" | "header" | "footer" | "nav";
  className?: string;
  children: React.ReactNode;
  wide?: boolean;
};

export function Container({
  as: Tag = "div",
  className,
  children,
  wide,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        wide ? "max-w-[1520px] lg:px-12 xl:px-16" : "max-w-6xl",
        className,
      )}
    >
      {children}
    </Tag>
  );
}
