"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data";
import { ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 w-[90%] lg:w-[75%] mx-auto relative flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
      
      {/* LEFT COLUMN: The Title */}
      <div className="w-full lg:w-1/3 static lg:sticky top-24 lg:top-32 z-10 text-center lg:text-left mb-4 lg:mb-0">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black mb-4 lg:mb-6 text-slate-900 dark:text-white">Featured Work</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-400 font-medium leading-relaxed">
            Selected projects demonstrating AI integration, intelligent state management, and full-stack architecture.
          </p>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: Cards */}
      <div className="w-full lg:w-2/3 flex flex-col gap-12 lg:gap-[15vh] pb-[5vh] lg:pb-[10vh]">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="static lg:sticky shadow-xl dark:shadow-black/80 rounded-[2rem] lg:rounded-[3rem] z-10"
            style={{ top: `calc(8rem + ${idx * 2.5}rem)` }}
          >
            {/* THE FIX: Added lg:h-[600px] to force uniform height so the sticky math works perfectly at the end of the scroll */}
            <div className="bg-white/95 dark:bg-[#08080a] backdrop-blur-2xl border border-[#0fbcff]/20 dark:border-white/10 rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-14 flex flex-col justify-between group relative w-full lg:h-[600px] overflow-hidden transition-all duration-500 hover:border-[#0fbcff] dark:hover:border-[#0fbcff]/50">
              
              <div className="absolute top-0 right-0 w-64 h-64 lg:w-80 lg:h-80 bg-gradient-to-br from-[#0fbcff]/40 to-[#0fbcff]/30 dark:from-[#0fbcff]/15 dark:to-[#0fbcff]/15 rounded-full blur-[80px] lg:blur-[100px] group-hover:scale-125 transition-transform duration-700 -z-10" />

              {/* Added overflow-y-auto so text doesn't break the fixed height */}
              <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar mb-6">
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-heading font-bold mb-4 text-slate-900 dark:text-white group-hover:text-[#0fbcff] transition-colors">{project.title}</h3>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-300 mb-8 lg:mb-10 leading-relaxed max-w-3xl font-medium">{project.description}</p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start lg:items-center text-sm sm:text-base lg:text-lg text-slate-700 dark:text-gray-300 gap-3 font-medium bg-[#0fbcff]/10 dark:bg-white/5 p-4 rounded-2xl border border-[#0fbcff]/20 dark:border-white/5">
                      <span className="w-2.5 h-2.5 mt-1 lg:mt-0 shrink-0 rounded-full bg-[#0fbcff] shadow-[0_0_10px_rgba(15,188,255,0.8)]" /> 
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom Buttons - forced to the bottom using mt-auto */}
              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6 pt-6 lg:pt-8 border-t border-[#0fbcff]/20 dark:border-white/10 mt-auto shrink-0">
                <div className="flex flex-wrap gap-2 lg:gap-3">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="font-mono text-xs lg:text-sm font-bold px-3 py-1.5 lg:px-4 lg:py-2 bg-[#0fbcff]/10 text-[#0fbcff] rounded-xl border border-[#0fbcff]/20">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                  <a href={project.github || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-900 dark:text-white font-bold hover:bg-slate-200 transition-colors w-full sm:w-auto">
                    <GithubIcon size={20} /> Code
                  </a>
                  <a href={project.live || "#"} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#0fbcff] text-white font-bold hover:bg-[#0fbcff]/80 transition-colors shadow-lg shadow-[#0fbcff]/30 w-full sm:w-auto">
                    <ExternalLink size={20} /> Live
                  </a>
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}