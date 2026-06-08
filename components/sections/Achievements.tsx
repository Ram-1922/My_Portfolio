"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ACHIEVEMENTS_DATA } from "@/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 lg:py-32 w-[90%] lg:w-[75%] mx-auto relative flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
      
      <div className="w-full lg:w-1/3 static lg:sticky top-24 lg:top-32 z-10 order-first lg:order-last mb-4 lg:mb-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="text-center lg:text-right"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black mb-4 lg:mb-6 text-slate-900 dark:text-white flex flex-row lg:flex-row-reverse items-center justify-center lg:justify-start gap-4">
            Achievements 
          </h2>
          <p className="font-mono text-xs sm:text-sm text-sky-600 dark:text-sky-400 uppercase tracking-widest font-bold mb-4">
            // Milestones_&_Honors
          </p>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-400 font-medium leading-relaxed">
            A chronological timeline of competition victories, hackathon milestones, and continuous technical growth.
          </p>
        </motion.div>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col gap-12 lg:gap-[15vh] pb-[5vh] lg:pb-[10vh] order-last lg:order-first relative z-20">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="static lg:sticky shadow-xl dark:shadow-black/80 rounded-[2rem] lg:rounded-[3rem] z-10"
            style={{ 
              top: `calc(8rem + ${idx * 2.5}rem)` 
            }}
          >
            <div className="bg-white/95 dark:bg-[#08080a] backdrop-blur-2xl border border-sky-500/20 dark:border-white/10 rounded-[2rem] lg:rounded-[3rem] p-6 sm:p-8 lg:p-14 flex flex-col justify-between group relative w-full overflow-hidden transition-all duration-500 hover:border-sky-500 dark:hover:border-sky-500/50">
              
              <div className="absolute top-0 right-0 w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-sky-500/20 to-sky-500/10 dark:from-sky-500/15 dark:to-sky-500/10 rounded-full blur-[60px] lg:blur-[80px] group-hover:scale-125 transition-transform duration-700 -z-10" />

              <div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <div className="p-2 sm:p-3 rounded-2xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 shadow-sm">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 px-3 py-1.5 rounded-full border border-sky-200 dark:border-sky-500/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-2 lg:mb-3 text-slate-900 dark:text-white group-hover:text-sky-500 transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-300 mb-6 lg:mb-8 flex items-center gap-2 font-medium">
                  <Sparkles size={18} className="text-sky-500 hidden sm:block shrink-0" />
                  {item.subtitle}
                </p>
                
                <ul className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
                  {item.points.map((point, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm sm:text-base lg:text-lg text-slate-700 dark:text-gray-300 gap-3 lg:gap-4 font-medium bg-sky-500/5 dark:bg-white/5 p-3 lg:p-4 rounded-2xl border border-sky-500/10 dark:border-white/5">
                      <span className="w-2 h-2 lg:w-2.5 lg:h-2.5 mt-1.5 lg:mt-2 shrink-0 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]" /> 
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-2 lg:gap-3 pt-5 lg:pt-6 border-t border-sky-500/20 dark:border-white/10 mt-auto">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="font-mono text-xs lg:text-sm font-bold px-3 py-1.5 lg:px-4 lg:py-2 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-xl border border-sky-500/20">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}