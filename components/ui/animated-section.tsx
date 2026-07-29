"use client"

import { motion, HTMLMotionProps } from "framer-motion"

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: React.ReactNode
  className?: string
}

export const AnimatedSection = ({
  children,
  className = "",
  ...props
}: AnimatedSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    className={className}
    {...props}
  >
    {children}
  </motion.section>
)
