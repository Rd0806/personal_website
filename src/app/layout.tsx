import type { Metadata, Viewport } from "next";

// Self-hosted variable fonts (no build-time CDN fetch, fully offline-capable).
import "@fontsource-variable/fraunces/opsz.css";
import "@fontsource-variable/fraunces/opsz-italic.css";
import "@fontsource-variable/jetbrains-mono/wght.css";

import "./globals.css";

import SmoothScroll from "@/components/providers/SmoothScroll";
import Capabilities from "@/components/providers/Capabilities";
import DigitalGarden from "@/components/canvas/DigitalGarden";
import { PROFILE } from "@/lib/content";

export const metadata: Metadata = {
  title: `${PROFILE.name} // ${PROFILE.role}`,
  description: PROFILE.intro,
  authors: [{ name: PROFILE.name, url: PROFILE.github }],
  keywords: [
    "Rudra Desai",
    "LLM interpretability",
    "Sparse Autoencoders",
    "Full-Stack",
    "Georgia Tech",
    "AI research",
  ],
  openGraph: {
    title: `${PROFILE.name} // ${PROFILE.role}`,
    description: PROFILE.intro,
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>

        {/* Capability detection (WebGL + reduced motion) writes to the store. */}
        <Capabilities />

        {/*
          The Digital Garden is a single persistent canvas fixed behind the
          entire document. It is purely decorative, so it is hidden from the
          accessibility tree and never receives pointer or keyboard focus.
        */}
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-0"
        >
          <DigitalGarden />
        </div>

        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
