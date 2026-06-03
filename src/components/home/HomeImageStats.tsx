"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";

const results = [
  { image:"https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&q=85", label:"Social Media", stat:"4,150%", desc:"Follower growth for TechVenture", color:"#FF3EA5" },
  { image:"https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=600&q=85", label:"SEO", stat:"+312%", desc:"Organic traffic for BrandForge", color:"#6366F1" },
  { image:"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=85", label:"Press & PR", stat:"200+", desc:"Global publications secured", color:"#8B5CF6" },
  { image:"https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&q=85", label:"YouTube", stat:"100K", desc:"Subscribers in 8 months", color:"#EF4444" },
];

export default function HomeImageStats() {
  return (
    <section style={{ padding:"100px 0", background:"#0F172A", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"-100px", left:"-100px", width:"500px", height:"500px", borderRadius:"50%", background:"rgba(255,62,165,0.08)", filter:"blur(80px)" }} />
      <div style={{ position:"absolute", bottom:"-100px", right:"-100px", width:"500px", height:"500px", borderRadius:"50%", background:"rgba(99,102,241,0.08)", filter:"blur(80px)" }} />
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px", position:"relative" }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
          style={{ display:"flex", alignItems:"flex-end", justifyContent:"space-between", marginBottom:"56px", flexWrap:"wrap", gap:"16px" }}>
          <div>
            <p style={{ color:"#FF6B00", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.15em", marginBottom:"12px" }}>Proven Results</p>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(30px,4vw,50px)", fontWeight:900, color:"#FFFFFF", lineHeight:1.05 }}>
              Join Brands That Are{" "}
              <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Already Winning</span>
            </h2>
          </div>
          <Link href="/case-studies" style={{ display:"inline-flex", alignItems:"center", gap:"6px", color:"#94A3B8", fontSize:"14px", textDecoration:"none" }}>
            All case studies <ArrowRight size={14} />
          </Link>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"16px" }} className="imgstat-grid">
          {results.map((r, i) => (
            <motion.div key={r.label} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
              whileHover={{ y:-8, boxShadow:`0 24px 60px ${r.color}30` }}
              style={{ borderRadius:"16px", overflow:"hidden", position:"relative", cursor:"pointer", transition:"all 0.3s" }}>
              <img src={r.image} alt={r.label} style={{ width:"100%", height:"280px", objectFit:"cover", display:"block" }} />
              <div style={{ position:"absolute", inset:0, background:`linear-gradient(to bottom, transparent 25%, rgba(0,0,0,0.88))` }} />
              <div style={{ position:"absolute", top:"14px", left:"14px", padding:"4px 10px", borderRadius:"999px", background:r.color+"25", border:`1px solid ${r.color}50`, color:r.color, fontSize:"10px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.08em", backdropFilter:"blur(8px)" }}>
                {r.label}
              </div>
              <div style={{ position:"absolute", bottom:"20px", left:"18px", right:"18px" }}>
                <div style={{ display:"flex", alignItems:"center", gap:"5px", marginBottom:"4px" }}>
                  <TrendingUp size={13} style={{ color:r.color }} />
                  <span style={{ fontFamily:"'Sora',sans-serif", fontSize:"30px", fontWeight:900, color:r.color, lineHeight:1 }}>{r.stat}</span>
                </div>
                <div style={{ color:"#CBD5E1", fontSize:"13px" }}>{r.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:1024px){.imgstat-grid{grid-template-columns:repeat(2,1fr)!important;}} @media(max-width:640px){.imgstat-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
