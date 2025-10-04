"use client";
import { useEffect, useState } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ResumeBuilderCTA from "./ResumeBuilderCTA";
import Stats from "./Stats";

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-50 text-slate-900 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 dark:text-white relative overflow-hidden transition-colors duration-500'>
      {/* Animated background gradient (light + dark mode) */}
      <div
        className='fixed inset-0 opacity-30 pointer-events-none transition-all duration-500'
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
        }}
      />

      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ResumeBuilderCTA />
      <Stats />
    </div>
  );
};

export default HomePage;
