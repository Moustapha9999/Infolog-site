import { cn } from "@/lib/utils";

type ContainerProps = {
  as?: "div" | "section" | "header" | "footer" | "nav";
  className?: string;
  children: React.ReactNode;
};

export function Container({
  as: Tag = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </Tag>
  );
}
