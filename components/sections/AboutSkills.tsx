"use client";

import { motion, Variants } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data";
import { BrainCircuit, Code2, Database, Sparkles, Flame, Server, HardDrive, Terminal } from "lucide-react";
import { MagicContainer, MagicCard } from "@/components/ui/MagicBento";

const GetSkillIcon = ({ name }: { name: string }) => {
  const n = name.toLowerCase();
  if (n.includes('react') || n.includes('next') || n.includes('tailwind') || n.includes('css') || n.includes('html')) 
    return <Code2 className="text-purple-500 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />;
  if (n.includes('python') || n.includes('ai') || n.includes('gemini') || n.includes('rag') || n.includes('ollama')) 
    return <BrainCircuit className="text-purple-500 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />;
  if (n.includes('node') || n.includes('js') || n.includes('express')) 
    return <Flame className="text-purple-500 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />;
  return <Terminal className="text-purple-500 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5" />;
};

export default function AboutSkills() {
  const { about, skills } = PORTFOLIO_DATA;

  const slideFromLeft: Variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
  };
  const slideFromRight: Variants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
  };
  const slideUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", bounce: 0.4, duration: 0.8 } }
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[75%] mx-auto overflow-hidden">
      <MagicContainer 
        className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-3 gap-3 sm:gap-4 md:gap-5 lg:gap-6 h-auto lg:h-[700px] xl:h-[900px]" 
        enableSpotlight={true} glowColor="168, 85, 247"
      >
        
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideFromLeft} className="lg:col-span-3 lg:row-span-2 h-full">
          <MagicCard enableStars={true} enableTilt={false} clickEffect={true} 
            className="w-full h-full min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-0 !bg-white/95 dark:!bg-white/5 shadow-xl shadow-purple-200/50 dark:shadow-none backdrop-blur-xl !border !border-slate-200 dark:!border-white/10 p-5 sm:p-6 md:p-8 lg:p-10 xl:p-14 rounded-[1.5rem] md:rounded-[2rem] lg:rounded-tl-[3rem] lg:rounded-bl-2xl lg:rounded-tr-2xl lg:rounded-br-2xl relative group overflow-hidden"
          >
            <div className="absolute top-3 sm:top-4 lg:top-6 left-4 sm:left-6 lg:left-8 flex gap-1 sm:gap-1.5 lg:gap-2 z-10 pointer-events-none">
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-red-400 shadow-sm" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-yellow-400 shadow-sm" />
              <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 rounded-full bg-green-400 shadow-sm" />
            </div>

            <div className="absolute -top-12 -right-12 sm:-top-16 sm:-right-16 md:-top-20 md:-right-20 lg:-top-24 lg:-right-24 w-32 h-32 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-purple-300/30 dark:bg-purple-400/10 rounded-full blur-[40px] sm:blur-[60px] md:blur-[70px] lg:blur-[80px] pointer-events-none" />
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-heading font-black mb-4 sm:mb-5 md:mb-6 lg:mb-8 mt-4 sm:mt-5 md:mt-6 lg:mt-8 text-slate-900 dark:text-white flex items-center gap-2 sm:gap-3 lg:gap-4 relative z-10 pointer-events-none">
              {about.heading} <Sparkles className="text-purple-500 animate-pulse w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
            </h3>
            
            <p className="font-mono text-[9px] sm:text-[10px] md:text-xs lg:text-sm text-purple-600 dark:text-purple-400 mb-2 sm:mb-3 lg:mb-4 font-bold relative z-10 pointer-events-none">// ABOUT_ME.md</p>
            
            <div className="space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-[11px] sm:text-xs md:text-sm lg:text-base xl:text-lg text-slate-700 dark:text-gray-300 font-medium leading-relaxed relative z-10 pointer-events-none">
              {about.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </MagicCard>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideFromRight} className="lg:col-span-3 lg:row-span-1 h-full">
           <SkillBox title="Tools & Process" tag="// WORKFLOW" icon={<Terminal className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />} items={skills.tools} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideFromRight} className="lg:col-span-3 lg:row-span-1 h-full">
          <SkillBox title="AI Integrations" tag="// ML_MODELS" icon={<BrainCircuit className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />} items={skills.ai} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideUp} className="lg:col-span-3 lg:row-span-1 h-full">
          <SkillBox title="Frontend & Design" tag="// UI_UX" icon={<Code2 className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />} items={skills.frontend} />
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideUp} className="lg:col-span-3 lg:row-span-1 h-full">
          <SkillBox title="Backend Systems" tag="// SERVER" icon={<HardDrive className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />} items={skills.backend} />
        </motion.div>

      </MagicContainer>
    </section>
  );
}

function SkillBox({ title, tag, icon, items }: { title: string, tag: string, icon: React.ReactNode, items: string[] }) {
  return (
    <MagicCard enableStars={true} enableTilt={false} clickEffect={true} 
      className="w-full h-full !bg-white/95 dark:!bg-white/5 shadow-lg shadow-purple-100/50 dark:shadow-none backdrop-blur-md !border !border-slate-200 dark:!border-white/10 p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2 group overflow-hidden rounded-[1.25rem] md:rounded-2xl"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 !bg-purple-100 dark:!bg-purple-500/15 rounded-bl-[60px] sm:rounded-bl-[80px] lg:rounded-bl-[100px] z-0 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
      
      <div className="flex flex-col mb-3 sm:mb-4 lg:mb-6 relative z-10 pointer-events-none">
        <p className="font-mono text-[8px] sm:text-[9px] md:text-[10px] lg:text-xs text-purple-500 dark:text-purple-400 mb-1.5 sm:mb-2 lg:mb-3 font-bold">{tag}</p>
        <div className="flex items-center gap-2 sm:gap-2.5 lg:gap-3">
          <div className="p-1.5 sm:p-2 lg:p-3 rounded-lg sm:rounded-xl lg:rounded-2xl !bg-purple-100 dark:!bg-purple-500/15 !text-purple-600 dark:!text-purple-400 !border !border-slate-200 dark:!border-white/5 shadow-sm">{icon}</div>
          <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-heading font-bold text-slate-900 dark:text-white leading-tight">{title}</h4>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-1.5 sm:gap-2 lg:gap-3 mt-auto relative z-10">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-1 sm:gap-1.5 lg:gap-2 font-mono px-2 sm:px-2.5 lg:px-3.5 py-0.5 sm:py-1 lg:py-1.5 text-[10px] sm:text-xs md:text-sm lg:text-base font-bold !bg-white dark:!bg-black/40 !border !border-slate-200 dark:!border-white/10 rounded-md sm:rounded-lg lg:rounded-xl text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:!border-purple-300 dark:hover:!border-purple-500/30 hover:scale-105 transition-all cursor-default shadow-sm dark:shadow-none">
            <GetSkillIcon name={item} />
            {item}
          </span>
        ))}
      </div>
    </MagicCard>
  );
}