"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";

interface Props {
  title?: string;
  subtitle?: string;
  primaryCTA?: string;
  primaryHref?: string;
  secondaryCTA?: string;
  secondaryHref?: string;
}

export default function CTASection({
  title = "Ready to Scale Your Brand to New Heights?",
  subtitle = "Join 500+ brands that trust MySocialCrux to drive real, measurable growth. Let's build something extraordinary together.",
  primaryCTA = "Start Your Growth Journey",
  primaryHref = "/contact",
  secondaryCTA = "View Case Studies",
  secondaryHref = "/case-studies",
}: Props) {
  return (
    <section style={{ padding: "96px 0", background: "#000000", position: "relative", overflow: "hidden" }}>
      {/* Background effects */}
      <div style={{ position: "absolute", inset: 0 }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(255,62,165,0.08), transparent, rgba(139,92,246,0.08))" }} />
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
          style={{ position: "absolute", top: 0, left: "25%", width: "400px", height: "400px", background: "rgba(255,62,165,0.12)", borderRadius: "50%", filter: "blur(80px)" }}
        />
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
          style={{ position: "absolute", bottom: 0, right: "25%", width: "400px", height: "400px", background: "rgba(139,92,246,0.12)", borderRadius: "50%", filter: "blur(80px)" }}
        />
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
      </div>

      <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 32px", position: "relative", textAlign: "center" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "8px 18px", borderRadius: "999px",
            background: "rgba(255,62,165,0.1)", border: "1px solid rgba(255,62,165,0.2)",
            color: "#FF3EA5", fontSize: "11px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "32px",
          }}>
            <Zap size={11} />
            Limited Spots Available
          </div>

          <h2 style={{
            fontFamily: "'Sora', sans-serif",
            fontSize: "clamp(36px, 5vw, 68px)",
            fontWeight: 900, color: "#FFFFFF",
            lineHeight: 1.1, marginBottom: "24px",
          }}>
            {title.split(" ").slice(0, -3).join(" ")}{" "}
            <span className="gradient-text-pink">
              {title.split(" ").slice(-3).join(" ")}
            </span>
          </h2>

          <p style={{ color: "#9CA3AF", fontSize: "18px", lineHeight: 1.7, maxWidth: "640px", margin: "0 auto 40px" }}>
            {subtitle}
          </p>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <Link href={primaryHref}>
              <motion.span
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,62,165,0.5)" }}
                whileTap={{ scale: 0.97 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "18px 40px", borderRadius: "999px",
                  background: "linear-gradient(135deg, #FF3EA5, #FF6B00)",
                  color: "#FFFFFF", fontWeight: 700, fontSize: "16px",
                  cursor: "pointer", textDecoration: "none",
                }}
              >
                {primaryCTA} <ArrowRight size={16} />
              </motion.span>
            </Link>
            <Link href={secondaryHref}>
              <motion.span
                whileHover={{ scale: 1.03 }}
                style={{
                  display: "inline-flex", alignItems: "center", gap: "8px",
                  padding: "18px 40px", borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#FFFFFF", fontWeight: 600, fontSize: "16px",
                  cursor: "pointer", textDecoration: "none",
                  background: "transparent",
                }}
              >
                {secondaryCTA} <ArrowRight size={16} />
              </motion.span>
            </Link>
          </div>

          <p style={{ marginTop: "24px", color: "#6B7280", fontSize: "13px" }}>
            No contracts. No hidden fees. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
