"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const chartBars = [30,50,40,70,55,85,65,95,75,100,80,110];

export default function HomeToolSection() {
  return (
    <section style={{ padding:"100px 0", background:"#F8FAFC", position:"relative", overflow:"hidden" }}>
      {/* Subtle pattern */}
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(#E2E8F0 1px, transparent 1px)", backgroundSize:"32px 32px", opacity:0.6 }} />
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px", position:"relative" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"center" }} className="tool-grid">
          {/* Left — dashboard mockup */}
          <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <div style={{ background:"#FFFFFF", border:"1px solid #E2E8F0", borderRadius:"20px", padding:"32px", boxShadow:"0 20px 60px rgba(0,0,0,0.08)" }}>
              <div style={{ display:"flex", alignItems:"center", gap:"6px", marginBottom:"20px" }}>
                {["#FF3EA5","#FF6B00","#00D084"].map(c => <div key={c} style={{ width:"10px", height:"10px", borderRadius:"50%", background:c }} />)}
                <div style={{ flex:1, height:"1px", background:"#E2E8F0", marginLeft:"8px" }} />
                <span style={{ color:"#94A3B8", fontSize:"11px", fontWeight:500 }}>MySocialCrux Dashboard</span>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px", marginBottom:"20px" }}>
                {[
                  { label:"Instagram Followers", value:"+24.8K", change:"+18%", color:"#FF3EA5" },
                  { label:"Organic Traffic", value:"48.2K", change:"+312%", color:"#6366F1" },
                  { label:"Google Rankings", value:"#1 × 23", change:"↑ 47 kw", color:"#10B981" },
                  { label:"Revenue Impact", value:"$180K", change:"+300%", color:"#F59E0B" },
                ].map(m => (
                  <div key={m.label} style={{ padding:"14px", borderRadius:"10px", background:"#F8FAFC", border:"1px solid #E2E8F0" }}>
                    <div style={{ color:"#94A3B8", fontSize:"10px", marginBottom:"6px" }}>{m.label}</div>
                    <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"20px", fontWeight:900, color:"#0F172A" }}>{m.value}</div>
                    <div style={{ color:m.color, fontSize:"11px", fontWeight:700, marginTop:"3px" }}>{m.change}</div>
                  </div>
                ))}
              </div>
              <div style={{ height:"64px", display:"flex", alignItems:"flex-end", gap:"4px" }}>
                {chartBars.map((h,i) => (
                  <motion.div key={i} initial={{ height:0 }} whileInView={{ height:`${(h/110)*100}%` }} viewport={{ once:true }} transition={{ delay:i*0.04, duration:0.5 }}
                    style={{ flex:1, borderRadius:"3px 3px 0 0", background: i===11?"linear-gradient(to top,#FF3EA5,#FF6B00)":i>8?"rgba(255,62,165,0.35)":i>5?"rgba(99,102,241,0.25)":"#E2E8F0" }} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right — text */}
          <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}>
            <span style={{ display:"inline-block", padding:"5px 14px", borderRadius:"999px", background:"rgba(99,102,241,0.1)", border:"1px solid rgba(99,102,241,0.25)", color:"#6366F1", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"20px" }}>
              Growth Intelligence Platform
            </span>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(28px,3.5vw,46px)", fontWeight:900, color:"#0F172A", lineHeight:1.1, marginBottom:"20px" }}>
              Your Brand&apos;s Growth,{" "}
              <span style={{ background:"linear-gradient(135deg,#6366F1,#00A3FF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Fully Transparent.</span>
            </h2>
            <p style={{ color:"#64748B", fontSize:"16px", lineHeight:1.75, marginBottom:"28px" }}>
              Our proprietary growth dashboard gives you real-time visibility into every campaign metric — followers, rankings, traffic, and revenue impact — all in one place.
            </p>
            <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:"12px", marginBottom:"32px" }}>
              {["Live campaign performance tracking","Competitor benchmarking & gap analysis","Weekly automated growth reports","Direct strategist access via dashboard"].map(item => (
                <li key={item} style={{ display:"flex", alignItems:"center", gap:"10px", color:"#475569", fontSize:"14px" }}>
                  <div style={{ width:"6px", height:"6px", borderRadius:"50%", background:"#6366F1", flexShrink:0 }} />
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/contact" style={{ textDecoration:"none" }}>
              <motion.span whileHover={{ scale:1.03, boxShadow:"0 0 30px rgba(99,102,241,0.3)" }}
                style={{ display:"inline-flex", alignItems:"center", gap:"6px", padding:"14px 30px", borderRadius:"999px", background:"linear-gradient(135deg,#6366F1,#00A3FF)", color:"#FFF", fontWeight:700, fontSize:"14px", cursor:"pointer" }}>
                Get Dashboard Access <ArrowRight size={14} />
              </motion.span>
            </Link>
          </motion.div>
        </div>
      </div>
      <style>{`@media(max-width:768px){.tool-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
