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
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 transition-colors duration-500 bg-white dark:bg-[#030305]">
      
      {mounted && (
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-100 transition-opacity duration-500 hidden sm:block">
          <LightRays
            raysOrigin="top-center"
            raysColor={resolvedTheme === 'dark' ? "#75b2fc" : "#6aaaff"}
            raysSpeed={1}
            lightSpread={resolvedTheme === 'dark' ? 0.8 : 0.1}
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

      {/* Background ambient glow */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[120px] lg:blur-[200px] z-[0]" 
      />

      <div className="max-w-[1400px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 md:gap-16 items-center z-10 text-center lg:text-left pt-20 lg:pt-0">
        
        {/* TEXT ON THE LEFT (col-span-7) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-last lg:order-first flex flex-col items-center lg:items-start gap-4 sm:gap-5 md:gap-6 lg:col-span-7"
        >
          <div>
            {/* THE FIX: Resized the main name for a cleaner, balanced proportion */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-[4.5rem] font-black tracking-tighter mb-2 sm:mb-3 text-slate-900 dark:text-white leading-tight">
              {name}<span className="text-blue-500">.</span>
            </h1>
            <div className="h-8 sm:h-10 md:h-12 overflow-hidden mt-1 flex items-center justify-center lg:justify-start w-full">
              <AnimatePresence mode="wait">
                {/* THE FIX: Resized the role text */}
                <motion.h2
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 whitespace-nowrap"
                >
                  {HERO_ROLES[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>
          
          {/* THE FIX: Resized and styled intro text to look more premium */}
          <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed tracking-wide max-w-xl px-4 lg:px-0">
            {intro}
          </p>

          {/* ================================================= */}
          {/* UPGRADED CS HERO BUTTONS                          */}
          {/* ================================================= */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 md:gap-6 mt-4 md:mt-6 xl:mt-8 w-full sm:w-auto px-4 lg:px-0">
            
            {/* BUTTON 1: JSON Extraction Script (Resume) */}
            <motion.a 
              href="#resume-contact"
              whileHover="hover"
              initial="initial"
              className="relative w-full sm:w-auto flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-black font-mono text-xs sm:text-sm md:text-base font-bold overflow-hidden shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.1)] group"
            >
              <FileJson className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 dark:text-blue-600" />
              <span className="relative z-10">View_Resume</span>
              
              {/* Sweeping Scanner Effect */}
              <motion.div
                variants={{
                  initial: { x: "-100%" },
                  hover: { x: "100%" }
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-blue-500/30 to-transparent skew-x-12"
              />
            </motion.a>

            {/* BUTTON 2: Database Query (Projects) */}
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-full sm:w-auto flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 rounded-lg bg-transparent border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-300 font-mono text-xs sm:text-sm md:text-base font-bold hover:border-purple-500 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors group"
            >
              <Database className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
              <span>Featured_Work</span>
            </motion.a>

          </div>
          {/* ================================================= */}

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-6 sm:mt-8 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/5 w-fit backdrop-blur-xl mx-auto lg:mx-0"
          >
            <Terminal className="text-blue-500 dark:text-blue-400 shrink-0 w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-[10px] sm:text-xs md:text-sm text-slate-500 dark:text-slate-300 font-mono tracking-wider font-medium">
              {status}
            </span>
          </motion.div>
        </motion.div>

        {/* PHOTO & ANIMATIONS ON THE RIGHT (col-span-5) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="order-first lg:order-last flex justify-center items-center h-[260px] sm:h-[320px] md:h-[450px] lg:h-[550px] xl:h-[650px] lg:col-span-5 relative w-full mb-4 sm:mb-6 lg:mb-0"
        >
          {/* Maintained all original photo and animation styles seamlessly */}
          <motion.div 
            whileHover="hover"
            whileTap="hover" 
            initial="idle"
            className="relative w-[200px] h-[260px] sm:w-[300px] sm:h-[360px] md:w-[400px] md:h-[480px] lg:w-[450px] lg:h-[550px] xl:w-[500px] xl:h-[600px] flex justify-center items-center cursor-pointer group"
          >
            <motion.div 
              variants={{
                idle: { scale: 0.1, borderColor: resolvedTheme === 'dark' ? "rgba(59,130,246,0.5)" : "rgba(59,130,246,0.2)", boxShadow: resolvedTheme === 'dark' ? "0 0 15px rgba(59,130,246,0.2), inset 0 0 15px rgba(59,130,246,0.2)" : "none" },
                hover: { scale: 0.91, borderColor: "rgba(59,130,246,1)", boxShadow: "0 0 30px rgba(59,130,246,0.4), inset 0 0 30px rgba(59,130,246,0.4)" }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] rounded-full border-[6px] sm:border-[10px] md:border-[14px] lg:border-[18px] xl:border-[20px] z-[2] transition-colors duration-500"
            />
            <motion.div 
              variants={{
                idle: { x: -5, y:-15, opacity: 0.6, textShadow: resolvedTheme === 'dark' ? "0 0 10px rgba(59,130,246,0.4)" : "none" },
                hover: { x: 10, opacity: 1, textShadow: "0 0 20px rgba(59,130,246,0.8)", scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-[25%] left-[-5px] md:left-[-5px] lg:left-0 text-[35px] sm:text-[50px] md:text-[70px] lg:text-[75px] xl:text-[90px] font-mono font-light text-transparent select-none z-[3] transition-colors duration-500"
              style={{ WebkitTextStroke: resolvedTheme === 'dark' ? "2px rgba(96,165,250,0.8)" : "2px rgba(59,130,246,0.6)" }}
            >
              {'<'}
            </motion.div>
            <motion.div 
              variants={{
                idle: { x: 25, y:10, opacity: 0.6, textShadow: resolvedTheme === 'dark' ? "0 0 10px rgba(59,130,246,0.4)" : "none" },
                hover: { x: 10, opacity: 1, textShadow: "0 0 20px rgba(59,130,246,0.8)", scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute bottom-[25%] right-[-5px] md:right-[-5px] lg:right-0 text-[35px] sm:text-[50px] md:text-[70px] lg:text-[75px] xl:text-[90px] font-mono font-light text-transparent select-none z-[3] transition-colors duration-500"
              style={{ WebkitTextStroke: resolvedTheme === 'dark' ? "2px rgba(96,165,250,0.8)" : "2px rgba(59,130,246,0.6)" }}
            >
              {'>'}
            </motion.div>
            <motion.div 
              variants={{ idle: { opacity: 0.4 }, hover: { opacity: 0.8 } }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[260px] bg-blue-500/20 dark:bg-blue-400/30 rounded-full blur-[20px] sm:blur-[30px] md:blur-[50px] lg:blur-[60px] xl:blur-[80px] z-[2]"
            />
            <motion.div
              variants={{
                idle: { scale: 1.2, x: -25, y: -5 },
                hover: { scale: 1, y: -5 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-[4] w-[160px] h-[220px] sm:w-[260px] sm:h-[340px] md:w-[340px] md:h-[440px] lg:w-[380px] lg:h-[500px] xl:w-[460px] xl:h-[580px] flex justify-center items-end"
            >
              <img 
                src="/profile2.png" 
                alt={name} 
                className="object-contain w-full h-full drop-shadow-xl dark:drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
                  maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
                }}
              />
            </motion.div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}