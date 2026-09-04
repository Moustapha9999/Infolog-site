"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const VM_PTS: [number, number][] = [
  [130, 55],
  [170, 55],
  [210, 55],
];

export function VirtualisationServeursHeroIcon() {
  const reduce = useReducedMotion();
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const lines = svg.querySelector("#vm-lines");
    const server = svg.querySelector("#server") as SVGGeometryElement | null;
    const boxes = svg.querySelector("#vm-boxes");
    if (!lines || !server || !boxes) return;

    lines.replaceChildren();
    boxes.replaceChildren();

    const drawStatic = () => {
      VM_PTS.forEach(([x, y]) => {
        const line = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "line",
        );
        line.setAttribute("x1", "85");
        line.setAttribute("y1", "100");
        line.setAttribute("x2", String(x));
        line.setAttribute("y2", String(y + 8));
        line.setAttribute("stroke", "#4A6E97");
        line.setAttribute("stroke-width", "1.2");
        line.setAttribute("opacity", "0.6");
        lines.appendChild(line);

        const r = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "rect",
        );
        r.setAttribute("x", String(x));
        r.setAttribute("y", String(y));
        r.setAttribute("width", "34");
        r.setAttribute("height", "26");
        r.setAttribute("rx", "2");
        r.setAttribute("fill", "none");
        r.setAttribute("stroke", "#F3F5F7");
        r.setAttribute("stroke-width", "1.5");
        r.setAttribute("opacity", "0.9");
        boxes.appendChild(r);
      });
      server.style.strokeDasharray = "none";
      server.style.strokeDashoffset = "0";
    };

    if (reduce) {
      drawStatic();
      return;
    }

    const timers: number[] = [];

    const srvLen =
      typeof server.getTotalLength === "function"
        ? server.getTotalLength()
        : 190;
    server.style.strokeDasharray = String(srvLen);
    server.style.strokeDashoffset = String(srvLen);
    server.style.transition = "stroke-dashoffset 0.8s ease 0.1s";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        server.style.strokeDashoffset = "0";
      });
    });

    VM_PTS.forEach(([x, y], i) => {
      const line = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "line",
      );
      line.setAttribute("x1", "85");
      line.setAttribute("y1", "100");
      line.setAttribute("x2", String(x));
      line.setAttribute("y2", String(y + 8));
      line.setAttribute("stroke", "#4A6E97");
      line.setAttribute("stroke-width", "1.2");
      line.setAttribute("opacity", "0.6");
      const len = Math.hypot(x - 85, y + 8 - 100);
      line.style.strokeDasharray = String(len);
      line.style.strokeDashoffset = String(len);
      line.style.transition = `stroke-dashoffset 0.7s ease ${0.9 + i * 0.1}s`;
      lines.appendChild(line);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          line.style.strokeDashoffset = "0";
        });
      });

      const r = document.createElementNS("http://www.w3.org/2000/svg", "rect");
      r.setAttribute("x", String(x));
      r.setAttribute("y", String(y));
      r.setAttribute("width", "34");
      r.setAttribute("height", "26");
      r.setAttribute("rx", "2");
      r.setAttribute("fill", "none");
      r.setAttribute("stroke", "#F3F5F7");
      r.setAttribute("stroke-width", "1.5");
      r.setAttribute("opacity", "0");
      boxes.appendChild(r);
      timers.push(
        window.setTimeout(() => {
          r.style.transition = "opacity 0.5s ease";
          r.setAttribute("opacity", "0.9");
        }, 1000 + i * 130),
      );
    });

    return () => {
      timers.forEach((id) => window.clearTimeout(id));
    };
  }, [reduce]);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 240 200"
      className="h-full w-full"
      aria-hidden
    >
      <g id="vm-lines" fill="none" />
      <rect
        id="server"
        x="30"
        y="80"
        width="55"
        height="40"
        rx="3"
        fill="none"
        stroke="#D97A45"
        strokeWidth="2.2"
      />
      <line
        x1="38"
        y1="92"
        x2="70"
        y2="92"
        stroke="#D97A45"
        strokeWidth="1.6"
      />
      <line
        x1="38"
        y1="102"
        x2="70"
        y2="102"
        stroke="#D97A45"
        strokeWidth="1.6"
      />
      <g id="vm-boxes" />
    </svg>
  );
}
