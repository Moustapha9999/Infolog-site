"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const SCREENS: [number, number, number, number][] = [
  [28, 70, 52, 36],
  [94, 50, 52, 36],
  [160, 70, 52, 36],
];

export function AffichageDynamiqueHeroIcon() {
  const reduce = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;
    const screens = svg.querySelectorAll<SVGRectElement>("[data-screen]");
    const lines = svg.querySelector("#screen-lines");
    if (!lines) return;
    lines.replaceChildren();

    const hubX = 120;
    const hubY = 150;

    SCREENS.forEach(([x, y, w], i) => {
      const cx = x + w / 2;
      const cy = y + 36;
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      line.setAttribute("x1", String(hubX));
      line.setAttribute("y1", String(hubY));
      line.setAttribute("x2", String(cx));
      line.setAttribute("y2", String(cy));
      line.setAttribute("stroke", "#4A6E97");
      line.setAttribute("stroke-width", "1.2");
      line.setAttribute("opacity", "0.6");

      if (!reduce) {
        const len = Math.hypot(cx - hubX, cy - hubY);
        line.style.strokeDasharray = String(len);
        line.style.strokeDashoffset = String(len);
        line.style.transition = `stroke-dashoffset 0.7s ease ${0.2 + i * 0.12}s`;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            line.style.strokeDashoffset = "0";
          });
        });
      }
      lines.appendChild(line);
    });

    screens.forEach((el, i) => {
      if (reduce) {
        el.style.opacity = "0.95";
        return;
      }
      el.style.opacity = "0";
      window.setTimeout(() => {
        el.style.transition = "opacity 0.45s ease";
        el.style.opacity = "0.95";
      }, 500 + i * 140);
    });
  }, [reduce]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 240 200"
      className="h-full w-full"
      aria-hidden
    >
      <g id="screen-lines" fill="none" />
      <rect
        x="100"
        y="138"
        width="40"
        height="28"
        rx="2"
        fill="none"
        stroke="#D97A45"
        strokeWidth="2"
      />
      {SCREENS.map(([x, y, w, h], i) => (
        <g key={i}>
          <rect
            data-screen
            x={x}
            y={y}
            width={w}
            height={h}
            rx="2"
            fill="none"
            stroke="#F3F5F7"
            strokeWidth="1.5"
            opacity="0"
          />
          <line
            x1={x + w / 2}
            y1={y + h}
            x2={x + w / 2}
            y2={y + h + 8}
            stroke="#F3F5F7"
            strokeWidth="1.3"
            opacity="0.7"
          />
          <line
            x1={x + w / 2 - 8}
            y1={y + h + 8}
            x2={x + w / 2 + 8}
            y2={y + h + 8}
            stroke="#F3F5F7"
            strokeWidth="1.3"
            opacity="0.7"
          />
        </g>
      ))}
    </svg>
  );
}
