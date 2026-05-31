"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, CheckCircle, Star, TrendingUp, Zap, Plus, Minus } from "lucide-react";

export interface ServiceBenefit { icon: React.ElementType; title: string; desc: string; color: string; }
export interface ServiceFeature { title: string; desc: string; }
export interface ServiceStep { num: string; title: string; desc: string; color: string; duration: string; }
export interface ServiceStat { value: string; label: string; color: string; }
export interface ServiceTestimonial { name: string; role: string; text: string; metric: string; avatar: string; color: string; }
export interface ServiceFAQ { q: string; a: string; }
export interface RelatedService { title: string; href: string; color: string; }

export interface ServicePageData {
  accentColor: string;
  accentGradient: string;
  badge: string;
  heroTitle: string;
  heroTitleAccent: string;
  heroSubtitle: string;
  heroBgImage: string;
  heroRightImage: string;
  heroRightImage2: string;
  heroStats: { v: string; l: string }[];
  statsBar: ServiceStat[];
  benefitsTitle: string;
  benefitsTitleAccent: string;
  benefitsSubtitle: string;
  benefits: ServiceBenefit[];
  splitImage: string;
  splitBadge: string;
  splitTitle: string;
  splitTitleAccent: string;
  splitBadgeOverlay: string;
  splitOverlayText: string;
  features: ServiceFeature[];
  processTitle: string;
  processTitleAccent: string;
  processSubtitle: string;
  process: ServiceStep[];
  testimonials: ServiceTestimonial[];
  faqs: ServiceFAQ[];
  relatedServices: RelatedService[];
  ctaTitle: string;
  ctaTitleAccent: string;
  ctaSubtitle: string;
  ctaButton: string;
}

function FAQItem({ q, a, color }: { q: string; a: string; color: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderRadius:"12px", border: open ? `1px solid ${color}35` : "1px solid rgba(255,255,255,0.08)", background: open ? color+"06" : "rgba(255,255,255,0.02)", overflow:"hidden", transition:"all 0.3s" }}>
      <button onClick={() => setOpen(!open)} style={{ width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", padding:"20px 24px", background:"none", border:"none", cursor:"pointer", textAlign:"left" }}>
        <span style={{ color: open ? "#FFFFFF" : "#D1D5DB", fontWeight:500, fontSize:"15px", flex:1, paddingRight:"16px" }}>{q}</span>
        <span style={{ width:"28px", height:"28px", borderRadius:"50%", background: open ? color : "rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, transition:"background 0.3s" }}>
          {open ? <Minus size={13} style={{ color:"#FFF" }} /> : <Plus size={13} style={{ color:"#9CA3AF" }} />}
        </span>
      </button>
      {open && (
        <div style={{ padding:"0 24px 20px", color:"#9CA3AF", fontSize:"14px", lineHeight:1.7, borderTop:"1px solid rgba(255,255,255,0.06)", paddingTop:"16px" }}>{a}</div>
      )}
    </div>
  );
}

export default function ServicePageTemplate({ d }: { d: ServicePageData }) {
  return (
    <>
      {/* HERO */}
      <section style={{ position:"relative", minHeight:"90vh", display:"flex", alignItems:"center", background:"#000", overflow:"hidden", paddingTop:"72px" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <img src={d.heroBgImage} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", objectPosition:"center", opacity:0.25 }} />
          <div style={{ position:"absolute", inset:0, background:"linear-gradient(90deg, rgba(0,0,0,0.97) 45%, rgba(0,0,0,0.65) 100%)" }} />
          <div style={{ position:"absolute", top:"-80px", right:"10%", width:"600px", height:"600px", borderRadius:"50%", background:d.accentColor+"22", filter:"blur(100px)" }} />
          <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.2 }} />
        </div>
        <div style={{ position:"relative", maxWidth:"1280px", margin:"0 auto", padding:"80px 32px", width:"100%" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"60px", alignItems:"center" }} className="spt-hero-grid">
            <div>
              <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"7px 16px", borderRadius:"999px", background:d.accentColor+"18", border:`1px solid ${d.accentColor}35`, color:d.accentColor, fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"24px" }}>
                <span style={{ width:"7px", height:"7px", borderRadius:"50%", background:d.accentColor, display:"inline-block" }} />
                {d.badge}
              </motion.div>
              <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
                style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(36px,5vw,64px)", fontWeight:900, color:"#FFFFFF", lineHeight:1.05, letterSpacing:"-0.02em", marginBottom:"22px" }}>
                {d.heroTitle}{" "}
                <span style={{ background:d.accentGradient, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{d.heroTitleAccent}</span>
              </motion.h1>
              <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
                style={{ color:"#9CA3AF", fontSize:"18px", lineHeight:1.7, maxWidth:"500px", marginBottom:"36px" }}>{d.heroSubtitle}</motion.p>
              <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}
                style={{ display:"flex", gap:"14px", flexWrap:"wrap", marginBottom:"40px" }}>
                <Link href="/contact" style={{ textDecoration:"none" }}>
                  <motion.span whileHover={{ scale:1.04, boxShadow:`0 0 40px ${d.accentColor}55` }} whileTap={{ scale:0.97 }}
                    style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"16px 32px", borderRadius:"6px", background:d.accentGradient, color:"#FFF", fontWeight:700, fontSize:"15px", cursor:"pointer", boxShadow:`0 0 24px ${d.accentColor}30` }}>
                    Start Growing Today <ArrowRight size={16} />
                  </motion.span>
                </Link>
                <Link href="/case-studies" style={{ textDecoration:"none" }}>
                  <motion.span whileHover={{ scale:1.03 }}
                    style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"16px 32px", borderRadius:"6px", border:"1px solid rgba(255,255,255,0.18)", color:"#FFF", fontWeight:600, fontSize:"15px", cursor:"pointer", background:"rgba(255,255,255,0.04)" }}>
                    See Results
                  </motion.span>
                </Link>
              </motion.div>
              <motion.div initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.5 }}
                style={{ display:"flex", gap:"28px", flexWrap:"wrap" }}>
                {d.heroStats.map(s => (
                  <div key={s.l}>
                    <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"22px", fontWeight:900, color:d.accentColor }}>{s.v}</div>
                    <div style={{ color:"#6B7280", fontSize:"11px", marginTop:"2px" }}>{s.l}</div>
                  </div>
                ))}
              </motion.div>
            </div>
            {/* Right images */}
            <motion.div initial={{ opacity:0, x:40 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.3, duration:0.8 }}
              style={{ position:"relative", height:"480px" }} className="spt-hero-right">
              <motion.div animate={{ y:[0,-10,0] }} transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
                style={{ position:"absolute", top:0, left:0, right:"60px", height:"300px", borderRadius:"20px", overflow:"hidden", border:"1px solid rgba(255,255,255,0.1)", boxShadow:"0 30px 80px rgba(0,0,0,0.6)" }}>
                <img src={d.heroRightImage} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg, ${d.accentColor}20, transparent)` }} />
              </motion.div>
              <motion.div animate={{ y:[0,8,0] }} transition={{ duration:7, repeat:Infinity, ease:"easeInOut", delay:1 }}
                style={{ position:"absolute", bottom:0, right:0, width:"200px", height:"180px", borderRadius:"16px", overflow:"hidden", border:"1px solid rgba(255,255,255,0.1)", boxShadow:"0 20px 60px rgba(0,0,0,0.5)" }}>
                <img src={d.heroRightImage2} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              </motion.div>
              <motion.div animate={{ y:[0,-8,0] }} transition={{ duration:4, repeat:Infinity, ease:"easeInOut", delay:0.5 }}
                style={{ position:"absolute", top:"28%", right:"20px", background:"rgba(11,15,25,0.92)", backdropFilter:"blur(16px)", border:`1px solid ${d.accentColor}35`, borderRadius:"12px", padding:"12px 16px", display:"flex", alignItems:"center", gap:"10px", zIndex:20, boxShadow:`0 8px 32px ${d.accentColor}25` }}>
                <div style={{ width:"28px", height:"28px", borderRadius:"8px", background:d.accentColor+"22", display:"flex", alignItems:"center", justifyContent:"center" }}>
                  <TrendingUp size={13} style={{ color:d.accentColor }} />
                </div>
                <div>
                  <p style={{ color:d.accentColor, fontSize:"14px", fontWeight:800, lineHeight:1 }}>{d.heroStats[0]?.v}</p>
                  <p style={{ color:"#9CA3AF", fontSize:"10px", marginTop:"2px" }}>{d.heroStats[0]?.l}</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:1024px){.spt-hero-grid{grid-template-columns:1fr!important;} .spt-hero-right{display:none!important;}}`}</style>
      </section>

      {/* STATS BAR */}
      <section style={{ background:"#0B0F19", borderTop:"1px solid rgba(255,255,255,0.06)", borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)" }} className="spt-stats-bar">
            {d.statsBar.map((s,i) => (
              <motion.div key={s.label} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                style={{ padding:"44px 28px", textAlign:"center", borderRight:i<3?"1px solid rgba(255,255,255,0.06)":"none" }}>
                <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(28px,3.5vw,44px)", fontWeight:900, color:s.color, marginBottom:"6px" }}>{s.value}</div>
                <div style={{ color:"#6B7280", fontSize:"13px", fontWeight:500 }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.spt-stats-bar{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* BENEFITS */}
      <section style={{ padding:"96px 0", background:"#FFFFFF" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"64px" }}>
            <span style={{ display:"inline-block", padding:"6px 16px", borderRadius:"999px", background:d.accentColor+"12", border:`1px solid ${d.accentColor}25`, color:d.accentColor, fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"16px" }}>Why Choose Us</span>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(30px,4vw,48px)", fontWeight:900, color:"#0F172A", lineHeight:1.05, marginBottom:"16px" }}>
              {d.benefitsTitle}{" "}
              <span style={{ background:d.accentGradient, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{d.benefitsTitleAccent}</span>
            </h2>
            <p style={{ color:"#64748B", fontSize:"18px", maxWidth:"540px", margin:"0 auto" }}>{d.benefitsSubtitle}</p>
          </motion.div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"24px" }} className="spt-benefits-grid">
            {d.benefits.map((b,i) => {
              const Icon = b.icon;
              return (
                <motion.div key={b.title} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}
                  whileHover={{ y:-6, boxShadow:`0 20px 60px ${b.color}15` }}
                  style={{ padding:"32px 28px", borderRadius:"16px", background:"#F8FAFC", border:"1px solid #E2E8F0", transition:"all 0.3s" }}>
                  <div style={{ width:"52px", height:"52px", borderRadius:"14px", background:b.color+"15", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"18px" }}>
                    <Icon size={24} style={{ color:b.color }} />
                  </div>
                  <h3 style={{ fontFamily:"'Sora',sans-serif", fontSize:"17px", fontWeight:700, color:"#0F172A", marginBottom:"10px" }}>{b.title}</h3>
                  <p style={{ color:"#64748B", fontSize:"14px", lineHeight:1.65 }}>{b.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
        <style>{`@media(max-width:1024px){.spt-benefits-grid{grid-template-columns:repeat(2,1fr)!important;}} @media(max-width:640px){.spt-benefits-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* SPLIT — image + features */}
      <section style={{ background:"#0F172A", overflow:"hidden" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", minHeight:"560px", alignItems:"stretch" }} className="spt-split-grid">
            <motion.div initial={{ opacity:0, x:-30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} style={{ position:"relative", overflow:"hidden" }}>
              <img src={d.splitImage} alt="" style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
              <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg, ${d.accentColor}20, transparent 60%)` }} />
              <div style={{ position:"absolute", bottom:"28px", left:"28px", right:"28px", background:"rgba(0,0,0,0.82)", backdropFilter:"blur(16px)", borderRadius:"14px", padding:"20px 22px", borderLeft:`3px solid ${d.accentColor}` }}>
                <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"8px" }}>
                  <span style={{ width:"8px", height:"8px", borderRadius:"50%", background:"#00D084", display:"inline-block" }} />
                  <span style={{ color:"#FFF", fontSize:"12px", fontWeight:600 }}>{d.splitBadgeOverlay}</span>
                </div>
                <p style={{ color:"#9CA3AF", fontSize:"13px", lineHeight:1.5 }}>{d.splitOverlayText}</p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity:0, x:30 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
              style={{ padding:"72px 0 72px 60px", display:"flex", flexDirection:"column", justifyContent:"center" }} className="spt-split-pad">
              <span style={{ display:"inline-block", padding:"5px 14px", borderRadius:"999px", background:d.accentColor+"18", border:`1px solid ${d.accentColor}30`, color:d.accentColor, fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"20px" }}>{d.splitBadge}</span>
              <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(26px,3vw,40px)", fontWeight:900, color:"#FFFFFF", lineHeight:1.1, marginBottom:"28px" }}>
                {d.splitTitle}{" "}
                <span style={{ background:d.accentGradient, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{d.splitTitleAccent}</span>
              </h2>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }}>
                {d.features.map((f,i) => (
                  <motion.div key={f.title} initial={{ opacity:0, y:12 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.06 }}
                    style={{ padding:"16px", borderRadius:"10px", background:"rgba(255,255,255,0.04)", border:"1px solid rgba(255,255,255,0.07)" }}>
                    <div style={{ display:"flex", alignItems:"center", gap:"8px", marginBottom:"6px" }}>
                      <CheckCircle size={14} style={{ color:d.accentColor, flexShrink:0 }} />
                      <span style={{ color:"#FFFFFF", fontSize:"13px", fontWeight:600 }}>{f.title}</span>
                    </div>
                    <p style={{ color:"#6B7280", fontSize:"12px", lineHeight:1.5 }}>{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <style>{`@media(max-width:768px){.spt-split-grid{grid-template-columns:1fr!important;} .spt-split-pad{padding:48px 0!important;}}`}</style>
      </section>

      {/* PROCESS */}
      <section style={{ padding:"96px 0", background:"#000", position:"relative", overflow:"hidden" }}>
        <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.2 }} />
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px", position:"relative" }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"64px" }}>
            <span style={{ display:"inline-block", padding:"6px 16px", borderRadius:"999px", background:"rgba(0,163,255,0.1)", border:"1px solid rgba(0,163,255,0.2)", color:"#00A3FF", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"16px" }}>Our Process</span>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(30px,4vw,48px)", fontWeight:900, color:"#FFFFFF", lineHeight:1.05, marginBottom:"16px" }}>
              {d.processTitle}{" "}
              <span style={{ background:"linear-gradient(135deg,#00A3FF,#8B5CF6)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{d.processTitleAccent}</span>
            </h2>
            <p style={{ color:"#9CA3AF", fontSize:"18px", maxWidth:"520px", margin:"0 auto" }}>{d.processSubtitle}</p>
          </motion.div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"24px" }} className="spt-process-grid">
            {d.process.map((step,i) => (
              <motion.div key={step.num} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.12 }}
                whileHover={{ y:-6 }} style={{ textAlign:"center" }}>
                <div style={{ position:"relative", display:"inline-flex", alignItems:"center", justifyContent:"center", marginBottom:"20px" }}>
                  <div style={{ width:"72px", height:"72px", borderRadius:"50%", background:step.color+"18", border:`2px solid ${step.color}40`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"22px", fontWeight:900, color:"#FFF", fontFamily:"'Sora',sans-serif", position:"relative", zIndex:1 }}>{step.num}</div>
                  <div style={{ position:"absolute", inset:0, borderRadius:"50%", background:step.color, filter:"blur(20px)", opacity:0.18 }} />
                </div>
                <div style={{ display:"inline-block", padding:"4px 12px", borderRadius:"999px", background:step.color+"18", color:step.color, fontSize:"11px", fontWeight:600, marginBottom:"10px" }}>{step.duration}</div>
                <h3 style={{ fontFamily:"'Sora',sans-serif", fontSize:"16px", fontWeight:700, color:"#FFFFFF", marginBottom:"10px" }}>{step.title}</h3>
                <p style={{ color:"#9CA3AF", fontSize:"13px", lineHeight:1.6 }}>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.spt-process-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding:"96px 0", background:"#F8FAFC", position:"relative" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:"radial-gradient(#E2E8F0 1px, transparent 1px)", backgroundSize:"32px 32px", opacity:0.5 }} />
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px", position:"relative" }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"56px" }}>
            <span style={{ display:"inline-block", padding:"6px 16px", borderRadius:"999px", background:d.accentColor+"12", border:`1px solid ${d.accentColor}25`, color:d.accentColor, fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"16px" }}>Success Stories</span>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(28px,3.5vw,44px)", fontWeight:900, color:"#0F172A" }}>
              Real Brands.{" "}
              <span style={{ background:d.accentGradient, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Real Results.</span>
            </h2>
          </motion.div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"24px" }} className="spt-testi-grid">
            {d.testimonials.map((t,i) => (
              <motion.div key={t.name} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                whileHover={{ y:-6, boxShadow:`0 20px 60px ${t.color}15` }}
                style={{ background:"#FFFFFF", borderRadius:"20px", padding:"32px", border:"1px solid #E2E8F0", transition:"all 0.3s", display:"flex", flexDirection:"column" }}>
                <div style={{ display:"flex", gap:"3px", marginBottom:"18px" }}>
                  {[1,2,3,4,5].map(j => <Star key={j} size={14} style={{ color:"#FBBF24", fill:"#FBBF24" }} />)}
                </div>
                <p style={{ color:"#334155", fontSize:"15px", lineHeight:1.7, flex:1, marginBottom:"20px" }}>&ldquo;{t.text}&rdquo;</p>
                <div style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"8px 16px", borderRadius:"999px", background:t.color+"10", border:`1px solid ${t.color}25`, marginBottom:"20px", alignSelf:"flex-start" }}>
                  <TrendingUp size={12} style={{ color:t.color }} />
                  <span style={{ fontFamily:"'Sora',sans-serif", fontSize:"16px", fontWeight:900, color:t.color }}>{t.metric}</span>
                </div>
                <div style={{ display:"flex", alignItems:"center", gap:"12px", paddingTop:"18px", borderTop:"1px solid #F1F5F9" }}>
                  <div style={{ width:"40px", height:"40px", borderRadius:"50%", background:`linear-gradient(135deg,${t.color},${t.color}80)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"13px", fontWeight:700, color:"#fff", flexShrink:0 }}>{t.avatar}</div>
                  <div>
                    <div style={{ color:"#0F172A", fontSize:"14px", fontWeight:700 }}>{t.name}</div>
                    <div style={{ color:"#94A3B8", fontSize:"12px" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:1024px){.spt-testi-grid{grid-template-columns:repeat(2,1fr)!important;}} @media(max-width:640px){.spt-testi-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* FAQ */}
      <section style={{ padding:"96px 0", background:"#000", position:"relative", overflow:"hidden" }}>
        <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.2 }} />
        <div style={{ maxWidth:"860px", margin:"0 auto", padding:"0 32px", position:"relative" }}>
          <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"56px" }}>
            <span style={{ display:"inline-block", padding:"6px 16px", borderRadius:"999px", background:"rgba(139,92,246,0.1)", border:"1px solid rgba(139,92,246,0.2)", color:"#8B5CF6", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"16px" }}>FAQ</span>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(28px,3.5vw,44px)", fontWeight:900, color:"#FFFFFF" }}>Frequently Asked Questions</h2>
          </motion.div>
          <div style={{ display:"flex", flexDirection:"column", gap:"10px" }}>
            {d.faqs.map((faq,i) => <FAQItem key={i} q={faq.q} a={faq.a} color={d.accentColor} />)}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section style={{ padding:"72px 0", background:"#0B0F19", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
          <motion.div initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ marginBottom:"32px" }}>
            <h3 style={{ fontFamily:"'Sora',sans-serif", fontSize:"22px", fontWeight:700, color:"#FFFFFF", marginBottom:"6px" }}>Related Services</h3>
            <p style={{ color:"#6B7280", fontSize:"14px" }}>Expand your digital presence across every platform.</p>
          </motion.div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"14px" }} className="spt-related-grid">
            {d.relatedServices.map((s,i) => (
              <motion.div key={s.title} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08 }}>
                <Link href={s.href} style={{ textDecoration:"none" }}>
                  <motion.div whileHover={{ y:-4, borderColor:s.color+"50" }}
                    style={{ padding:"20px 22px", borderRadius:"12px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", display:"flex", alignItems:"center", justifyContent:"space-between", transition:"all 0.2s" }}>
                    <span style={{ color:"#D1D5DB", fontSize:"14px", fontWeight:500 }}>{s.title}</span>
                    <ArrowRight size={14} style={{ color:s.color, flexShrink:0 }} />
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:1024px){.spt-related-grid{grid-template-columns:repeat(2,1fr)!important;}} @media(max-width:640px){.spt-related-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding:"96px 0", background:"#000", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg, ${d.accentColor}10, transparent, rgba(139,92,246,0.08))` }} />
          <motion.div animate={{ opacity:[0.3,0.6,0.3] }} transition={{ duration:4, repeat:Infinity }}
            style={{ position:"absolute", top:0, left:"20%", width:"400px", height:"400px", background:d.accentColor+"14", borderRadius:"50%", filter:"blur(80px)" }} />
          <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.2 }} />
        </div>
        <div style={{ maxWidth:"800px", margin:"0 auto", padding:"0 32px", position:"relative", textAlign:"center" }}>
          <motion.div initial={{ opacity:0, y:30 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}>
            <div style={{ display:"inline-flex", alignItems:"center", gap:"6px", padding:"8px 18px", borderRadius:"999px", background:d.accentColor+"12", border:`1px solid ${d.accentColor}28`, color:d.accentColor, fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"28px" }}>
              <Zap size={11} /> Limited Spots Available
            </div>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(34px,5vw,58px)", fontWeight:900, color:"#FFFFFF", lineHeight:1.05, marginBottom:"20px" }}>
              {d.ctaTitle}{" "}
              <span style={{ background:d.accentGradient, WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>{d.ctaTitleAccent}</span>
            </h2>
            <p style={{ color:"#9CA3AF", fontSize:"18px", lineHeight:1.7, marginBottom:"36px" }}>{d.ctaSubtitle}</p>
            <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"14px", flexWrap:"wrap" }}>
              <Link href="/contact" style={{ textDecoration:"none" }}>
                <motion.span whileHover={{ scale:1.05, boxShadow:`0 0 40px ${d.accentColor}55` }} whileTap={{ scale:0.97 }}
                  style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"16px 36px", borderRadius:"6px", background:d.accentGradient, color:"#FFF", fontWeight:700, fontSize:"15px", cursor:"pointer" }}>
                  {d.ctaButton} <ArrowRight size={16} />
                </motion.span>
              </Link>
              <Link href="/services" style={{ textDecoration:"none" }}>
                <motion.span whileHover={{ scale:1.03 }}
                  style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"16px 36px", borderRadius:"6px", border:"1px solid rgba(255,255,255,0.18)", color:"#FFF", fontWeight:600, fontSize:"15px", cursor:"pointer", background:"transparent" }}>
                  View All Services
                </motion.span>
              </Link>
            </div>
            <p style={{ marginTop:"20px", color:"#4B5563", fontSize:"13px" }}>No contracts. No hidden fees. Cancel anytime.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
