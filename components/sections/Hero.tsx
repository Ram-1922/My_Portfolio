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
    <section className="relative min-h-[100vh] lg:min-h-full flex items-center justify-center overflow-hidden px-4 sm:px-6 md:px-10 lg:px-20 xl:px-24 transition-colors duration-500 bg-white dark:bg-[#030305] pt-16 sm:pt-20 md:pt-24 pb-16 lg:py-0">
      
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px] bg-blue-500/10 rounded-full blur-[60px] md:blur-[120px] lg:blur-[200px] z-[0]" 
      />

      <div className="max-w-[1500px] w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center z-10 text-center lg:text-left mt-0 lg:mt-16 xl:mt-20">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="order-first lg:order-last flex justify-center items-center h-[260px] sm:h-[320px] md:h-[450px] lg:h-[600px] xl:h-[700px] lg:col-span-5 relative w-full mb-2 sm:mb-4 lg:mb-0"
        >
          <motion.div 
            whileHover="hover"
            whileTap="hover" 
            initial="idle"
            className="relative w-[200px] h-[260px] sm:w-[300px] sm:h-[360px] md:w-[400px] md:h-[480px] lg:w-[480px] lg:h-[580px] xl:w-[550px] xl:h-[650px] flex justify-center items-center cursor-pointer group"
          >
            <motion.div 
              variants={{
                idle: { scale: 0.1, borderColor: resolvedTheme === 'dark' ? "rgba(59,130,246,0.5)" : "rgba(59,130,246,0.2)", boxShadow: resolvedTheme === 'dark' ? "0 0 15px rgba(59,130,246,0.2), inset 0 0 15px rgba(59,130,246,0.2)" : "none" },
                hover: { scale: 0.91, borderColor: "rgba(59,130,246,1)", boxShadow: "0 0 30px rgba(59,130,246,0.4), inset 0 0 30px rgba(59,130,246,0.4)" }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute w-[150px] h-[150px] sm:w-[220px] sm:h-[220px] md:w-[300px] md:h-[300px] lg:w-[380px] lg:h-[380px] xl:w-[420px] xl:h-[420px] rounded-full border-[6px] sm:border-[10px] md:border-[14px] lg:border-[20px] xl:border-[24px] z-[2] transition-colors duration-500"
            />
            <motion.div 
              variants={{
                idle: { x: -5, y:-15, opacity: 0.6, textShadow: resolvedTheme === 'dark' ? "0 0 10px rgba(59,130,246,0.4)" : "none" },
                hover: { x: 10, opacity: 1, textShadow: "0 0 20px rgba(59,130,246,0.8)", scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute top-[25%] left-[-5px] md:left-[-5px] lg:left-0 text-[35px] sm:text-[50px] md:text-[70px] lg:text-[85px] xl:text-[100px] font-mono font-light text-transparent select-none z-[3] transition-colors duration-500"
              style={{ WebkitTextStroke: resolvedTheme === 'dark' ? "2px rgba(96,165,250,0.8)" : "2px rgba(59,130,246,0.6)" }}
            >
              {'<'}
            </motion.div>
            <motion.div 
              variants={{
                idle: { x: 55, y:10, opacity: 0.6, textShadow: resolvedTheme === 'dark' ? "0 0 10px rgba(59,130,246,0.4)" : "none" },
                hover: { x: 10, opacity: 1, textShadow: "0 0 20px rgba(59,130,246,0.8)", scale: 1.1 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="absolute bottom-[25%] right-[-5px] md:right-[-5px] lg:right-0 text-[35px] sm:text-[50px] md:text-[70px] lg:text-[85px] xl:text-[100px] font-mono font-light text-transparent select-none z-[3] transition-colors duration-500"
              style={{ WebkitTextStroke: resolvedTheme === 'dark' ? "2px rgba(96,165,250,0.8)" : "2px rgba(59,130,246,0.6)" }}
            >
              {'>'}
            </motion.div>
            <motion.div 
              variants={{ idle: { opacity: 0.4 }, hover: { opacity: 0.8 } }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] md:w-[160px] md:h-[160px] lg:w-[240px] lg:h-[240px] xl:w-[300px] xl:h-[300px] bg-blue-500/20 dark:bg-blue-400/30 rounded-full blur-[20px] sm:blur-[30px] md:blur-[50px] lg:blur-[70px] xl:blur-[80px] z-[2]"
            />
            <motion.div
              variants={{
                idle: { scale: 1.2, x: -5, y: -5 },
                hover: { scale: 1, y: -5 }
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative z-[4] w-[160px] h-[220px] sm:w-[260px] sm:h-[340px] md:w-[340px] md:h-[440px] lg:w-[440px] lg:h-[540px] xl:w-[500px] xl:h-[600px] flex justify-center items-end"
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
          className="order-last lg:order-first flex flex-col items-center lg:items-start gap-2 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 lg:col-span-7"
        >
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] xl:text-[5.5rem] font-black tracking-tighter mb-1 sm:mb-2 lg:mb-3 xl:mb-4 text-slate-900 dark:text-white leading-tight lg:leading-none">
              {name}<span className="text-blue-500">.</span>
            </h1>
            <div className="h-6 sm:h-8 md:h-10 lg:h-10 xl:h-12 overflow-hidden mt-1 flex items-center justify-center lg:justify-start w-full">
              <AnimatePresence mode="wait">
                <motion.h2
                  key={roleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="text-sm sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 whitespace-nowrap"
                >
                  {HERO_ROLES[roleIndex]}
                </motion.h2>
              </AnimatePresence>
            </div>
          </div>
          
          <p className="text-xs sm:text-sm md:text-sm lg:text-base xl:text-xl text-slate-600 dark:text-gray-400 max-w-2xl leading-relaxed px-2 lg:px-0">
            {intro}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-2 md:mt-3 xl:mt-4 w-full sm:w-auto px-4 lg:px-0">
            <motion.a 
              href="#resume-contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto justify-center px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg hover:bg-slate-800 dark:hover:bg-gray-200 transition-colors flex items-center gap-2 sm:gap-3 shadow-xl"
            >
              View Resume <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            </motion.a>
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto justify-center px-4 sm:px-5 md:px-6 lg:px-7 xl:px-8 py-2 sm:py-2.5 md:py-3 lg:py-3.5 xl:py-4 rounded-full bg-black/5 dark:bg-white/5 backdrop-blur-md border border-black/10 dark:border-white/10 text-slate-900 dark:text-white text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex"
            >
              Featured Work
            </motion.a>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center justify-center lg:justify-start gap-2 sm:gap-3 mt-4 md:mt-6 lg:mt-8 xl:mt-12 p-2 sm:p-3 md:p-3.5 lg:p-4 xl:p-5 rounded-xl sm:rounded-2xl bg-black/5 dark:bg-black/40 border border-black/10 dark:border-white/5 w-fit backdrop-blur-xl mx-auto lg:mx-0"
          >
            <Terminal className="text-blue-500 dark:text-blue-400 shrink-0 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5" />
            <span className="text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-slate-700 dark:text-gray-300 font-mono">
              {status}
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}