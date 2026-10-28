"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Compass, FileEdit, Film, MessageSquare, BarChart3, Eye, TrendingUp, Activity, Target, Zap, CheckCircle, AlertCircle } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#FF3EA5",
  accentGradient: "linear-gradient(135deg, #FF3EA5, #8B5CF6)",
  badge: "Influencer Marketing Services",
  heroTitle: "A Practical Creator-Led",
  heroTitleAccent: "Growth Partner for Brands",
  heroSubtitle: "We connect brands with the right creators — handling discovery, content, and campaign delivery end to end. Creators. Content. Campaigns. One coordinated workflow.",
  heroBgImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=85",
  heroStats: [
    { v: "Creators",   l: "Right-fit creators for your brand" },
    { v: "Content",    l: "Creator-led content that converts" },
    { v: "Campaigns",  l: "End-to-end campaign delivery" },
  ],
  statsBar: [
    { value: "Nano & Micro", label: "Creators — relatable voices",   color: "#FF3EA5" },
    { value: "Real Views",   label: "Based creator selection",        color: "#8B5CF6" },
    { value: "Brief → Create", label: "→ Report workflow",           color: "#00D084" },
    { value: "Full",         label: "Campaign management",            color: "#FF6B00" },
  ],
  benefitsTitle: "Creators Chosen on",
  benefitsTitleAccent: "Real Views",
  benefitsSubtitle: "We look at what a creator's audience actually watches, not just how many followers they have.",
  benefits: [
    { icon: Eye,        title: "Views over follower count",    desc: "We judge reach by the views a creator's Reels actually get — not their follower number, which can be inflated or inactive.", color: "#FF3EA5" },
    { icon: TrendingUp, title: "Cost per 1,000 views",         desc: "We compare creators on value for money, not just on their rate. You get the best CPM for your campaign budget.", color: "#8B5CF6" },
    { icon: Activity,   title: "Consistent, not just viral",   desc: "Typical (median) performance matters more than one lucky Reel. We pick creators who deliver consistent results.", color: "#00D084" },
    { icon: Target,     title: "Brand and audience fit",       desc: "The creator's content and audience should match your customer. We vet for niche, tone, and demographic alignment.", color: "#FF6B00" },
  ],
  splitImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85",
  splitBadge: "What We Do",
  splitTitle: "Everything in",
  splitTitleAccent: "One Place",
  splitBadgeOverlay: "Live Campaign",
  splitOverlayText: "One coordinated workflow for creators, content and campaign delivery — Brief → Create → Report.",
  features: [
    { title: "Creator Discovery",    desc: "Research, shortlist and outreach — we find the right creators for your brand from our vetted network." },
    { title: "Campaign Strategy",    desc: "Audience, format and content angle — a tailored strategy built around your goals and target customer." },
    { title: "Scripts & Briefs",     desc: "Clear hooks, talking points and CTAs — so every creator delivers on-brief content that converts." },
    { title: "Video Editing",        desc: "Polished Reels, subtitles and pacing — we handle editing so the final content is brand-ready." },
    { title: "Coordination",         desc: "Creator communication and timelines — we manage all back-and-forth so you don't have to." },
    { title: "Reporting",            desc: "Campaign wrap-up and key learnings — full performance report with reach, views, and next steps." },
  ],
  processTitle: "A Clear,",
  processTitleAccent: "Collaborative Workflow",
  processSubtitle: "Simple checkpoints keep the campaign organised and on-brand. Client approval checkpoints · Clear deliverables · Transparent communication.",
  process: [
    { num: "01", title: "Brand Brief",          desc: "Goals, audience and product — we kick off by understanding exactly what you want to achieve and who you're speaking to.", color: "#FF3EA5", duration: "Step 1" },
    { num: "02", title: "Creator Shortlist",    desc: "Relevant creator options — we present a shortlist of vetted creators that match your brand, audience, and budget.", color: "#8B5CF6", duration: "Step 2" },
    { num: "03", title: "Scripts & Briefs",     desc: "Hooks, deliverables and CTA — detailed briefs ensure every creator knows exactly what to film and how to present your brand.", color: "#FF6B00", duration: "Step 3" },
    { num: "04", title: "Content Production",   desc: "Creator filming and editing — creators produce the content; we handle editing, subtitles, and quality review.", color: "#00D084", duration: "Step 4" },
    { num: "05", title: "Review & Publish",     desc: "Approval and posting plan — you review the content before anything goes live. We coordinate the posting schedule.", color: "#00A3FF", duration: "Step 5" },
    { num: "06", title: "Campaign Report",      desc: "Results and next steps — a full wrap-up report with views, reach, engagement, and actionable learnings for future campaigns.", color: "#FF3EA5", duration: "Step 6" },
  ],
  testimonials: [
    { name: "Minakshi Digwal",   role: "Verified Trustpilot Review · India", text: "I have used My Social Crux services multiple times and they always deliver exactly what they promise. The support is professional, fast, and very helpful. Highly recommend for social media growth.", metric: "Excellent Service",   avatar: "MD", color: "#FF3EA5" },
    { name: "Taron",             role: "Verified Trustpilot Review · US",    text: "There is no other marketing company in the world that does what they do. They get beyond a 100/100. Their work and service is excellent.", metric: "100/100 Rating",      avatar: "TA", color: "#8B5CF6" },
    { name: "Aakash Singh",      role: "Verified Trustpilot Review · India", text: "The service worked better than I expected. Everything was delivered on time and the quality was good. If you're looking for real growth, this is a reliable option.", metric: "Worth the Money",    avatar: "AS", color: "#FF6B00" },
  ],
  faqs: [
    { q: "How do you choose which creators to work with?",       a: "We select creators based on real view performance — not follower count. We look at median Reel views, cost per 1,000 views, consistency of performance, and how well their audience matches your target customer." },
    { q: "What's the difference between nano and micro creators?", a: "Nano creators (1K–10K followers) are highly relatable and niche, often achieving better engagement rates. Micro creators (10K–100K) balance reach with authenticity. We typically recommend a mix of both for the best results at budgets that make sense." },
    { q: "What is included in the campaign service?",            a: "Everything — creator discovery, campaign strategy, scripts and briefs, video editing, creator coordination, and a full post-campaign report. You review and approve content at every checkpoint before anything goes live." },
    { q: "Which platforms do you run campaigns on?",             a: "We primarily run campaigns on Instagram (Reels) where creator content performs best. We also work across YouTube Shorts, TikTok, and other platforms depending on where your target audience is most active." },
    { q: "Do you handle video editing?",                         a: "Yes. We edit and polish Reels — adding subtitles, adjusting pacing, and ensuring the final cut meets your brand standards before you review it." },
    { q: "How is campaign performance reported?",                a: "You receive a campaign wrap-up report covering total views, reach, engagement, cost per 1,000 views, and key learnings — plus recommendations for the next campaign." },
  ],
  relatedServices: [
    { title: "Instagram Growth Services",  href: "/instagram-growth-services/",       color: "#E1306C" },
    { title: "Content Writing",            href: "/content-writing-services/",        color: "#F59E0B" },
    { title: "SEO Services",               href: "/seo-services/",                    color: "#00A3FF" },
    { title: "Social Media Growth",        href: "/twitter-x-growth-services/",       color: "#1DA1F2" },
  ],
  ctaTitle: "Ready to Work with",
  ctaTitleAccent: "the Right Creators?",
  ctaSubtitle: "Get a creator-led campaign built around your brand — from brief to report. Nano and micro creators at budgets that make sense.",
  ctaButton: "Get Your Free Campaign Brief",
};

export default function InfluencerContent() {
  return (
    <>
      <ServicePageTemplate d={data} />

      {/* ── CAMPAIGN PACKAGES ── */}
      <section style={{ padding: "96px 0", background: "#F8FAFC", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(#E2E8F0 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5 }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "52px" }}>
            <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: "999px", background: "#FF3EA512", border: "1px solid #FF3EA525", color: "#FF3EA5", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>Campaign Packages</span>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: "clamp(30px,4vw,48px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.05, marginBottom: "16px" }}>
              Simple, transparent packages
            </h2>
            <p style={{ color: "#64748B", fontSize: "17px", maxWidth: "520px" }}>
              Pick the size that fits your campaign. Every package includes scripts, editing and creator coordination.
            </p>
          </motion.div>

          {/* Package rows */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
            {[
              { name: "Starter",  detail: "2 nano/micro creators • 2 Reels",  price: "₹7,999",  icon: "⚡", grad: "linear-gradient(135deg,#FF6B00,#FF9A00)", popular: false },
              { name: "Growth",   detail: "3 creators • 3 Reels",             price: "₹11,999", icon: "📈", grad: "linear-gradient(135deg,#FF3EA5,#FF7043)", popular: true  },
              { name: "Scale",    detail: "5 creators • 5 Reels",             price: "₹21,999", icon: "🏅", grad: "linear-gradient(135deg,#8B5CF6,#A78BFA)", popular: false },
              { name: "Pro",      detail: "8 creators • 8 Reels",             price: "₹34,999", icon: "📦", grad: "linear-gradient(135deg,#3B5BDB,#6C8EF5)", popular: false },
              { name: "Premium",  detail: "10 creators • 10 Reels",           price: "₹49,999", icon: "⭐", grad: "linear-gradient(135deg,#7C3AED,#A855F7)", popular: false },
            ].map((pkg, i) => (
              <motion.div key={pkg.name}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                whileHover={{ y: -3, boxShadow: "0 12px 40px rgba(0,0,0,0.10)" }}
                style={{ display: "flex", alignItems: "center", gap: "20px", padding: "22px 24px", borderRadius: "16px", background: "#FFFFFF", border: pkg.popular ? "2px solid #FF3EA5" : "1px solid #E2E8F0", boxShadow: pkg.popular ? "0 4px 24px #FF3EA520" : "0 2px 8px rgba(0,0,0,0.04)", transition: "all 0.25s", position: "relative" }}>
                {/* Icon bubble */}
                <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: pkg.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", flexShrink: 0 }}>
                  {pkg.icon}
                </div>
                {/* Name + detail */}
                <div style={{ flex: 1 }}>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontSize: "17px", fontWeight: 700, color: "#0F172A" }}>{pkg.name}</div>
                  <div style={{ color: "#64748B", fontSize: "14px", marginTop: "3px" }}>{pkg.detail}</div>
                </div>
                {/* Price */}
                <div style={{ fontFamily: "'Sora',sans-serif", fontSize: "22px", fontWeight: 900, color: "#8B5CF6", flexShrink: 0 }}>{pkg.price}</div>
                {/* Popular badge */}
                {pkg.popular && (
                  <span style={{ position: "absolute", top: "50%", right: "100px", transform: "translateY(-50%)", padding: "4px 12px", borderRadius: "999px", background: "#FF3EA5", color: "#FFF", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>Most Popular</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Custom package CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.35 }}
            whileHover={{ y: -3, boxShadow: "0 16px 48px rgba(139,92,246,0.18)" }}
            style={{ display: "flex", alignItems: "center", gap: "20px", padding: "22px 24px", borderRadius: "16px", background: "linear-gradient(135deg,#EDE9FE,#FAF5FF)", border: "2px dashed #8B5CF6", marginBottom: "12px", transition: "all 0.25s", flexWrap: "wrap" }}
            className="inf-custom-pkg">
            <div style={{ width: "52px", height: "52px", borderRadius: "14px", background: "linear-gradient(135deg,#8B5CF6,#A78BFA)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", flexShrink: 0 }}>
              🎛️
            </div>
            <div style={{ flex: 1, minWidth: "160px" }}>
              <div style={{ fontFamily: "'Sora',sans-serif", fontSize: "17px", fontWeight: 700, color: "#5B21B6" }}>Customise your package</div>
              <div style={{ color: "#7C3AED", fontSize: "14px", marginTop: "3px" }}>1,000+ creators available • Build your own mix of creators & Reels</div>
            </div>
            <a href="/contact" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px", padding: "12px 22px", borderRadius: "8px", background: "linear-gradient(135deg,#8B5CF6,#7C3AED)", color: "#FFF", fontWeight: 700, fontSize: "14px", flexShrink: 0, whiteSpace: "nowrap" }}>
              Get a Quote →
            </a>
          </motion.div>
          <style>{`@media(max-width:520px){ .inf-custom-pkg { flex-direction: column !important; align-items: flex-start !important; } .inf-custom-pkg a { width: 100%; justify-content: center; } }`}</style>

          {/* Disclaimer note */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ display: "flex", alignItems: "center", gap: "14px", padding: "18px 22px", borderRadius: "14px", background: "#EFF6FF", border: "1px solid #BFDBFE" }}>
            <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg,#06B6D4,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <CheckCircle size={18} style={{ color: "#FFF" }} />
            </div>
            <p style={{ color: "#1E40AF", fontSize: "14px", fontWeight: 600 }}>Final creator selection depends on brand fit and availability.</p>
          </motion.div>
        </div>
      </section>

      {/* ── CLEAR SCOPE / IMPORTANT DETAILS ── */}
      <section style={{ padding: "96px 0", background: "#FFFFFF" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 32px" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "52px" }}>
            <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: "999px", background: "#FF3EA512", border: "1px solid #FF3EA525", color: "#FF3EA5", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>Important Details</span>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: "clamp(30px,4vw,48px)", fontWeight: 900, color: "#0F172A", lineHeight: 1.05, marginBottom: "16px" }}>
              Clear scope. No hidden surprises.
            </h2>
            <p style={{ color: "#64748B", fontSize: "17px" }}>We confirm deliverables and campaign requirements before the work begins.</p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }} className="inf-scope-grid">
            {/* Included */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ padding: "32px 28px", borderRadius: "20px", background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,#06B6D4,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <CheckCircle size={20} style={{ color: "#FFF" }} />
                </div>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: "17px", fontWeight: 700, color: "#0F172A" }}>Included in the package</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "Creator discovery and coordination",
                  "Scripts, content briefs and editing as listed",
                  "Subtitles on edited Reels where specified",
                  "Campaign communication and reporting",
                ].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#22C55E", marginTop: "6px", flexShrink: 0 }} />
                    <span style={{ color: "#334155", fontSize: "14px", lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Discussed separately */}
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              style={{ padding: "32px 28px", borderRadius: "20px", background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "12px", background: "linear-gradient(135deg,#FF6B00,#FF3EA5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <AlertCircle size={20} style={{ color: "#FFF" }} />
                </div>
                <h3 style={{ fontFamily: "'Sora',sans-serif", fontSize: "17px", fontWeight: 700, color: "#0F172A" }}>Discussed separately</h3>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                {[
                  "Product cost and shipping",
                  "Paid advertising budget",
                  "Usage rights, whitelisting or extended licensing",
                  "Extra production or deliverables beyond scope",
                ].map(item => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#F43F5E", marginTop: "6px", flexShrink: 0 }} />
                    <span style={{ color: "#334155", fontSize: "14px", lineHeight: 1.55 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer note */}
          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ marginTop: "20px", padding: "18px 24px", borderRadius: "14px", background: "#FFF7ED", border: "1px solid #FED7AA" }}>
            <p style={{ color: "#92400E", fontSize: "14px", fontWeight: 600 }}>Any additional costs or scope changes are discussed and approved by the client in advance.</p>
          </motion.div>
        </div>
        <style>{`@media(max-width:640px){.inf-scope-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* ── HONEST BY DESIGN ── */}
      <section style={{ padding: "96px 0", background: "#0B0F19", position: "relative", overflow: "hidden" }}>
        <div className="grid-pattern" style={{ position: "absolute", inset: 0, opacity: 0.2 }} />
        <div style={{ maxWidth: "860px", margin: "0 auto", padding: "0 32px", position: "relative" }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ marginBottom: "52px" }}>
            <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: "999px", background: "rgba(255,62,165,0.1)", border: "1px solid rgba(255,62,165,0.2)", color: "#FF3EA5", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "16px" }}>Our Promise</span>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: "clamp(30px,4vw,48px)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "16px" }}>
              Honest by design
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: "17px" }}>No inflated claims. Just clear deliverables and straight talk.</p>
          </motion.div>

          {/* What you can count on */}
          <p style={{ color: "#FF3EA5", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "20px" }}>What you can count on</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
            {[
              { icon: "📋", grad: "linear-gradient(135deg,#3B5BDB,#6C8EF5)", title: "Clear deliverables",      desc: "Creators, Reels and timelines agreed up front." },
              { icon: "👥", grad: "linear-gradient(135deg,#06B6D4,#3B82F6)", title: "Your approval",           desc: "You review and approve at every checkpoint." },
              { icon: "💬", grad: "linear-gradient(135deg,#8B5CF6,#A78BFA)", title: "Open communication",     desc: "Straight updates on creators, timelines and costs." },
              { icon: "📊", grad: "linear-gradient(135deg,#FF6B00,#FF9A00)", title: "Reporting and learnings", desc: "A campaign wrap-up with results and key learnings." },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                style={{ display: "flex", alignItems: "center", gap: "18px", padding: "20px 22px", borderRadius: "14px", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <div style={{ width: "46px", height: "46px", borderRadius: "12px", background: item.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px", flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Sora',sans-serif", fontSize: "15px", fontWeight: 700, color: "#FFFFFF", marginBottom: "4px" }}>{item.title}</div>
                  <div style={{ color: "#9CA3AF", fontSize: "13px" }}>{item.desc}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* What we won't do */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            style={{ padding: "28px 28px", borderRadius: "16px", background: "#0F172A", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <div style={{ width: "32px", height: "32px", borderRadius: "50%", background: "linear-gradient(135deg,#FF6B00,#FF3EA5)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <AlertCircle size={16} style={{ color: "#FFF" }} />
              </div>
              <span style={{ color: "#FF3EA5", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em" }}>What we won&apos;t do</span>
            </div>
            <p style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 600, lineHeight: 1.6 }}>
              We won&apos;t promise viral Reels or guaranteed sales. Results depend on your product, price, creator fit and purchase journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CONTACT CTA ── */}
      <section style={{ padding: "96px 0", background: "linear-gradient(135deg,#0B0618,#0D1B3E,#0B0618)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "-80px", left: "10%", width: "500px", height: "500px", borderRadius: "50%", background: "#FF3EA514", filter: "blur(100px)" }} />
        <div style={{ position: "absolute", bottom: "-60px", right: "8%", width: "400px", height: "400px", borderRadius: "50%", background: "#8B5CF614", filter: "blur(90px)" }} />
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 32px", position: "relative", textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span style={{ display: "inline-block", padding: "6px 16px", borderRadius: "999px", background: "rgba(255,62,165,0.12)", border: "1px solid rgba(255,62,165,0.28)", color: "#FF3EA5", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: "28px" }}>Let&apos;s Build Something</span>
            <h2 style={{ fontFamily: "'Sora',sans-serif", fontSize: "clamp(36px,5.5vw,62px)", fontWeight: 900, color: "#FFFFFF", lineHeight: 1.05, marginBottom: "20px" }}>
              Your next campaign starts here.
            </h2>
            <p style={{ color: "#9CA3AF", fontSize: "17px", lineHeight: 1.7, marginBottom: "40px" }}>
              Share your product and your goal. We&apos;ll shape the creators, content and campaign around it.
            </p>

            {/* Pillars */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
              {[
                { icon: "👥", label: "Creators",  grad: "linear-gradient(135deg,#06B6D4,#3B82F6)" },
                { icon: "▶️",  label: "Content",   grad: "linear-gradient(135deg,#FF6B00,#FF9A00)" },
                { icon: "📈", label: "Campaigns", grad: "linear-gradient(135deg,#FF3EA5,#FF7043)" },
              ].map(p => (
                <div key={p.label} style={{ display: "flex", alignItems: "center", gap: "16px", padding: "16px 22px", borderRadius: "12px", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: p.grad, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", flexShrink: 0 }}>{p.icon}</div>
                  <span style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 600 }}>{p.label}</span>
                </div>
              ))}
            </div>

            {/* Contact card */}
            <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ padding: "24px 28px", borderRadius: "18px", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", marginBottom: "28px", textAlign: "left" }}>
              <p style={{ color: "#9CA3AF", fontSize: "13px", marginBottom: "4px" }}>Let&apos;s plan your first campaign</p>
              <p style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 700, marginBottom: "18px" }}>Ankit Meena</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href="tel:+917229923456" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg,#8B5CF6,#A78BFA)", display: "flex", alignItems: "center", justifyContent: "center" }}>📞</div>
                  <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 600 }}>+91 72299 23456</span>
                </a>
                <a href="mailto:ankit@mysocialcrux.com" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
                  <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg,#06B6D4,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center" }}>✉️</div>
                  <span style={{ color: "#FFFFFF", fontSize: "15px", fontWeight: 600 }}>ankit@mysocialcrux.com</span>
                </a>
              </div>
            </motion.div>

            <Link href="/contact" style={{ textDecoration: "none" }}>
              <motion.span whileHover={{ scale: 1.05, boxShadow: "0 0 40px #FF3EA555" }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "16px 36px", borderRadius: "6px", background: "linear-gradient(135deg,#FF3EA5,#8B5CF6)", color: "#FFF", fontWeight: 700, fontSize: "16px", cursor: "pointer" }}>
                Get Your Free Campaign Brief <Zap size={16} />
              </motion.span>
            </Link>

            <p style={{ marginTop: "24px", color: "#374151", fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase" }}>Creators · Content · Campaigns</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
