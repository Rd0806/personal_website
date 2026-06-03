"use client";

import { useGardenStore } from "@/store/useGardenStore";

export default function ScrollProgress() {
  const progress = useGardenStore((s) => s.scrollProgress);
  const pct = Math.round(progress * 100);

  return (
    <div className="fixed left-0 top-0 z-50 w-full" aria-hidden="true">
      <div className="h-px w-full bg-hairline">
        <div
          className="h-px bg-phosphor transition-[width] duration-150 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="pointer-events-none fixed left-[var(--gutter)] top-4 font-mono text-[0.6rem] tracking-[0.25em] text-bone-faint">
        IDX {String(pct).padStart(3, "0")}
      </span>
    </div>
  );
}
