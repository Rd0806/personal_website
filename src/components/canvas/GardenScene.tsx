"use client";

import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { buildGardenGraph } from "./garden-graph";
import NodeField from "./NodeField";
import Lattice from "./Lattice";
import { useGardenStore } from "@/store/useGardenStore";

const damp = THREE.MathUtils.damp;

export default function GardenScene() {
  const group = useRef<THREE.Group>(null);
  const { size, camera } = useThree();

  // Responsive node budget — fewer nodes on small viewports keeps fps locked.
  const graph = useMemo(() => {
    const isSmall = size.width < 768;
    return buildGardenGraph(isSmall ? 150 : 240, {
      maxEdges: isSmall ? 320 : 520,
    });
  }, [size.width]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;

    const { scrollProgress, prefersReducedMotion, pointer } =
      useGardenStore.getState();

    // Pointer parallax (store pointer is normalized -1..1, tracked on window).
    const px = pointer.x;
    const py = pointer.y;

    const idleSpin = prefersReducedMotion ? 0 : state.clock.elapsedTime * 0.018;

    const targetRotY = px * 0.22 + idleSpin + scrollProgress * 0.7;
    const targetRotX = -py * 0.15 + scrollProgress * 0.22;

    g.rotation.y = damp(g.rotation.y, targetRotY, 3, delta);
    g.rotation.x = damp(g.rotation.x, targetRotX, 3, delta);

    // Travel forward through the lattice as the page scrolls.
    const targetZ = 13 - scrollProgress * 5.5;
    camera.position.z = damp(camera.position.z, targetZ, 2.5, delta);
    camera.position.x = damp(camera.position.x, px * 0.6, 2.5, delta);
    camera.position.y = damp(camera.position.y, py * 0.4, 2.5, delta);
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <color attach="background" args={["#0b0b0c"]} />
      <fog attach="fog" args={["#0b0b0c", 9, 22]} />
      <group ref={group}>
        <Lattice graph={graph} />
        <NodeField graph={graph} />
      </group>
    </>
  );
}
