"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { ACHIEVEMENTS_DATA } from "@/data";

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto relative flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-20 items-start">

      {/* Heading Section */}
      <div className="w-full lg:w-1/3 static lg:sticky top-20 md:top-24 lg:top-28 xl:top-32 z-10 order-first lg:order-last mb-2 sm:mb-4 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
          className="text-center lg:text-right"
        >
          {/* Maintained the requested large heading sizes */}
          <h2 className="text-[clamp(1.75rem,3.5vw,3.5rem)] font-heading font-black mb-2 sm:mb-3 md:mb-4 text-slate-900 dark:text-white flex flex-row lg:flex-row-reverse items-center justify-center lg:justify-start gap-2 sm:gap-3 md:gap-4">
            Achievements
          </h2>
          <p className="font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-sky-600 dark:text-sky-400 uppercase tracking-widest font-bold mb-2 sm:mb-3 md:mb-4">
            // Milestones_&_Honors
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl text-slate-600 dark:text-gray-400 font-medium leading-relaxed">
            A chronological timeline of competition victories, hackathon milestones, and continuous technical growth.
          </p>
        </motion.div>
      </div>

      {/* Cards Section */}
      <div className="w-full lg:w-2/3 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[15vh] pb-[5vh] lg:pb-[10vh] order-last lg:order-first relative z-20">
        {ACHIEVEMENTS_DATA.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="static lg:sticky top-20 md:top-24 lg:top-28 xl:top-32 shadow-xl dark:shadow-black/80 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] z-10"
          >
            {/* Height and padding optimized so content never cuts off at the bottom on laptops */}
            <div className="bg-white/95 dark:bg-[#08080a] backdrop-blur-2xl border border-sky-500/20 dark:border-white/10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-4 sm:p-5 md:p-6 lg:p-7 xl:p-10 flex flex-col justify-between group relative w-full h-auto md:min-h-[360px] lg:h-[460px] xl:h-[540px] overflow-hidden transition-all duration-500 hover:border-sky-500 dark:hover:border-sky-500/50">

              <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64 bg-gradient-to-br from-sky-500/20 to-sky-500/10 dark:from-sky-500/15 dark:to-sky-500/10 rounded-full blur-[40px] sm:blur-[50px] md:blur-[60px] lg:blur-[70px] xl:blur-[80px] group-hover:scale-125 transition-transform duration-700 -z-10" />

              <div className="flex flex-col">
                <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-4">
                  <div className="p-1 sm:p-1.5 md:p-2 lg:p-2.5 rounded-lg sm:rounded-xl md:rounded-2xl bg-sky-100 dark:bg-sky-500/10 border border-sky-200 dark:border-sky-500/20 shadow-sm">
                    <span className="scale-75 sm:scale-90 md:scale-100 flex">{item.icon}</span>
                  </div>
                  <span className="font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-xs font-bold text-sky-700 dark:text-sky-400 bg-sky-50 dark:bg-sky-500/10 px-2 py-0.5 sm:px-2.5 sm:py-1 md:px-3 md:py-1.5 rounded-full border border-sky-200 dark:border-sky-500/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-[clamp(1rem,2vw,1.875rem)] font-heading font-bold mb-1 sm:mb-1.5 md:mb-2 lg:mb-1 xl:mb-2 text-slate-900 dark:text-white group-hover:text-sky-500 dark:group-hover:text-sky-500 transition-colors">
                  {item.title}
                </h3>

                <p className="text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-lg text-slate-600 dark:text-gray-300 mb-2 sm:mb-3 md:mb-4 lg:mb-3 xl:mb-5 flex items-center gap-1 sm:gap-1.5 md:gap-2 font-medium">
                  <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-sky-500 shrink-0" />
                  {item.subtitle}
                </p>

                <ul className="space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-1.5 xl:space-y-3">
                  {item.points.map((point, fIdx) => (
                    <li key={fIdx} className="flex items-start text-[9px] sm:text-[10px] md:text-xs lg:text-[13px] xl:text-lg text-slate-700 dark:text-gray-300 gap-1.5 sm:gap-2 md:gap-3 font-medium bg-sky-500/5 dark:bg-white/5 p-2 sm:p-2.5 md:p-3 lg:p-2.5 xl:p-4 rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-xl xl:rounded-2xl border border-sky-500/10 dark:border-white/5">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 mt-1 sm:mt-1.5 lg:mt-1.5 xl:mt-2 shrink-0 rounded-full bg-sky-500 shadow-[0_0_10px_rgba(14,165,233,0.8)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap items-center gap-1 sm:gap-1.5 md:gap-2 lg:gap-2 xl:gap-3 pt-2 sm:pt-3 md:pt-4 lg:pt-3 xl:pt-4 border-t border-sky-500/20 dark:border-white/10 mt-auto shrink-0">
                {item.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-sm font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 lg:px-2 lg:py-1 xl:px-4 xl:py-2 bg-sky-500/10 text-sky-600 dark:text-sky-400 rounded-md sm:rounded-lg md:rounded-xl lg:rounded-lg xl:rounded-xl border border-sky-500/20">
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