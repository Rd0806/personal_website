import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/lib/lenis";

const inter = Inter({
  variable: "--font-geist-sans", // Keeping the variable name to avoid changing css
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rudra Desai | Creative Technologist",
  description: "Engineering the future with AI & Algorithms. Cyberpunk minimalist portfolio of Rudra Desai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-cyber-black text-white selection:bg-white selection:text-black`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
