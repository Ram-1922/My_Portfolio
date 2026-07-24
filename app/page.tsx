import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import AboutSkills from "@/components/sections/AboutSkills";
import Projects from "@/components/sections/Projects";
import ExperienceContact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import { FlickeringGrid } from "@/components/ui/flickering-grid"; 
import { ScrollProgress } from "@/components/ui/scroll-progress"; // NEW IMPORT

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background overflow-x-clip selection:bg-blue-500/30 transition-colors duration-500">
      
      {/* GLOBAL SCROLL PROGRESS BAR - Placed here so it sits at the absolute top globally */}
      <ScrollProgress />

      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none transform-gpu">
        <FlickeringGrid
          className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
          squareSize={12}
          gridGap={12}
          color="#60A5FA"
          maxOpacity={0.15}
          flickerChance={0.2}
        />
      </div>

      <div className="relative z-10 w-full">
        <Header />
        
        <Hero />

        <Marquee />
        <AboutSkills />
        <Projects />
        <Education />
        <Experience />
        <Achievements />
        <ExperienceContact />
        
        <footer className="w-full text-center py-10 lg:py-12 px-6 text-xs sm:text-sm text-slate-500 border-t border-black/10 dark:border-white/5 mt-16 lg:mt-20 transition-colors duration-500 flex flex-col gap-2">
          <p>Engineered with Next.js, Framer Motion & Tailwind CSS.</p>
        </footer>
      </div>
      
    </main>
  );
}