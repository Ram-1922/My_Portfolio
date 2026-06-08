"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { ScrollProgress } from "@/components/ui/scroll-progress";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Used for background blur styling
      setIsScrolled(currentScrollY > 50);

      // Drops down after the initial laptop zoom finishes
      const threshold = window.innerHeight * 1.5;

      if (currentScrollY > threshold) {
        setShowHeader(true); 
      } else {
        setShowHeader(false); 
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-300 ${
            isScrolled 
              ? "bg-white/90 dark:bg-[#030305]/90 backdrop-blur-xl border-b border-slate-200 dark:border-white/10 py-4 shadow-sm" 
              : "bg-transparent py-6"
          }`}
        >
          <div className="max-w-[1500px] mx-auto px-8 lg:px-24 flex items-center justify-between">
            
            {/* Logo / Name */}
            <div 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-2xl font-black cursor-pointer text-slate-900 dark:text-white tracking-tighter hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-500"
            >
              Sri Ram<span className="text-blue-500">.</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-8 bg-black/5 dark:bg-white/5 px-6 py-2 rounded-full border border-black/10 dark:border-white/10 transition-colors duration-500">
              {[
                { name: "About Me", id: "skills" },
                { name: "Projects", id: "projects" },
                { name: "Background", id: "education" }, // Links to the start of Education/Experience
                { name: "Achievements", id: "achievements" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.id)}
                  className="text-sm font-bold text-slate-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </nav>

            {/* Controls: Theme Toggler + CTA Button */}
            <div className="flex items-center gap-4">
              <AnimatedThemeToggler 
                className="w-10 h-10 bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors duration-500"
                variant="circle" 
              />
              
              <button 
                onClick={() => scrollTo("resume-contact")}
                className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-full hover:bg-blue-600 dark:hover:bg-blue-400 shadow-lg shadow-slate-200/50 dark:shadow-none transition-colors duration-500"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Scroll Progress Bar */}
          <ScrollProgress className="top-[70px] lg:top-[70px] h-[3px] opacity-80" />
        </motion.header>
      )}
    </AnimatePresence>
  );
}