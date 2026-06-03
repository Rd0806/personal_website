/**
 * garden-graph.ts
 * ----------------------------------------------------------------------------
 * Generates the structural node/edge data for the Digital Garden. The layout is
 * deliberately *structural*, not a random blob: nodes are seeded across a set of
 * discrete depth layers (think activations across the layers of a network), then
 * connected to their nearest neighbours to form an interpretable lattice.
 *
 * Pure + deterministic (seeded), so the geometry is stable and computed once.
 */

export type GardenGraph = {
  count: number;
  positions: Float32Array; // count * 3
  scales: Float32Array; // count
  seeds: Float32Array; // count  (per-node animation phase)
  layer: Float32Array; // count  (0..1 normalized depth layer)
  edgePositions: Float32Array; // edgeCount * 2 * 3
  edgeCount: number;
};

/** Deterministic PRNG (mulberry32). */
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function buildGardenGraph(
  count = 240,
  options: {
    seed?: number;
    layers?: number;
    spreadXY?: number;
    spreadZ?: number;
    connectDistance?: number;
    maxNeighbors?: number;
    maxEdges?: number;
  } = {}
): GardenGraph {
  const {
    seed = 20260603,
    layers = 6,
    spreadXY = 9,
    spreadZ = 5,
    connectDistance = 2.45,
    maxNeighbors = 3,
    maxEdges = 520,
  } = options;

  const rand = mulberry32(seed);

  const positions = new Float32Array(count * 3);
  const scales = new Float32Array(count);
  const seeds = new Float32Array(count);
  const layer = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    // Assign to a discrete depth layer, then jitter for an organic feel.
    const layerIndex = Math.floor(rand() * layers);
    const layerZ = ((layerIndex / (layers - 1)) - 0.5) * 2 * spreadZ;

    // Bias toward the centre using a softened radial distribution.
    const r = Math.pow(rand(), 0.7) * spreadXY;
    const theta = rand() * Math.PI * 2;

    const x = Math.cos(theta) * r + (rand() - 0.5) * 1.2;
    const y = Math.sin(theta) * r * 0.62 + (rand() - 0.5) * 1.2; // flatten vertically
    const z = layerZ + (rand() - 0.5) * 1.0;

    positions[i * 3 + 0] = x;
    positions[i * 3 + 1] = y;
    positions[i * 3 + 2] = z;

    scales[i] = 0.5 + rand() * 1.6;
    seeds[i] = rand() * Math.PI * 2;
    layer[i] = layerIndex / (layers - 1);
  }

  // Build edges by nearest-neighbour within a distance threshold (capped).
  const edges: number[] = [];
  const d2 = connectDistance * connectDistance;

  for (let i = 0; i < count && edges.length / 6 < maxEdges; i++) {
    const ix = positions[i * 3];
    const iy = positions[i * 3 + 1];
    const iz = positions[i * 3 + 2];

    // Collect candidates, sort by distance, keep the closest few.
    const candidates: { j: number; dist: number }[] = [];
    for (let j = i + 1; j < count; j++) {
      const dx = ix - positions[j * 3];
      const dy = iy - positions[j * 3 + 1];
      const dz = iz - positions[j * 3 + 2];
      const dist = dx * dx + dy * dy + dz * dz;
      if (dist < d2) candidates.push({ j, dist });
    }
    candidates.sort((a, b) => a.dist - b.dist);

    const take = Math.min(maxNeighbors, candidates.length);
    for (let k = 0; k < take && edges.length / 6 < maxEdges; k++) {
      const j = candidates[k].j;
      edges.push(ix, iy, iz);
      edges.push(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
    }
  }

  return {
    count,
    positions,
    scales,
    seeds,
    layer,
    edgePositions: new Float32Array(edges),
    edgeCount: edges.length / 6,
  };
}
