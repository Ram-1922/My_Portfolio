"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Terminal } from "lucide-react";
import { PORTFOLIO_DATA, HERO_ROLES } from "@/data";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

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
    <section className="relative min-h-[100vh] lg:min-h-full flex items-center justify-center overflow-hidden px-6 sm:px-8 lg:px-24 transition-colors duration-500 bg-white dark:bg-[#030305] pt-24 pb-20 lg:py-0">
      
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

      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.05, 0.1, 0.05] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] lg:w-[1000px] lg:h-[1000px] bg-blue-500/10 rounded-full blur-[100px] lg:blur-[200px] z-[0]" 
      />

      <div className="max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center z-10 text-center lg:text-left mt-0 lg:mt-20">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="order-first lg:order-last flex justify-center items-center h-[300px] sm:h-[450px] lg:h-[700px] lg:col-span-5 relative w-full mb-4 lg:mb-0"
        >
          <motion.div 
            whileHover="hover"
            whileTap="hover" 
            initial="idle"
            className="relative w-[240px] h-[300px] sm:w-[400px] sm:h-[450px] lg:w-[550px] lg:h-[650px] flex justify-center items-center cursor-pointer group"
          >
            <motion.div 
              variants={{
                idle: { scale: 0.1, borderColor: resolvedTheme === 'dark' ? "rgba(59,130,246,0.5)" : "rgba(59,130,246,0.2)", boxShadow: resolvedTheme === 'dark' ? "0 0 20px rgba(59,130,246,0.2), inset 0 0 20px rgba(59,130,246,0.2)" : "none" },
                hover: { scale: 0.91, borderColor: "rgba(59,130,246,1)", boxShadow: "0 0 40px rgba(59,130,246,0.4), inset 0 0 40px rgba(59,130,246,0.4)" }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute w-[180px] h-[180px] sm:w-[300px] sm:h-[300px] lg:w-[420px] lg:h-[420px] rounded-full border-[10px] sm:border-[14px] lg:border-[24px] z-[2] transition-colors duration-500"
            />
            <motion.div 
              variants={{
                idle: { x: -10, y:-40, opacity: 0.6, textShadow: resolvedTheme === 'dark' ? "0 0 10px rgba(59,130,246,0.4)" : "none" },
                hover: { x: 10, opacity: 1, textShadow: "0 0 20px rgba(59,130,246,0.8)", scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-[25%] left-[-15px] sm:left-[-10px] lg:left-0 text-[50px] sm:text-[80px] lg:text-[100px] font-mono font-light text-transparent select-none z-[3] transition-colors duration-500"
              style={{ WebkitTextStroke: resolvedTheme === 'dark' ? "2px rgba(96,165,250,0.8)" : "2px rgba(59,130,246,0.6)" }}
            >
              {'<'}
            </motion.div>
            <motion.div 
              variants={{
                idle: { x: 20, y:10, opacity: 0.6, textShadow: resolvedTheme === 'dark' ? "0 0 10px rgba(59,130,246,0.4)" : "none" },
                hover: { x: 10, opacity: 1, textShadow: "0 0 20px rgba(59,130,246,0.8)", scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute bottom-[25%] right-[-15px] sm:right-[-10px] lg:right-0 text-[50px] sm:text-[80px] lg:text-[100px] font-mono font-light text-transparent select-none z-[3] transition-colors duration-500"
              style={{ WebkitTextStroke: resolvedTheme === 'dark' ? "2px rgba(96,165,250,0.8)" : "2px rgba(59,130,246,0.6)" }}
            >
              {'>'}
            </motion.div>
            <motion.div 
              variants={{ idle: { opacity: 0.4 }, hover: { opacity: 0.8 } }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[300px] lg:h-[300px] bg-blue-500/20 dark:bg-blue-400/30 rounded-full blur-[30px] lg:blur-[80px] z-[2]"
            />
            <motion.div
              variants={{
                idle: { scale: 1.2, x: 0, y: -10 },
                hover: { scale: 1, y: -5 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-[4] w-[220px] h-[280px] sm:w-[360px] sm:h-[440px] lg:w-[500px] lg:h-[600px] flex justify-center items-end"
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

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="order-last lg:order-first flex flex-col items-center lg:items-start gap-4 lg:gap-8 lg:col-span-7"
        >
          <div>
            <h1 className="text-4xl sm:text-6xl lg:text-[5.5rem] font-black tracking-tighter mb-2 lg:mb-4 text-slate-900 dark:text-white leading-tight lg:leading-none">
              {name}<span className="text-blue-500">.</span>
            </h1>
            <div className="h-8 sm:h-10 lg:h-12 overflow-hidden mt-1 flex items-center justify-center lg:justify-start w-full">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-lg sm:text-2xl lg:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 whitespace-nowrap"
                >
                  {HERO_ROLES[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>
          
          <p className="text-sm sm:text-lg lg:text-xl text-slate-600 dark:text-gray-400 max-w-2xl leading-relaxed px-2 lg:px-0">
            {intro}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 lg:gap-6 mt-2 lg:mt-6 w-full lg:w-auto px-4 lg:px-0">
            <motion.a 
              href="#resume-contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-sm sm:text-base lg:text-lg hover:bg-slate-800 dark:hover:bg-gray-200 transition-colors flex items-center gap-2 sm:gap-3 shadow-xl"
            >
              View Resume <ArrowRight size={18} className="lg:w-5 lg:h-5" />
            </motion.a>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto justify-center px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-sm sm:text-base lg:text-lg font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex"
            >
              Featured Work
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-3 mt-6 lg:mt-12 p-3 lg:p-5 rounded-2xl bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/5 w-fit backdrop-blur-xl mx-auto lg:mx-0"
          >
            <Terminal size={18} className="text-blue-500 dark:text-blue-400 shrink-0 lg:w-6 lg:h-6" />
            <span className="text-xs sm:text-sm lg:text-base text-slate-700 dark:text-gray-300 font-mono">
              {status}
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}