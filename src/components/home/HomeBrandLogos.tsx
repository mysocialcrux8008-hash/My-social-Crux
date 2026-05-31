"use client";
import { motion } from "framer-motion";

const logos = ["Forbes", "TechCrunch", "Business Insider", "Entrepreneur", "Inc.", "Wired", "Fast Company", "Mashable"];

export default function HomeBrandLogos() {
  return (
    <section style={{ padding:"56px 0", background:"#0B0F19", borderTop:"1px solid rgba(255,255,255,0.06)" }}>
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
        <p style={{ color:"#4B5563", fontSize:"11px", textTransform:"uppercase", letterSpacing:"0.15em", fontWeight:600, textAlign:"center", marginBottom:"32px" }}>
          Our clients have been featured in
        </p>
        <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"40px", flexWrap:"wrap" }}>
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity:0 }}
              whileInView={{ opacity:1 }}
              viewport={{ once:true }}
              transition={{ delay:i*0.06 }}
              whileHover={{ color:"#FFFFFF", scale:1.05 }}
              style={{ color:"#374151", fontSize:"14px", fontWeight:800, letterSpacing:"0.05em", textTransform:"uppercase", fontFamily:"'Sora',sans-serif", cursor:"default", transition:"color 0.2s" }}
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
