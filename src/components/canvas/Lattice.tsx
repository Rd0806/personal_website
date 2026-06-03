"use client";

import { useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import type { GardenGraph } from "./garden-graph";
import { useGardenStore } from "@/store/useGardenStore";

/** The structural connections between nodes — the "mathematical pattern". */
export default function Lattice({ graph }: { graph: GardenGraph }) {
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(graph.edgePositions, 3)
    );
    geo.computeBoundingSphere();
    return geo;
  }, [graph]);

  const material = useMemo(
    () =>
      new THREE.LineBasicMaterial({
        color: new THREE.Color("#c6ff3d"),
        transparent: true,
        opacity: 0.085,
        depthWrite: false,
      }),
    []
  );

  // Gently breathe the edge opacity unless reduced motion is requested.
  useFrame(({ clock }) => {
    const { prefersReducedMotion } = useGardenStore.getState();
    material.opacity = prefersReducedMotion
      ? 0.08
      : 0.07 + 0.03 * (0.5 + 0.5 * Math.sin(clock.elapsedTime * 0.5));
  });

  return (
    <lineSegments geometry={geometry} material={material} frustumCulled />
  );
}
