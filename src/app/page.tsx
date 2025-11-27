import Hero from "@/components/ui/Hero";
import BentoGrid from "@/components/ui/BentoGrid";
import Research from "@/components/ui/Research";
import Projects from "@/components/ui/Projects";
import Education from "@/components/ui/Education";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Hero />
      <BentoGrid />
      <Research />
      <Projects />
      <Education />
      <Footer />
    </main>
  );
}
