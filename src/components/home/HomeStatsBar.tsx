"use client";
import { motion } from "framer-motion";

const stats = [
  { value:"180M+", label:"Impressions Delivered", color:"#FF3EA5" },
  { value:"41M+", label:"Engagements Generated", color:"#6366F1" },
  { value:"500+", label:"Brands Scaled", color:"#10B981" },
  { value:"2,000+", label:"Campaigns Launched", color:"#F59E0B" },
];

export default function HomeStatsBar() {
  return (
    <section style={{ background:"#FFFFFF", borderTop:"1px solid #E2E8F0", borderBottom:"1px solid #E2E8F0" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)" }} className="statsbar-grid">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
              style={{ padding:"52px 32px", textAlign:"center", borderRight: i < 3 ? "1px solid #E2E8F0" : "none" }}>
              <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(32px,4vw,52px)", fontWeight:900, color:s.color, marginBottom:"8px" }}>
                {s.value}
              </div>
              <div style={{ color:"#64748B", fontSize:"13px", textTransform:"uppercase", letterSpacing:"0.08em", fontWeight:600 }}>
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.statsbar-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
