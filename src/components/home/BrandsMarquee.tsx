"use client";

import { motion } from "framer-motion";

const brands = [
  "TechVenture", "BrandForge", "LuxeStyle", "NexaGrowth", "StartupX",
  "MediaPulse", "GrowthLab", "DigitalEdge", "VisionCo", "ScaleUp",
  "InnovateBrand", "MarketPro", "ClickBoost", "SocialPeak", "RankFirst",
];

const pressLogos = ["Forbes", "TechCrunch", "Business Insider", "Entrepreneur", "Inc. Magazine", "Wired", "Fast Company"];

export default function BrandsMarquee() {
  return (
    <section style={{
      background: "#0B0F19",
      borderTop: "1px solid rgba(255,255,255,0.06)",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      overflow: "hidden",
    }}>
      {/* Press logos */}
      <div style={{ padding: "28px 32px 0", textAlign: "center" }}>
        <p style={{ color: "#4B5563", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, marginBottom: "20px" }}>
          Our clients featured in
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "32px", flexWrap: "wrap", marginBottom: "28px" }}>
          {pressLogos.map((logo) => (
            <motion.div
              key={logo}
              whileHover={{ color: "#FFFFFF", scale: 1.05 }}
              style={{
                color: "#374151", fontSize: "13px", fontWeight: 700,
                letterSpacing: "0.05em", textTransform: "uppercase",
                fontFamily: "'Sora', sans-serif", cursor: "default",
                transition: "color 0.2s",
              }}
            >
              {logo}
            </motion.div>
          ))}
        </div>
        <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginBottom: "28px" }} />
      </div>

      {/* Scrolling brands */}
      <div style={{ paddingBottom: "28px" }}>
        <p style={{ color: "#4B5563", fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.18em", fontWeight: 600, textAlign: "center", marginBottom: "16px" }}>
          Trusted by 500+ brands worldwide
        </p>
        <div style={{ position: "relative" }}>
          <div className="animate-marquee">
            {[...brands, ...brands].map((brand, i) => (
              <div key={i} style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "9px 22px", borderRadius: "999px",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                marginRight: "12px", flexShrink: 0,
              }}>
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#FF3EA5" }} />
                <span style={{ color: "#6B7280", fontSize: "12px", fontWeight: 500, whiteSpace: "nowrap" }}>{brand}</span>
              </div>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "0 auto 0 0", width: "100px", background: "linear-gradient(to right, #0B0F19, transparent)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: "0 0 0 auto", width: "100px", background: "linear-gradient(to left, #0B0F19, transparent)", pointerEvents: "none" }} />
        </div>
      </div>
    </section>
  );
}
