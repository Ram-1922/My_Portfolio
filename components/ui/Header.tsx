"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import TerminalToggle from "@/components/ui/TerminalToggle";
import { ScrollProgress } from "@/components/ui/scroll-progress";

const NAV_LINKS = [
  { name: "About Me", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Background", id: "education" },
  { name: "Achievements", id: "achievements" },
];

const ContactButton = ({ scrollTo }: { scrollTo: (id: string) => void }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => scrollTo("resume-contact")}
      className="relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black font-mono text-[10px] sm:text-xs font-bold transition-all hover:scale-105 active:scale-95 flex items-center gap-1.5 sm:gap-2 overflow-hidden border border-transparent dark:hover:border-sky-500 hover:border-sky-400 shadow-[0_0_15px_rgba(14,165,233,0.15)]"
    >
      <motion.span 
        animate={{ opacity: [1, 0.4, 1] }} 
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} 
        className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-sky-400 dark:bg-sky-500 shadow-[0_0_8px_rgba(56,189,248,0.8)] shrink-0"
      />
      <span className="relative z-10 tracking-widest uppercase w-[55px] sm:w-[75px] text-center inline-block">
        {isHovered ? (
          <span className="text-sky-400 dark:text-sky-600">./CONN</span>
        ) : (
          "CONTACT"
        )}
      </span>
      <motion.div
        initial={{ x: "-150%" }}
        animate={{ x: isHovered ? "150%" : "-150%" }}
        transition={{ duration: 0.7, ease: "linear", repeat: isHovered ? Infinity : 0 }}
        className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 dark:via-black/20 to-transparent skew-x-12 z-0"
      />
    </motion.button>
  );
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const headerBg = isScrolled 
    ? "bg-white/90 dark:bg-[#0a0a0c]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] py-2 sm:py-3 lg:py-4 border-slate-200/50 dark:border-white/10 border" 
    : "bg-transparent py-4 sm:py-6 lg:py-8 border-transparent border shadow-none";

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-2 sm:pt-4 lg:pt-6 px-4 pointer-events-none transition-all duration-500">
        <motion.div 
          layout
          className={`pointer-events-auto flex items-center justify-between gap-2 sm:gap-4 lg:gap-8 px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-full transition-all duration-500 w-full max-w-[1050px] ${headerBg}`}
        >
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className={`text-base sm:text-lg lg:text-xl font-heading font-black cursor-pointer tracking-tight flex-shrink-0 transition-colors duration-300 text-slate-900 dark:text-white`}
          >
            Sri Ram<span className="text-blue-500">.</span>
          </div>

          {/* Navigation links hidden on mobile, visible on md and up */}
          <nav className="hidden md:flex items-center relative z-10 flex-1 justify-center" onMouseLeave={() => setHoveredLink(null)}>
            {NAV_LINKS.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                onMouseEnter={() => setHoveredLink(link.name)}
                className={`relative px-3 lg:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs lg:text-sm font-semibold transition-colors tracking-wide whitespace-nowrap text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400`}
              >
                {hoveredLink === link.name && (
                  <motion.div
                    layoutId="nav-hover-pill"
                    className="absolute inset-0 bg-slate-100 dark:bg-white/10 rounded-full -z-10"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </button>
            ))}
          </nav>

          {/* Only Theme Switch and Contact Button visible on mobile */}
          <div className="flex items-center gap-2 sm:gap-4 flex-shrink-0 ml-auto">
            <TerminalToggle />
            <ContactButton scrollTo={scrollTo} />
          </div>
        </motion.div>
      </header>

      <ScrollProgress className="top-0 h-[2px] lg:h-[3px] z-[101] opacity-90" />
    </>
  );
}