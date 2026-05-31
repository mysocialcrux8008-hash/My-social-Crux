"use client";

import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery & Strategy", desc: "We deep-dive into your brand, audience, competitors, and goals to craft a precision growth strategy.", color: "#FF3EA5", duration: "Week 1" },
  { number: "02", title: "Campaign Architecture", desc: "Our team builds your complete campaign infrastructure — content calendars, ad creatives, SEO blueprints.", color: "#FF6B00", duration: "Week 2" },
  { number: "03", title: "Launch & Execute", desc: "We go live across all channels simultaneously, with real-time monitoring and rapid optimization.", color: "#00A3FF", duration: "Week 3" },
  { number: "04", title: "Optimize & Scale", desc: "Data-driven iteration every week. We double down on what works and continuously scale your results.", color: "#00D084", duration: "Ongoing" },
];

export default function ProcessTimeline() {
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
            background: "rgba(0,163,255,0.1)", border: "1px solid rgba(0,163,255,0.2)",
            color: "#00A3FF", fontSize: "11px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px",
          }}>
            Our Process
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 800, color: "#FFFFFF", marginBottom: "16px" }}>
            From Zero to{" "}<span className="gradient-text-blue">Market Leader</span>
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: "18px", maxWidth: "560px", margin: "0 auto" }}>
            A proven 4-step framework that has scaled 500+ brands to new heights.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "24px" }} className="process-grid">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -6 }}
              style={{ textAlign: "center" }}
            >
              <div style={{ position: "relative", display: "inline-flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                <div style={{
                  width: "80px", height: "80px", borderRadius: "50%",
                  background: step.color + "20", border: `2px solid ${step.color}40`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "24px", fontWeight: 900, color: "#FFFFFF",
                  fontFamily: "'Sora', sans-serif", position: "relative", zIndex: 1,
                }}>
                  {step.number}
                </div>
                <div style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  background: step.color, filter: "blur(20px)", opacity: 0.2,
                }} />
              </div>
              <div style={{
                display: "inline-block", padding: "4px 12px", borderRadius: "999px",
                background: step.color + "20", color: step.color,
                fontSize: "11px", fontWeight: 600, marginBottom: "12px",
              }}>
                {step.duration}
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "17px", fontWeight: 700, color: "#FFFFFF", marginBottom: "10px" }}>
                {step.title}
              </h3>
              <p style={{ color: "#9CA3AF", fontSize: "13px", lineHeight: 1.6 }}>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.process-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
