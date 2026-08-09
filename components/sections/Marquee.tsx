"use client";

import { useState } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform, wrap } from "framer-motion";

const Icons = {
  JS: () => (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="#F7DF1E">
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21.1 19.4c-.4.5-1.1.9-2 .9-1.3 0-2.2-.6-2.6-1.5l1.6-1c.2.4.6.8 1.1.8.5 0 .8-.2.8-.6 0-.3-.2-.5-.8-.8l-.8-.3c-1.3-.5-2.1-1.3-2.1-2.6 0-1.2.9-2.2 2.4-2.2 1.2 0 2.1.6 2.5 1.5l-1.6 1c-.1-.3-.4-.7-1-.7-.4 0-.7.3-.7.6 0 .4.3.5.9.7l.8.3c1.4.6 2.1 1.4 2.1 2.7 0 1.3-1 2.2-2.6 2.2zm-6.2.8c0 1.4-1.2 2.6-2.6 2.6H8.5c-.7 0-1.4-.3-1.9-.8l1.3-1.3c.4.3.8.5 1.2.5.6 0 1-.4 1-.9V12h2.2v8.2z"/>
    </svg>
  ),
  React: () => (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="#61DAFB" strokeWidth="2">
      <circle cx="12" cy="12" r="2.5" fill="#61DAFB" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
    </svg>
  ),
  Next: () => (
    <svg className="w-6 h-6 md:w-8 md:h-8 text-slate-900 dark:text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M15 16L9 8v8" strokeLinecap="round" />
      <path d="M15 8v8" strokeLinecap="round" />
    </svg>
  ),
  Firebase: () => (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="#FFCA28" strokeWidth="2">
      <path d="M4.3 12.5l2.8-5.3c.2-.4.8-.4 1 0l1.7 3.2L13 3.6c.2-.5.9-.5 1.1 0l7.6 14.8c.3.5-.1 1.1-.6 1.1H4.8c-.6 0-1-.7-.5-1.2h0z" fill="#FFCA28" fillOpacity="0.4" strokeLinejoin="round"/>
      <path d="M13.5 3.5l-3.2 6.1" stroke="#FFA000" strokeLinecap="round"/>
    </svg>
  ),
  Python: () => (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="#3776AB" strokeWidth="2">
      <path d="M12 2c-3.3 0-5.5 1.5-5.5 4v2.5h6V9H7c-2.8 0-4 1.5-4 4.5S4 18 7 18h1v-2.5c0-2.8 1.5-4.5 4.5-4.5h3c1.7 0 2.5-1 2.5-2.5S16.5 2 12 2z" fill="#3776AB" fillOpacity="0.2"/>
      <path d="M12 22c3.3 0 5.5-1.5 5.5-4v-2.5h-6V15h5.5c2.8 0 4-1.5 4-4.5S20 6 17 6h-1v2.5c0 2.8-1.5 4.5-4.5 4.5h-3c-1.7 0-2.5 1-2.5 2.5S7.5 22 12 22z" fill="#FFD43B" fillOpacity="0.2" stroke="#FFD43B"/>
      <circle cx="9" cy="5" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="19" r="1" fill="#FFD43B" stroke="none" />
    </svg>
  ),
  Flask: () => (
    <svg 
      className="w-6 h-6 md:w-8 md:h-8 text-slate-700 dark:text-gray-300" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
    >
      <path d="M10 2v7.31L5 18.5A2.5 2.5 0 0 0 7.5 22h9a2.5 2.5 0 0 0 2.5-3.5L14 9.31V2" />
      <path d="M8.5 2h7" />
      <path d="M5.5 16h13" stroke="#8b5cf6" />
    </svg>
  ),
  AI: () => (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2">
      <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 12c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
      <path d="M12 8v2" strokeLinecap="round" />
      <path d="M12 14v2" strokeLinecap="round" />
      <path d="M8 12h2" strokeLinecap="round" />
      <path d="M14 12h2" strokeLinecap="round" />
    </svg>
  ),
  Tailwind: () => (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="#38BDF8" strokeWidth="2">
      <path d="M12 5.5c-2 0-3.5 1-4.5 3 .5-1 1.25-1.5 2-1.5 1.5 0 2.5 1.5 4.5 1.5 2 0 3.5-1 4.5-3-.5 1-1.25 1.5-2 1.5-1.5 0-2.5-1.5-4.5-1.5zm-5 5c-2 0-3.5 1-4.5 3 .5-1 1.25-1.5 2-1.5 1.5 0 2.5 1.5 4.5 1.5 2 0 3.5-1 4.5-3-.5 1-1.25 1.5-2 1.5-1.5 0-2.5-1.5-4.5-1.5z" strokeLinecap="round" strokeLinejoin="round" fill="#38BDF8" fillOpacity="0.2" />
    </svg>
  ),
  MongoDB: () => (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" stroke="#47A248" strokeWidth="2">
      <path d="M12 2s-4 4.5-4 10c0 4.5 3 7 4 10 1-3 4-5.5 4-10 0-5.5-4-10-4-10z" fill="#47A248" fillOpacity="0.2" />
      <path d="M12 2v20" strokeLinecap="round" />
    </svg>
  ),
  OpenCV: () => (
    <svg className="w-6 h-6 md:w-8 md:h-8" viewBox="0 0 24 24" fill="none" strokeWidth="3">
      <path d="M12 9a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#FF0000" />
      <path d="M7 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#00FF00" />
      <path d="M17 21a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" stroke="#0000FF" />
    </svg>
  )
};

const techStack = [
  { name: "Vanilla JS", icon: <Icons.JS /> },
  { name: "React", icon: <Icons.React /> },
  { name: "Next.js", icon: <Icons.Next /> },
  { name: "Firebase", icon: <Icons.Firebase /> },
  { name: "Python", icon: <Icons.Python /> },
  { name: "Flask", icon: <Icons.Flask /> },
  { name: "AI", icon: <Icons.AI /> },
  { name: "Tailwind", icon: <Icons.Tailwind /> },
  { name: "MongoDB", icon: <Icons.MongoDB /> },
  { name: "OpenCV", icon: <Icons.OpenCV /> },
];

export default function Marquee() {
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);

  useAnimationFrame((t, delta) => {
    let moveBy = -0.005 * delta; 
    if (isHovered) {
      moveBy = -0.0026 * delta; 
    }
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div 
      className="w-full overflow-hidden -mb-13 bg-slate-50 dark:bg-[#101012]/95 py-6 md:py-8 border-y border-slate-200 dark:border-purple-500/10 flex whitespace-nowrap cursor-default transition-colors duration-500"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div 
        className="flex items-center gap-8 md:gap-16 pr-8 md:pr-16 transform-gpu will-change-transform" 
        style={{ x }}
      >
        {[...techStack, ...techStack].map((tech, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.1 }}
            className="flex items-center gap-3 md:gap-4 group"
          >
            <div className="opacity-70 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md scale-100">
              {tech.icon}
            </div>
            <span className="text-2xl md:text-4xl font-black text-slate-300 dark:text-gray-600 uppercase tracking-widest transition-colors duration-300 group-hover:text-purple-500 dark:group-hover:text-sky-400">
              {tech.name}
            </span>
            <span className="text-purple-500/30 dark:text-sky-500/30 text-xl md:text-2xl ml-6 md:ml-12">•</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}