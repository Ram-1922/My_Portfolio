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
    <section id="experience" className="py-20 lg:py-32 w-[90%] lg:w-[75%] mx-auto overflow-visible relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative items-start">
        
        <div className="lg:col-span-4 h-full relative">
          <div className="static lg:sticky lg:top-1/3 flex flex-col items-start text-left mb-4 lg:mb-0">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-slate-900 dark:text-white flex items-center gap-4 mb-2">
              Experience
            </h2>
            <p className="font-mono text-xs sm:text-sm text-purple-500 uppercase tracking-widest mt-2 font-bold">
              // Work_History
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-4 max-w-xs">
              A chronological timeline of my professional experience, internships, and technical learning.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:col-start-6 relative" ref={containerRef}>
          
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-slate-800 rounded-full z-0" />
          <div className="block lg:hidden absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-purple-500 via-sky-500 to-emerald-500 rounded-full z-0" />

          <motion.div
            className="hidden lg:block absolute left-[7px] top-2 w-[2px] rounded-full origin-top z-0"
            style={{ height: lineHeight, backgroundColor: lineColor }}
          />

          <div className="flex flex-col gap-10 lg:gap-12 relative z-10 pb-8 mt-4 lg:mt-0">
            {EXPERIENCE_DATA.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={slideUp} 
                className="relative pl-8 md:pl-12"
              >
                <div className={`absolute left-0 top-[6px] w-4 h-4 rounded-full ${item.dotColor} border-2 border-white dark:border-[#0a0a0a] z-10`} />
                
                <div className="bg-transparent">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    {item.role}
                  </h3>
                  <p className={`text-sm sm:text-base md:text-lg font-medium mt-1 mb-4 ${item.subColor}`}>
                    {item.company}
                  </p>
                  <div className="space-y-2 lg:space-y-3">
                    {item.points.map((point, i) => (
                      <p key={i} className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}