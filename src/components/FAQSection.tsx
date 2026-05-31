"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQ { q: string; a: string; }
interface Props { faqs: FAQ[]; title?: string; subtitle?: string; }

export default function FAQSection({ faqs, title = "Frequently Asked Questions", subtitle }: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section style={{ padding: "96px 0", background: "#000000", position: "relative", overflow: "hidden" }}>
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "56px" }}
        >
          <div style={{
            display: "inline-block", padding: "6px 16px", borderRadius: "999px",
            background: "rgba(139,92,246,0.1)", border: "1px solid rgba(139,92,246,0.2)",
            color: "#8B5CF6", fontSize: "11px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px",
          }}>
            FAQ
          </div>
          <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(30px, 4vw, 48px)", fontWeight: 800, color: "#FFFFFF", marginBottom: "12px" }}>
            {title}
          </h2>
          {subtitle && <p style={{ color: "#9CA3AF", fontSize: "17px" }}>{subtitle}</p>}
        </motion.div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              style={{
                borderRadius: "14px",
                border: open === i ? "1px solid rgba(139,92,246,0.4)" : "1px solid rgba(255,255,255,0.08)",
                background: open === i ? "rgba(139,92,246,0.05)" : "rgba(255,255,255,0.02)",
                overflow: "hidden",
                transition: "border-color 0.3s, background 0.3s",
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: "100%", display: "flex", alignItems: "center",
                  justifyContent: "space-between", padding: "20px 24px",
                  background: "none", border: "none", cursor: "pointer", textAlign: "left",
                }}
              >
                <span style={{ color: open === i ? "#FFFFFF" : "#D1D5DB", fontWeight: 500, fontSize: "15px", flex: 1, paddingRight: "16px" }}>
                  {faq.q}
                </span>
                <span style={{
                  width: "28px", height: "28px", borderRadius: "50%", flexShrink: 0,
                  background: open === i ? "#8B5CF6" : "rgba(255,255,255,0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "background 0.3s",
                }}>
                  {open === i
                    ? <Minus size={13} style={{ color: "#FFFFFF" }} />
                    : <Plus size={13} style={{ color: "#9CA3AF" }} />
                  }
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{
                      padding: "0 24px 20px",
                      color: "#9CA3AF", fontSize: "14px", lineHeight: 1.7,
                      borderTop: "1px solid rgba(255,255,255,0.08)",
                      paddingTop: "16px",
                    }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
