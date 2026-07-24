"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data";
import { ExternalLink, Server, GitBranch } from "lucide-react";

const GithubIcon = ({ className = "w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto relative flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-16 xl:gap-20 items-start">

      <div className="w-full lg:w-1/3 static lg:sticky top-20 md:top-24 lg:top-28 xl:top-32 z-10 text-center lg:text-left mb-2 sm:mb-4 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-heading font-black mb-2 sm:mb-3 md:mb-4 text-slate-900 dark:text-white">Featured Work</h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-base xl:text-xl text-slate-600 dark:text-gray-400 font-medium leading-relaxed">
            Selected projects demonstrating AI integration, intelligent state management, and full-stack architecture.
          </p>
        </motion.div>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col gap-6 sm:gap-8 md:gap-10 lg:gap-[15vh] pb-[5vh] lg:pb-[10vh]">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            // THE FIX: Perfect overlapping coordinates.
            className="static lg:sticky top-20 md:top-24 lg:top-28 xl:top-32 shadow-xl dark:shadow-black/80 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] z-10"
          >
            {/* THE FIX: Highly responsive fitted heights to prevent bottom cutoff on small laptops */}
            <div className="bg-white/95 dark:bg-[#08080a] backdrop-blur-2xl border border-[#0fbcff]/20 dark:border-white/10 rounded-[1.5rem] sm:rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 flex flex-col justify-between group relative w-full h-auto md:min-h-[380px] lg:h-[460px] xl:h-[560px] overflow-hidden transition-all duration-500 hover:border-[#0fbcff] dark:hover:border-[#0fbcff]/50">

              <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-80 xl:h-80 bg-gradient-to-br from-[#0fbcff]/40 to-[#0fbcff]/30 dark:from-[#0fbcff]/15 dark:to-[#0fbcff]/15 rounded-full blur-[50px] sm:blur-[60px] md:blur-[70px] lg:blur-[80px] xl:blur-[100px] group-hover:scale-125 transition-transform duration-700 -z-10" />

              <div className="flex flex-col">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-heading font-bold mb-1.5 sm:mb-2 md:mb-3 text-slate-900 dark:text-white group-hover:text-[#0fbcff] dark:group-hover:text-[#0fbcff] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-sm xl:text-lg text-slate-600 dark:text-gray-300 mb-3 sm:mb-4 md:mb-5 leading-relaxed max-w-3xl font-medium">
                  {project.description}
                </p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 md:gap-3 mb-2 md:mb-3">
                  {project.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start lg:items-center text-[9px] sm:text-[10px] md:text-xs lg:text-xs xl:text-base text-slate-700 dark:text-gray-300 gap-1.5 sm:gap-2 md:gap-3 font-medium bg-[#0fbcff]/10 dark:bg-white/5 p-2 sm:p-2.5 md:p-3 rounded-lg sm:rounded-xl md:rounded-2xl border border-[#0fbcff]/20 dark:border-white/5">
                      <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 mt-1 lg:mt-0 shrink-0 rounded-full bg-[#0fbcff] shadow-[0_0_10px_rgba(15,188,255,0.8)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 sm:gap-4 md:gap-5 pt-3 sm:pt-4 md:pt-5 border-t border-[#0fbcff]/20 dark:border-white/10 mt-auto shrink-0">
                <div className="flex flex-wrap gap-1 sm:gap-1.5 md:gap-2 lg:gap-3">
                  {project.stack.map((tech, tIdx) => (
                    <span key={tIdx} className="font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs xl:text-sm font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 bg-[#0fbcff]/10 text-[#0fbcff] rounded-md sm:rounded-lg md:rounded-xl border border-[#0fbcff]/20">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* ================================================= */}
                {/* UPGRADED CS PROJECT BUTTONS                       */}
                {/* ================================================= */}
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 shrink-0 mt-3 sm:mt-0">
                  
                  {/* SOURCE CODE: Git Branch Style */}
                  <a 
                    href={project.github || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 font-mono text-[9px] sm:text-[10px] md:text-xs font-bold hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all shadow-[0_0_15px_rgba(168,85,247,0.05)] w-full sm:w-auto"
                  >
                    <GitBranch className="w-3 h-3 sm:w-4 sm:h-4 text-purple-500 dark:text-purple-400 group-hover:text-purple-800 dark:group-hover:text-purple-300 transition-colors" /> 
                    <span>src_code</span>
                  </a>

                  {/* LIVE DEPLOYMENT: Production Server Status Style */}
                  <a 
                    href={project.live || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="group relative flex items-center justify-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-md bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 font-mono text-[9px] sm:text-[10px] md:text-xs font-bold hover:bg-blue-100 dark:hover:bg-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all shadow-[0_0_15px_rgba(59,130,246,0.15)] w-full sm:w-auto overflow-hidden"
                  >
                    {/* Blinking Server Status Dot */}
                    <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 sm:h-2.5 sm:w-2.5 bg-blue-500"></span>
                    </span>
                    
                    <span className="relative z-10">Live</span>
                  </a>
                </div>
                {/* ================================================= */}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}