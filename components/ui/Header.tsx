"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScrollAndResize = () => {
      const currentScrollY = window.scrollY;
      const currentWidth = window.innerWidth;
      
      setIsScrolled(currentScrollY > 50);
      
      // If screen is smaller than 1024px (mobile/tablet), show header instantly
      if (currentWidth < 1024) {
        setIsMobile(true);
        setShowHeader(true);
      } else {
        // Desktop: wait for the Macbook scroll effect to finish before dropping header
        setIsMobile(false);
        const threshold = window.innerHeight * 1.5;
        setShowHeader(currentScrollY > threshold);
      }
    };

    // Run immediately on mount to set the correct state instantly
    handleScrollAndResize();

    window.addEventListener("scroll", handleScrollAndResize);
    window.addEventListener("resize", handleScrollAndResize);
    
    return () => {
      window.removeEventListener("scroll", handleScrollAndResize);
      window.removeEventListener("resize", handleScrollAndResize);
    };
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {showHeader && (
        <motion.header 
          // If mobile, it just appears. If desktop, it drops down from the top smoothly.
          initial={isMobile ? { y: 0, opacity: 0 } : { y: -100 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
            isScrolled 
              ? "bg-white/90 dark:bg-[#030305]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 py-2 sm:py-3 md:py-4 shadow-sm" 
              : "bg-transparent py-4 sm:py-6"
          }`}
        >
          <div className="max-w-[1500px] mx-auto px-4 sm:px-6 md:px-12 lg:px-24 flex items-center justify-between">
            
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-base sm:text-lg md:text-xl lg:text-2xl font-black cursor-pointer text-slate-900 dark:text-white tracking-tighter hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-500"
            >
              Sri Ram<span className="text-blue-500">.</span>
            </div>

            <nav className="hidden md:flex items-center gap-3 lg:gap-8 bg-black/5 dark:bg-white/5 px-4 lg:px-6 py-1.5 rounded-full border border-black/10 dark:border-white/10 transition-colors duration-500">
              {[
                { name: "About Me", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Background", id: "education" },
                { name: "Achievements", id: "achievements" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="text-[10px] lg:text-sm font-bold text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 sm:gap-4">
              <AnimatedThemeToggler 
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-500"
                variant="circle" 
              />
              
              <button 
                onClick={() => scrollTo("resume-contact")}
                className="px-3 py-1.5 sm:px-5 sm:py-2 md:px-6 bg-slate-900 dark:bg-white text-white dark:text-black text-[10px] sm:text-xs md:text-sm font-bold rounded-full hover:bg-blue-600 dark:hover:bg-blue-400 shadow-lg shadow-slate-200/50 dark:shadow-none transition-colors duration-500"
              >
                Contact
              </button>
            </div>
          </div>
          
          <ScrollProgress className="top-[50px] sm:top-[60px] md:top-[70px] h-[2px] sm:h-[3px] opacity-80" />
        </motion.header>
      )}
    </AnimatePresence>
  );
}