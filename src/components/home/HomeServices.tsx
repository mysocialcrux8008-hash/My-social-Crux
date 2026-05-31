"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Instagram, Search, Youtube, Globe, FileText, MessageCircle, TrendingUp, Smartphone } from "lucide-react";

const services = [
  { icon:Instagram, title:"Social Media Growth", desc:"Explosive organic growth across Instagram, Facebook, LinkedIn & Twitter X with proven engagement strategies.", href:"/instagram-growth-services/", color:"#FF3EA5" },
  { icon:Search, title:"SEO & Google Ranking", desc:"Dominate page 1 for your most valuable keywords with technical SEO and content authority.", href:"/seo-services/", color:"#6366F1" },
  { icon:Youtube, title:"YouTube Growth", desc:"Hit the Silver Play Button faster with data-driven content and community strategies.", href:"/youtube-silver-play-button-assistance/", color:"#EF4444" },
  { icon:Globe, title:"Website Development", desc:"Premium, conversion-optimized websites built for speed, SEO, and stunning design.", href:"/website-development-services/", color:"#10B981" },
  { icon:FileText, title:"Press Release & PR", desc:"Get featured in Forbes, TechCrunch, and 200+ global publications with our PR network.", href:"/press-release-creation-global-publication-services/", color:"#8B5CF6" },
  { icon:MessageCircle, title:"WhatsApp Marketing", desc:"98% open rates. Build high-converting broadcast campaigns that drive direct sales.", href:"/whatsapp-marketing-services/", color:"#25D366" },
  { icon:TrendingUp, title:"Website Traffic Boost", desc:"Drive targeted, high-intent traffic to your website through multi-channel campaigns.", href:"/website-traffic-boost/", color:"#F59E0B" },
  { icon:Smartphone, title:"App Install Campaigns", desc:"Scale your app downloads with precision-targeted install campaigns at industry-low CPIs.", href:"/app-install-campaigns-services/", color:"#00A3FF" },
];

export default function HomeServices() {
  return (
    <section style={{ padding:"100px 0", background:"#FFFFFF", position:"relative" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"64px" }}>
          <span style={{ display:"inline-block", padding:"6px 16px", borderRadius:"999px", background:"rgba(255,62,165,0.08)", border:"1px solid rgba(255,62,165,0.2)", color:"#FF3EA5", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"16px" }}>
            What We Do
          </span>
          <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(32px,4vw,52px)", fontWeight:900, color:"#0F172A", lineHeight:1.05, marginBottom:"16px" }}>
            Every Service You Need to{" "}
            <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Dominate</span>
          </h2>
          <p style={{ color:"#64748B", fontSize:"18px", maxWidth:"560px", margin:"0 auto", lineHeight:1.6 }}>
            From social media growth to global PR — 15+ premium services engineered to scale your brand.
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px" }} className="svc-grid">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity:0, y:24 }}
                whileInView={{ opacity:1, y:0 }}
                viewport={{ once:true }}
                transition={{ delay:i*0.07 }}
                whileHover={{ y:-6, boxShadow:`0 20px 60px ${svc.color}18` }}
                style={{ padding:"28px 24px", borderRadius:"16px", background:"#F8FAFC", border:"1px solid #E2E8F0", transition:"all 0.3s", cursor:"default" }}
              >
                <div style={{ width:"48px", height:"48px", borderRadius:"12px", background:svc.color+"15", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"16px" }}>
                  <Icon size={22} style={{ color:svc.color }} />
                </div>
                <h3 style={{ fontFamily:"'Sora',sans-serif", fontSize:"15px", fontWeight:700, color:"#0F172A", marginBottom:"10px", lineHeight:1.3 }}>{svc.title}</h3>
                <p style={{ color:"#64748B", fontSize:"13px", lineHeight:1.6, marginBottom:"18px" }}>{svc.desc}</p>
                <Link href={svc.href} style={{ display:"inline-flex", alignItems:"center", gap:"5px", color:svc.color, fontSize:"12px", fontWeight:700, textDecoration:"none" }}>
                  Learn more <ArrowRight size={12} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} style={{ textAlign:"center", marginTop:"48px" }}>
          <Link href="/services" style={{ textDecoration:"none" }}>
            <motion.span whileHover={{ scale:1.03 }} style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"14px 32px", borderRadius:"999px", background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", color:"#FFF", fontWeight:700, fontSize:"14px", cursor:"pointer" }}>
              View All Services <ArrowRight size={15} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
      <style>{`@media(max-width:1024px){.svc-grid{grid-template-columns:repeat(2,1fr)!important;}} @media(max-width:640px){.svc-grid{grid-template-columns:1fr!important;}}`}</style>
    </section>
  );
}
