"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TrustpilotBadge() {
  return (
    <section style={{ background: "#0B0F19", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "28px 0" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 20px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "40px", flexWrap: "wrap" }}>

          {/* Trustpilot badge */}
          <motion.a
            href="https://www.trustpilot.com/review/mysocialcrux.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "14px",
              padding: "14px 24px", borderRadius: "12px",
              background: "rgba(0,185,100,0.08)", border: "1px solid rgba(0,185,100,0.2)",
              textDecoration: "none", cursor: "pointer",
            }}
          >
            {/* Trustpilot logo text */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {/* TP Star icon */}
              <div style={{
                width: "32px", height: "32px", borderRadius: "6px",
                background: "#00B67A", display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Star size={18} style={{ color: "#FFFFFF", fill: "#FFFFFF" }} />
              </div>
              <span style={{ fontFamily: "'Sora', sans-serif", fontSize: "18px", fontWeight: 800, color: "#FFFFFF", letterSpacing: "-0.02em" }}>
                Trust<span style={{ color: "#00B67A" }}>pilot</span>
              </span>
            </div>

            {/* Divider */}
            <div style={{ width: "1px", height: "32px", background: "rgba(255,255,255,0.1)" }} />

            {/* Rating */}
            <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <div style={{ display: "flex", gap: "3px" }}>
                {[1,2,3,4,5].map(i => (
                  <div key={i} style={{ width: "22px", height: "22px", background: "#00B67A", borderRadius: "3px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Star size={13} style={{ color: "#FFF", fill: "#FFF" }} />
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
                <span style={{ color: "#FFFFFF", fontSize: "13px", fontWeight: 700 }}>5.0</span>
                <span style={{ color: "#9CA3AF", fontSize: "12px" }}>Excellent · Rated on Trustpilot</span>
              </div>
            </div>

            {/* Arrow */}
            <div style={{ color: "#00B67A", fontSize: "13px", fontWeight: 600 }}>
              View Reviews →
            </div>
          </motion.a>

          {/* Separator */}
          <div style={{ color: "#4B5563", fontSize: "12px", display: "flex", alignItems: "center", gap: "12px" }}>
            <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.08)" }} />
            <span>Trusted by 500+ brands worldwide</span>
            <div style={{ width: "40px", height: "1px", background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Google rating */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 20px", borderRadius: "12px", background: "rgba(66,133,244,0.08)", border: "1px solid rgba(66,133,244,0.2)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              {/* Google G */}
              <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "linear-gradient(135deg, #4285F4, #EA4335, #FBBC04, #34A853)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#FFF", fontSize: "13px", fontWeight: 900, fontFamily: "Arial" }}>G</span>
              </div>
              <span style={{ color: "#FFFFFF", fontSize: "14px", fontWeight: 700 }}>Google</span>
            </div>
            <div style={{ display: "flex", gap: "2px" }}>
              {[1,2,3,4,5].map(i => <Star key={i} size={13} style={{ color: "#FBBF24", fill: "#FBBF24" }} />)}
            </div>
            <span style={{ color: "#9CA3AF", fontSize: "12px" }}>5.0 Rating</span>
          </div>

        </div>
      </div>
    </section>
  );
}
