"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, TrendingUp, Users, Zap } from "lucide-react";

export default function HomeHero() {
  return (
    <section style={{ position:"relative", minHeight:"100vh", display:"flex", alignItems:"center", background:"#000", overflow:"hidden", paddingTop:"72px" }}>

      {/* FULL BG — social media girl working */}
      <div style={{ position:"absolute", inset:0 }}>
        <img
          src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1600&q=90"
          alt="Social media marketing"
          style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center top", opacity:0.35 }}
        />
        {/* Strong left fade so text is readable */}
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, rgba(0,0,0,0.97) 40%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.3) 100%)" }} />
        {/* Bottom fade */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, height:"200px", background:"linear-gradient(to top, #000, transparent)" }} />
        {/* Pink glow */}
        <div style={{ position:"absolute", top:"-60px", right:"15%", width:"600px", height:"600px", borderRadius:"50%", background:"rgba(255,62,165,0.18)", filter:"blur(100px)" }} />
        <div style={{ position:"absolute", bottom:"-60px", right:"5%", width:"400px", height:"400px", borderRadius:"50%", background:"rgba(139,92,246,0.15)", filter:"blur(80px)" }} />
        <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.15 }} />
      </div>

      <div style={{ position:"relative", maxWidth:"1280px", margin:"0 auto", padding:"80px 20px", width:"100%" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"56px", alignItems:"center" }} className="hero-main-grid">

          {/* LEFT — Text */}
          <div>
            <motion.p initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5 }}
              style={{ color:"#9CA3AF", fontSize:"12px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.18em", marginBottom:"20px" }}>
              MySocialCrux — Premium Digital Growth Agency
            </motion.p>

            <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.1 }}
              style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(38px,8vw,96px)", fontWeight:900, color:"#FFFFFF", lineHeight:0.95, letterSpacing:"-0.03em", marginBottom:"28px", wordBreak:"break-word" }}>
              GROW<br />
              <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>BIGGER.</span><br />
              WIN MORE.
            </motion.h1>

            <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay:0.2 }}
              style={{ color:"#9CA3AF", fontSize:"18px", lineHeight:1.7, maxWidth:"460px", marginBottom:"36px" }}>
              We scale ambitious brands with precision social media growth, SEO dominance, and data-driven campaigns that deliver <span style={{ color:"#E5E7EB", fontWeight:500 }}>real revenue</span>.
            </motion.p>

            <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.5, delay:0.3 }}
              style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"52px" }}>
              <Link href="/contact" style={{ textDecoration:"none" }}>
                <motion.span whileHover={{ scale:1.04, boxShadow:"0 0 40px rgba(255,62,165,0.55)" }} whileTap={{ scale:0.97 }}
                  style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"16px 34px", borderRadius:"6px", background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", color:"#FFF", fontWeight:700, fontSize:"15px", cursor:"pointer", boxShadow:"0 0 24px rgba(255,62,165,0.3)" }}>
                  Let&apos;s Talk <ArrowRight size={16} />
                </motion.span>
              </Link>
              <Link href="/services" style={{ textDecoration:"none" }}>
                <motion.span whileHover={{ scale:1.03, borderColor:"rgba(255,255,255,0.4)" }}
                  style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"16px 34px", borderRadius:"6px", border:"1px solid rgba(255,255,255,0.2)", color:"#FFF", fontWeight:600, fontSize:"15px", cursor:"pointer", background:"rgba(255,255,255,0.04)", backdropFilter:"blur(8px)" }}>
                  Our Services
                </motion.span>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.6 }}
              style={{ display:"flex", alignItems:"center", gap:"20px", flexWrap:"wrap" }}>
              <div style={{ display:"flex" }}>
                {["#FF3EA5","#6366F1","#10B981","#F59E0B","#EF4444"].map((c,i) => (
                  <div key={i} style={{ width:"34px", height:"34px", borderRadius:"50%", border:"2px solid #000", background:c, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"11px", fontWeight:700, color:"#fff", marginLeft:i===0?0:"-9px", position:"relative", zIndex:5-i }}>
                    {["S","J","P","D","E"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div style={{ display:"flex", gap:"2px", marginBottom:"3px" }}>
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} style={{ color:"#FBBF24", fill:"#FBBF24" }} />)}
                </div>
                <p style={{ color:"#9CA3AF", fontSize:"12px" }}><span style={{ color:"#FFF", fontWeight:600 }}>500+ brands</span> scaled globally</p>
              </div>
              <div style={{ width:"1px", height:"28px", background:"rgba(255,255,255,0.1)" }} />
              <div style={{ display:"flex", alignItems:"center", gap:"6px" }}>
                <Zap size={13} style={{ color:"#FF6B00" }} />
                <span style={{ color:"#9CA3AF", fontSize:"12px" }}><span style={{ color:"#FF6B00", fontWeight:600 }}>Results in 30 days</span> guaranteed</span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Floating image cards */}
          <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ duration:0.8, delay:0.3 }}
            style={{ position:"relative", height:"520px" }} className="hero-right-panel">

            {/* Main large image */}
            <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
              style={{ position:"absolute", top:"0", left:"0", right:"80px", height:"320px", borderRadius:"20px", overflow:"hidden", boxShadow:"0 30px 80px rgba(0,0,0,0.6)", border:"1px solid rgba(255,255,255,0.1)" }}>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=700&q=85" alt="Social media team" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(255,62,165,0.15), transparent)" }} />
              {/* Live badge */}
              <div style={{ position:"absolute", top:"16px", left:"16px", display:"flex", alignItems:"center", gap:"8px", padding:"8px 14px", borderRadius:"999px", background:"rgba(0,0,0,0.75)", backdropFilter:"blur(12px)", border:"1px solid rgba(255,255,255,0.1)" }}>
                <span style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#00D084", display:"inline-block", animation:"pulse 1.5s infinite" }} />
                <span style={{ color:"#FFF", fontSize:"12px", fontWeight:600 }}>Live Campaign Active</span>
              </div>
            </motion.div>

            {/* Bottom right image */}
            <motion.div animate={{ y:[0,8,0] }} transition={{ duration:7, repeat:Infinity, ease:"easeInOut", delay:1 }}
              style={{ position:"absolute", bottom:"0", right:"0", width:"220px", height:"200px", borderRadius:"16px", overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.5)", border:"1px solid rgba(255,255,255,0.1)" }}>
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85" alt="Marketing professional" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
            </motion.div>

            {/* Floating stat chips */}
            <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut", delay:0.5 }}
              style={{ position:"absolute", top:"30%", right:"10px", background:"rgba(11,15,25,0.92)", backdropFilter:"blur(16px)", border:"1px solid rgba(0,208,132,0.3)", borderRadius:"12px", padding:"12px 16px", display:"flex", alignItems:"center", gap:"10px", boxShadow:"0 8px 32px rgba(0,208,132,0.2)", zIndex:20 }}>
              <div style={{ width:"28px", height:"28px", borderRadius:"8px", background:"rgba(0,208,132,0.2)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <Users size={13} style={{ color:"#00D084" }} />
              </div>
              <div>
                <p style={{ color:"#00D084", fontSize:"14px", fontWeight:800, lineHeight:1 }}>+12.4K</p>
                <p style={{ color:"#9CA3AF", fontSize:"10px", marginTop:"2px" }}>New Followers</p>
              </div>
            </motion.div>

            <motion.div animate={{ y:[0,-6,0] }} transition={{ duration:5, repeat:Infinity, ease:"easeInOut", delay:1.5 }}
              style={{ position:"absolute", bottom:"30%", left:"10px", background:"rgba(11,15,25,0.92)", backdropFilter:"blur(16px)", border:"1px solid rgba(255,62,165,0.3)", borderRadius:"12px", padding:"12px 16px", display:"flex", alignItems:"center", gap:"10px", boxShadow:"0 8px 32px rgba(255,62,165,0.2)", zIndex:20 }}>
              <div style={{ width:"28px", height:"28px", borderRadius:"8px", background:"rgba(255,62,165,0.2)", display:"flex", alignItems:"center", justifyContent:"center" }}>
                <TrendingUp size={13} style={{ color:"#FF3EA5" }} />
              </div>
              <div>
                <p style={{ color:"#FF3EA5", fontSize:"14px", fontWeight:800, lineHeight:1 }}>+847%</p>
                <p style={{ color:"#9CA3AF", fontSize:"10px", marginTop:"2px" }}>Growth This Month</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom stats strip */}
        <motion.div initial={{ opacity:0, y:24 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.7, duration:0.6 }}
          style={{ marginTop:"60px", display:"grid", gridTemplateColumns:"repeat(4,1fr)", borderRadius:"12px", overflow:"hidden", border:"1px solid rgba(255,255,255,0.08)", background:"rgba(255,255,255,0.03)", backdropFilter:"blur(10px)" }}
          className="hero-stats-strip">
          {[
            { value:"500+", label:"Brands Scaled", color:"#FF3EA5" },
            { value:"$120M+", label:"Revenue Generated", color:"#00D084" },
            { value:"98%", label:"Client Retention", color:"#00A3FF" },
            { value:"15+", label:"Countries Served", color:"#8B5CF6" },
          ].map((s,i) => (
            <div key={s.label} style={{ padding:"22px 28px", borderRight:i<3?"1px solid rgba(255,255,255,0.06)":"none" }}>
              <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"24px", fontWeight:900, color:s.color }}>{s.value}</div>
              <div style={{ color:"#6B7280", fontSize:"12px", marginTop:"3px" }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @media(max-width:1024px){
          .hero-main-grid{grid-template-columns:1fr!important;}
          .hero-right-panel{display:none!important;}
          .hero-stats-strip{grid-template-columns:repeat(2,1fr)!important;}
        }
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.3}}
      `}</style>
    </section>
  );
}
