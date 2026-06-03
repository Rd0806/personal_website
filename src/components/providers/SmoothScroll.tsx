"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useGardenStore } from "@/store/useGardenStore";

/** Bridges Lenis' scroll value into the global store (0..1). */
function ScrollBridge() {
  const setScrollProgress = useGardenStore((s) => s.setScrollProgress);
  useLenis(({ progress }) => {
    // `progress` is already normalized 0..1 across the scrollable height.
    setScrollProgress(Number.isFinite(progress) ? progress : 0);
  });
  return null;
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.085,
        duration: 1.35,
        smoothWheel: true,
        // Respect the OS-level reduced-motion preference automatically.
        prevent: (node) => node.hasAttribute("data-lenis-prevent"),
      }}
    >
      <ScrollBridge />
      {children}
    </ReactLenis>
  );
}
