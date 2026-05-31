"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/data/caseStudies";
import CTASection from "@/components/CTASection";

export default function CaseStudiesContent() {
  return (
    <>
      <section style={{ padding: "120px 0 60px", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-100px", right: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(0,163,255,0.1)", filter: "blur(80px)" }} />
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ display: "inline-block", padding: "6px 16px", borderRadius: "999px", background: "rgba(0,163,255,0.1)", border: "1px solid rgba(0,163,255,0.2)", color: "#00A3FF", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
            Case Studies
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "#FFFFFF", marginBottom: "16px" }}>
            Real Brands.{" "}
            <span style={{ background: "linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Real Results.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ color: "#9CA3AF", fontSize: "18px", maxWidth: "560px", margin: "0 auto" }}>
            Measurable growth stories from brands that chose to win with MySocialCrux.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: "40px 0 96px", background: "#000" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {caseStudies.map((cs, i) => (
              <motion.div key={cs.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0B0F19" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "0" }} className="cs-grid">
                  {/* Left color panel */}
                  <div style={{ padding: "48px 40px", background: `linear-gradient(135deg, ${cs.color}15, transparent)`, borderRight: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ display: "inline-block", padding: "5px 12px", borderRadius: "999px", background: cs.color + "20", color: cs.color, fontSize: "11px", fontWeight: 600, marginBottom: "16px" }}>{cs.industry}</div>
                    <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "24px", fontWeight: 800, color: "#FFFFFF", marginBottom: "12px" }}>{cs.client}</h2>
                    <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: 1.6, marginBottom: "12px" }}>{cs.challenge}</p>
                    <p style={{ color: "#D1D5DB", fontSize: "14px", lineHeight: 1.6, marginBottom: "20px" }}>{cs.result}</p>
                    <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                      <span style={{ padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#9CA3AF", fontSize: "11px" }}>{cs.service}</span>
                      <span style={{ padding: "4px 10px", borderRadius: "6px", background: "rgba(255,255,255,0.06)", color: "#9CA3AF", fontSize: "11px" }}>{cs.duration}</span>
                    </div>
                  </div>
                  {/* Right metrics */}
                  <div style={{ padding: "48px 40px" }}>
                    <p style={{ color: "#6B7280", fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, marginBottom: "24px" }}>Key Results</p>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
                      {cs.metrics.map((m) => (
                        <div key={m.label} style={{ borderRadius: "16px", padding: "24px 20px", textAlign: "center", background: cs.color + "10", border: `1px solid ${cs.color}25` }}>
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "4px", marginBottom: "10px" }}>
                            <TrendingUp size={12} style={{ color: cs.color }} />
                            <span style={{ fontSize: "12px", fontWeight: 700, color: cs.color }}>{m.change}</span>
                          </div>
                          <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "26px", fontWeight: 900, color: "#FFFFFF", marginBottom: "4px" }}>{m.after}</div>
                          <div style={{ color: "#9CA3AF", fontSize: "12px", marginBottom: "4px" }}>{m.label}</div>
                          <div style={{ color: "#4B5563", fontSize: "11px" }}>from {m.before}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <CTASection title="Ready to Be Our Next Success Story?" subtitle="Join 500+ brands that chose MySocialCrux to power their growth." primaryCTA="Start Your Journey" secondaryCTA="Contact Us" secondaryHref="/contact" />
      <style>{`@media(max-width:768px){.cs-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
