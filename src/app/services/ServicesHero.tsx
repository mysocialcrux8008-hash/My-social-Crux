"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ServicesHero() {
  return (
    <section style={{ position:"relative", minHeight:"70vh", display:"flex", alignItems:"center", background:"#000", overflow:"hidden", paddingTop:"72px" }}>
      <div style={{ position:"absolute", inset:0 }}>
        <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85" alt="" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", opacity:0.18 }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, rgba(0,0,0,0.97) 50%, rgba(0,0,0,0.6) 100%)" }} />
        <div style={{ position:"absolute", top:"-80px", right:"10%", width:"600px", height:"600px", borderRadius:"50%", background:"rgba(0,163,255,0.18)", filter:"blur(100px)" }} />
        <div style={{ position:"absolute", bottom:"-60px", left:"5%", width:"400px", height:"400px", borderRadius:"50%", background:"rgba(255,62,165,0.12)", filter:"blur(80px)" }} />
        <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.2 }} />
      </div>
      <div style={{ position:"relative", maxWidth:"1280px", margin:"0 auto", padding:"80px 32px", width:"100%" }}>
        <div style={{ maxWidth:"760px" }}>
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
            style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"7px 16px", borderRadius:"999px", background:"rgba(0,163,255,0.12)", border:"1px solid rgba(0,163,255,0.3)", color:"#00A3FF", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"24px" }}>
            <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:"#00A3FF", display:"inline-block" }} />
            Our Services
          </motion.div>
          <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
            style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(42px,6vw,84px)", fontWeight:900, color:"#FFFFFF", lineHeight:0.97, letterSpacing:"-0.03em", marginBottom:"24px" }}>
            EVERY TOOL<br />
            TO{" "}
            <span style={{ background:"linear-gradient(135deg,#00A3FF,#8B5CF6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>DOMINATE</span><br />
            YOUR MARKET.
          </motion.h1>
          <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
            style={{ color:"#9CA3AF", fontSize:"18px", lineHeight:1.7, maxWidth:"520px", marginBottom:"36px" }}>
            15+ premium digital marketing services engineered to scale your brand, dominate search, and drive real revenue — not just vanity metrics.
          </motion.p>
          <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}
            style={{ display:"flex", gap:"14px", flexWrap:"wrap" }}>
            <Link href="/contact" style={{ textDecoration:"none" }}>
              <motion.span whileHover={{ scale:1.04, boxShadow:"0 0 40px rgba(0,163,255,0.5)" }} whileTap={{ scale:0.97 }}
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"16px 32px", borderRadius:"6px", background:"linear-gradient(135deg,#00A3FF,#8B5CF6)", color:"#FFF", fontWeight:700, fontSize:"15px", cursor:"pointer" }}>
                Get Free Strategy Call <ArrowRight size={16} />
              </motion.span>
            </Link>
            <Link href="/case-studies" style={{ textDecoration:"none" }}>
              <motion.span whileHover={{ scale:1.03 }}
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"16px 32px", borderRadius:"6px", border:"1px solid rgba(255,255,255,0.18)", color:"#FFF", fontWeight:600, fontSize:"15px", cursor:"pointer", background:"rgba(255,255,255,0.04)" }}>
                See Results
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
