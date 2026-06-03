"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, MessageCircle, Send, Users, Briefcase, Globe } from "lucide-react";

const services = [
  "Instagram Growth Services","Facebook Page Growth Services","LinkedIn Growth Services",
  "Twitter X Growth Services","YouTube Silver Play Button Assistance","Telegram Channel Growth",
  "Spotify & SoundCloud Streams","Website Traffic Boost","Website Development",
  "SEO Services & Google My Business","Press Release & Global Publication","Content Writing & Brand Messaging",
  "WhatsApp Marketing","App Install Campaigns","Voting Services & Online Polls","Other / Not Sure",
];

const budgets = ["Under $500","$500 – $1,000","$1,000 – $2,500","$2,500 – $5,000","$5,000 – $10,000","$10,000+"];

const infoCards = [
  { icon:Mail,         title:"General Inquiries",  lines:["ankit@mysocialcrux.com"],                    link:{ label:"Send us an email", href:"mailto:ankit@mysocialcrux.com" }, color:"#FF3EA5" },
  { icon:Phone,        title:"Sales",               lines:["+91 72299 23456"],                            link:{ label:"Request Consultation", href:"/contact" },                  color:"#00A3FF" },
  { icon:Users,        title:"Support",             lines:["Open 24 Hours · 7 Days a Week"],              link:{ label:"Contact Support", href:"mailto:ankit@mysocialcrux.com" },  color:"#00D084" },
  { icon:Briefcase,    title:"Careers",             lines:["We're always hiring top talent"],             link:{ label:"View Openings", href:"/careers" },                          color:"#8B5CF6" },
  { icon:Globe,        title:"Partnerships",        lines:["ankit@mysocialcrux.com"],                     link:{ label:"Become a Partner", href:"mailto:ankit@mysocialcrux.com" }, color:"#FF6B00" },
  { icon:Send,         title:"Press",               lines:["ankit@mysocialcrux.com"],                     link:{ label:"Media Inquiries", href:"mailto:ankit@mysocialcrux.com" },  color:"#FF3EA5" },
];

export default function ContactContent() {
  const [form, setForm] = useState({ name:"", email:"", company:"", service:"", budget:"", message:"" });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* HERO */}
      <section style={{ position:"relative", paddingTop:"140px", paddingBottom:"80px", background:"#000", overflow:"hidden" }}>
        <div style={{ position:"absolute", inset:0 }}>
          <div style={{ position:"absolute", top:"-80px", left:"-80px", width:"600px", height:"600px", borderRadius:"50%", background:"rgba(255,62,165,0.12)", filter:"blur(100px)" }} />
          <div style={{ position:"absolute", bottom:"-60px", right:"-60px", width:"500px", height:"500px", borderRadius:"50%", background:"rgba(139,92,246,0.1)", filter:"blur(80px)" }} />
          <div className="grid-pattern" style={{ position:"absolute", inset:0, opacity:0.2 }} />
        </div>
        <div style={{ position:"relative", maxWidth:"1280px", margin:"0 auto", padding:"0 20px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"80px", alignItems:"flex-start" }} className="contact-hero-grid">

            {/* LEFT — heading */}
            <div>
              <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }}
                style={{ display:"inline-flex", alignItems:"center", gap:"8px", padding:"7px 16px", borderRadius:"999px", background:"rgba(255,62,165,0.12)", border:"1px solid rgba(255,62,165,0.3)", color:"#FF3EA5", fontSize:"11px", fontWeight:700, textTransform:"uppercase", letterSpacing:"0.12em", marginBottom:"24px" }}>
                Contact Us
              </motion.div>
              <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.1 }}
                style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(44px,6vw,80px)", fontWeight:900, color:"#FFFFFF", lineHeight:0.97, letterSpacing:"-0.03em", marginBottom:"24px" }}>
                ARE YOU<br />
                READY TO<br />
                <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>REWRITE</span><br />
                THE RULES?
              </motion.h1>
              <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.2 }}
                style={{ color:"#9CA3AF", fontSize:"17px", lineHeight:1.7, maxWidth:"440px", marginBottom:"36px" }}>
                If you&apos;re ready to throw out the old playbook, we&apos;ll show you new ways to drive incredible results. Tell us where you want to go and we&apos;ll help you get there.
              </motion.p>

              {/* Contact details */}
              <motion.div initial={{ opacity:0, y:16 }} animate={{ opacity:1, y:0 }} transition={{ delay:0.3 }}
                style={{ display:"flex", flexDirection:"column", gap:"14px", marginBottom:"32px" }}>
                {[
                  { icon:Mail,    text:"ankit@mysocialcrux.com",                                                    href:"mailto:ankit@mysocialcrux.com" },
                  { icon:Phone,   text:"+91 72299 23456",                                                              href:"tel:+917229923456" },
                  { icon:MapPin,  text:"E-42, Anand Puri, Bees Dukan, Adarsh Nagar, Jaipur, Rajasthan 302004",        href:"https://maps.google.com/?q=E-42+Anand+Puri+Adarsh+Nagar+Jaipur+Rajasthan+302004" },
                ].map(item => (
                  <a key={item.text} href={item.href} style={{ display:"flex", alignItems:"center", gap:"12px", color:"#9CA3AF", fontSize:"14px", textDecoration:"none" }}>
                    <div style={{ width:"36px", height:"36px", borderRadius:"10px", background:"rgba(255,62,165,0.12)", border:"1px solid rgba(255,62,165,0.2)", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0 }}>
                      <item.icon size={15} style={{ color:"#FF3EA5" }} />
                    </div>
                    {item.text}
                  </a>
                ))}
              </motion.div>

              {/* WhatsApp CTA */}
              <motion.a href="https://wa.me/917229923456" target="_blank" rel="noopener noreferrer"
                initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4 }}
                whileHover={{ scale:1.03 }}
                style={{ display:"inline-flex", alignItems:"center", gap:"10px", padding:"14px 24px", borderRadius:"999px", background:"rgba(37,211,102,0.1)", border:"1px solid rgba(37,211,102,0.3)", color:"#25D366", fontWeight:600, fontSize:"14px", textDecoration:"none" }}>
                <MessageCircle size={18} />
                Chat on WhatsApp — Reply in minutes
              </motion.a>
            </div>

            {/* RIGHT — Form */}
            <motion.div initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} transition={{ delay:0.2 }}
              style={{ background:"rgba(255,255,255,0.03)", backdropFilter:"blur(20px)", border:"1px solid rgba(255,255,255,0.1)", borderRadius:"24px", padding:"40px", boxShadow:"0 30px 80px rgba(0,0,0,0.4)" }}>
              {submitted ? (
                <div style={{ textAlign:"center", padding:"48px 0" }}>
                  <div style={{ width:"64px", height:"64px", borderRadius:"50%", background:"rgba(0,208,132,0.15)", border:"1px solid rgba(0,208,132,0.3)", display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 20px" }}>
                    <Send size={28} style={{ color:"#00D084" }} />
                  </div>
                  <h3 style={{ fontFamily:"'Sora',sans-serif", color:"#FFFFFF", fontSize:"24px", fontWeight:800, marginBottom:"10px" }}>Message Sent!</h3>
                  <p style={{ color:"#9CA3AF", fontSize:"15px" }}>We&apos;ll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }}>
                  <h3 style={{ fontFamily:"'Sora',sans-serif", color:"#FFFFFF", fontSize:"20px", fontWeight:800, marginBottom:"6px" }}>Start Your Growth Journey</h3>
                  <p style={{ color:"#6B7280", fontSize:"13px", marginBottom:"28px" }}>Fill out the form and we&apos;ll be in touch within 24 hours.</p>

                  <div style={{ display:"flex", flexDirection:"column", gap:"14px" }}>
                    {/* Service */}
                    <div>
                      <label style={{ display:"block", color:"#9CA3AF", fontSize:"11px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"8px" }}>
                        I&apos;m interested in...
                      </label>
                      <select value={form.service} onChange={e => setForm({...form, service:e.target.value})} required
                        style={{ width:"100%", padding:"12px 16px", borderRadius:"10px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", color:"#FFFFFF", fontSize:"14px", outline:"none", appearance:"none" }}>
                        <option value="" style={{ background:"#0F172A" }}>Select a service</option>
                        {services.map(s => <option key={s} value={s} style={{ background:"#0F172A" }}>{s}</option>)}
                      </select>
                    </div>

                    {/* Name + Email */}
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }} className="form-row">
                      {[
                        { label:"Name *", key:"name", type:"text", placeholder:"Your name" },
                        { label:"Email *", key:"email", type:"email", placeholder:"you@company.com" },
                      ].map(f => (
                        <div key={f.key}>
                          <label style={{ display:"block", color:"#9CA3AF", fontSize:"11px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"8px" }}>{f.label}</label>
                          <input type={f.type} value={(form as Record<string,string>)[f.key]} onChange={e => setForm({...form, [f.key]:e.target.value})} required={f.label.includes("*")} placeholder={f.placeholder}
                            style={{ width:"100%", padding:"12px 16px", borderRadius:"10px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", color:"#FFFFFF", fontSize:"14px", outline:"none" }} />
                        </div>
                      ))}
                    </div>

                    {/* Company + Budget */}
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px" }} className="form-row">
                      <div>
                        <label style={{ display:"block", color:"#9CA3AF", fontSize:"11px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"8px" }}>Company</label>
                        <input type="text" value={form.company} onChange={e => setForm({...form, company:e.target.value})} placeholder="Company name"
                          style={{ width:"100%", padding:"12px 16px", borderRadius:"10px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", color:"#FFFFFF", fontSize:"14px", outline:"none" }} />
                      </div>
                      <div>
                        <label style={{ display:"block", color:"#9CA3AF", fontSize:"11px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"8px" }}>Budget</label>
                        <select value={form.budget} onChange={e => setForm({...form, budget:e.target.value})}
                          style={{ width:"100%", padding:"12px 16px", borderRadius:"10px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", color:"#FFFFFF", fontSize:"14px", outline:"none", appearance:"none" }}>
                          <option value="" style={{ background:"#0F172A" }}>Select budget</option>
                          {budgets.map(b => <option key={b} value={b} style={{ background:"#0F172A" }}>{b}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label style={{ display:"block", color:"#9CA3AF", fontSize:"11px", fontWeight:600, textTransform:"uppercase", letterSpacing:"0.1em", marginBottom:"8px" }}>Message</label>
                      <textarea value={form.message} onChange={e => setForm({...form, message:e.target.value})} rows={4} placeholder="Tell us about your project and goals..."
                        style={{ width:"100%", padding:"12px 16px", borderRadius:"10px", background:"rgba(255,255,255,0.06)", border:"1px solid rgba(255,255,255,0.12)", color:"#FFFFFF", fontSize:"14px", outline:"none", resize:"none" }} />
                    </div>

                    <motion.button type="submit" whileHover={{ scale:1.02, boxShadow:"0 0 30px rgba(255,62,165,0.4)" }} whileTap={{ scale:0.98 }}
                      style={{ width:"100%", padding:"16px", borderRadius:"10px", background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", color:"#FFF", fontWeight:700, fontSize:"15px", border:"none", cursor:"pointer", display:"flex", alignItems:"center", justifyContent:"center", gap:"8px" }}>
                      Submit Your Message <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </div>
        <style>{`
          @media(max-width:1024px){.contact-hero-grid{grid-template-columns:1fr!important;}}
          @media(max-width:600px){.form-row{grid-template-columns:1fr!important;}}
        `}</style>
      </section>

      {/* INFO CARDS */}
      <section style={{ padding:"80px 0", background:"#0F172A" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"48px" }}>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(26px,3vw,38px)", fontWeight:800, color:"#FFFFFF" }}>
              Other Ways to{" "}
              <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Reach Us</span>
            </h2>
          </motion.div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"16px" }} className="contact-cards-grid">
            {infoCards.map((card, i) => (
              <motion.div key={card.title} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07 }}
                whileHover={{ y:-4, boxShadow:`0 16px 48px ${card.color}15` }}
                style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:"16px", padding:"28px", borderLeft:`3px solid ${card.color}`, transition:"all 0.3s" }}>
                <div style={{ width:"40px", height:"40px", borderRadius:"10px", background:card.color+"18", display:"flex", alignItems:"center", justifyContent:"center", marginBottom:"14px" }}>
                  <card.icon size={18} style={{ color:card.color }} />
                </div>
                <h4 style={{ color:"#FFFFFF", fontWeight:700, fontSize:"15px", marginBottom:"6px" }}>{card.title}</h4>
                {card.lines.map((line, j) => <p key={j} style={{ color:"#9CA3AF", fontSize:"13px", marginBottom:"4px" }}>{line}</p>)}
                <a href={card.link.href} style={{ display:"inline-block", marginTop:"12px", color:card.color, fontSize:"13px", fontWeight:600, textDecoration:"none" }}>
                  {card.link.label} →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:1024px){.contact-cards-grid{grid-template-columns:repeat(2,1fr)!important;}} @media(max-width:640px){.contact-cards-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* LOCATIONS */}
      <section style={{ padding:"80px 0", background:"#FFFFFF" }}>
        <div style={{ maxWidth:"1280px", margin:"0 auto", padding:"0 32px" }}>
          <motion.div initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} style={{ textAlign:"center", marginBottom:"48px" }}>
            <h2 style={{ fontFamily:"'Sora',sans-serif", fontSize:"clamp(26px,3vw,38px)", fontWeight:800, color:"#0F172A" }}>
              Our{" "}
              <span style={{ background:"linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text" }}>Locations</span>
            </h2>
          </motion.div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:"20px" }} className="locations-grid">
            {[
              { city:"Jaipur HQ", address:"E-42, Anand Puri, Bees Dukan, Adarsh Nagar", zip:"Jaipur, Rajasthan 302004, India", color:"#FF3EA5", img:"https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80" },
              { city:"Open 24 Hours", address:"We're always available for our clients", zip:"Mon – Sun · 24 Hours a Day", color:"#00D084", img:"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" },
              { city:"Global Reach", address:"Serving clients across 15+ countries", zip:"USA · UK · UAE · India · Australia", color:"#00A3FF", img:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80" },
            ].map((loc, i) => (
              <motion.div key={loc.city} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1 }}
                whileHover={{ y:-6 }}
                style={{ borderRadius:"16px", overflow:"hidden", border:"1px solid #E2E8F0", transition:"transform 0.3s" }}>
                <div style={{ height:"160px", position:"relative", overflow:"hidden" }}>
                  <img src={loc.img} alt={loc.city} style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
                  <div style={{ position:"absolute", inset:0, background:`linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.6))` }} />
                  <div style={{ position:"absolute", bottom:"14px", left:"16px", fontFamily:"'Sora',sans-serif", fontSize:"20px", fontWeight:900, color:"#FFFFFF" }}>{loc.city}</div>
                </div>
                <div style={{ padding:"20px", background:"#F8FAFC" }}>
                  <p style={{ color:"#475569", fontSize:"13px", lineHeight:1.6, marginBottom:"4px" }}>{loc.address}</p>
                  <p style={{ color:"#94A3B8", fontSize:"13px" }}>{loc.zip}</p>
                  <div style={{ marginTop:"12px", height:"2px", width:"40px", background:loc.color, borderRadius:"1px" }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:768px){.locations-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  );
}
