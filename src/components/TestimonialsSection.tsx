"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsSection() {
  return (
    <section style={{ padding: "96px 0", background: "#0B0F19", position: "relative", overflow: "hidden" }}>
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.25 }} />
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "600px", height: "600px",
        background: "rgba(255,62,165,0.05)", borderRadius: "50%", filter: "blur(80px)",
      }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{
            display: "inline-block", padding: "6px 16px", borderRadius: "999px",
            background: "rgba(255,62,165,0.1)", border: "1px solid rgba(255,62,165,0.2)",
            color: "#FF3EA5", fontSize: "11px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px",
          }}>
            Client Success Stories
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px" }}>
            Brands That Chose to{" "}<span className="gradient-text-pink">Win Big</span>
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: "18px", maxWidth: "560px", margin: "0 auto" }}>
            Real results from real brands. Here's what our clients say about working with MySocialCrux.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="testimonials-grid">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${t.color}20` }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px", padding: "28px",
                display: "flex", flexDirection: "column",
                transition: "box-shadow 0.3s, transform 0.3s",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
                <Quote size={28} style={{ color: t.color, opacity: 0.6 }} />
                <div style={{ display: "flex", gap: "2px" }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} style={{ color: "#FBBF24", fill: "#FBBF24" }} />
                  ))}
                </div>
              </div>
              <p style={{ color: "#D1D5DB", fontSize: "14px", lineHeight: 1.7, flex: 1, marginBottom: "20px" }}>
                "{t.text}"
              </p>
              <div style={{
                display: "inline-block", padding: "6px 14px", borderRadius: "999px",
                background: t.color + "20", color: t.color,
                fontSize: "11px", fontWeight: 700, marginBottom: "16px",
              }}>
                {t.metric}
              </div>
              <div style={{
                display: "flex", alignItems: "center", gap: "12px",
                paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)",
              }}>
                <div style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  background: `linear-gradient(135deg, ${t.color}, ${t.color}80)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "13px", fontWeight: 700, color: "#FFFFFF", flexShrink: 0,
                }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 600 }}>{t.name}</div>
                  <div style={{ color: "#6B7280", fontSize: "11px" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px", marginTop: "20px", maxWidth: "860px", margin: "20px auto 0" }} className="testimonials-grid2">
          {testimonials.slice(3).map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${t.color}20` }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px", padding: "28px",
                display: "flex", flexDirection: "column",
                transition: "box-shadow 0.3s, transform 0.3s",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: "16px" }}>
                <Quote size={28} style={{ color: t.color, opacity: 0.6 }} />
                <div style={{ display: "flex", gap: "2px" }}>
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={12} style={{ color: "#FBBF24", fill: "#FBBF24" }} />
                  ))}
                </div>
              </div>
              <p style={{ color: "#D1D5DB", fontSize: "14px", lineHeight: 1.7, flex: 1, marginBottom: "20px" }}>"{t.text}"</p>
              <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: "999px", background: t.color + "20", color: t.color, fontSize: "11px", fontWeight: 700, marginBottom: "16px" }}>
                {t.metric}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: `linear-gradient(135deg, ${t.color}, ${t.color}80)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, color: "#FFFFFF", flexShrink: 0 }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 600 }}>{t.name}</div>
                  <div style={{ color: "#6B7280", fontSize: "11px" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:1024px){.testimonials-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:640px){.testimonials-grid,.testimonials-grid2{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  );
}
