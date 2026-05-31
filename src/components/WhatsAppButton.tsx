"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/917229923456?text=Hi%20MySocialCrux%2C%20I%27d%20like%20to%20discuss%20my%20project"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        position: "fixed", bottom: "24px", right: "24px", zIndex: 999,
        width: "56px", height: "56px", borderRadius: "50%",
        background: "#25D366", display: "flex", alignItems: "center",
        justifyContent: "center", boxShadow: "0 8px 32px rgba(37,211,102,0.4)",
        textDecoration: "none",
      }}
    >
      <MessageCircle size={26} style={{ color: "#FFFFFF", fill: "#FFFFFF" }} />
      <span style={{
        position: "absolute", inset: 0, borderRadius: "50%",
        background: "#25D366", animation: "ping-slow 2s ease-out infinite",
      }} />
    </motion.a>
  );
}
