"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeFinalCTA() {
  return (
    <section style={{ padding:"96px 0", background:"#0B0F19", position:"relative", overflow:"hidden" }}>
      {/* Background effects */}
      <div style={{ position:"absolute", inset:0 }}>
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(255,62,165,0.08), transparent, rgba(139,92,246,0.08))" }} />
        <motion.div
          animate={{ opacity:[0.3,0.6,0.3] }}
          transition={{ duration:4, repeat:Infinity }}
          style={{ position:"absolute", top:0, left:"20%", width:"400px", height:"400px", background:"rgba(255,62,165,0.12)", borderRadius:"50%", filter:"blur(80px)" }}
        />
        <motion.div
          animate={{ opacity:[0.2,0.5,0.2] }}
          transition={{ duration:5, repeat:Infinity, delay:1.5 }}
          style={{ position:"absolute", bottom:0, right:"20%", width:"400px", height:"400px", background:"rgba(139,92,246,0.12)", borderRadius:"50%", filter:"blur(80px)" }}
        />
        <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.2 }} />
      </div>

      <div style={{ maxWidth:"900px", margin:"0 auto", padding:"0 32px", position:"relative", textAlign:"center" }}>
        <motion.div
          initial={{ opacity:0, y:30 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          transition={{ duration:0.7 }}
        >
          {/* Eyebrow */}
          <div style={{
            display:"inline-flex", alignItems:"center", gap:"8px",
            padding:"8px 18px", borderRadius:"4px", marginBottom:"28px",
            background:"rgba(255,62,165,0.1)", border:"1px solid rgba(255,62,165,0.25)",
            color:"#FF3EA5", fontSize:"11px", fontWeight:700,
            textTransform:"uppercase", letterSpacing:"0.12em",
          }}>
            Dare to Unleash Your Challenger Spirit
          </div>

          {/* Headline */}
          <h2 style={{
            fontFamily:"'Sora', sans-serif",
            fontSize:"clamp(36px, 5.5vw, 72px)",
            fontWeight:900, color:"#FFFFFF",
            lineHeight:1.0, marginBottom:"24px",
            letterSpacing:"-0.02em",
          }}>
            Ready to Scale Your<br />
            <span style={{
              background:"linear-gradient(135deg, #FF3EA5, #FF6B00)",
              WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
            }}>Brand to New Heights?</span>
          </h2>

          <p style={{ color:"#9CA3AF", fontSize:"18px", lineHeight:1.7, maxWidth:"580px", margin:"0 auto 40px" }}>
            Join 500+ ambitious brands that chose MySocialCrux to power their growth. Let&apos;s build something extraordinary together.
          </p>

          {/* CTAs */}
          <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"14px", flexWrap:"wrap", marginBottom:"24px" }}>
            <Link href="/contact" style={{ textDecoration:"none" }}>
              <motion.span
                whileHover={{ scale:1.05, boxShadow:"0 0 40px rgba(255,62,165,0.5)" }}
                whileTap={{ scale:0.97 }}
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  padding:"16px 36px", borderRadius:"4px",
                  background:"linear-gradient(135deg, #FF3EA5, #FF6B00)",
                  color:"#FFFFFF", fontWeight:700, fontSize:"15px", cursor:"pointer",
                }}
              >
                Let&apos;s Talk <ArrowRight size={16} />
              </motion.span>
            </Link>
            <Link href="/case-studies" style={{ textDecoration:"none" }}>
              <motion.span
                whileHover={{ scale:1.03, borderColor:"rgba(255,255,255,0.35)" }}
                style={{
                  display:"inline-flex", alignItems:"center", gap:"8px",
                  padding:"16px 36px", borderRadius:"4px",
                  border:"1px solid rgba(255,255,255,0.18)",
                  color:"#FFFFFF", fontWeight:600, fontSize:"15px", cursor:"pointer",
                  background:"transparent",
                }}
              >
                View Case Studies <ArrowRight size={16} />
              </motion.span>
            </Link>
          </div>

          <p style={{ color:"#4B5563", fontSize:"13px" }}>
            No contracts. No hidden fees. Cancel anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
