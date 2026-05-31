"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  { name:"Alex Morgan",    role:"CEO & Co-Founder",        initials:"AM", color:"#FF3EA5", bio:"10+ years scaling brands from startup to IPO." },
  { name:"Sarah Chen",     role:"Chief Strategy Officer",  initials:"SC", color:"#00A3FF", bio:"Former Google & Meta growth lead." },
  { name:"Marcus Williams",role:"Head of SEO",             initials:"MW", color:"#00D084", bio:"Ranked 500+ brands on page 1 of Google." },
  { name:"Priya Patel",    role:"Creative Director",       initials:"PP", color:"#8B5CF6", bio:"Award-winning brand storyteller." },
  { name:"James Liu",      role:"Head of Social Media",    initials:"JL", color:"#FF6B00", bio:"Grew 200+ accounts to 100K+ followers." },
  { name:"Emma Davis",     role:"PR & Partnerships Lead",  initials:"ED", color:"#FF3EA5", bio:"Placed clients in Forbes, TechCrunch & more." },
  { name:"Ryan Torres",    role:"Head of Paid Media",      initials:"RT", color:"#00A3FF", bio:"$50M+ in ad spend managed profitably." },
  { name:"Aisha Johnson",  role:"Content Strategy Lead",   initials:"AJ", color:"#00D084", bio:"Viral content architect for 100+ brands." },
];

export default function AboutTeam() {
  return (
    <section style={{ padding:"96px 0", background:"#0F172A", position:"relative", overflow:"hidden" }}>
      <div style={{ position:"absolute", top:"-100px", right:"-100px", width:"500px", height:"500px", borderRadius:"50%", background:"rgba(139,92,246,0.08)", filter:"blur(80px)" }} />
      <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.15 }} />
      <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px", position:"relative" }}>
        <motion.div initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"64px" }}>
          <span style={{ display:"inline-block", padding:"6px 16px", borderRadius:"999px", background:"rgba(139,92,246,0.12)", border:"1px solid rgba(139,92,246,0.25)", color:"#8B5CF6", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"16px" }}>
            The Team
          </span>
          <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(30px,4vw,48px)", fontWeight:900, color:"#FFFFFF", marginBottom:"14px" }}>
            The Minds Behind{" "}
            <span style={{ background:"linear-gradient(135deg,#8B5CF6,#00A3FF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Your Growth</span>
          </h2>
          <p style={{ color:"#94A3B8", fontSize:"17px", maxWidth:"500px", margin:"0 auto" }}>
            50+ specialists united by one obsession: making your brand impossible to ignore.
          </p>
        </motion.div>

        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:"20px" }} className="team-grid">
          {team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
              whileHover={{ y:-6, boxShadow:`0 20px 50px ${member.color}20` }}
              style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"20px", padding:"28px 20px", textAlign:"center", transition:"all 0.3s", position:"relative", overflow:"hidden" }}
              className="team-card">
              {/* Glow top */}
              <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:"80px", height:"2px", background:`linear-gradient(90deg, transparent, ${member.color}, transparent)` }} />
              <div style={{ width:"64px", height:"64px", borderRadius:"16px", background:`linear-gradient(135deg, ${member.color}, ${member.color}80)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"20px", fontWeight:900, color:"#fff", margin:"0 auto 16px" }}>
                {member.initials}
              </div>
              <h4 style={{ color:"#FFFFFF", fontWeight:700, fontSize:"15px", marginBottom:"4px" }}>{member.name}</h4>
              <p style={{ color:member.color, fontSize:"12px", fontWeight:600, marginBottom:"8px" }}>{member.role}</p>
              <p style={{ color:"#6B7280", fontSize:"12px", lineHeight:1.5, marginBottom:"16px" }}>{member.bio}</p>
              <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>
                <a href="#" style={{ width:"28px", height:"28px", borderRadius:"8px", background:"rgba(255,255,255,0.06)", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none" }}>
                  <Linkedin size={12} style={{ color:"#9CA3AF" }} />
                </a>
                <a href="#" style={{ width:"28px", height:"28px", borderRadius:"8px", background:"rgba(255,255,255,0.06)", display:"flex", alignItems:"center", justifyContent:"center", textDecoration:"none" }}>
                  <Twitter size={12} style={{ color:"#9CA3AF" }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:1024px){.team-grid{grid-template-columns:repeat(3,1fr)!important;}} @media(max-width:640px){.team-grid{grid-template-columns:repeat(2,1fr)!important;}}`}</style>
    </section>
  );
}
