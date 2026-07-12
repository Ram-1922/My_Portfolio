import Header from "@/components/ui/Header";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import AboutSkills from "@/components/sections/AboutSkills";
import Projects from "@/components/sections/Projects";
import ExperienceContact from "@/components/sections/Contact";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Achievements from "@/components/sections/Achievements";
import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { FlickeringGrid } from "@/components/ui/flickering-grid"; 

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background overflow-x-clip selection:bg-blue-500/30 transition-colors duration-500">
      
      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <FlickeringGrid
          className="absolute inset-0 w-full h-full [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
          squareSize={5}
          gridGap={7}
          color="#60A5FA"
          maxOpacity={0.18}
          flickerChance={0.4}
        />
      </div>

      <div className="relative z-10 w-full">
        <Header />
        
        {/* ========================================= */}
        {/* MOBILE VIEW: Normal Hero (No Macbook Scroll)*/}
        {/* ========================================= */}
        <div className="block lg:hidden relative z-50 w-full pt-20">
          <Hero />
        </div>

        {/* ========================================= */}
        {/* DESKTOP VIEW: Macbook Scroll Hero         */}
        {/* ========================================= */}
        <div className="hidden lg:block relative z-50 w-full overflow-hidden pb-[30vh]">
          <MacbookScroll
            title={
              <span className="text-5xl md:text-7xl font-black text-slate-900 dark:text-white text-center leading-tight transition-colors duration-500">
                Welcome to My<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400">
                  Corner of the Internet.
                </span>
              </span>
            }
            showGradient={false}
          >
            <div className="relative w-full h-full overflow-y-auto overflow-x-hidden bg-background custom-scrollbar">
              <Hero />
            </div>
          </MacbookScroll>
        </div>

        <div className="relative z-10 w-full">
          <Marquee />
          <AboutSkills />
          <Projects />
          <Education/>
          <Experience/>
          <Achievements/>
          <ExperienceContact />
          
          {/* RESPONSIVE FOOTER */}
          <footer className="w-full text-center py-10 lg:py-12 px-6 text-xs sm:text-sm text-slate-500 border-t border-black/10 dark:border-white/5 mt-16 lg:mt-20 transition-colors duration-500 flex flex-col gap-2">
            <p>Engineered with Next.js, Framer Motion & Tailwind CSS.</p>
          </footer>
        </div>
        
      </div>
    </main>
  );
}