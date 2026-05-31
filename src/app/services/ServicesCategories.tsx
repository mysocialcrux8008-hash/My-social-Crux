"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Instagram, Facebook, Linkedin, Twitter, Youtube, Send, Music, TrendingUp, Globe, Search, FileText, PenTool, MessageCircle, Smartphone, BarChart2 } from "lucide-react";
import { megaMenuCategories } from "@/data/services";

const iconMap: Record<string, React.ElementType> = {
  Instagram, Facebook, Linkedin, Twitter, Youtube, Send, Music, TrendingUp,
  Globe, Search, FileText, PenTool, MessageCircle, Smartphone, BarChart2,
};

const categoryImages = [
  "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
  "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
];

export default function ServicesCategories() {
  return (
    <section id="services" style={{ background:"#000" }}>
      {megaMenuCategories.map((cat, ci) => {
        const isEven = ci % 2 === 0;
        return (
          <div key={cat.title} style={{ borderBottom:"1px solid rgba(255,255,255,0.06)" }}>
            {/* Category header */}
            <div style={{ background: isEven ? "#0F172A" : "#000", padding:"60px 0 0" }}>
              <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
                <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }}
                  style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"40px" }}>
                  <div style={{ height:"2px", width:"40px", background:cat.color, borderRadius:"1px" }} />
                  <span style={{ color:cat.color, fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.15em" }}>
                    {cat.title}
                  </span>
                  <div style={{ height:"1px", flex:1, background:"rgba(255,255,255,0.06)" }} />
                </motion.div>
              </div>
            </div>

            {/* Split layout — image + cards */}
            <div style={{ background: isEven ? "#0F172A" : "#000", paddingBottom:"60px" }}>
              <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
                <div style={{ display:"grid", gridTemplateColumns:"300px 1fr", gap:"40px", alignItems:"start" }} className="svc-cat-grid">
                  {/* Left — category image */}
                  <motion.div initial={{ opacity:0, x:-20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }}
                    style={{ borderRadius:"16px", overflow:"hidden", position:"sticky", top:"100px" }}>
                    <div style={{ position:"relative", height:"280px" }}>
                      <img src={categoryImages[ci]} alt={cat.title} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                      <div style={{ position:"absolute", inset:0, background:`linear-gradient(135deg, ${cat.color}30, rgba(0,0,0,0.6))` }} />
                      <div style={{ position:"absolute", bottom:"20px", left:"20px", right:"20px" }}>
                        <div style={{ fontFamily:"'Sora',sans-serif", fontSize:"20px", fontWeight:900, color:"#FFFFFF", marginBottom:"6px" }}>{cat.title}</div>
                        <div style={{ color:"rgba(255,255,255,0.7)", fontSize:"13px" }}>{cat.services.length} services available</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Right — service cards grid */}
                  <div style={{ display:"grid", gridTemplateColumns:"repeat(2,1fr)", gap:"14px" }} className="svc-cards-inner">
                    {cat.services.map((svc, si) => {
                      const Icon = iconMap[svc.icon] || Globe;
                      return (
                        <motion.div key={svc.slug}
                          initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:si*0.07 }}
                          whileHover={{ y:-4, boxShadow:`0 16px 48px ${cat.color}20` }}
                          style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"14px", padding:"24px", transition:"all 0.3s", position:"relative", overflow:"hidden" }}>
                          {/* Top accent */}
                          <div style={{ position:"absolute", top:0, left:0, right:0, height:"2px", background:`linear-gradient(90deg, ${cat.color}, transparent)` }} />
                          <div style={{ display:"flex", alignItems:"flex-start", gap:"14px" }}>
                            <div style={{ width:"44px", height:"44px", borderRadius:"12px", background:cat.color+"18", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                              <Icon size={20} style={{ color:cat.color }} />
                            </div>
                            <div style={{ flex:1 }}>
                              <h3 style={{ fontFamily:"'Sora',sans-serif", fontSize:"14px", fontWeight:700, color:"#FFFFFF", marginBottom:"8px", lineHeight:1.3 }}>{svc.name}</h3>
                              <Link href={svc.slug} style={{ display:"inline-flex", alignItems:"center", gap:"5px", color:cat.color, fontSize:"12px", fontWeight:600, textDecoration:"none" }}>
                                Learn More <ArrowRight size={11} />
                              </Link>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <style>{`
        @media(max-width:1024px){.svc-cat-grid{grid-template-columns:1fr!important;}}
        @media(max-width:640px){.svc-cards-inner{grid-template-columns:1fr!important;}}
      `}</style>
    </section>
  );
}
