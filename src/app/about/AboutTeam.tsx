"use client";
import { motion } from "framer-motion";
import { Linkedin, Twitter } from "lucide-react";

const team = [
  { name:"Ankit Meena", role:"Director & Founder", initials:"AM", color:"#FF3EA5", bio:"Founder of MySocialCrux & Director at Meilleure Promotions Services Pvt. Ltd. Digital marketing strategist with expertise in social media growth, SEO, and brand building." },
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
            Meet the{" "}
            <span style={{ background:"linear-gradient(135deg,#8B5CF6,#00A3FF)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Founder</span>
          </h2>
          <p style={{ color:"#94A3B8", fontSize:"17px", maxWidth:"500px", margin:"0 auto" }}>
            The vision and drive behind MySocialCrux and Meilleure Promotions Services Pvt. Ltd.
          </p>
        </motion.div>

        <div style={{ display:"flex", justifyContent:"center" }}>
          {team.map((member, i) => (
            <motion.div key={member.name} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
              whileHover={{ y:-6, boxShadow:`0 20px 50px ${member.color}20` }}
              style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"20px", padding:"40px 48px", textAlign:"center", transition:"all 0.3s", position:"relative", overflow:"hidden", maxWidth:"420px", width:"100%" }}
              className="team-card">
              <div style={{ position:"absolute", top:0, left:"50%", transform:"translateX(-50%)", width:"120px", height:"2px", background:`linear-gradient(90deg, transparent, ${member.color}, transparent)` }} />
              <div style={{ width:"80px", height:"80px", borderRadius:"20px", background:`linear-gradient(135deg, ${member.color}, ${member.color}80)`, display:"flex", alignItems:"center", justifyContent:"center", fontSize:"28px", fontWeight:900, color:"#fff", margin:"0 auto 20px" }}>
                {member.initials}
              </div>
              <h4 style={{ color:"#FFFFFF", fontWeight:800, fontSize:"20px", marginBottom:"6px" }}>{member.name}</h4>
              <p style={{ color:member.color, fontSize:"14px", fontWeight:600, marginBottom:"14px" }}>{member.role}</p>
              <p style={{ color:"#94A3B8", fontSize:"14px", lineHeight:1.7, marginBottom:"20px" }}>{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{``}</style>
    </section>
  );
}
