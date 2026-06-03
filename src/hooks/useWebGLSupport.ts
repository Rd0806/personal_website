"use client";

import { useEffect } from "react";
import { useGardenStore } from "@/store/useGardenStore";

/** Probe for a usable WebGL context without leaving one around. */
function detectWebGL(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    if (!gl) return false;
    // Release the probe context so we don't burn a context slot.
    const lose = (gl as WebGLRenderingContext).getExtension(
      "WEBGL_lose_context"
    );
    lose?.loseContext();
    return true;
  } catch {
    return false;
  }
}

/**
 * Resolves capability flags exactly once on the client and keeps the
 * reduced-motion flag live (users can toggle it at the OS level).
 */
export function useCapabilities() {
  const setWebglSupported = useGardenStore((s) => s.setWebglSupported);
  const setPrefersReducedMotion = useGardenStore(
    (s) => s.setPrefersReducedMotion
  );
  const setPointer = useGardenStore((s) => s.setPointer);

  useEffect(() => {
    setWebglSupported(detectWebGL());

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setPrefersReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);

    // Window-level pointer tracking so the 3D parallax works even though the
    // canvas layer is pointer-events:none (keeping the 2D UI fully interactive).
    const onPointer = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      setPointer(x, y);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("pointermove", onPointer);
    };
  }, [setWebglSupported, setPrefersReducedMotion, setPointer]);
}
