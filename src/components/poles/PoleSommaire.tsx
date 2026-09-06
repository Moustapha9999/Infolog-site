"use client";

import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export function PoleSommaire({
  items,
}: {
  items: { slug: string; name: string }[];
}) {
  const reduce = useReducedMotion();

  return (
    <nav aria-label="Sommaire des activités">
      <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-plan">
        Sommaire
      </p>
      <ol className="mt-4 grid gap-2">
        {items.map((item, index) => (
          <motion.li
            key={item.slug}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: reduce ? 0 : 0.35,
              delay: reduce ? 0 : index * 0.04,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <a
              href={`#${item.slug}`}
              className={cn(
                "group relative flex items-center justify-between gap-4 overflow-hidden",
                "border border-ink/15 bg-paper px-4 py-3 text-sm text-ink",
                "transition-[border-color,background-color,transform] duration-300 ease-out",
                "hover:-translate-y-0.5 hover:border-plan hover:bg-paper-2",
                "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper",
                "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
              )}
            >
              <span
                className="absolute inset-y-0 left-0 w-0 bg-copper transition-all duration-300 ease-out group-hover:w-[3px] motion-reduce:transition-none"
                aria-hidden
              />
              <span className="pl-1">{item.name}</span>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-plan transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none"
                aria-hidden
              />
            </a>
          </motion.li>
        ))}
      </ol>
    </nav>
  );
}
