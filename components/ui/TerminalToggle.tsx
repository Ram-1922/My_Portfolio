"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function TerminalToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Initialize the text once mounted
  useEffect(() => {
    setMounted(true);
    if (resolvedTheme) {
      setText(`"${resolvedTheme}"`);
    }
  }, [resolvedTheme]);

  // Prevent hydration mismatch
  if (!mounted) return <div className="w-[140px] h-9" />;

  const handleToggle = async () => {
    if (isTyping) return; // Prevent clicking while it's already typing
    setIsTyping(true);

    const current = resolvedTheme === "dark" ? '"dark"' : '"light"';
    const next = resolvedTheme === "dark" ? '"light"' : '"dark"';
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";

    // Step 1: Backspace the current word
    for (let i = current.length; i >= 0; i--) {
      setText(current.slice(0, i));
      await new Promise(r => setTimeout(r, 60)); // Deletion speed
    }

    // Step 2: Flip the actual theme while the string is empty
    setTheme(nextTheme);
    await new Promise(r => setTimeout(r, 150)); // Tiny pause before typing starts

    // Step 3: Type out the new word
    for (let i = 1; i <= next.length; i++) {
      setText(next.slice(0, i));
      await new Promise(r => setTimeout(r, 80)); // Typing speed
    }

    setIsTyping(false);
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center gap-1.5 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg bg-slate-200/50 dark:bg-black/40 border border-slate-300 dark:border-white/10 font-mono text-[10px] sm:text-xs text-slate-700 dark:text-slate-300 hover:bg-slate-300/50 dark:hover:bg-black/60 transition-colors shadow-inner"
    >
      <span className="text-purple-600 dark:text-purple-400 font-bold tracking-wide">sys.theme</span>
      <span className="text-slate-500 font-bold">=</span>
      <span className="text-amber-600 dark:text-emerald-400 min-w-[55px] text-left inline-flex items-center">
        {text}
        {/* The Blinking Terminal Cursor */}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-1.5 h-3 sm:w-2 sm:h-3.5 bg-slate-500 dark:bg-slate-400 ml-0.5"
        />
      </span>
    </button>
  );
}