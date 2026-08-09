"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import {EDUCATION_DATA} from "@/data";

const DOT_COLORS = [
  "bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]",
  "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]",
  "bg-teal-500 shadow-[0_0_10px_rgba(20,184,166,0.8)]",
];

const TEXT_COLORS = [
  "text-sky-500 dark:text-sky-400",
  "text-purple-500 dark:text-purple-400",
  "text-teal-500 dark:text-teal-400",
];

export default function Education() {
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
    springScroll, [0, 0.5, 1], ["#0ea5e9", "#a855f7", "#14b8a6"]
  );

  const slideUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="education" className="py-20 -m-15 lg:py-32 w-[90%] lg:w-[75%] mx-auto overflow-visible relative">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 lg:gap-12 relative items-start">
        
        <div className="w-full lg:col-span-4 lg:col-start-9 lg:order-last h-full relative mb-10 lg:mb-0">
          <div className="sticky top-24 lg:top-32 flex flex-col items-start lg:items-end text-left lg:text-right mb-0">
            <h2 className="text-4xl lg:text-6xl font-heading font-black text-slate-900 dark:text-white flex items-center gap-4 mb-2">
              Education
            </h2>
            <p className="font-mono text-xs lg:text-sm text-sky-500 uppercase tracking-widest mt-2 font-bold">
              // Academic_Background
            </p>
            <p className="text-slate-600 dark:text-slate-400 text-sm lg:text-base mt-4 max-w-xs">
              My formal education journey, foundational learning, and degree progression.
            </p>
          </div>
        </div>

        <div className="w-full lg:col-span-7 relative lg:order-first" ref={containerRef}>
          
          <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-slate-200 dark:bg-slate-800 rounded-full z-0" />

          <motion.div
            className="block absolute left-[7px] top-2 w-[2px] rounded-full origin-top z-0"
            style={{ height: lineHeight, backgroundColor: lineColor }}
          />

          <div className="flex flex-col gap-12 relative z-10 pb-8 mt-0">
            {EDUCATION_DATA.map((item, idx) => (
              <motion.div 
                key={idx} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, margin: "-100px" }} 
                variants={slideUp} 
                className="relative pl-8 lg:pl-12"
              >
                <div className={`absolute left-0 top-[6px] w-4 h-4 rounded-full ${DOT_COLORS[idx % DOT_COLORS.length]} border-2 border-white dark:border-[#0a0a0a] z-10`} />
                
                <div className="bg-transparent">
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                    {item.degree}
                  </h3>
                  <p className={`text-base lg:text-lg font-medium mt-1 mb-4 ${TEXT_COLORS[idx % TEXT_COLORS.length]}`}>
                    {item.institution}
                  </p>
                  
                  {item.points && (
                    <div className="space-y-2 lg:space-y-3">
                      {item.points.map((point, i) => (
                        <p key={i} className="text-slate-600 dark:text-slate-400 text-sm lg:text-base leading-relaxed">
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