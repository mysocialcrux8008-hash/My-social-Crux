"use client";

import { motion } from "framer-motion";
import { CheckCircle, Zap, Shield, BarChart3, Globe, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: BarChart3, title: "Data-Driven Strategy", desc: "Every decision backed by real analytics, A/B testing, and performance data.", color: "#FF3EA5" },
  { icon: Zap, title: "Rapid Execution", desc: "Campaigns launch within 72 hours. Measurable results in 30 days.", color: "#FF6B00" },
  { icon: Shield, title: "100% White-Hat Methods", desc: "All growth is organic and platform-compliant. No bots, no fake engagement.", color: "#00D084" },
  { icon: Globe, title: "Global Reach", desc: "Clients in 15+ countries. We think globally, execute locally.", color: "#00A3FF" },
  { icon: HeartHandshake, title: "Dedicated Account Team", desc: "A dedicated strategist who knows your brand — not a ticket system.", color: "#8B5CF6" },
  { icon: CheckCircle, title: "Proven Track Record", desc: "500+ brands scaled, $120M+ in client revenue generated.", color: "#FF3EA5" },
];

export default function WhyChooseUs() {
  return (
    <section style={{ padding: "96px 0", background: "#000000", position: "relative", overflow: "hidden" }}>
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }} className="why-grid">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              display: "inline-block", padding: "6px 16px", borderRadius: "999px",
              background: "rgba(0,208,132,0.1)", border: "1px solid rgba(0,208,132,0.2)",
              color: "#00D084", fontSize: "11px", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px",
            }}>
              Why MySocialCrux
            </div>
            <h2 style={{
              fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 3.5vw, 48px)",
              fontWeight: 800, color: "#FFFFFF", lineHeight: 1.15, marginBottom: "20px",
            }}>
              An Agency Built for Brands That{" "}
              <span className="gradient-text-green">Refuse to Stand Still</span>
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: "17px", lineHeight: 1.7, marginBottom: "28px" }}>
              We're not your average agency. We're growth engineers who combine creative strategy with technical precision to deliver results that actually move the needle.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "No long-term contracts required",
                "Transparent reporting & real-time dashboards",
                "Dedicated growth strategist for every client",
                "Results-based pricing available",
              ].map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <CheckCircle size={16} style={{ color: "#00D084", flexShrink: 0 }} />
                  <span style={{ color: "#D1D5DB", fontSize: "14px" }}>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "14px" }}>
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, boxShadow: `0 15px 40px ${r.color}20` }}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "16px", padding: "20px",
                  transition: "box-shadow 0.3s, transform 0.3s",
                }}
              >
                <div style={{
                  width: "40px", height: "40px", borderRadius: "10px",
                  background: r.color + "20", display: "flex",
                  alignItems: "center", justifyContent: "center", marginBottom: "12px",
                }}>
                  <r.icon size={18} style={{ color: r.color }} />
                </div>
                <h4 style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "13px", marginBottom: "6px" }}>{r.title}</h4>
                <p style={{ color: "#6B7280", fontSize: "12px", lineHeight: 1.5 }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <style>{`@media(max-width:1024px){.why-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
