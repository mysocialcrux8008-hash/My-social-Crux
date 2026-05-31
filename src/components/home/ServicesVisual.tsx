"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const items = [
  {
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=80",
    title: "Social Media Domination",
    desc: "We build audiences that convert. Real followers, real engagement, real revenue.",
    stat: "500K+", statLabel: "Followers Grown",
    color: "#FF3EA5", href: "/instagram-growth-services/",
  },
  {
    image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&q=80",
    title: "SEO That Ranks & Converts",
    desc: "Page 1 rankings for keywords that actually drive business. Not just traffic — revenue.",
    stat: "#1", statLabel: "Google Rankings",
    color: "#00A3FF", href: "/seo-services/",
  },
  {
    image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=80",
    title: "Global Press & PR",
    desc: "Get your brand in Forbes, TechCrunch, and 200+ publications worldwide.",
    stat: "200+", statLabel: "Publications",
    color: "#8B5CF6", href: "/press-release-creation-global-publication-services/",
  },
];

export default function ServicesVisual() {
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
            background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)",
            color: "#8B5CF6", fontSize: "11px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px",
          }}>
            What We Do Best
          </div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800, color: "#FFFFFF",
          }}>
            Precision Growth Across{" "}
            <span style={{
              background: "linear-gradient(135deg, #8B5CF6, #00A3FF)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            }}>Every Channel</span>
          </h2>
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "60px" }}>
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.7 }}
              style={{
                display: "grid",
                gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr",
                gap: "60px", alignItems: "center",
              }}
              className="visual-row"
            >
              {/* Image side */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }} className="visual-img">
                <div style={{ position: "relative", borderRadius: "20px", overflow: "hidden", boxShadow: `0 30px 80px ${item.color}20` }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "320px", objectFit: "cover", display: "block" }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: `linear-gradient(135deg, ${item.color}30, transparent)`,
                  }} />
                  {/* Stat overlay */}
                  <div style={{
                    position: "absolute", bottom: "20px", left: "20px",
                    background: "rgba(0,0,0,0.8)", backdropFilter: "blur(16px)",
                    border: `1px solid ${item.color}40`,
                    borderRadius: "14px", padding: "14px 20px",
                  }}>
                    <div style={{ fontFamily: "'Sora', sans-serif", fontSize: "28px", fontWeight: 900, color: item.color }}>{item.stat}</div>
                    <div style={{ color: "#9CA3AF", fontSize: "12px" }}>{item.statLabel}</div>
                  </div>
                </div>
              </div>

              {/* Text side */}
              <div style={{ order: i % 2 === 0 ? 1 : 0 }} className="visual-text">
                <div style={{
                  display: "inline-block", padding: "5px 14px", borderRadius: "999px",
                  background: item.color + "20", color: item.color,
                  fontSize: "11px", fontWeight: 700, textTransform: "uppercase",
                  letterSpacing: "0.1em", marginBottom: "20px",
                }}>
                  {item.title}
                </div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif", fontSize: "clamp(26px, 3vw, 38px)",
                  fontWeight: 800, color: "#FFFFFF", lineHeight: 1.2, marginBottom: "16px",
                }}>
                  {item.title}
                </h3>
                <p style={{ color: "#9CA3AF", fontSize: "17px", lineHeight: 1.7, marginBottom: "28px" }}>
                  {item.desc}
                </p>
                <Link href={item.href}>
                  <motion.span
                    whileHover={{ scale: 1.03, boxShadow: `0 0 30px ${item.color}40` }}
                    style={{
                      display: "inline-flex", alignItems: "center", gap: "8px",
                      padding: "13px 28px", borderRadius: "999px",
                      background: item.color + "20", border: `1px solid ${item.color}40`,
                      color: item.color, fontWeight: 600, fontSize: "14px",
                      cursor: "pointer", textDecoration: "none",
                    }}
                  >
                    Explore Service <ArrowRight size={14} />
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media(max-width:768px){
          .visual-row{grid-template-columns:1fr!important;}
          .visual-img,.visual-text{order:unset!important;}
        }
      `}</style>
    </section>
  );
}
