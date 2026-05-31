"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp, Users, Star } from "lucide-react";

const showcaseItems = [
  {
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    category: "Social Media Growth",
    title: "From 2K to 85K Instagram Followers in 4 Months",
    metric: "+4,150%",
    metricLabel: "Follower Growth",
    client: "TechVenture Inc.",
    color: "#FF3EA5",
    href: "/case-studies",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    category: "SEO & Rankings",
    title: "Page 1 Rankings for 47 Competitive Keywords",
    metric: "+312%",
    metricLabel: "Organic Traffic",
    client: "BrandForge",
    color: "#00A3FF",
    href: "/case-studies",
  },
  {
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80",
    category: "YouTube Growth",
    title: "Silver Play Button in 8 Months Flat",
    metric: "100K",
    metricLabel: "Subscribers",
    client: "LuxeStyle Co.",
    color: "#FF6B00",
    href: "/case-studies",
  },
];

export default function ResultsShowcase() {
  return (
    <section style={{ padding: "96px 0", background: "#000000", position: "relative", overflow: "hidden" }}>
      {/* Background */}
      <div style={{ position: "absolute", inset: 0 }}>
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.25 }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%,-50%)",
          width: "800px", height: "400px",
          background: "rgba(255,62,165,0.04)", borderRadius: "50%", filter: "blur(80px)",
        }} />
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "56px", flexWrap: "wrap", gap: "20px" }}
        >
          <div>
            <div style={{
              display: "inline-block", padding: "6px 16px", borderRadius: "999px",
              background: "rgba(255,107,0,0.1)", border: "1px solid rgba(255,107,0,0.2)",
              color: "#FF6B00", fontSize: "11px", fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px",
            }}>
              Proven Results
            </div>
            <h2 style={{
              fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800, color: "#FFFFFF", lineHeight: 1.1,
            }}>
              Campaigns That{" "}
              <span style={{
                background: "linear-gradient(135deg, #FF3EA5, #FF6B00)",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
              }}>Changed Everything</span>
            </h2>
          </div>
          <Link href="/case-studies" style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            color: "#9CA3AF", fontSize: "14px", textDecoration: "none",
            fontWeight: 500, whiteSpace: "nowrap",
          }}>
            View all case studies <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="showcase-grid">
          {showcaseItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8 }}
              style={{
                borderRadius: "20px", overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#0B0F19",
                transition: "transform 0.3s, box-shadow 0.3s",
                cursor: "pointer",
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={item.image}
                  alt={item.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.8))",
                }} />
                {/* Category badge */}
                <div style={{
                  position: "absolute", top: "14px", left: "14px",
                  padding: "5px 12px", borderRadius: "999px",
                  background: item.color + "30",
                  border: `1px solid ${item.color}50`,
                  color: item.color, fontSize: "10px", fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.08em",
                  backdropFilter: "blur(8px)",
                }}>
                  {item.category}
                </div>
                {/* Metric overlay */}
                <div style={{
                  position: "absolute", bottom: "14px", right: "14px",
                  padding: "8px 14px", borderRadius: "10px",
                  background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)",
                  border: `1px solid ${item.color}40`,
                  display: "flex", alignItems: "center", gap: "6px",
                }}>
                  <TrendingUp size={12} style={{ color: item.color }} />
                  <span style={{ color: item.color, fontSize: "16px", fontWeight: 900, fontFamily: "'Sora', sans-serif" }}>{item.metric}</span>
                  <span style={{ color: "#9CA3AF", fontSize: "10px" }}>{item.metricLabel}</span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "22px" }}>
                <p style={{ color: "#6B7280", fontSize: "11px", marginBottom: "8px", fontWeight: 500 }}>{item.client}</p>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif", fontSize: "16px",
                  fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4, marginBottom: "16px",
                }}>
                  {item.title}
                </h3>
                <Link href={item.href} style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  color: item.color, fontSize: "13px", fontWeight: 600,
                  textDecoration: "none",
                }}>
                  Read Case Study <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:1024px){.showcase-grid{grid-template-columns:1fr 1fr!important;}} @media(max-width:640px){.showcase-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
