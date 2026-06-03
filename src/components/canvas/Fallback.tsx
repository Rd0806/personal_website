"use client";

import { useMemo } from "react";

/**
 * A static, deterministic SVG lattice used when WebGL is unavailable (or for
 * the first paint before capability detection resolves). It mirrors the 3D
 * garden's language — layered nodes and sparse connections — so the page never
 * looks broken or empty without hardware acceleration.
 */
export default function Fallback() {
  const { nodes, edges } = useMemo(() => {
    // Tiny seeded layout (independent of three.js).
    let a = 99173;
    const rand = () => {
      a = (a * 1664525 + 1013904223) >>> 0;
      return a / 4294967296;
    };
    const pts = Array.from({ length: 64 }, () => ({
      x: rand() * 100,
      y: 12 + rand() * 76,
      r: 0.4 + rand() * 1.5,
    }));
    const ln: { x1: number; y1: number; x2: number; y2: number }[] = [];
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        if (Math.hypot(dx, dy) < 13 && ln.length < 90) {
          ln.push({ x1: pts[i].x, y1: pts[i].y, x2: pts[j].x, y2: pts[j].y });
        }
      }
    }
    return { nodes: pts, edges: ln };
  }, []);

  return (
    <svg
      className="h-full w-full"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="100" height="100" fill="#0b0b0c" />
      <g stroke="#c6ff3d" strokeWidth="0.08" opacity="0.18">
        {edges.map((e, i) => (
          <line key={i} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} />
        ))}
      </g>
      <g fill="#c6ff3d">
        {nodes.map((n, i) => (
          <circle key={i} cx={n.x} cy={n.y} r={n.r * 0.18} opacity={0.5} />
        ))}
      </g>
      {/* Center vignette to fade toward the obsidian body. */}
      <radialGradient id="fade" cx="50%" cy="50%" r="62%">
        <stop offset="55%" stopColor="#0b0b0c" stopOpacity="0" />
        <stop offset="100%" stopColor="#0b0b0c" stopOpacity="0.9" />
      </radialGradient>
      <rect width="100" height="100" fill="url(#fade)" />
    </svg>
  );
}
