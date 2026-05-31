"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Instagram, Youtube, Search, Globe, FileText, MessageCircle, TrendingUp, Smartphone } from "lucide-react";

const services = [
  { icon: Instagram, title: "Social Media Growth", desc: "Explosive organic growth across Instagram, Facebook, LinkedIn, and Twitter X with proven engagement strategies.", href: "/instagram-growth-services/", color: "#FF3EA5", wide: true },
  { icon: Youtube, title: "YouTube & Video Growth", desc: "Hit the Silver Play Button faster with data-driven content and community strategies.", href: "/youtube-silver-play-button-assistance/", color: "#FF6B00" },
  { icon: Search, title: "SEO & Google Ranking", desc: "Dominate page 1 for your most valuable keywords with technical SEO and content authority.", href: "/seo-services/", color: "#00A3FF" },
  { icon: Globe, title: "Website Development", desc: "Premium, conversion-optimized websites built for speed, SEO, and stunning design.", href: "/website-development-services/", color: "#00D084" },
  { icon: FileText, title: "Press Release & PR", desc: "Get featured in Forbes, TechCrunch, and 200+ global publications with our PR network.", href: "/press-release-creation-global-publication-services/", color: "#8B5CF6", wide: true },
  { icon: MessageCircle, title: "WhatsApp Marketing", desc: "98% open rates. Build high-converting broadcast campaigns that drive direct sales.", href: "/whatsapp-marketing-services/", color: "#00D084" },
  { icon: TrendingUp, title: "Website Traffic Boost", desc: "Drive targeted, high-intent traffic through multi-channel campaigns.", href: "/website-traffic-boost/", color: "#FF3EA5" },
  { icon: Smartphone, title: "App Install Campaigns", desc: "Scale your app downloads with precision-targeted install campaigns at industry-low CPIs.", href: "/app-install-campaigns-services/", color: "#00A3FF" },
];

export default function ServicesGrid() {
  return (
    <section style={{ padding: "96px 0", background: "#000000", position: "relative", overflow: "hidden" }}>
      <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div style={{
            display: "inline-block", padding: "6px 16px", borderRadius: "999px",
            background: "rgba(255,62,165,0.1)", border: "1px solid rgba(255,62,165,0.2)",
            color: "#FF3EA5", fontSize: "11px", fontWeight: 700,
            textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px",
          }}>
            Our Services
          </div>
          <h2 style={{
            fontFamily: "'Sora', sans-serif", fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 800, color: "#FFFFFF", marginBottom: "16px",
          }}>
            Everything You Need to{" "}
            <span className="gradient-text-pink">Dominate</span>
          </h2>
          <p style={{ color: "#9CA3AF", fontSize: "18px", maxWidth: "560px", margin: "0 auto", lineHeight: 1.6 }}>
            From social media growth to global PR — every tool to make your brand unstoppable.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }} className="services-grid">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                whileHover={{ y: -6, boxShadow: `0 20px 60px ${svc.color}25` }}
                style={{
                  gridColumn: svc.wide ? "span 2" : "span 1",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "20px", padding: "28px",
                  display: "flex", flexDirection: "column",
                  transition: "box-shadow 0.3s, transform 0.3s",
                  cursor: "default",
                }}
                className="service-card"
              >
                <div style={{
                  width: "48px", height: "48px", borderRadius: "12px",
                  background: svc.color + "20", display: "flex",
                  alignItems: "center", justifyContent: "center", marginBottom: "16px",
                }}>
                  <Icon size={22} style={{ color: svc.color }} />
                </div>
                <h3 style={{
                  fontFamily: "'Sora', sans-serif", fontSize: "17px",
                  fontWeight: 700, color: "#FFFFFF", marginBottom: "10px",
                }}>
                  {svc.title}
                </h3>
                <p style={{ color: "#9CA3AF", fontSize: "14px", lineHeight: 1.6, flex: 1 }}>
                  {svc.desc}
                </p>
                <Link href={svc.href} style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  marginTop: "20px", fontSize: "13px", fontWeight: 600,
                  color: svc.color, textDecoration: "none",
                }}>
                  Learn More <ArrowRight size={13} />
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginTop: "48px" }}
        >
          <Link href="/services">
            <motion.span
              whileHover={{ scale: 1.03 }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                padding: "14px 32px", borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#FFFFFF", fontWeight: 600, fontSize: "14px",
                cursor: "pointer", textDecoration: "none",
              }}
            >
              View All Services <ArrowRight size={15} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
      <style>{`
        @media(max-width:1024px){.services-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:640px){.services-grid{grid-template-columns:1fr!important;} .service-card{grid-column:span 1!important;}}
      `}</style>
    </section>
  );
}
