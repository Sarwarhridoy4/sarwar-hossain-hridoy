import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectSection from "./ProjectSection";
import ResumeBuilderCTA from "./ResumeBuilderCTA";
import Stats from "./Stats";

const HomePage = () => {
  return (
    <div className='min-h-screen text-slate-950 dark:text-slate-100 relative overflow-hidden transition-colors duration-500'>
      <div className='absolute inset-0 page-aurora -z-10 dark:hidden' />
      <div className='absolute inset-0 page-aurora-dark -z-10 hidden dark:block' />
      <div className='absolute inset-0 bg-grid opacity-20 -z-10 dark:hidden' />
      <div className='absolute inset-0 bg-grid-dark opacity-10 -z-10 hidden dark:block' />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <ResumeBuilderCTA />
      <Stats />
    </div>
  );
};

export default HomePage;
