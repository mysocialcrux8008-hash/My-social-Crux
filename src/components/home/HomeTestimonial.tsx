"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function HomeTestimonial() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;
  // show 3 at a time on desktop
  const visibleCount = 3;

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % total);
    }, 3500);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const prev = () => {
    setCurrent(p => (p - 1 + total) % total);
    startTimer();
  };
  const next = () => {
    setCurrent(p => (p + 1) % total);
    startTimer();
  };

  // get 3 visible cards starting from current
  const visible = Array.from({ length: visibleCount }, (_, i) => testimonials[(current + i) % total]);

  return (
    <section style={{ padding: "100px 0", background: "#F8FAFC", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(#E2E8F0 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5 }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "56px" }}>
          <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: "999px", background: "rgba(255,62,165,0.08)", border: "1px solid rgba(255,62,165,0.2)", color: "#FF3EA5", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>
            Client Success Stories
          </span>
          <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: "clamp(30px,4vw,50px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.05, marginBottom: "16px" }}>
            What Our Clients{" "}
            <span style={{ background: "linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Say About Us</span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "17px", maxWidth: "480px", margin: "0 auto 20px" }}>
            Real reviews from real clients on Trustpilot.
          </p>
          {/* Trustpilot badge */}
          <a href="https://www.trustpilot.com/review/mysocialcrux.com" target="_blank" rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "10px 20px", borderRadius: "999px", background: "rgba(0,182,122,0.08)", border: "1px solid rgba(0,182,122,0.25)", textDecoration: "none" }}>
            <div style={{ width: "22px", height: "22px", borderRadius: "4px", background: "#00B67A", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Star size={12} style={{ color: "#FFF", fill: "#FFF" }} />
            </div>
            <span style={{ fontFamily: "'Sora',sans-serif", fontSize: "14px", fontWeight: 700, color: "#0F172A" }}>
              Trust<span style={{ color: "#00B67A" }}>pilot</span>
            </span>
            <div style={{ display: "flex", gap: "2px" }}>
              {[1,2,3,4,5].map(i => (
                <div key={i} style={{ width: "16px", height: "16px", background: "#00B67A", borderRadius: "2px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Star size={10} style={{ color: "#FFF", fill: "#FFF" }} />
                </div>
              ))}
            </div>
            <span style={{ color: "#475569", fontSize: "12px", fontWeight: 500 }}>4.3 · Excellent</span>
          </a>
        </motion.div>

        {/* Carousel */}
        <div style={{ position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "24px", overflow: "hidden" }} className="testi-slider-grid">
            {visible.map((t, i) => (
              <motion.div
                key={`${t.name}-${(current + i) % total}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                style={{ background: "#FFFFFF", borderRadius: "20px", padding: "32px", border: "1px solid #E2E8F0", display: "flex", flexDirection: "column", minHeight: "240px" }}>
                {/* Stars */}
                <div style={{ display: "flex", gap: "3px", marginBottom: "18px" }}>
                  {[1,2,3,4,5].map(j => <Star key={j} size={14} style={{ color: "#00B67A", fill: "#00B67A" }} />)}
                </div>
                {/* Quote */}
                <p style={{ color: "#334155", fontSize: "15px", lineHeight: 1.7, flex: 1, marginBottom: "24px" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                {/* Author */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px", paddingTop: "18px", borderTop: "1px solid #F1F5F9" }}>
                  <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: `linear-gradient(135deg,${t.color},${t.color}80)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 700, color: "#fff", flexShrink: 0 }}>
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ color: "#0F172A", fontSize: "14px", fontWeight: 700 }}>{t.name}</div>
                    <div style={{ color: "#94A3B8", fontSize: "12px" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Nav arrows */}
          <button onClick={prev} aria-label="Previous"
            style={{ position: "absolute", left: "-20px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", borderRadius: "50%", background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10 }}
            className="testi-nav-btn">
            <ChevronLeft size={18} style={{ color: "#374151" }} />
          </button>
          <button onClick={next} aria-label="Next"
            style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", borderRadius: "50%", background: "#FFFFFF", border: "1px solid #E2E8F0", boxShadow: "0 4px 12px rgba(0,0,0,0.08)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 10 }}
            className="testi-nav-btn">
            <ChevronRight size={18} style={{ color: "#374151" }} />
          </button>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "32px" }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => { setCurrent(i); startTimer(); }} aria-label={`Go to review ${i + 1}`}
              style={{ width: i === current ? "24px" : "8px", height: "8px", borderRadius: "999px", background: i === current ? "#FF3EA5" : "#CBD5E1", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="https://www.trustpilot.com/review/mysocialcrux.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
            <motion.span whileHover={{ scale: 1.03 }}
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "14px 32px", borderRadius: "999px", border: "1px solid #E2E8F0", color: "#0F172A", fontWeight: 600, fontSize: "14px", cursor: "pointer", background: "#FFFFFF" }}>
              Read All Reviews on Trustpilot <ArrowRight size={15} />
            </motion.span>
          </Link>
        </motion.div>

      </div>
      <style>{`
        @media(max-width:1024px){ .testi-slider-grid{ grid-template-columns:repeat(2,1fr)!important; } }
        @media(max-width:640px){ .testi-slider-grid{ grid-template-columns:1fr!important; } }
        @media(max-width:640px){ .testi-nav-btn{ display:none!important; } }
      `}</style>
    </section>
  );
}
