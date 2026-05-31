"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  { name:"Sarah Mitchell", role:"CEO, TechVenture Inc.", text:"MySocialCrux transformed our digital presence. Instagram grew from 2K to 85K in 4 months. The ROI has been absolutely phenomenal.", metric:"+4,150%", metricLabel:"Follower Growth", avatar:"SM", color:"#FF3EA5" },
  { name:"James Rodriguez", role:"Marketing Director, BrandForge", text:"The SEO strategy pushed us to page 1 for 47 competitive keywords. Our organic traffic tripled within 6 months. Truly world-class execution.", metric:"+312%", metricLabel:"Organic Traffic", avatar:"JR", color:"#6366F1" },
  { name:"Priya Sharma", role:"Founder, LuxeStyle Co.", text:"Their YouTube growth strategy helped us hit the Silver Play Button in record time. The content strategy is unlike anything we've seen.", metric:"100K", metricLabel:"Subscribers", avatar:"PS", color:"#FF6B00" },
];

export default function HomeTestimonial() {
  return (
    <section style={{ padding:"100px 0", background:"#F8FAFC", position:"relative" }}>
      <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(#E2E8F0 1px, transparent 1px)", backgroundSize:"32px 32px", opacity:0.5 }} />
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px", position:"relative" }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"64px" }}>
          <span style={{ display:"inline-block", padding:"6px 16px", borderRadius:"999px", background:"rgba(255,62,165,0.08)", border:"1px solid rgba(255,62,165,0.2)", color:"#FF3EA5", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"16px" }}>
            Client Success Stories
          </span>
          <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(30px,4vw,50px)", fontWeight:900, color:"#0F172A", lineHeight:1.05, marginBottom:"16px" }}>
            Brands That Chose to{" "}
            <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Win Big</span>
          </h2>
          <p style={{ color:"#64748B", fontSize:"18px", maxWidth:"520px", margin:"0 auto" }}>
            Real results from real brands. Here&apos;s what our clients say.
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"24px" }} className="testi-grid">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
              whileHover={{ y:-6, boxShadow:`0 20px 60px ${t.color}15` }}
              style={{ background:"#FFFFFF", borderRadius:"20px", padding:"32px", border:"1px solid #E2E8F0", transition:"all 0.3s", display:"flex", flexDirection:"column" }}>
              {/* Stars */}
              <div style={{ display:"flex", gap:"3px", marginBottom:"20px" }}>
                {[1,2,3,4,5].map(j => <Star key={j} size={14} style={{ color:"#FBBF24", fill:"#FBBF24" }} />)}
              </div>
              <p style={{ color:"#334155", fontSize:"15px", lineHeight:1.7, flex:1, marginBottom:"24px" }}>
                &ldquo;{t.text}&rdquo;
              </p>
              {/* Metric pill */}
              <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"8px 16px", borderRadius:"999px", background:t.color+"10", border:`1px solid ${t.color}25`, marginBottom:"20px", alignSelf:"flex-start" }}>
                <span style={{ fontFamily:"'Sora',sans-serif", fontSize:"18px", fontWeight:900, color:t.color }}>{t.metric}</span>
                <span style={{ color:"#64748B", fontSize:"12px" }}>{t.metricLabel}</span>
              </div>
              {/* Author */}
              <div style={{ display:"flex", alignItems:"center", gap:"12px", paddingTop:"20px", borderTop:"1px solid #F1F5F9" }}>
                <div style={{ width:"42px", height:"42px", borderRadius:"50%", background:`linear-gradient(135deg,${t.color},${t.color}80)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"13px", fontWeight:700, color:"#fff", flexShrink:0 }}>
                  {t.avatar}
                </div>
                <div>
                  <div style={{ color:"#0F172A", fontSize:"14px", fontWeight:700 }}>{t.name}</div>
                  <div style={{ color:"#94A3B8", fontSize:"12px" }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} style={{ textAlign:"center", marginTop:"48px" }}>
          <Link href="/case-studies" style={{ textDecoration:"none" }}>
            <motion.span whileHover={{ scale:1.03 }} style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"14px 32px", borderRadius:"999px", border:"1px solid #E2E8F0", color:"#0F172A", fontWeight:600, fontSize:"14px", cursor:"pointer", background:"#FFFFFF" }}>
              Read All Success Stories <ArrowRight size={15} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
      <style>{`@media(max-width:1024px){.testi-grid{grid-template-columns:repeat(2,1fr)!important;}} @media(max-width:640px){.testi-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
