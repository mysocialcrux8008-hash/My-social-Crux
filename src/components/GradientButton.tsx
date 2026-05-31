"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

interface Props {
  href: string;
  children: ReactNode;
  variant?: "pink" | "blue" | "green" | "outline";
  size?: "sm" | "md" | "lg";
  icon?: boolean;
  className?: string;
}

const gradients = {
  pink: "from-[#FF3EA5] to-[#FF6B00]",
  blue: "from-[#00A3FF] to-[#8B5CF6]",
  green: "from-[#00D084] to-[#00A3FF]",
  outline: "",
};

const sizes = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-3.5 text-sm",
  lg: "px-8 py-4 text-base",
};

export default function GradientButton({
  href, children, variant = "pink", size = "md", icon = true, className = ""
}: Props) {
  if (variant === "outline") {
    return (
      <Link href={href}>
        <motion.span
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className={`inline-flex items-center gap-2 ${sizes[size]} rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-colors cursor-pointer ${className}`}
        >
          {children}
          {icon && <ArrowRight size={14} />}
        </motion.span>
      </Link>
    );
  }

  return (
    <Link href={href}>
      <motion.span
        whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(255,62,165,0.4)" }}
        whileTap={{ scale: 0.97 }}
        className={`inline-flex items-center gap-2 ${sizes[size]} rounded-full bg-gradient-to-r ${gradients[variant]} text-white font-semibold cursor-pointer ${className}`}
      >
        {children}
        {icon && <ArrowRight size={14} />}
      </motion.span>
    </Link>
  );
}
