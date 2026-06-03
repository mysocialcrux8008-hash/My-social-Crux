"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { careerFaqs } from "@/data/faqs";

const openings = [
  { title: "Senior Social Media Strategist",    dept: "Social Media",         location: "Jaipur, Rajasthan", type: "Full-time",  color: "#FF3EA5" },
  { title: "SEO Manager",                       dept: "SEO & Content",        location: "Jaipur, Rajasthan", type: "Full-time",  color: "#00A3FF" },
  { title: "Paid Media Specialist",             dept: "Performance Marketing", location: "Jaipur, Rajasthan", type: "Full-time",  color: "#00D084" },
  { title: "Content Writer & Brand Strategist", dept: "Content",              location: "Jaipur, Rajasthan", type: "Full-time",  color: "#8B5CF6" },
  { title: "YouTube Growth Manager",            dept: "Video Marketing",      location: "Jaipur, Rajasthan", type: "Full-time",  color: "#FF6B00" },
  { title: "PR & Press Release Specialist",     dept: "PR & Communications",  location: "Jaipur, Rajasthan", type: "Full-time",  color: "#FF3EA5" },
  { title: "Web Developer (Next.js)",           dept: "Engineering",          location: "Jaipur, Rajasthan", type: "Full-time",  color: "#00A3FF" },
  { title: "Growth Intern — Summer 2026",       dept: "Growth",               location: "Jaipur, Rajasthan", type: "Internship", color: "#00D084" },
];

const perks = [
  { title: "Remote-First Culture",  desc: "Work from our Jaipur office or hybrid. We care about results and collaboration.", color: "#FF3EA5" },
  { title: "Competitive Salary",    desc: "Top-of-market compensation with performance bonuses and annual increments.", color: "#00A3FF" },
  { title: "Flexible Hours",        desc: "We're open 24 hours — work the schedule that lets you do your best work.", color: "#00D084" },
  { title: "Learning Budget",       desc: "₹50,000/year for courses, certifications, and professional development.", color: "#8B5CF6" },
  { title: "Health Benefits",       desc: "Medical insurance coverage for you and your family.", color: "#FF6B00" },
  { title: "Growth Fast-Track",     desc: "We promote from within. Many of our senior leads started as interns.", color: "#FF3EA5" },
];

export default function CareersContent() {
  return (
    <>
      {/* Hero */}
      <section style={{ padding: "120px 0 80px", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "600px", height: "600px", borderRadius: "50%", background: "rgba(255,62,165,0.1)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "-100px", right: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(139,92,246,0.1)", filter: "blur(80px)" }} />
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.25 }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }} className="careers-hero-grid">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                style={{ display: "inline-block", padding: "6px 16px", borderRadius: "999px", background: "rgba(255,62,165,0.1)", border: "1px solid rgba(255,62,165,0.2)", color: "#FF3EA5", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
                We&apos;re Hiring
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(36px, 4.5vw, 64px)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "20px" }}>
                Make Your Next Big Career Move at{" "}
                <span style={{ background: "linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>MySocialCrux</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
                style={{ color: "#9CA3AF", fontSize: "18px", lineHeight: 1.7, marginBottom: "32px" }}>
                Join a team of 50+ growth obsessives at our Jaipur office — building the future of digital marketing. We move fast, think big, and celebrate wins together.
              </motion.p>
              <motion.a href="#openings" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 32px", borderRadius: "999px", background: "linear-gradient(135deg,#FF3EA5,#FF6B00)", color: "#FFFFFF", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
                View Open Positions <ArrowRight size={16} />
              </motion.a>
            </div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}
              style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
              <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=80" alt="Team collaboration" style={{ width: "100%", height: "380px", objectFit: "cover", display: "block" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section style={{ padding: "80px 0", background: "#0B0F19" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: "#FFFFFF" }}>
              There&apos;s a Better Kind of{" "}
              <span style={{ background: "linear-gradient(135deg,#00D084,#00A3FF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Agency Workplace</span>
            </h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }} className="perks-grid">
            {perks.map((perk, i) => (
              <motion.div key={perk.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ padding: "24px", borderRadius: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderLeft: `3px solid ${perk.color}` }}>
                <h4 style={{ color: "#FFFFFF", fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>{perk.title}</h4>
                <p style={{ color: "#9CA3AF", fontSize: "13px", lineHeight: 1.6 }}>{perk.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="openings" style={{ padding: "80px 0 96px", background: "#000" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "40px" }}>
            <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(28px, 3.5vw, 44px)", fontWeight: 800, color: "#FFFFFF", marginBottom: "8px" }}>Open Positions</h2>
            <p style={{ color: "#9CA3AF", fontSize: "16px" }}>{openings.length} positions available · Jaipur, Rajasthan · E-42, Anand Puri, Adarsh Nagar</p>
          </motion.div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {openings.map((job, i) => (
              <motion.div key={job.title} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                whileHover={{ x: 4, borderColor: job.color + "50" }}
                style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "20px 24px", borderRadius: "14px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", transition: "all 0.2s", flexWrap: "wrap", gap: "12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
                  <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: job.color, flexShrink: 0 }} />
                  <div>
                    <div style={{ color: "#FFFFFF", fontWeight: 600, fontSize: "15px" }}>{job.title}</div>
                    <div style={{ color: "#6B7280", fontSize: "12px", marginTop: "2px" }}>{job.dept}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#9CA3AF", fontSize: "12px" }}><MapPin size={11} />{job.location}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#9CA3AF", fontSize: "12px" }}><Briefcase size={11} />{job.type}</span>
                  <Link href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "5px", padding: "8px 18px", borderRadius: "999px", background: job.color + "20", color: job.color, fontSize: "12px", fontWeight: 600, textDecoration: "none", border: `1px solid ${job.color}30` }}>
                    Apply <ArrowRight size={11} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={careerFaqs} title="Career FAQs" subtitle="Everything you need to know about working at MySocialCrux." />
      <CTASection title="Don't See the Right Role?" subtitle="We're always looking for exceptional talent. Send us your resume and we'll reach out when the perfect role opens up." primaryCTA="Send Your Resume" secondaryCTA="Learn About Us" secondaryHref="/about" />
      <style>{`
        @media(max-width:1024px){.careers-hero-grid{grid-template-columns:1fr!important;} .perks-grid{grid-template-columns:repeat(2,1fr)!important;}}
        @media(max-width:640px){.perks-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
