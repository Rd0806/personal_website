import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import ParticleBackground from "@/components/ui/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      <ParticleBackground />
      <Hero />
      <BentoGrid />

      {/* Footer */}
      <footer className="relative z-10 py-8 text-center border-t border-white/5 bg-black/80 backdrop-blur-md">
        <p className="font-mono text-xs text-gray-500">
          © 2025 RUDRA DESAI | SYSTEM_STATUS: OPTIMAL
        </p>
      </footer>
    </main>
  );
}
