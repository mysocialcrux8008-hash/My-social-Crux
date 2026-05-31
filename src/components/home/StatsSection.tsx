"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { end: 500, suffix: "+", label: "Brands Scaled Globally", sub: "Across 15+ countries", color: "#FF3EA5" },
  { end: 120, prefix: "$", suffix: "M+", label: "Revenue Generated", sub: "For our clients", color: "#00A3FF" },
  { end: 98, suffix: "%", label: "Client Retention Rate", sub: "Industry-leading", color: "#00D084" },
  { end: 2, suffix: "B+", label: "Impressions Delivered", sub: "Across all platforms", color: "#8B5CF6" },
];

function Counter({ end, prefix = "", suffix = "" }: { end: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const duration = 2000;
        const startTime = performance.now();
        const step = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

export default function StatsSection() {
  return (
    <section style={{ padding: "96px 0", background: "#0B0F19", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "600px", height: "300px",
        background: "rgba(255,62,165,0.06)", borderRadius: "50%", filter: "blur(80px)",
      }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{
            display: "inline-block", padding: "6px 16px", borderRadius: "999px",
            background: "rgba(0,163,255,0.1)", border: "1px solid rgba(0,163,255,0.2)",
            color: "#00A3FF", fontSize: "11px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px",
          }}>
            By The Numbers
          </div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800, color: "#FFFFFF",
          }}>
            Results That Speak{" "}
            <span className="gradient-text-blue">For Themselves</span>
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -6, boxShadow: `0 20px 60px ${stat.color}20` }}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px", padding: "36px 24px",
                textAlign: "center", cursor: "default",
                transition: "box-shadow 0.3s",
              }}
            >
              <div style={{
                fontSize: "clamp(40px, 4vw, 56px)", fontWeight: 900,
                fontFamily: "'Sora', sans-serif", color: stat.color, marginBottom: "8px",
              }}>
                <Counter end={stat.end} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "14px", marginBottom: "4px" }}>{stat.label}</div>
              <div style={{ color: "#6B7280", fontSize: "12px" }}>{stat.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.stats-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
