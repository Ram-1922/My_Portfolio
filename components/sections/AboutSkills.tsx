"use client";

import { motion, Variants } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data";
import { BrainCircuit, Code2, Database, Sparkles, Flame, Server, HardDrive, Terminal } from "lucide-react";
import { MagicContainer, MagicCard } from "@/components/ui/MagicBento";

const NeuralNetworkBg = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20 opacity-40 dark:opacity-20 flex items-center justify-center">
      <motion.svg 
        viewBox="0 0 800 600" 
        className="w-full h-full max-w-[1200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <motion.path 
          d="M 200,150 L 400,250 L 600,150 L 500,400 L 300,400 Z M 400,250 L 400,400 M 200,150 L 300,400 M 600,150 L 500,400" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          fill="none" 
          className="text-purple-500/30"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        />
        {[
          { cx: 200, cy: 150, delay: 0 },
          { cx: 400, cy: 250, delay: 1 },
          { cx: 600, cy: 150, delay: 2 },
          { cx: 500, cy: 400, delay: 3 },
          { cx: 300, cy: 400, delay: 4 },
          { cx: 400, cy: 400, delay: 5 },
        ].map((node, i) => (
          <motion.circle 
            key={i}
            cx={node.cx} 
            cy={node.cy} 
            r="6" 
            className="fill-purple-500"
            animate={{ 
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
              filter: ["blur(0px)", "blur(4px)", "blur(0px)"]
            }}
            transition={{ duration: 4, delay: node.delay, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.svg>
    </div>
  );
};

const GetSkillIcon = ({ name }: { name: string }) => {
  const n = name.toLowerCase();
  if (n.includes('react') || n.includes('next') || n.includes('tailwind') || n.includes('css') || n.includes('html')) 
    return <Code2 className="text-purple-500 w-4 h-4 lg:w-5 lg:h-5" />;
  if (n.includes('python') || n.includes('ai') || n.includes('gemini') || n.includes('rag') || n.includes('ollama')) 
    return <BrainCircuit className="text-purple-500 w-4 h-4 lg:w-5 lg:h-5" />;
  if (n.includes('node') || n.includes('js') || n.includes('express')) 
    return <Flame className="text-purple-500 w-4 h-4 lg:w-5 lg:h-5" />;
  if (n.includes('mongo') || n.includes('mysql') || n.includes('sql')) 
    return <Database className="text-purple-500 w-4 h-4 lg:w-5 lg:h-5" />;
    
  return <Terminal className="text-purple-500 w-4 h-4 lg:w-5 lg:h-5" />;
};

export default function AboutSkills() {
  const { about, skills } = PORTFOLIO_DATA;
  const SKILLS_DBMS = ["MongoDB", "MySQL"];

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
    <section id="skills" className="py-20 lg:py-32 w-[90%] lg:w-[75%] mx-auto overflow-hidden relative">
      <NeuralNetworkBg />
      <MagicContainer 
        className="flex flex-col lg:grid lg:grid-cols-6 lg:grid-rows-3 gap-6 lg:h-[900px] relative z-10" 
        enableSpotlight={true} 
        glowColor="168, 85, 247"
      >
        
        {/* ========================================= */}
        {/* DESKTOP LAYOUT (Hidden on mobile)         */}
        {/* ========================================= */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideFromLeft} className="hidden lg:block w-full lg:col-span-3 lg:row-span-2 h-full">
          <MagicCard enableStars={true} enableTilt={false} clickEffect={true} 
            className="w-full h-full !bg-white/95 dark:!bg-white/5 shadow-xl shadow-purple-200/50 dark:shadow-none backdrop-blur-xl !border !border-slate-200 dark:!border-white/10 p-12 rounded-tl-[3rem] rounded-bl-2xl rounded-tr-2xl rounded-br-2xl relative group overflow-hidden"
          >
            <div className="absolute top-8 left-10 flex gap-2 z-10 pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm" />
            </div>

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-300/30 dark:bg-purple-400/10 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-5xl font-heading font-black mb-8 mt-6 text-slate-900 dark:text-white flex items-center gap-4 relative z-10 pointer-events-none leading-tight">
              {about.heading} <Sparkles className="text-purple-500 animate-pulse w-10 h-10 shrink-0" />
            </h3>
            
            <p className="font-mono text-sm text-purple-600 dark:text-purple-400 mb-4 font-bold relative z-10 pointer-events-none">// ABOUT_ME.md</p>
            
            <div className="space-y-6 text-lg text-slate-700 dark:text-gray-300 font-medium leading-relaxed relative z-10 pointer-events-none pr-6">
              {about.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </MagicCard>
        </motion.div>

        {/* ========================================= */}
        {/* MOBILE LAYOUT (Hidden on desktop)         */}
        {/* ========================================= */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideFromLeft} className="block lg:hidden w-full h-auto relative">
          <div 
            className="w-full h-fit bg-white/95 dark:bg-[#08080a]/95 shadow-xl shadow-purple-200/50 dark:shadow-none backdrop-blur-xl border border-slate-200 dark:border-white/10 p-6 sm:p-8 rounded-3xl relative overflow-hidden flex flex-col"
          >
            <div className="absolute top-4 left-6 flex gap-2 z-10 pointer-events-none">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400 shadow-sm" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shadow-sm" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 shadow-sm" />
            </div>

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-300/30 dark:bg-purple-400/10 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-3xl sm:text-4xl font-heading font-black mb-4 mt-6 text-slate-900 dark:text-white flex items-center gap-3 relative z-10 pointer-events-none leading-tight">
              {about.heading} <Sparkles className="text-purple-500 animate-pulse w-6 h-6 shrink-0" />
            </h3>
            
            <p className="font-mono text-xs text-purple-600 dark:text-purple-400 mb-4 font-bold relative z-10 pointer-events-none">// ABOUT_ME.md</p>
            
            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-gray-300 font-medium leading-relaxed relative z-10 pointer-events-none">
              {about.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </motion.div>


        {/* LANGUAGES */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideFromRight} className="w-full lg:col-span-3 lg:row-span-1 h-auto lg:h-full">
           <SkillBox title="Languages" tag="// WORKFLOW" icon={<Terminal className="w-5 h-5 lg:w-7 lg:h-7" />} items={skills.tools} />
        </motion.div>

        {/* TOOLS & AI */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideFromRight} className="w-full lg:col-span-3 lg:row-span-1 h-auto lg:h-full">
          <SkillBox title="Tools & AI Integrations" tag="// ML_MODELS" icon={<BrainCircuit className="w-5 h-5 lg:w-7 lg:h-7" />} items={skills.ai} />
        </motion.div>

        {/* FRONTEND */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideUp} className="w-full lg:col-span-2 lg:row-span-1 h-auto lg:h-full">
          <SkillBox title="Frontend & Design" tag="// UI_UX" icon={<Code2 className="w-5 h-5 lg:w-7 lg:h-7" />} items={skills.frontend} />
        </motion.div>

        {/* BACKEND */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideUp} className="w-full lg:col-span-2 lg:row-span-1 h-auto lg:h-full">
          <SkillBox title="Backend Systems" tag="// SERVER" icon={<HardDrive className="w-5 h-5 lg:w-7 lg:h-7" />} items={skills.backend} />
        </motion.div>

        {/* DATABASES */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideUp} className="w-full lg:col-span-2 lg:row-span-1 h-auto lg:h-full">
          <SkillBox title="Databases" tag="// DBMS" icon={<Database className="w-5 h-5 lg:w-7 lg:h-7" />} items={SKILLS_DBMS} />
        </motion.div>

      </MagicContainer>
    </section>
  );
}

function SkillBox({ title, tag, icon, items }: { title: string, tag: string, icon: React.ReactNode, items: string[] }) {
  return (
    <MagicCard enableStars={true} enableTilt={false} clickEffect={true} 
      className="w-full h-full min-h-[220px] lg:min-h-0 lg:h-full !bg-white/95 dark:!bg-white/5 shadow-lg shadow-purple-100/50 dark:shadow-none backdrop-blur-md !border !border-slate-200 dark:!border-white/10 p-5 sm:p-6 lg:p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2 group overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 !bg-purple-100 dark:!bg-purple-500/15 rounded-bl-[100px] z-0 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
      
      <div className="flex flex-col mb-4 lg:mb-6 relative z-10 pointer-events-none">
        <p className="font-mono text-[10px] lg:text-xs text-purple-500 dark:text-purple-400 mb-2 lg:mb-3 font-bold">{tag}</p>
        <div className="flex items-center gap-3">
          <div className="p-2.5 lg:p-3 rounded-2xl !bg-purple-100 dark:!bg-purple-500/15 !text-purple-600 dark:!text-purple-400 !border !border-slate-200 dark:!border-white/5 shadow-sm">{icon}</div>
          <h4 className="text-lg sm:text-xl lg:text-2xl font-heading font-bold text-slate-900 dark:text-white leading-tight">{title}</h4>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 lg:gap-3 mt-auto relative z-10">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-1.5 lg:gap-2 font-mono px-2.5 py-1 sm:px-3 sm:py-1.5 lg:px-3.5 lg:py-1.5 text-xs lg:text-sm font-bold !bg-white dark:!bg-black/40 !border !border-slate-200 dark:!border-white/10 rounded-lg lg:rounded-xl text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:!border-purple-300 dark:hover:!border-purple-500/30 hover:scale-105 transition-all cursor-default shadow-sm dark:shadow-none whitespace-nowrap">
            <GetSkillIcon name={item} />
            {item}
          </span>
        ))}
      </div>
    </MagicCard>
  );
}