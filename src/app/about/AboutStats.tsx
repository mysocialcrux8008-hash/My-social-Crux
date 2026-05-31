"use client";
import { motion } from "framer-motion";

const stats = [
  { value:"500+",  label:"Brands Scaled",           sub:"Across 15+ countries",       color:"#FF3EA5" },
  { value:"$120M+",label:"Client Revenue Generated", sub:"Directly attributable",      color:"#00A3FF" },
  { value:"98%",   label:"Client Retention Rate",    sub:"Industry-leading",           color:"#00D084" },
  { value:"15+",   label:"Countries Served",         sub:"Global reach",               color:"#8B5CF6" },
  { value:"2B+",   label:"Impressions Delivered",    sub:"Across all platforms",       color:"#FF6B00" },
  { value:"8 Yrs", label:"Industry Experience",      sub:"Since 2016",                 color:"#FF3EA5" },
];

const values = [
  { title:"Results Over Vanity",    desc:"We measure success by revenue impact, not follower counts or impressions. Every strategy is tied to a business outcome.", color:"#FF3EA5" },
  { title:"Radical Transparency",   desc:"No black boxes. You see exactly what we're doing, why we're doing it, and what results it's delivering — always.", color:"#00A3FF" },
  { title:"Obsessive Execution",    desc:"Good enough is never good enough. We sweat every detail because the difference between good and great is everything.", color:"#00D084" },
  { title:"Long-Term Partnerships", desc:"We don't want clients — we want partners. Our goal is to be the last marketing agency you ever need to hire.", color:"#8B5CF6" },
];

export default function AboutStats() {
  return (
    <>
      {/* STATS — white bg */}
      <section style={{ padding:"96px 0", background:"#F8FAFC", position:"relative" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(#E2E8F0 1px, transparent 1px)", backgroundSize:"32px 32px", opacity:0.5 }} />
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px", position:"relative" }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"56px" }}>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(30px,4vw,48px)", fontWeight:900, color:"#0F172A" }}>
              Our Impact in{" "}
              <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Numbers</span>
            </h2>
          </motion.div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" }} className="stats-grid-about">
            {stats.map((s, i) => (
              <motion.div key={s.label} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                whileHover={{ y:-4, boxShadow:`0 16px 48px ${s.color}15` }}
                style={{ background:"#FFFFFF", borderRadius:"16px", padding:"36px 28px", textAlign:"center", border:"1px solid #E2E8F0", transition:"all 0.3s" }}>
                <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(32px,4vw,48px)", fontWeight:900, color:s.color, marginBottom:"6px" }}>{s.value}</div>
                <div style={{ color:"#0F172A", fontWeight:600, fontSize:"14px", marginBottom:"4px" }}>{s.label}</div>
                <div style={{ color:"#94A3B8", fontSize:"12px" }}>{s.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:1024px){.stats-grid-about{grid-template-columns:repeat(2,1fr)!important;}} @media(max-width:640px){.stats-grid-about{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* VALUES — dark bg */}
      <section style={{ padding:"96px 0", background:"#000", position:"relative", overflow:"hidden" }}>
        <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.2 }} />
        <div style={{ position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)", width:"600px", height:"300px", background:"rgba(255,62,165,0.05)", borderRadius:"50%", filter:"blur(80px)" }} />
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px", position:"relative" }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"56px" }}>
            <span style={{ display:"inline-block", padding:"6px 16px", borderRadius:"999px", background:"rgba(255,62,165,0.1)", border:"1px solid rgba(255,62,165,0.2)", color:"#FF3EA5", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"16px" }}>
              Our Values
            </span>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(30px,4vw,48px)", fontWeight:900, color:"#FFFFFF" }}>
              The Principles That{" "}
              <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Guide Us</span>
            </h2>
          </motion.div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"20px" }} className="values-grid">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                whileHover={{ y:-4 }}
                style={{ padding:"36px", borderRadius:"16px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderLeft:`3px solid ${v.color}`, transition:"transform 0.3s" }}>
                <h3 style={{ fontFamily:"'Sora',sans-serif", fontSize:"20px", fontWeight:800, color:"#FFFFFF", marginBottom:"12px" }}>{v.title}</h3>
                <p style={{ color:"#94A3B8", fontSize:"15px", lineHeight:1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.values-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  );
}
