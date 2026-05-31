"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, Search, MapPin, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#00A3FF",
  accentGradient: "linear-gradient(135deg, #00A3FF, #0066CC)",
  badge: "SEO Services & Google My Business Ranking",
  heroTitle: "Rank #1 on Google &",
  heroTitleAccent: "Dominate Local Search",
  heroSubtitle: "Page 1 rankings. Google My Business dominance. Unstoppable organic traffic. Our proven SEO system has ranked 500+ businesses on page 1 of Google — driving real, compounding revenue growth month after month.",
  heroBgImage: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=85",
  heroStats: [
    { v: "500+",   l: "Businesses Ranked #1" },
    { v: "+312%",  l: "Avg. Organic Traffic" },
    { v: "47 kw",  l: "Most Keywords Ranked" },
  ],
  statsBar: [
    { value: "500+",   label: "Businesses Ranked Page 1",   color: "#00A3FF" },
    { value: "+312%",  label: "Avg. Organic Traffic Growth", color: "#0066CC" },
    { value: "47",     label: "Most Keywords Ranked #1",     color: "#00D084" },
    { value: "6 Months",label: "Avg. Time to Page 1",       color: "#FF6B00" },
  ],
  benefitsTitle: "Everything You Need to",
  benefitsTitleAccent: "Dominate Google Search",
  benefitsSubtitle: "Six powerful SEO advantages that put your business on page 1 and keep it there — permanently.",
  benefits: [
    { icon: Search,     title: "Page 1 Rankings Guaranteed",  desc: "We rank your business on page 1 of Google for your most valuable keywords — the ones that drive real leads and revenue.", color: "#00A3FF" },
    { icon: MapPin,     title: "Google My Business Dominance",desc: "Own the Google Maps 3-Pack for local searches. We fully optimize your GMB profile to dominate local search results.", color: "#0066CC" },
    { icon: TrendingUp, title: "Compounding Organic Growth",  desc: "Unlike paid ads, SEO compounds over time. Every month your rankings improve, your traffic grows, and your ROI multiplies.", color: "#00D084" },
    { icon: Eye,        title: "Technical SEO Excellence",    desc: "Core Web Vitals, site speed, schema markup, crawlability — we fix every technical issue holding your rankings back.", color: "#FF6B00" },
    { icon: Shield,     title: "100% White-Hat Methods",      desc: "All strategies are Google-compliant. No black-hat tactics that risk penalties. We build rankings that last for years.", color: "#8B5CF6" },
    { icon: BarChart3,  title: "Transparent Reporting",       desc: "Weekly ranking reports, traffic analytics, and ROI tracking so you always know exactly what your SEO investment is delivering.", color: "#00A3FF" },
  ],
  splitImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete SEO &",
  splitTitleAccent: "Google My Business System",
  splitBadgeOverlay: "SEO Campaign Active",
  splitOverlayText: "Your SEO campaign running 24/7 — building rankings, authority, and organic traffic around the clock.",
  features: [
    { title: "Keyword Research & Strategy",  desc: "Deep keyword research to identify high-value, buyer-intent keywords with the best ROI potential for your business." },
    { title: "On-Page SEO Optimization",     desc: "Title tags, meta descriptions, headers, content optimization, and internal linking for every page on your site." },
    { title: "Technical SEO Audit & Fix",    desc: "Complete technical audit — site speed, crawl errors, duplicate content, schema markup, and Core Web Vitals fixes." },
    { title: "Google My Business Optimization", desc: "Complete GMB profile setup, optimization, review management, and local citation building for Maps dominance." },
    { title: "Link Building & Authority",    desc: "High-authority backlink acquisition from relevant, trusted websites to boost your domain authority and rankings." },
    { title: "Local SEO & Citations",        desc: "NAP consistency, local directory listings, and geo-targeted content to dominate local search results." },
    { title: "Content SEO Strategy",         desc: "SEO-optimized blog posts, landing pages, and pillar content that rank and convert your target audience." },
    { title: "Competitor Gap Analysis",      desc: "Identify exactly what your top-ranking competitors are doing and build a strategy to outrank them." },
  ],
  processTitle: "From Invisible to",
  processTitleAccent: "#1 on Google",
  processSubtitle: "A proven 4-step SEO system that has ranked 500+ businesses on page 1 of Google.",
  process: [
    { num: "01", title: "SEO Audit",         desc: "Complete technical, on-page, and off-page audit to identify every issue and opportunity holding your rankings back.", color: "#00A3FF", duration: "Week 1" },
    { num: "02", title: "Strategy & Setup",  desc: "Custom SEO roadmap with keyword targets, content plan, link building strategy, and GMB optimization plan.", color: "#0066CC", duration: "Week 2" },
    { num: "03", title: "Execute & Build",   desc: "We implement all on-page fixes, publish optimized content, build authoritative backlinks, and optimize your GMB profile.", color: "#00D084", duration: "Month 1–3" },
    { num: "04", title: "Rank & Scale",      desc: "Weekly ranking reports, continuous optimization, and scaling successful strategies to dominate more keywords every month.", color: "#FF6B00", duration: "Ongoing" },
  ],
  testimonials: [
    { name: "James Rodriguez", role: "Marketing Director, BrandForge",  text: "MySocialCrux ranked us #1 for 23 of our target keywords in 6 months. Our organic traffic went from 1,200 to 4,900 monthly visitors. Revenue from organic search tripled.", metric: "+312% Traffic",   avatar: "JR", color: "#00A3FF" },
    { name: "Sarah Mitchell",  role: "CEO, TechVenture Inc.",            text: "Our Google My Business profile now shows up in the top 3 for every local search in our area. We get 40+ qualified leads per month directly from Google Maps.", metric: "40+ Leads/Month",  avatar: "SM", color: "#0066CC" },
    { name: "David Chen",      role: "CMO, NexaGrowth",                  text: "We went from page 4 to page 1 for our most competitive keyword in just 4 months. The ROI on SEO is 10x better than our paid ads. MySocialCrux is the real deal.", metric: "Page 4 → Page 1", avatar: "DC", color: "#00D084" },
  ],
  faqs: [
    { q: "How long does SEO take to show results?",       a: "Most clients see measurable ranking improvements within 60–90 days. Significant page 1 rankings typically happen within 4–6 months. SEO is a long-term investment that compounds — the longer you invest, the greater the returns." },
    { q: "Do you guarantee page 1 rankings?",             a: "We have a strong track record of achieving page 1 rankings for our clients. While no ethical SEO agency can guarantee specific rankings (Google controls the algorithm), we guarantee measurable improvement in rankings and organic traffic." },
    { q: "What is Google My Business optimization?",      a: "GMB optimization involves fully completing and optimizing your Google Business Profile — categories, photos, posts, Q&A, review responses, and local citations — to rank in the Google Maps 3-Pack for local searches." },
    { q: "Do you use white-hat SEO methods only?",        a: "Yes, 100%. We never use black-hat tactics like link farms, keyword stuffing, or cloaking. All our methods are fully compliant with Google's Webmaster Guidelines, ensuring your rankings are safe and sustainable." },
    { q: "Can you help with both national and local SEO?", a: "Yes. We work with both national/e-commerce businesses targeting broad keywords and local businesses targeting geo-specific searches. Our GMB optimization service is specifically designed for local businesses." },
    { q: "What's included in the weekly reports?",        a: "Weekly reports include keyword ranking positions, organic traffic growth, backlinks acquired, GMB insights (views, clicks, calls), and a summary of work completed and planned for the next week." },
  ],
  relatedServices: [
    { title: "Website Development",    href: "/website-development-services/",                          color: "#00D084" },
    { title: "Website Traffic Boost",  href: "/website-traffic-boost/",                                 color: "#FF6B00" },
    { title: "Content Writing",        href: "/content-writing-services/",                              color: "#8B5CF6" },
    { title: "Press Release & PR",     href: "/press-release-creation-global-publication-services/",    color: "#FF3EA5" },
  ],
  ctaTitle: "Ready to Rank #1 on Google &",
  ctaTitleAccent: "Dominate Your Market?",
  ctaSubtitle: "Join 500+ businesses that trust MySocialCrux to rank them on page 1 of Google. Get your free SEO audit and keyword report today.",
  ctaButton: "Get Free SEO Audit",
};

export default function SEOContent() {
  return <ServicePageTemplate d={data} />;
}
