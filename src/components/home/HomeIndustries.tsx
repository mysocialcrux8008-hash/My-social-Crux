"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  { name:"SaaS & Technology", color:"#FF3EA5" },
  { name:"E-Commerce", color:"#FF6B00" },
  { name:"Fashion & Lifestyle", color:"#00D084" },
  { name:"FinTech", color:"#00A3FF" },
  { name:"Healthcare", color:"#8B5CF6" },
  { name:"Real Estate", color:"#FF3EA5" },
  { name:"Entertainment", color:"#FF6B00" },
  { name:"Education", color:"#00D084" },
];

export default function HomeIndustries() {
  return (
    <section style={{ padding:"96px 0", background:"#000", position:"relative" }}>
      <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.15 }} />
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px", position:"relative" }}>
        <motion.div
          initial={{ opacity:0, y:24 }}
          whileInView={{ opacity:1, y:0 }}
          viewport={{ once:true }}
          style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:"48px", flexWrap:"wrap", gap:"16px" }}
        >
          <div>
            <p style={{ color:"#9CA3AF", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:"12px" }}>Big Enough to Scale, Focused Enough to Care</p>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(28px,3.5vw,44px)", fontWeight:900, color:"#FFF", lineHeight:1.05 }}>
              Industry Solutions<br />
              <span style={{ background:"linear-gradient(135deg,#00A3FF,#8B5CF6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Built for Your Market</span>
            </h2>
          </div>
          <Link href="/services" style={{ display:"inline-flex", alignItems:"center", gap:"6px", color:"#9CA3AF", fontSize:"14px", textDecoration:"none" }}>
            All services <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"12px" }} className="ind-grid">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity:0, y:16 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once:true }}
              transition={{ delay:i*0.07 }}
              whileHover={{ y:-4, borderColor:ind.color+"60", background:"rgba(255,255,255,0.04)" }}
              style={{ padding:"24px 20px", borderRadius:"8px", border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.02)", transition:"all 0.2s", cursor:"default" }}
            >
              <div style={{ width:"8px", height:"8px", borderRadius:"50%", background:ind.color, marginBottom:"12px" }} />
              <div style={{ color:"#FFF", fontWeight:600, fontSize:"14px" }}>{ind.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:1024px){.ind-grid{grid-template-columns:repeat(2,1fr)!important;}} @media(max-width:640px){.ind-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
