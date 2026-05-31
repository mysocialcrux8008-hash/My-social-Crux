"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutHero() {
  return (
    <section style={{ position:"relative", minHeight:"85vh", display:"flex", alignItems:"center", background:"#000", overflow:"hidden", paddingTop:"72px" }}>
      {/* BG image */}
      <div style={{ position:"absolute", inset:0 }}>
        <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=85" alt="" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", opacity:0.2 }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, rgba(0,0,0,0.97) 50%, rgba(0,0,0,0.6) 100%)" }} />
        <div style={{ position:"absolute", top:"-80px", right:"10%", width:"600px", height:"600px", borderRadius:"50%", background:"rgba(255,62,165,0.18)", filter:"blur(100px)" }} />
        <div style={{ position:"absolute", bottom:"-60px", left:"5%", width:"400px", height:"400px", borderRadius:"50%", background:"rgba(139,92,246,0.15)", filter:"blur(80px)" }} />
        <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.2 }} />
      </div>

      <div style={{ position:"relative", maxWidth:"1280px", margin:"0 auto", padding:"80px 32px", width:"100%" }}>
        <div style={{ maxWidth:"760px" }}>
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
            style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"7px 16px", borderRadius:"999px", background:"rgba(255,62,165,0.12)", border:"1px solid rgba(255,62,165,0.3)", color:"#FF3EA5", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"28px" }}>
            <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#FF3EA5", display:"inline-block" }} />
            About MySocialCrux
          </motion.div>

          <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(44px,6vw,84px)", fontWeight:900, color:"#FFFFFF", lineHeight:0.97, letterSpacing:"-0.03em", marginBottom:"28px" }}>
            AN AGENCY BUILT<br />
            FOR BRANDS THAT<br />
            <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>REFUSE TO</span><br />
            STAND STILL.
          </motion.h1>

          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
            style={{ color:"#9CA3AF", fontSize:"19px", lineHeight:1.7, maxWidth:"560px", marginBottom:"40px" }}>
            We&apos;re not just a marketing agency. We&apos;re growth architects who combine data science, creative strategy, and relentless execution to turn ambitious brands into market leaders.
          </motion.p>

          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}
            style={{ display:"flex", gap:"14px", flexWrap:"wrap" }}>
            <Link href="/contact" style={{ textDecoration:"none" }}>
              <motion.span whileHover={{ scale:1.04, boxShadow:"0 0 40px rgba(255,62,165,0.5)" }} whileTap={{ scale:0.97 }}
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"16px 32px", borderRadius:"6px", background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", color:"#FFF", fontWeight:700, fontSize:"15px", cursor:"pointer" }}>
                Work With Us <ArrowRight size={16} />
              </motion.span>
            </Link>
            <Link href="/case-studies" style={{ textDecoration:"none" }}>
              <motion.span whileHover={{ scale:1.03 }}
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"16px 32px", borderRadius:"6px", border:"1px solid rgba(255,255,255,0.18)", color:"#FFF", fontWeight:600, fontSize:"15px", cursor:"pointer", background:"rgba(255,255,255,0.04)" }}>
                See Our Work
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
