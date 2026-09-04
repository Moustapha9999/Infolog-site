"use client";

import { useReducedMotion } from "framer-motion";

const nodes = [
  { x: 40, y: 80 },
  { x: 120, y: 40 },
  { x: 210, y: 90 },
  { x: 300, y: 36 },
  { x: 390, y: 110 },
  { x: 160, y: 160 },
  { x: 270, y: 170 },
  { x: 90, y: 200 },
  { x: 350, y: 200 },
  { x: 220, y: 230 },
];

const links: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [2, 5],
  [2, 6],
  [5, 7],
  [6, 8],
  [5, 6],
  [7, 9],
  [6, 9],
  [8, 9],
  [0, 7],
  [4, 8],
];

export function NetworkGraph() {
  const reduce = useReducedMotion();

  return (
    <svg
      viewBox="0 0 430 270"
      className="h-full w-full"
      aria-hidden
      role="presentation"
    >
      {links.map(([a, b], index) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#4A6E97"
          strokeWidth="1"
          strokeDasharray={reduce ? undefined : "180"}
          className={reduce ? undefined : "network-line"}
          style={{ animationDelay: `${index * 90}ms` }}
        />
      ))}
      {nodes.map((node, index) => (
        <g key={`${node.x}-${node.y}`}>
          <circle
            cx={node.x}
            cy={node.y}
            r={index === 2 || index === 6 ? 5 : 3.5}
            fill={index === 2 || index === 6 ? "#B85C2E" : "#EEF1F4"}
          />
          {!reduce ? (
            <circle
              cx={node.x}
              cy={node.y}
              r="10"
              fill="none"
              stroke="#B85C2E"
              strokeOpacity="0.35"
              className="network-pulse"
              style={{ animationDelay: `${index * 140}ms` }}
            />
          ) : null}
        </g>
      ))}
    </svg>
  );
}
