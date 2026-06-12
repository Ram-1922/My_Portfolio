"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import { EXPERIENCE_DATA } from "@/data";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const springScroll = useSpring(scrollYProgress, {
    stiffness: 100, damping: 30, restDelta: 0.001
  });

  const lineHeight = useTransform(springScroll, [0, 1], ["0%", "100%"]);
  const lineColor = useTransform(
    springScroll, [0, 0.5, 1], ["#a855f7", "#0ea5e9", "#10b981"]
  );

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="experience" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto overflow-visible relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative items-start">
        
        <div className="lg:col-span-4 h-full relative">
          <div className="static lg:sticky top-20 md:top-24 lg:top-28 xl:top-32 flex flex-col items-center lg:items-start text-center lg:text-left mb-2 sm:mb-4 lg:mb-0">
            {/* THE FIX: Scaled down heading sizes from text-7xl */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-heading font-black text-slate-900 dark:text-white flex items-center gap-2 sm:gap-3 md:gap-4 mb-1 sm:mb-2">
              Experience
            </h2>
            <p className="font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-purple-500 uppercase tracking-widest mt-1 sm:mt-2 font-bold">
              // Work_History
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-[10px] sm:text-xs md:text-sm lg:text-base mt-2 sm:mt-3 md:mt-4 max-w-xs">
              A chronological timeline of my professional experience, internships, and technical learning.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 relative" ref={containerRef}>
          
          <div className="absolute left-[3px] sm:left-[5px] md:left-[7px] top-2 bottom-2 w-[1px] sm:w-[1.5px] md:w-[2px] bg-slate-200 dark:bg-slate-800 rounded-full z-0" />
          <div className="block lg:hidden absolute left-[3px] sm:left-[5px] md:left-[7px] top-2 bottom-2 w-[1px] sm:w-[1.5px] md:w-[2px] bg-gradient-to-b from-purple-500 via-sky-500 to-emerald-500 rounded-full z-0" />

          <motion.div
            className="hidden lg:block absolute left-[7px] top-2 w-[2px] rounded-full origin-top z-0"
            style={{ height: lineHeight, backgroundColor: lineColor }}
          />

          <div className="flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-12 relative z-10 pb-4 sm:pb-6 md:pb-8 mt-4 lg:mt-0">
            {EXPERIENCE_DATA.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={slideUp} 
                className="relative pl-5 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12"
              >
                <div className={`absolute left-[-2px] sm:left-[-1px] md:left-0 top-[3px] sm:top-[4px] md:top-[6px] w-2 h-2 sm:w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)] border-2 border-white dark:border-[#0a0a0a] z-10`} />
                
                <div className="bg-transparent">
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    {item.role}
                  </h3>
                  <p className={`text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg font-medium mt-0.5 sm:mt-1 mb-1 sm:mb-2 md:mb-3 lg:mb-4 text-purple-500 dark:text-purple-400`}>
                    {item.company}
                  </p>
                  
                  {item.points && (
                    <div className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-3">
                      {item.points.map((point, i) => (
                        <p key={i} className="text-slate-600 dark:text-slate-400 text-[9px] sm:text-[10px] md:text-xs lg:text-sm xl:text-base leading-relaxed">
                          {point}
                        </p>
                      ))}
                    </div>
                  )}
                  
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}