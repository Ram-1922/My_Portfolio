"use client";

import { motion, Variants } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data";
import { BrainCircuit, Code2, Database, Sparkles, Flame, Server, HardDrive, Terminal } from "lucide-react";
import { MagicContainer, MagicCard } from "@/components/ui/MagicBento";

// --- UNIFORM PURPLE SVG SKILL LOGOS ---
const GetSkillIcon = ({ name }: { name: string }) => {
  const n = name.toLowerCase();
  // Using a neutral/purple tint for icons to maintain the theme
  if (n.includes('react') || n.includes('next') || n.includes('tailwind') || n.includes('css')) 
    return <Code2 size={18} className="text-purple-500" />;
  if (n.includes('python') || n.includes('ai') || n.includes('gemini') || n.includes('rag')) 
    return <BrainCircuit size={18} className="text-purple-500" />;
  if (n.includes('firebase') || n.includes('node') || n.includes('js')) 
    return <Flame size={18} className="text-purple-500" />;
  if (n.includes('mongo') || n.includes('sql') || n.includes('postgres') || n.includes('server')) 
    return <Database size={18} className="text-purple-500" />;
  
  return <Terminal size={18} className="text-purple-500" />;
};

export default function AboutSkills() {
  const { about, skills } = PORTFOLIO_DATA;

  const dbmsSkills = (skills as any).dbms || ["PostgreSQL", "MongoDB", "MySQL"];
  const toolSkills = ["Git", "GitHub", "VS Code", "Docker", "Vercel"];

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
    <section id="skills" className="py-32 w-[90%] lg:w-[75%] mx-auto overflow-hidden">
      
      <MagicContainer 
        className="grid grid-cols-1 lg:grid-cols-6 lg:grid-rows-3 gap-6 h-auto lg:h-[900px] lg:max-h-[1000px]" 
        enableSpotlight={true} 
        glowColor="168, 85, 247"
      >
        
        {/* ROW 1 & 2 (LEFT): ABOUT ME */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideFromLeft} className="lg:col-span-3 lg:row-span-2 h-full">
          <MagicCard enableStars={true} enableTilt={false} clickEffect={true} 
            className="w-full h-full min-h-[400px] lg:min-h-0 !bg-white/95 dark:!bg-white/5 shadow-xl shadow-purple-200/50 dark:shadow-none backdrop-blur-xl !border !border-slate-200 dark:!border-white/10 p-8 lg:p-14 rounded-[2rem] lg:rounded-tl-[3rem] lg:rounded-bl-2xl lg:rounded-tr-2xl lg:rounded-br-2xl relative group overflow-hidden"
          >
            <div className="absolute top-6 left-8 flex gap-2 z-10 pointer-events-none">
              <div className="w-3 h-3 rounded-full bg-red-400 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-yellow-400 shadow-sm" />
              <div className="w-3 h-3 rounded-full bg-green-400 shadow-sm" />
            </div>

            <div className="absolute -top-24 -right-24 w-64 h-64 bg-purple-300/30 dark:bg-purple-400/10 rounded-full blur-[80px] pointer-events-none" />
            
            <h3 className="text-4xl lg:text-5xl font-heading font-black mb-8 mt-6 text-slate-900 dark:text-white flex items-center gap-4 relative z-10 pointer-events-none">
              {about.heading} <Sparkles className="text-purple-500 animate-pulse" size={36}/>
            </h3>
            
            <p className="font-mono text-sm text-purple-600 dark:text-purple-400 mb-4 font-bold relative z-10 pointer-events-none">// ABOUT_ME.md</p>
            
            <div className="space-y-6 text-lg text-slate-700 dark:text-gray-300 font-medium leading-relaxed relative z-10 pointer-events-none">
              {about.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </MagicCard>
        </motion.div>

        {/* ROW 1 (RIGHT): TOOLS */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideFromRight} className="lg:col-span-3 lg:row-span-1 h-full">
           <SkillBox title="Tools" tag="// WORKFLOW" icon={<Terminal size={28} />} items={toolSkills} />
        </motion.div>

        {/* ROW 2 (RIGHT): AI & DATA */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideFromRight} className="lg:col-span-3 lg:row-span-1 h-full">
          <SkillBox title="AI & Data Arch" tag="// ML_MODELS" icon={<BrainCircuit size={28} />} items={skills.ai} />
        </motion.div>

        {/* ROW 3 (LEFT): FRONTEND */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideUp} className="lg:col-span-2 lg:row-span-1 h-full">
          <SkillBox title="Frontend" tag="// UI_UX" icon={<Code2 size={28} />} items={skills.frontend} />
        </motion.div>

        {/* ROW 3 (MIDDLE): BACKEND */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideUp} className="lg:col-span-2 lg:row-span-1 h-full">
          <SkillBox title="Backend" tag="// SERVER" icon={<HardDrive size={28} />} items={skills.backend} />
        </motion.div>

        {/* ROW 3 (RIGHT): DBMS */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={slideUp} className="lg:col-span-2 lg:row-span-1 h-full">
          <SkillBox title="DBMS" tag="// DATA_STORE" icon={<Server size={28} />} items={dbmsSkills} />
        </motion.div>

      </MagicContainer>
    </section>
  );
}

function SkillBox({ title, tag, icon, items }: { title: string, tag: string, icon: React.ReactNode, items: string[] }) {
  return (
    <MagicCard enableStars={true} enableTilt={false} clickEffect={true} 
      className="w-full h-full !bg-white/95 dark:!bg-white/5 shadow-lg shadow-purple-100/50 dark:shadow-none backdrop-blur-md !border !border-slate-200 dark:!border-white/10 p-6 xl:p-8 flex flex-col transition-transform duration-300 hover:-translate-y-2 group overflow-hidden rounded-2xl"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 !bg-purple-100 dark:!bg-purple-500/15 rounded-bl-[100px] z-0 opacity-50 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />
      
      <div className="flex flex-col mb-6 relative z-10 pointer-events-none">
        <p className="font-mono text-[10px] xl:text-xs text-purple-500 dark:text-purple-400 mb-3 font-bold">{tag}</p>
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl !bg-purple-100 dark:!bg-purple-500/15 !text-purple-600 dark:!text-purple-400 !border !border-slate-200 dark:!border-white/5 shadow-sm">{icon}</div>
          <h4 className="text-xl xl:text-2xl font-heading font-bold text-slate-900 dark:text-white leading-tight">{title}</h4>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-3 mt-auto relative z-10">
        {items.map((item, idx) => (
          <span key={idx} className="flex items-center gap-2 font-mono px-3.5 py-1.5 text-sm xl:text-base font-bold !bg-white dark:!bg-black/40 !border !border-slate-200 dark:!border-white/10 rounded-xl text-slate-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:!border-purple-300 dark:hover:!border-purple-500/30 hover:scale-105 transition-all cursor-default shadow-sm dark:shadow-none">
            <GetSkillIcon name={item} />
            {item}
          </span>
        ))}
      </div>
    </MagicCard>
  );
}