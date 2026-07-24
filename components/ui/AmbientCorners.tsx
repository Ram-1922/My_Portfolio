"use client";

import { motion } from "framer-motion";

export default function AmbientCorners() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden flex items-center justify-center">
      {/* Top Right Node */}
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }} 
        className="absolute -top-[20%] -right-[10%] opacity-[0.03] dark:opacity-[0.04] text-slate-900 dark:text-white"
      >
        <svg width="800" height="800" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="100" cy="100" r="80" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="60" />
          <path d="M100 10 L100 190 M10 100 L190 100" />
          <polygon points="100,20 180,100 100,180 20,100" strokeDasharray="2 6" />
        </svg>
      </motion.div>

      {/* Bottom Left Node */}
      <motion.div 
        animate={{ rotate: -360 }} 
        transition={{ duration: 180, repeat: Infinity, ease: "linear" }} 
        className="absolute -bottom-[20%] -left-[10%] opacity-[0.03] dark:opacity-[0.04] text-slate-900 dark:text-white"
      >
        <svg width="800" height="800" viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.5">
          <circle cx="100" cy="100" r="90" />
          <circle cx="100" cy="100" r="50" strokeDasharray="1 4" strokeWidth="2" />
          <path d="M40 40 L160 160 M40 160 L160 40" />
          <rect x="50" y="50" width="100" height="100" transform="rotate(45 100 100)" />
        </svg>
      </motion.div>
    </div>
  );
}