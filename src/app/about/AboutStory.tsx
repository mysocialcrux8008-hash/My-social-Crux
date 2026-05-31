"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function AboutStory() {
  return (
    <>
      {/* STORY — dark section */}
      <section style={{ background:"#0F172A", overflow:"hidden" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:"560px", alignItems:"stretch" }} className="about-split">
            <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
              style={{ padding:"80px 64px 80px 0", display:"flex", flexDirection:"column", justifyContent:"center" }} className="about-split-pad">
              <span style={{ display:"inline-block", padding:"5px 14px", borderRadius:"999px", background:"rgba(255,62,165,0.12)", border:"1px solid rgba(255,62,165,0.25)", color:"#FF3EA5", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"20px" }}>
                Our Story
              </span>
              <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(28px,3.5vw,46px)", fontWeight:900, color:"#FFFFFF", lineHeight:1.1, marginBottom:"20px" }}>
                Born From a Frustration With{" "}
                <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Mediocre Results</span>
              </h2>
              <p style={{ color:"#94A3B8", fontSize:"16px", lineHeight:1.75, marginBottom:"20px" }}>
                MySocialCrux was founded in 2016 by a team of digital marketers who were tired of agencies that promised the world and delivered spreadsheets. We built the agency we always wished existed.
              </p>
              <p style={{ color:"#94A3B8", fontSize:"16px", lineHeight:1.75, marginBottom:"32px" }}>
                Starting with a handful of clients in New York, we grew by doing one thing exceptionally well: delivering results that actually impact revenue. Today, we&apos;re a team of 50+ specialists serving brands across 15 countries.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:"12px" }}>
                {["Founded in Jaipur, India · 2016","50+ specialists across strategy, creative & tech","E-42, Anand Puri, Adarsh Nagar, Jaipur 302004","Serving clients in 15+ countries · Open 24 Hours"].map(item => (
                  <div key={item} style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <CheckCircle size={15} style={{ color:"#FF3EA5", flexShrink:0 }} />
                    <span style={{ color:"#CBD5E1", fontSize:"14px" }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} style={{ position:"relative", overflow:"hidden" }}>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85" alt="MySocialCrux team" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(255,62,165,0.15), transparent 60%)" }} />
              <div style={{ position:"absolute", bottom:"28px", left:"28px", right:"28px", background:"rgba(0,0,0,0.82)", backdropFilter:"blur(16px)", borderRadius:"14px", padding:"22px 24px", borderLeft:"3px solid #FF3EA5" }}>
                <p style={{ color:"#E2E8F0", fontSize:"14px", lineHeight:1.65, fontStyle:"italic", marginBottom:"14px" }}>
                  &ldquo;MySocialCrux is a great business partner who functions as an extension of our internal marketing department. They push ideas, the entire team has always been at heart.&rdquo;
                </p>
                <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                  <div style={{ width:"34px", height:"34px", borderRadius:"50%", background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"12px", fontWeight:700, color:"#fff", flexShrink:0 }}>JR</div>
                  <div>
                    <div style={{ color:"#FFF", fontSize:"12px", fontWeight:600 }}>James Rodriguez</div>
                    <div style={{ color:"#64748B", fontSize:"11px" }}>Marketing Director, BrandForge</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION — white section */}
      <section style={{ background:"#FFFFFF", padding:"96px 0" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"56px" }}>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(30px,4vw,48px)", fontWeight:900, color:"#0F172A" }}>
              What Drives{" "}
              <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Everything We Do</span>
            </h2>
          </motion.div>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"24px" }} className="mv-grid">
            {[
              { label:"Our Mission", title:"Democratize Premium Growth", desc:"To make world-class digital marketing accessible to every ambitious brand — not just Fortune 500 companies. We believe every great product deserves a great audience.", color:"#FF3EA5", bg:"rgba(255,62,165,0.04)", border:"rgba(255,62,165,0.15)" },
              { label:"Our Vision", title:"The Global Growth Standard", desc:"To become the most trusted digital growth partner for ambitious brands worldwide — setting the standard for what a modern marketing agency can achieve.", color:"#8B5CF6", bg:"rgba(139,92,246,0.04)", border:"rgba(139,92,246,0.15)" },
            ].map((item, i) => (
              <motion.div key={item.label} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                whileHover={{ y:-4 }}
                style={{ padding:"40px", borderRadius:"20px", background:item.bg, border:`1px solid ${item.border}`, transition:"transform 0.3s" }}>
                <div style={{ color:item.color, fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"14px" }}>{item.label}</div>
                <h3 style={{ fontFamily:"'Sora',sans-serif", fontSize:"24px", fontWeight:800, color:"#0F172A", marginBottom:"14px" }}>{item.title}</h3>
                <p style={{ color:"#64748B", fontSize:"15px", lineHeight:1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @media(max-width:768px){
          .about-split{grid-template-columns:1fr!important;}
          .about-split-pad{padding:48px 0!important;}
          .mv-grid{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}
