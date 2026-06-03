"use client";

import { useCapabilities } from "@/hooks/useWebGLSupport";

/** Mount-only side effect component that resolves device capability flags. */
export default function Capabilities() {
  useCapabilities();
  return null;
}
