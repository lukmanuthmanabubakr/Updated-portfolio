import { useEffect } from "react";
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
  useEffect(() => {
    const loader = document.getElementById("boot-loader");
    if (!loader) return;

    const started = window.__bootStart || Date.now();
    const minVisible = 700; // ms — long enough to read, short enough to not feel slow
    const wait = Math.max(0, minVisible - (Date.now() - started));

    const showTimer = setTimeout(() => {
      loader.classList.add("boot-hide");
      setTimeout(() => loader.remove(), 500); // matches CSS transition
    }, wait);

    return () => clearTimeout(showTimer);
  }, []);

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