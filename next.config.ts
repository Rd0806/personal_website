import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // three.js ships ESM; transpiling avoids edge-case interop issues in Next.
  transpilePackages: ["three"],
};

export default nextConfig;
