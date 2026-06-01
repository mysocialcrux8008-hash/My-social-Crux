"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, FileText } from "lucide-react";

interface Section { title: string; content: string; }

interface Props {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
  accentColor: string;
}

export default function LegalPage({ title, subtitle, lastUpdated, sections, accentColor }: Props) {
  return (
    <>
      {/* Hero */}
      <section style={{ paddingTop: "110px", paddingBottom: "60px", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "500px", height: "500px", borderRadius: "50%", background: accentColor + "12", filter: "blur(100px)" }} />
          <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
        </div>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "#9CA3AF", fontSize: "13px", textDecoration: "none", marginBottom: "32px" }}>
              <ArrowLeft size={14} /> Back to Home
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 14px", borderRadius: "999px", background: accentColor + "15", border: `1px solid ${accentColor}30`, color: accentColor, fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px" }}>
            <FileText size={11} /> Legal
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 5vw, 56px)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.1, marginBottom: "16px" }}>
            {title}
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ color: "#9CA3AF", fontSize: "17px", lineHeight: 1.6, marginBottom: "20px" }}>
            {subtitle}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25 }}
            style={{ display: "flex", alignItems: "center", gap: "6px", color: "#6B7280", fontSize: "13px" }}>
            <Calendar size={13} />
            Last updated: {lastUpdated}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section style={{ padding: "0 0 96px", background: "#000" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 24px" }}>
          {/* Table of contents */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ background: "#0F172A", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "16px", padding: "28px 32px", marginBottom: "48px" }}>
            <p style={{ color: "#9CA3AF", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>Table of Contents</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }} className="toc-grid">
              {sections.map((s, i) => (
                <a key={i} href={`#section-${i}`} style={{ color: "#94A3B8", fontSize: "13px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", padding: "4px 0" }}>
                  <span style={{ color: accentColor, fontWeight: 700, fontSize: "11px", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                  {s.title.replace(/^\d+\.\s/, "")}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Sections */}
          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            {sections.map((section, i) => (
              <motion.div key={i} id={`section-${i}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                style={{ paddingBottom: "40px", borderBottom: i < sections.length - 1 ? "1px solid rgba(255,255,255,0.06)" : "none" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: accentColor + "18", border: `1px solid ${accentColor}30`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "4px" }}>
                    <span style={{ color: accentColor, fontSize: "11px", fontWeight: 800 }}>{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div style={{ flex: 1 }}>
                    <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "20px", fontWeight: 700, color: "#FFFFFF", marginBottom: "14px" }}>
                      {section.title}
                    </h2>
                    <div style={{ color: "#94A3B8", fontSize: "15px", lineHeight: 1.8, whiteSpace: "pre-line" }}>
                      {section.content}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ marginTop: "56px", padding: "36px", borderRadius: "20px", background: "#0F172A", border: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
            <h3 style={{ fontFamily: "'Sora', sans-serif", color: "#FFFFFF", fontSize: "20px", fontWeight: 700, marginBottom: "10px" }}>
              Have Questions?
            </h3>
            <p style={{ color: "#9CA3AF", fontSize: "14px", marginBottom: "20px" }}>
              If you have any questions about this policy, we&apos;re happy to help.
            </p>
            <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 28px", borderRadius: "999px", background: `linear-gradient(135deg, ${accentColor}, ${accentColor}90)`, color: "#FFF", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
      <style>{`@media(max-width:640px){.toc-grid{grid-template-columns:1fr!important;}}`}</style>
    </>
  );
}
