"use client";

import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA, HERO_ROLES } from "@/data";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { ArrowRight, Terminal, FileJson, Database } from "lucide-react";

const LightRays = dynamic(() => import("@/components/ui/LightRays"), { ssr: false });

export default function Hero() {
  const { name, intro, status } = PORTFOLIO_DATA.hero;
  const [roleIndex, setRoleIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);  
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-6 md:px-12 lg:px-24 transition-colors duration-500 bg-white dark:bg-[#030305]">
      
      {mounted && resolvedTheme === 'dark' && (
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-100 transition-opacity duration-500 block">
          <LightRays
            raysOrigin="top-center"
            raysColor="#75b2fc"
            raysSpeed={1}
            lightSpread={0.8}
            rayLength={5}
            followMouse={true}
            mouseInfluence={0.7}
            noiseAmount={0}
            distortion={0}
            pulsating={false}
            fadeDistance={0.7}
            saturation={1.4}
          />
        </div>
      )}

      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[1000px] lg:h-[1000px] bg-blue-500/10 rounded-full blur-[80px] lg:blur-[200px] z-[0]" 
      />

      <div className="max-w-[1400px] w-full flex flex-col lg:grid lg:grid-cols-12 gap-10 lg:gap-16 items-center z-10 text-left pt-28 lg:pt-0">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:order-first flex flex-col items-start gap-4 lg:gap-6 w-full lg:col-span-7"
        >
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-[4.5rem] font-heading font-black tracking-tighter mb-1 lg:mb-3 text-slate-900 dark:text-white leading-tight">
              {name}<span className="text-blue-500">.</span>
            </h1>
            <div className="h-10 sm:h-12 lg:h-14 overflow-hidden mt-1 flex items-center justify-start w-full">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-2xl sm:text-4xl lg:text-5xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 whitespace-nowrap py-1"
                >
                  {HERO_ROLES[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>
          
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed tracking-wide max-w-xl px-0 mt-2 lg:mt-0">
            {intro}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-6 mt-4 lg:mt-8 w-full sm:w-auto px-0">
            <motion.a 
              href="#resume-contact"
              whileHover="hover"
              initial="initial"
              className="relative w-full sm:w-auto flex items-center justify-center gap-2 lg:gap-3 px-6 py-3 lg:px-8 lg:py-4 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black font-mono text-xs sm:text-sm lg:text-base font-bold overflow-hidden shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
            >
              <FileJson className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 dark:text-blue-600" />
              <span className="relative z-10 whitespace-nowrap">View_Resume</span>
              <motion.div
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: "100%" }
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent skew-x-12"
              />
            </motion.a>

            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 lg:px-8 lg:py-4 rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300 font-mono text-xs sm:text-sm lg:text-base font-bold hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
            >
              <Database className="w-4 h-4 lg:w-5 lg:h-5 text-slate-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
              <span className="whitespace-nowrap">Featured_Work</span>
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-start gap-2 lg:gap-3 mt-4 lg:mt-8 p-3 lg:p-4 rounded-2xl bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/5 w-fit backdrop-blur-xl mx-0"
          >
            <Terminal className="text-blue-500 dark:text-blue-400 shrink-0 w-4 h-4 lg:w-5 lg:h-5" />
            <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-300 font-mono tracking-wider font-medium">
              {status}
            </span>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="order-first lg:order-last flex justify-center items-center h-[340px] sm:h-[450px] lg:h-[650px] w-full lg:col-span-5 relative mt-6 lg:mt-0"
        >
          {mounted && (
            <>
              {/* MOBILE: Static "Hovered" State - No interactions */}
              <div className="flex lg:hidden relative w-full h-full justify-center items-center scale-[0.55] sm:scale-[0.75] origin-center">
                <div 
                  className="absolute w-[270px] h-[270px] rounded-full border-[20px] z-[2]"
                  style={{ 
                    borderColor: "rgba(59,130,246,1)", 
                    boxShadow: "0 0 30px rgba(59,130,246,0.4), inset 0 0 30px rgba(59,130,246,0.4)" 
                  }}
                />
                <div 
                  className="absolute top-[15%] left-[-15%] text-[90px] font-mono font-light text-transparent select-none z-[3] scale-110"
                  style={{ WebkitTextStroke: resolvedTheme === 'dark' ? "2px rgba(96,165,250,0.8)" : "2px rgba(59,130,246,0.6)", textShadow: "0 0 20px rgba(59,130,246,0.8)" }}
                >
                  {'<'}
                </div>
                <div 
                  className="absolute bottom-[25%] right-[-15%] text-[90px] font-mono font-light text-transparent select-none z-[3] scale-110"
                  style={{ WebkitTextStroke: resolvedTheme === 'dark' ? "2px rgba(96,165,250,0.8)" : "2px rgba(59,130,246,0.6)", textShadow: "0 0 20px rgba(59,130,246,0.8)" }}
                >
                  {'>'}
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-blue-500/20 dark:bg-blue-400/30 rounded-full blur-[60px] z-[2] opacity-80" />
                <div className="relative z-[4] w-[360px] h-[480px] flex justify-center items-end pointer-events-none">
                  <img 
                    src="/profile2.png" 
                    alt={name} 
                    className="object-contain w-full h-full drop-shadow-xl dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] pointer-events-auto"
                    style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                  />
                </div>
              </div>

              {/* DESKTOP: Fully Interactive Hover State */}
              <motion.div 
                whileHover="hover"
                whileTap="hover" 
                initial="idle"
                className="hidden lg:flex relative w-full h-full justify-center items-center cursor-pointer group origin-center"
              >
                <motion.div 
                  variants={{
                    idle: { scale: 0.1, opacity: 0 },
                    hover: { scale: 1, opacity: 1, borderColor: "rgba(59,130,246,1)", boxShadow: "0 0 30px rgba(59,130,246,0.4), inset 0 0 30px rgba(59,130,246,0.4)" }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute w-[400px] h-[400px] rounded-full border-[20px] z-[2] transition-colors duration-500"
                  style={{ borderColor: resolvedTheme === 'dark' ? "rgba(59,130,246,0.5)" : "rgba(59,130,246,0.2)" }}
                />
                <motion.div 
                  variants={{
                    idle: { x: -5, y:-10, opacity: 0.6 },
                    hover: { x: 10, opacity: 1, textShadow: "0 0 20px rgba(59,130,246,0.8)", scale: 1.1 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-[25%] left-0 text-[90px] font-mono font-light text-transparent select-none z-[3] transition-colors duration-500"
                  style={{ WebkitTextStroke: resolvedTheme === 'dark' ? "2px rgba(96,165,250,0.8)" : "2px rgba(59,130,246,0.6)" }}
                >
                  {'<'}
                </motion.div>
                <motion.div 
                  variants={{
                    idle: { x: 25, y:10, opacity: 0.6 },
                    hover: { x: -10, opacity: 1, textShadow: "0 0 20px rgba(59,130,246,0.8)", scale: 1.1 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute bottom-[25%] right-0 text-[90px] font-mono font-light text-transparent select-none z-[3] transition-colors duration-500"
                  style={{ WebkitTextStroke: resolvedTheme === 'dark' ? "2px rgba(96,165,250,0.8)" : "2px rgba(59,130,246,0.6)" }}
                >
                  {'>'}
                </motion.div>
                <motion.div 
                  variants={{ idle: { opacity: 0.4 }, hover: { opacity: 0.8 } }}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] bg-blue-500/20 dark:bg-blue-400/30 rounded-full blur-[80px] z-[2]"
                />
                <motion.div
                  variants={{
                    idle: { scale: 1.1, y: -10 },
                    hover: { scale: 1, y: 0 }
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative z-[4] w-[460px] h-[580px] flex justify-center items-end pointer-events-none"
                >
                  <img 
                    src="/profile2.png" 
                    alt={name} 
                    className="object-contain w-full h-full drop-shadow-xl dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)] pointer-events-auto"
                    style={{ WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)', maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)' }}
                  />
                </motion.div>
              </motion.div>
            </>
          )}
        </motion.div>

      </div>
    </section>
  );
}