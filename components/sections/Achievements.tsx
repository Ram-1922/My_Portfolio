"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ACHIEVEMENTS_DATA } from "@/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 -mb-15  lg:py-32 w-[90%] lg:w-[75%] mx-auto relative flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">

      {/* order-first ensures it is on top for mobile, lg:order-last moves it to the right on desktop */}
      <div className="w-full lg:w-1/3 relative lg:sticky lg:top-32 z-10 order-first lg:order-last mb-2 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="text-left lg:text-right"
        >
          <h2 className="text-4xl select-none sm:text-5xl lg:text-[clamp(2.5rem,4vw,3.5rem)] font-heading font-black mb-3 lg:mb-4 text-slate-900 dark:text-white flex flex-row lg:flex-row-reverse items-center justify-start gap-4 leading-tight">
            Achievements
          </h2>
          <p className="font-mono select-none text-xs sm:text-sm text-sky-600 dark:text-sky-400 uppercase tracking-widest font-bold mb-4">
            // Milestones_&_Honors
          </p>
          <p className="text-base select-none sm:text-lg lg:text-xl text-slate-600 dark:text-gray-400 font-medium leading-relaxed">
            A chronological timeline of competition victories, hackathon milestones, and continuous technical growth.
          </p>
        </motion.div>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col gap-10 lg:gap-[15vh] pb-[5vh] lg:pb-[10vh] relative z-20">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative lg:sticky lg:top-32 shadow-xl dark:shadow-black/80 rounded-2xl lg:rounded-[3rem] z-10"
          >
            <div className="bg-white/95 dark:bg-[#08080a] backdrop-blur-2xl border border-sky-500/20 dark:border-white/10 rounded-2xl lg:rounded-[3rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-between group relative w-full min-h-fit lg:min-h-[540px] overflow-hidden transition-all duration-500 hover:border-sky-500 dark:hover:border-sky-500/50">

              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-sky-500/20 to-sky-500/10 dark:from-sky-500/15 dark:to-sky-500/10 rounded-full blur-[80px] group-hover:scale-125 transition-transform duration-700 -z-10" />

              <div className="flex flex-col mb-8 lg:mb-0">
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
                  <div className="p-2 sm:p-2.5 rounded-xl sm:rounded-2xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 shadow-sm">
                    <span className="scale-75 sm:scale-100 flex">{item.icon}</span>
                  </div>
                  <span className="font-mono text-[10px] sm:text-xs font-bold text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full border border-sky-200 dark:border-sky-500/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-[clamp(1.5rem,2vw,1.875rem)] font-heading font-bold mb-2 text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-500 transition-colors leading-tight">
                  {item.title}
                </h3>

                <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-gray-300 mb-5 flex items-start lg:items-center gap-2 font-medium">
                  <Sparkles className="w-4 h-4 text-sky-500 shrink-0 mt-0.5 lg:mt-0" />
                  {item.subtitle}
                </p>

                <ul className="space-y-2 sm:space-y-3">
                  {item.points.map((point, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm sm:text-base lg:text-lg text-slate-700 dark:text-gray-300 gap-3 font-medium bg-sky-500/5 dark:bg-white/5 p-3 sm:p-4 rounded-xl lg:rounded-2xl border border-sky-500/10 dark:border-white/5">
                      <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 mt-1.5 lg:mt-2 shrink-0 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-2 lg:gap-3 pt-5 border-t border-sky-500/20 dark:border-white/10 mt-auto shrink-0">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="font-mono text-[10px] sm:text-xs lg:text-sm font-bold px-2.5 py-1 sm:px-4 sm:py-2 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-lg lg:rounded-xl border border-sky-500/20">
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