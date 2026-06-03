import Nav from "@/components/layout/Nav";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Monolith from "@/components/sections/Monolith";
import LatentSpaces from "@/components/sections/LatentSpaces";
import Toolkit from "@/components/sections/Toolkit";
import Colophon from "@/components/sections/Colophon";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Nav />
      {/* The 2D editorial layer sits above the fixed 3D garden (z-0). */}
      <main id="main" className="relative z-10">
        <Monolith />
        <LatentSpaces />
        <Toolkit />
        <Colophon />
      </main>
    </>
  );
}
