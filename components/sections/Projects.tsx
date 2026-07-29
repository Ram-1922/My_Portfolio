"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data";
import { ExternalLink, Server, GitBranch } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 w-[90%] lg:w-[75%] mx-auto relative flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">

      <div className="w-full lg:w-1/3 relative lg:sticky lg:top-32 z-10 text-left mb-4 lg:mb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", bounce: 0.4 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-black mb-4 text-slate-900 dark:text-white leading-tight">Featured Work</h2>
          <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-gray-400 font-medium leading-relaxed">
            Selected projects demonstrating AI integration, intelligent state management, and full-stack architecture.
          </p>
        </motion.div>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col gap-10 lg:gap-[15vh] pb-[5vh] lg:pb-[10vh] relative z-20">
        {PORTFOLIO_DATA.projects.map((project, idx) => {
          // Check if the project has a valid live link
          const isLiveAvailable = project.live && project.live !== "#" && project.live !== "";

          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative lg:sticky lg:top-32 shadow-xl dark:shadow-black/80 rounded-2xl lg:rounded-[3rem] z-10"
            >
              <div className="bg-white/95 dark:bg-[#08080a] backdrop-blur-2xl border border-[#0fbcff]/20 dark:border-white/10 rounded-2xl lg:rounded-[3rem] p-6 sm:p-8 lg:p-10 flex flex-col justify-between group relative w-full min-h-fit lg:min-h-[560px] overflow-hidden transition-all duration-500 hover:border-[#0fbcff] dark:hover:border-[#0fbcff]/50">

                <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-[#0fbcff]/40 to-[#0fbcff]/30 dark:from-[#0fbcff]/15 dark:to-[#0fbcff]/15 rounded-full blur-[100px] group-hover:scale-125 transition-transform duration-700 -z-10" />

                <div className="flex flex-col mb-8 lg:mb-0">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold mb-3 text-slate-900 dark:text-white group-hover:text-[#0fbcff] dark:group-hover:text-[#0fbcff] transition-colors leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-gray-300 mb-5 leading-relaxed max-w-3xl font-medium">
                    {project.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-3">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start lg:items-center text-xs sm:text-sm lg:text-base text-slate-700 dark:text-gray-300 gap-3 font-medium bg-[#0fbcff]/10 dark:bg-white/5 p-3 rounded-xl lg:rounded-2xl border border-[#0fbcff]/20 dark:border-white/5">
                        <span className="w-1.5 h-1.5 lg:w-2 lg:h-2 mt-1.5 lg:mt-0 shrink-0 rounded-full bg-[#0fbcff] shadow-[0_0_10px_rgba(15,188,255,0.8)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-5 pt-5 border-t border-[#0fbcff]/20 dark:border-white/10 mt-auto shrink-0 w-full">
                  <div className="flex flex-wrap gap-2 lg:gap-3">
                    {project.stack.map((tech, tIdx) => (
                      <span key={tIdx} className="font-mono text-[10px] sm:text-xs lg:text-sm font-bold px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 bg-[#0fbcff]/10 text-[#0fbcff] rounded-lg lg:rounded-xl border border-[#0fbcff]/20 whitespace-nowrap">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-row flex-wrap gap-3 shrink-0 mt-2 xl:mt-0 w-full xl:w-auto">
                    <a 
                      href={project.github || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex-1 xl:flex-none group flex items-center justify-center gap-1.5 lg:gap-2 px-3 lg:px-5 py-2 lg:py-2.5 rounded-md bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/30 text-purple-700 dark:text-purple-400 font-mono text-[10px] lg:text-xs font-bold hover:bg-purple-100 dark:hover:bg-purple-500/20 hover:border-purple-300 dark:hover:border-purple-500/50 transition-all shadow-[0_0_15px_rgba(168,85,247,0.05)] w-auto"
                    >
                      <GitBranch className="w-3 h-3 lg:w-4 lg:h-4 text-purple-500 dark:text-purple-400 group-hover:text-purple-800 dark:group-hover:text-purple-300 transition-colors" /> 
                      <span>src_code</span>
                    </a>

                    <a 
                      href={isLiveAvailable ? project.live : "#"} 
                      target={isLiveAvailable ? "_blank" : undefined} 
                      rel={isLiveAvailable ? "noopener noreferrer" : undefined}
                      onClick={(e) => {
                        // Prevent navigation and show alert if no valid live link exists
                        if (!isLiveAvailable) {
                          e.preventDefault();
                          alert("Status: Offline.\nThe live deployment for this project will be available soon.");
                        }
                      }}
                      className={`flex-1 xl:flex-none group relative flex items-center justify-center gap-1.5 lg:gap-2 px-3 lg:px-5 py-2 lg:py-2.5 rounded-md font-mono text-[10px] lg:text-xs font-bold transition-all w-auto overflow-hidden
                        ${isLiveAvailable 
                          ? "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-500/20 hover:border-blue-300 dark:hover:border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.15)]" 
                          : "bg-slate-50 dark:bg-slate-500/10 border-slate-200 dark:border-slate-500/30 text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-500/20 cursor-not-allowed"}
                      `}
                    >
                      <span className="relative flex h-2 w-2 lg:h-2.5 lg:w-2.5">
                        <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${isLiveAvailable ? 'animate-ping bg-blue-400' : 'bg-slate-400'}`}></span>
                        <span className={`relative inline-flex rounded-full h-2 w-2 lg:h-2.5 lg:w-2.5 ${isLiveAvailable ? 'bg-blue-500' : 'bg-slate-500'}`}></span>
                      </span>
                      <span className="relative z-10">Live</span>
                    </a>
                  </div>
                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}