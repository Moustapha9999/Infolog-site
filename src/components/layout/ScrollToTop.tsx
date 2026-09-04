"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 480);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Remonter en haut de page"
      className="fixed bottom-6 right-6 z-40 grid h-12 w-12 place-items-center border border-ink/15 bg-ink text-paper shadow-[0_12px_28px_rgba(16,24,32,0.28)] transition-[transform,background-color] hover:bg-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
    >
      <ArrowUp className="h-5 w-5" strokeWidth={1.8} />
    </button>
  );
}
