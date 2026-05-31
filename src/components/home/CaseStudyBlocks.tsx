"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";

export default function CaseStudyBlocks() {
  return (
    <section style={{ padding: "96px 0", background: "#0B0F19", position: "relative", overflow: "hidden" }}>
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{
            display: "inline-block", padding: "6px 16px", borderRadius: "999px",
            background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)",
            color: "#FF6B00", fontSize: "11px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px",
          }}>
            Case Studies
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px" }}>
            Real Brands.{" "}<span className="gradient-text-pink">Real Results.</span>
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: "18px", maxWidth: "560px", margin: "0 auto" }}>
            See how we've transformed brands across industries with measurable, lasting growth.
          </p>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ borderColor: cs.color + "50" }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px", padding: "36px",
                transition: "border-color 0.3s",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "40px", alignItems: "center" }} className="case-grid">
                <div>
                  <div style={{
                    display: "inline-block", padding: "4px 12px", borderRadius: "999px",
                    background: cs.color + "20", color: cs.color,
                    fontSize: "11px", fontWeight: 600, marginBottom: "12px",
                  }}>
                    {cs.industry}
                  </div>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "10px" }}>
                    {cs.client}
                  </h3>
                  <p style={{ color: "#9CA3AF", fontSize: "13px", lineHeight: 1.6, marginBottom: "10px" }}>{cs.challenge}</p>
                  <p style={{ color: "#D1D5DB", fontSize: "13px", fontWeight: 500, lineHeight: 1.6 }}>{cs.result}</p>
                  <div style={{ display: "flex", gap: "8px", marginTop: "14px", flexWrap: "wrap" }}>
                    <span style={{ padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#9CA3AF", fontSize: "11px" }}>{cs.service}</span>
                    <span style={{ padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#9CA3AF", fontSize: "11px" }}>{cs.duration}</span>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
                  {cs.metrics.map((m) => (
                    <div key={m.label} style={{
                      borderRadius: "14px", padding: "18px", textAlign: "center",
                      background: cs.color + "10", border: `1px solid ${cs.color}30`,
                    }}>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", marginBottom: "8px" }}>
                        <TrendingUp size={11} style={{ color: cs.color }} />
                        <span style={{ fontSize: "11px", fontWeight: 700, color: cs.color }}>{m.change}</span>
                      </div>
                      <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "20px", fontWeight: 900, color: "#FFFFFF", marginBottom: "4px" }}>{m.after}</div>
                      <div style={{ color: "#9CA3AF", fontSize: "11px" }}>{m.label}</div>
                      <div style={{ color: "#6B7280", fontSize: "10px", marginTop: "2px" }}>from {m.before}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <Link href="/case-studies">
            <motion.span
              whileHover={{ scale: 1.03, boxShadow: "0 0 30px rgba(255,62,165,0.4)" }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "16px 36px", borderRadius: "999px",
                background: "linear-gradient(135deg, #FF3EA5, #FF6B00)",
                color: "#FFFFFF", fontWeight: 700, fontSize: "15px",
                cursor: "pointer", textDecoration: "none",
              }}
            >
              View All Case Studies <ArrowRight size={16} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
      <style>{`@media(max-width:768px){.case-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
