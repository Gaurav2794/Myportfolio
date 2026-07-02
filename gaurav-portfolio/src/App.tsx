import HeroSection from "./components/HeroSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import CursorSparkle from "./components/CursorSparkle";

function App() {
  return (
    <div className="bg-[#0C0C0C] font-kanit" style={{ overflowX: "clip" }}>
      <CursorSparkle />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}

export default App;
