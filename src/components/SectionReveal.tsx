"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "right" | "none";
  style?: React.CSSProperties;
}

export default function SectionReveal({ children, delay = 0, className = "", direction = "up", style }: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: direction === "up" ? 36 : 0,
        x: direction === "left" ? -36 : direction === "right" ? 36 : 0,
      }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
