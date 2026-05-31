"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blog";

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? blogPosts : blogPosts.filter(p => p.category === activeCategory);
  const featured = blogPosts.find(p => p.featured);

  return (
    <>
      {/* Hero */}
      <section style={{ padding: "120px 0 60px", background: "#000", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-100px", left: "-100px", width: "500px", height: "500px", borderRadius: "50%", background: "rgba(255,62,165,0.1)", filter: "blur(80px)" }} />
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px", position: "relative", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            style={{ display: "inline-block", padding: "6px 16px", borderRadius: "999px", background: "rgba(255,62,165,0.1)", border: "1px solid rgba(255,62,165,0.2)", color: "#FF3EA5", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "20px" }}>
            Blog & Insights
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            style={{ fontFamily: "'Sora', sans-serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 900, color: "#FFFFFF", marginBottom: "16px" }}>
            Growth Insights &{" "}
            <span style={{ background: "linear-gradient(135deg,#FF3EA5,#FF6B00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>Expert Strategies</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ color: "#9CA3AF", fontSize: "18px", maxWidth: "560px", margin: "0 auto" }}>
            Weekly insights on digital marketing, social media growth, SEO, and brand building.
          </motion.p>
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section style={{ padding: "0 0 60px", background: "#000" }}>
          <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ borderRadius: "24px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0B0F19", display: "grid", gridTemplateColumns: "1fr 1fr" }}
              className="featured-grid">
              <div style={{ height: "360px", background: `linear-gradient(135deg, ${featured.color}30, rgba(0,0,0,0.8))`, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <img src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80" alt={featured.title} style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.5, position: "absolute", inset: 0 }} />
                <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${featured.color}40, rgba(0,0,0,0.7))` }} />
                <div style={{ position: "relative", padding: "24px", textAlign: "center" }}>
                  <div style={{ display: "inline-block", padding: "6px 14px", borderRadius: "999px", background: featured.color + "30", color: featured.color, fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>Featured</div>
                </div>
              </div>
              <div style={{ padding: "48px" }}>
                <div style={{ display: "inline-block", padding: "5px 12px", borderRadius: "999px", background: featured.color + "20", color: featured.color, fontSize: "11px", fontWeight: 600, marginBottom: "16px" }}>{featured.category}</div>
                <h2 style={{ fontFamily: "'Sora', sans-serif", fontSize: "26px", fontWeight: 800, color: "#FFFFFF", lineHeight: 1.3, marginBottom: "14px" }}>{featured.title}</h2>
                <p style={{ color: "#9CA3AF", fontSize: "15px", lineHeight: 1.7, marginBottom: "24px" }}>{featured.excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#6B7280", fontSize: "12px" }}><Calendar size={12} />{featured.date}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "5px", color: "#6B7280", fontSize: "12px" }}><Clock size={12} />{featured.readTime}</span>
                </div>
                <Link href={`/blog/${featured.slug}`} style={{ display: "inline-flex", alignItems: "center", gap: "6px", padding: "12px 24px", borderRadius: "999px", background: `linear-gradient(135deg, ${featured.color}, ${featured.color}90)`, color: "#FFFFFF", fontWeight: 600, fontSize: "14px", textDecoration: "none" }}>
                  Read Article <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Category Filters */}
      <section style={{ padding: "0 0 40px", background: "#000" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {blogCategories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                style={{ padding: "8px 20px", borderRadius: "999px", border: "1px solid", fontSize: "13px", fontWeight: 600, cursor: "pointer", transition: "all 0.2s",
                  background: activeCategory === cat ? "#FF3EA5" : "transparent",
                  borderColor: activeCategory === cat ? "#FF3EA5" : "rgba(255,255,255,0.15)",
                  color: activeCategory === cat ? "#FFFFFF" : "#9CA3AF",
                }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section style={{ padding: "0 0 96px", background: "#000" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 32px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="blog-grid">
            {filtered.filter(p => !p.featured).map((post, i) => (
              <motion.div key={post.id} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                whileHover={{ y: -6, boxShadow: `0 20px 60px ${post.color}20` }}
                style={{ borderRadius: "20px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)", background: "#0B0F19", transition: "all 0.3s" }}>
                <div style={{ height: "180px", background: `linear-gradient(135deg, ${post.color}20, rgba(0,0,0,0.5))`, position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", inset: 0, background: `linear-gradient(135deg, ${post.color}30, transparent)` }} />
                  <div style={{ position: "absolute", top: "14px", left: "14px", padding: "5px 12px", borderRadius: "999px", background: post.color + "30", color: post.color, fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>{post.category}</div>
                </div>
                <div style={{ padding: "22px" }}>
                  <h3 style={{ fontFamily: "'Sora', sans-serif", fontSize: "16px", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.4, marginBottom: "10px" }}>{post.title}</h3>
                  <p style={{ color: "#9CA3AF", fontSize: "13px", lineHeight: 1.6, marginBottom: "16px" }}>{post.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", gap: "12px" }}>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#6B7280", fontSize: "11px" }}><Calendar size={10} />{post.date}</span>
                      <span style={{ display: "flex", alignItems: "center", gap: "4px", color: "#6B7280", fontSize: "11px" }}><Clock size={10} />{post.readTime}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} style={{ color: post.color, fontSize: "12px", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "4px" }}>
                      Read <ArrowRight size={11} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <style>{`
        @media(max-width:1024px){.blog-grid{grid-template-columns:repeat(2,1fr)!important;} .featured-grid{grid-template-columns:1fr!important;}}
        @media(max-width:640px){.blog-grid{grid-template-columns:1fr!important;}}
      `}</style>
    </>
  );
}
