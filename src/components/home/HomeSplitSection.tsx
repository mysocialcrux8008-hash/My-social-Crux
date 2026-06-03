"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function HomeSplitSection() {
  return (
    <>
      {/* ROW 1 — Dark bg, text left, image right */}
      <section style={{ background:"#0F172A", overflow:"hidden" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:"560px", alignItems:"stretch" }} className="split-grid">
            <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
              style={{ padding:"80px 64px 80px 0", display:"flex", flexDirection:"column", justifyContent:"center" }} className="split-pad">
              <span style={{ display:"inline-block", padding:"5px 14px", borderRadius:"999px", background:"rgba(255,62,165,0.12)", border:"1px solid rgba(255,62,165,0.25)", color:"#FF3EA5", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"20px" }}>
                Why MySocialCrux
              </span>
              <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(28px,3.5vw,46px)", fontWeight:900, color:"#FFFFFF", lineHeight:1.1, marginBottom:"20px" }}>
                We Don&apos;t Just Run Campaigns.{" "}
                <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>We Engineer Growth.</span>
              </h2>
              <p style={{ color:"#94A3B8", fontSize:"16px", lineHeight:1.75, marginBottom:"28px" }}>
                MySocialCrux functions as an extension of your internal marketing team. We push ideas, execute with precision, and always keep your brand&apos;s best interests at heart.
              </p>
              <div style={{ display:"flex", flexDirection:"column", gap:"12px", marginBottom:"36px" }}>
                {["Data-driven strategy, not guesswork","White-hat methods — always platform-safe","Dedicated strategist for every account","Measurable results in 30 days"].map(item => (
                  <div key={item} style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                    <CheckCircle size={15} style={{ color:"#00D084", flexShrink:0 }} />
                    <span style={{ color:"#CBD5E1", fontSize:"14px" }}>{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" style={{ textDecoration:"none" }}>
                <motion.span whileHover={{ scale:1.03 }} style={{ display:"inline-flex", alignItems:"center", gap:"6px", padding:"13px 28px", borderRadius:"999px", background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", color:"#FFF", fontWeight:700, fontSize:"14px", cursor:"pointer" }}>
                  About Us <ArrowRight size={14} />
                </motion.span>
              </Link>
            </motion.div>
            <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} style={{ position:"relative", overflow:"hidden" }}>
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=900&q=85" alt="Social media marketing team" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", display:"block" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(255,62,165,0.15), transparent 60%)" }} />
              <div style={{ position:"absolute", bottom:"32px", left:"28px", right:"28px", background:"rgba(0,0,0,0.82)", backdropFilter:"blur(16px)", borderRadius:"14px", padding:"22px 24px", borderLeft:"3px solid #FF3EA5" }}>
                <p style={{ color:"#E2E8F0", fontSize:"14px", lineHeight:1.65, fontStyle:"italic", marginBottom:"14px" }}>
                  "MySocialCrux transformed our digital presence. Instagram grew from 2K to 85K in 4 months. The ROI has been absolutely phenomenal."
                </p>
                <div style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                  <div style={{ width:"34px", height:"34px", borderRadius:"50%", background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"12px", fontWeight:700, color:"#fff", flexShrink:0 }}>SM</div>
                  <div>
                    <div style={{ color:"#FFF", fontSize:"12px", fontWeight:600 }}>Sarah Mitchell</div>
                    <div style={{ color:"#64748B", fontSize:"11px" }}>CEO, TechVenture Inc.</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ROW 2 — White bg, image left, text right */}
      <section style={{ background:"#FFFFFF", overflow:"hidden" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:"520px", alignItems:"stretch" }} className="split-grid">
            <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} style={{ position:"relative", overflow:"hidden" }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=85" alt="Analytics dashboard" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", display:"block" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(16,185,129,0.12), transparent 60%)" }} />
            </motion.div>
            <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
              style={{ padding:"80px 0 80px 64px", display:"flex", flexDirection:"column", justifyContent:"center" }} className="split-pad-r">
              <span style={{ display:"inline-block", padding:"5px 14px", borderRadius:"999px", background:"rgba(16,185,129,0.1)", border:"1px solid rgba(16,185,129,0.25)", color:"#10B981", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"20px" }}>
                Real-Time Analytics
              </span>
              <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(28px,3.5vw,46px)", fontWeight:900, color:"#0F172A", lineHeight:1.1, marginBottom:"20px" }}>
                Turn Complex Data Into{" "}
                <span style={{ background:"linear-gradient(135deg,#10B981,#00A3FF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Real Business Impact.</span>
              </h2>
              <p style={{ color:"#64748B", fontSize:"16px", lineHeight:1.75, marginBottom:"28px" }}>
                Every campaign is tracked, measured, and optimized in real time. Full transparency with live dashboards showing exactly what&apos;s driving revenue.
              </p>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"14px", marginBottom:"32px" }}>
                {[
                  { v:"+312%", l:"Avg. Traffic Increase", c:"#10B981" },
                  { v:"4,150%", l:"Best Follower Growth", c:"#FF3EA5" },
                  { v:"$120M+", l:"Client Revenue", c:"#6366F1" },
                  { v:"30 Days", l:"First Results", c:"#F59E0B" },
                ].map(s => (
                  <div key={s.l} style={{ padding:"16px", borderRadius:"10px", background:"#F8FAFC", border:"1px solid #E2E8F0" }}>
                    <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"22px", fontWeight:900, color:s.c }}>{s.v}</div>
                    <div style={{ color:"#94A3B8", fontSize:"12px", marginTop:"3px" }}>{s.l}</div>
                  </div>
                ))}
              </div>
              <Link href="/case-studies" style={{ textDecoration:"none" }}>
                <motion.span whileHover={{ scale:1.03 }} style={{ display:"inline-flex", alignItems:"center", gap:"6px", padding:"13px 28px", borderRadius:"999px", background:"linear-gradient(135deg,#10B981,#00A3FF)", color:"#FFF", fontWeight:700, fontSize:"14px", cursor:"pointer" }}>
                  See Case Studies <ArrowRight size={14} />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      <style>{`
        @media(max-width:768px){
          .split-grid{grid-template-columns:1fr!important;}
          .split-pad{padding:48px 0!important;}
          .split-pad-r{padding:48px 0!important;}
        }
      `}</style>
    </>
  );
}
