"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Magnetic({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    // Get the exact dimensions and position of the wrapped element
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    
    // Calculate distance from center
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    
    // The multiplier (0.3) dictates how strong the magnetic pull is
    setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: "relative", display: "inline-flex" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      // Spring physics for that highly premium "snap back" effect
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
}