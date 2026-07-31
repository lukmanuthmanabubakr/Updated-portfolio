import { Navbar } from "../components/Navbar";
import { GridField } from "../components/GridField";
import { SystemStatus } from "../components/SystemStatus";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-ink text-foreground overflow-x-hidden">
      <GridField />
      <Navbar />

      <main>
        <HeroSection />
        <SystemStatus />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
