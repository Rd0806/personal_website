import { create } from "zustand";

export type Quality = "high" | "low";

type GardenState = {
  /** 0..1 scroll progress through the document, fed by Lenis. */
  scrollProgress: number;
  /** Currently in-view section id (drives the index nav). */
  activeSection: string;
  /** Hovered/focused research row index, or null. Lets the scene react to the UI. */
  activeIndex: number | null;
  /** Capability flags, resolved once on mount. */
  webglSupported: boolean | null;
  prefersReducedMotion: boolean;
  /** Adaptive render quality, lowered by the PerformanceMonitor when fps drops. */
  quality: Quality;
  /** Normalized pointer position (-1..1), tracked at the window level. */
  pointer: { x: number; y: number };

  setScrollProgress: (v: number) => void;
  setActiveSection: (id: string) => void;
  setActiveIndex: (i: number | null) => void;
  setWebglSupported: (v: boolean) => void;
  setPrefersReducedMotion: (v: boolean) => void;
  setQuality: (q: Quality) => void;
  setPointer: (x: number, y: number) => void;
};

export const useGardenStore = create<GardenState>((set) => ({
  scrollProgress: 0,
  activeSection: "monolith",
  activeIndex: null,
  webglSupported: null,
  prefersReducedMotion: false,
  quality: "high",
  pointer: { x: 0, y: 0 },

  setScrollProgress: (v) => set({ scrollProgress: v }),
  setActiveSection: (id) => set({ activeSection: id }),
  setActiveIndex: (i) => set({ activeIndex: i }),
  setWebglSupported: (v) => set({ webglSupported: v }),
  setPrefersReducedMotion: (v) => set({ prefersReducedMotion: v }),
  setQuality: (q) => set({ quality: q }),
  setPointer: (x, y) => set({ pointer: { x, y } }),
}));
