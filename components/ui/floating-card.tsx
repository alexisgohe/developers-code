"use client"

import { motion, HTMLMotionProps } from "framer-motion"

interface FloatingCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  delay?: number
  className?: string
}

export const FloatingCard = ({
  children,
  delay = 0,
  className = "",
  ...props
}: FloatingCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    whileHover={{ y: -10, transition: { duration: 0.3 } }}
    viewport={{ once: true, margin: "-50px" }}
    className={`group ${className}`}
    {...props}
  >
    {children}
  </motion.div>
)
