"use client";
import { motion } from "framer-motion";

const stats = [
  { value:"15+",   label:"Premium Services",          color:"#00A3FF" },
  { value:"500+",  label:"Brands Scaled",              color:"#FF3EA5" },
  { value:"$120M+",label:"Client Revenue Generated",  color:"#00D084" },
  { value:"98%",   label:"Client Retention Rate",     color:"#8B5CF6" },
];

export default function ServicesStatsBar() {
  return (
    <section style={{ background:"#0B0F19", borderTop:"1px solid rgba(255,255,255,0.06)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)" }} className="svc-stats-bar">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
              style={{ padding:"40px 28px", textAlign:"center", borderRight:i<3?"1px solid rgba(255,255,255,0.06)":"none" }}>
              <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(26px,3.5vw,42px)", fontWeight:900, color:s.color, marginBottom:"6px" }}>{s.value}</div>
              <div style={{ color:"#6B7280", fontSize:"13px", fontWeight:500 }}>{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.svc-stats-bar{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
