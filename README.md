# Rudra Desai — Digital Garden Portfolio

A bespoke, 3D-driven personal portfolio for **Rudra Desai** (Computer Science @ Georgia Tech — AI/ML + Full-Stack). Built to feel like an award-grade, hand-crafted experience rather than a generic template: brutalist-editorial typography over an interactive structural 3D lattice, with strict accessibility and a locked-60fps performance budget.

## Concept

The site is organized as three "registers" of a single continuous document, read against a living **structural lattice** — a layered graph of nodes and nearest-neighbor edges that evokes network layers / sparse-autoencoder latents rather than decorative blobs. The 3D is *functional iconography*, not ambient garnish.

- **§01 The Monolith** — editorial hero (contact header, declarative title, thesis statement).
- **§02 Latent Spaces** — research & engineering experience as an open research index (single-open accordion). Hovering/opening a record lights the corresponding layer of the 3D lattice.
- **§03 Technical Toolkit** — skills rendered as a system-parameter dashboard.
- **Colophon** — footer with build metadata.

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- **React Three Fiber** + **@react-three/drei** + **three** for the 3D garden
- **Zustand** for lightweight state shared across the 3D and 2D layers
- **Framer Motion** for deliberate 2D motion (reduced-motion aware)
- **Lenis** (`@react-three/... ` companion) for synchronized smooth scroll
- **Lucide React** for minimal icons

## Design system

- **Palette** — obsidian `#0b0b0c` ground, raised `#111113`, bone `#ecebe4` text, with a single **phosphor** data-stream accent `#c6ff3d`. Hairlines at `rgba(236,235,228,0.12)`.
- **Type** — *Fraunces Variable* (editorial serif display) × *JetBrains Mono Variable* (structural mono for body, labels, enumeration). The serif/mono contrast carries the brutalist-editorial voice.
- **Atmosphere** — a faint ledger grid and an SVG film-grain overlay give the flat dark surface tactility without page-spanning gradients.

### Why self-hosted fonts (`@fontsource-variable/*`)

Fonts are pulled from the `@fontsource-variable` npm packages and imported in `layout.tsx`, **not** via `next/font/google`. The build environment does not permit network access to the Google Fonts CDN, so `next/font/google` would fail at build time. The `@fontsource` packages vendor the same variable fonts locally, so the build is fully self-contained and the exact family names are `"Fraunces Variable"` and `"JetBrains Mono Variable"`.

## Architecture

```
src/
  app/
    layout.tsx        # fonts, metadata, skip link, fixed 3D layer, smooth-scroll root
    page.tsx          # section composition + nav + scroll progress
    globals.css       # Tailwind v4 @theme tokens, ledger/grain overlays, a11y, scrollbar
  store/
    useGardenStore.ts # zustand: scroll, active section/index, webgl/quality, pointer
  hooks/
    useWebGLSupport.ts# webgl detection, reduced-motion, global pointer normalization
  components/
    providers/        # Capabilities (detection), SmoothScroll (Lenis + scroll bridge)
    layout/           # Nav (vertical index), ScrollProgress (top bar)
    sections/         # Monolith, LatentSpaces, Toolkit, Colophon
    canvas/
      DigitalGarden.tsx   # <Canvas>, PerformanceMonitor, adaptive dpr, fallback gate
      GardenScene.tsx     # camera dolly, pointer parallax, fog, scene assembly
      NodeField.tsx       # GPU points w/ custom shader (depth-attenuated, pulsing)
      Lattice.tsx         # structural edges (line segments)
      Fallback.tsx        # static seeded SVG lattice for no-WebGL / pre-detection
      garden-graph.ts     # seeded layered graph generation + nearest-neighbor edges
      shaders/nodeShader.ts
  lib/
    content.ts        # all profile/experience/skills content
    utils.ts          # cn() helper
```

### Layering model

A fixed full-viewport `<Canvas>` sits at `z-0`, `aria-hidden`, `pointer-events-none`. Content renders at `z-10` on transparent surfaces so the garden shows through; nav and progress live at `z-50`. Because the canvas can't receive pointer events, pointer parallax is routed through a `window` listener into the Zustand store.

### Performance

- Responsive node budget (smaller graph under 768px).
- `frustumCulled` geometry, custom point shader (no per-node meshes), memoized buffers.
- drei `PerformanceMonitor` downgrades quality and `AdaptiveDpr` lowers resolution under load to defend the 60fps target.
- Full **WebGL fallback**: a static seeded SVG lattice renders when WebGL is unavailable or before detection completes.

### Accessibility

Skip link, semantic landmarks (`header`/`nav`/`main`/`section[aria-labelledby]`/`footer`), keyboard-navigable accordion (`aria-expanded`/`aria-controls`), `aria-current` on the active nav item, phosphor `focus-visible` outlines, decorative canvas hidden from AT, and reduced-motion respected across CSS, Framer Motion, and the 3D scene. The phosphor and bone tones on obsidian meet WCAG contrast; the faintest bone tone is reserved for non-essential decoration only.

## Run

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
```

## Note on Next.js version

This project pins **Next.js 16.0.4** to match the original repository's lockfile. That release is associated with advisory **CVE-2025-66478**; if deploying publicly, bump to the latest patched 16.x (`npm i next@latest`) and re-run the build before shipping.
