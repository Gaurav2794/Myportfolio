import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import CursorSparkle from "./components/CursorSparkle";
import MoltenMetal from "./components/MoltenMetal";

function App() {
  return (
    <div
      className="relative min-h-screen font-kanit"
      style={{ overflowX: "clip" }}
    >
      {/* =========================================
          MOLTEN METAL BACKGROUND
      ========================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <MoltenMetal
          color1="#3030DD"
          color2="#9063DC"
          color3="#FFFFFF"
          speed={0.25}
          scale={4}
          detail={3}
          glow={1}
          coreSize={0.1}
          swirl={0.8}
          fold={-0.2}
          blackPoint={0.12}
          brightness={0.9}
          colorMode="molten"
          grain
          grainIntensity={0.04}
          mouseInteraction
          mouseStrength={0.2}
          opacity={0.8}
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#0C0C0C]/60" />
      </div>

      {/* =========================================
          PORTFOLIO CONTENT
      ========================================= */}
      <div className="relative z-10">
        <HeroSection />

        <MarqueeSection />

        <AboutSection />

        <ServicesSection />

        <ProjectsSection />

        <ContactSection />
      </div>

      {/* =========================================
          CURSOR EFFECT
      ========================================= */}
      <div className="relative z-50">
        <CursorSparkle />
      </div>
    </div>
  );
}

export default App;
