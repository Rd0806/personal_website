"use client";

import { useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { GardenGraph } from "./garden-graph";
import { nodeVertexShader, nodeFragmentShader } from "./shaders/nodeShader";
import { useGardenStore } from "@/store/useGardenStore";

// Map a research-row index (0..2) onto a normalized depth layer to emphasize.
const INDEX_TO_LAYER = [0.18, 0.5, 0.82];

export default function NodeField({ graph }: { graph: GardenGraph }) {
  const { gl } = useThree();

  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uSize: { value: 5.2 },
        uPixelRatio: { value: Math.min(gl.getPixelRatio(), 2) },
        uActiveLayer: { value: -1 },
        uColor: { value: new THREE.Color("#c6ff3d") },
        uColorDeep: { value: new THREE.Color("#3f5417") },
      },
      vertexShader: nodeVertexShader,
      fragmentShader: nodeFragmentShader,
      transparent: true,
      depthWrite: false,
      depthTest: true,
      blending: THREE.NormalBlending,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute(
      "position",
      new THREE.BufferAttribute(graph.positions, 3)
    );
    geo.setAttribute("aScale", new THREE.BufferAttribute(graph.scales, 1));
    geo.setAttribute("aSeed", new THREE.BufferAttribute(graph.seeds, 1));
    geo.setAttribute("aLayer", new THREE.BufferAttribute(graph.layer, 1));
    geo.computeBoundingSphere();
    return geo;
  }, [graph]);

  useFrame((_state, delta) => {
    const { prefersReducedMotion, activeIndex, quality } =
      useGardenStore.getState();

    if (!prefersReducedMotion) {
      material.uniforms.uTime.value += delta;
    }

    material.uniforms.uPixelRatio.value = Math.min(
      gl.getPixelRatio(),
      quality === "low" ? 1.25 : 2
    );

    // Smoothly approach the emphasized layer (or none).
    const target =
      activeIndex == null ? -1 : INDEX_TO_LAYER[activeIndex] ?? -1;
    if (target < 0) {
      material.uniforms.uActiveLayer.value = -1;
    } else {
      const cur =
        material.uniforms.uActiveLayer.value < 0
          ? target
          : material.uniforms.uActiveLayer.value;
      material.uniforms.uActiveLayer.value = THREE.MathUtils.lerp(
        cur,
        target,
        Math.min(1, delta * 6)
      );
    }
  });

  return (
    <points geometry={geometry} material={material} frustumCulled />
  );
}
