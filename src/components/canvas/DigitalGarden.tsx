"use client";

import { Canvas } from "@react-three/fiber";
import { AdaptiveDpr, PerformanceMonitor } from "@react-three/drei";
import GardenScene from "./GardenScene";
import Fallback from "./Fallback";
import { useGardenStore } from "@/store/useGardenStore";

/**
 * Mounts the persistent WebGL canvas. Until capability detection resolves — or
 * if WebGL is unsupported — it renders the static SVG fallback so the page is
 * never blank.
 */
export default function DigitalGarden() {
  const webglSupported = useGardenStore((s) => s.webglSupported);
  const setQuality = useGardenStore((s) => s.setQuality);

  if (webglSupported !== true) {
    return <Fallback />;
  }

  return (
    <Canvas
      className="h-full w-full"
      dpr={[1, 2]}
      gl={{
        antialias: true,
        alpha: false,
        powerPreference: "high-performance",
        stencil: false,
        depth: true,
      }}
      camera={{ fov: 55, near: 0.1, far: 100, position: [0, 0, 13] }}
    >
      <PerformanceMonitor
        onDecline={() => setQuality("low")}
        onIncline={() => setQuality("high")}
      >
        <AdaptiveDpr pixelated />
        <GardenScene />
      </PerformanceMonitor>
    </Canvas>
  );
}
