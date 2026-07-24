"use client"

import { motion, useScroll, type MotionProps } from "motion/react"
import { cn } from "@/lib/utils"

interface ScrollProgressProps extends Omit<
  React.HTMLAttributes<HTMLElement>,
  keyof MotionProps
> {
  ref?: React.Ref<HTMLDivElement>
}

export function ScrollProgress({
  className,
  ref,
  ...props
}: ScrollProgressProps) {
  const { scrollYProgress } = useScroll()

  return (
    <motion.div
      ref={ref}
      className={cn(
        // FIXED: Pinned absolutely to the top of the browser window with high z-index
        "fixed inset-x-0 top-0 z-[200] h-[3px] origin-left bg-gradient-to-r from-blue-500 via-sky-400 to-purple-500",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  )
}