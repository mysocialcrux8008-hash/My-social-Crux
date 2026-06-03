"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, Zap, Globe, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#00D084",
  accentGradient: "linear-gradient(135deg, #00D084, #00A3FF)",
  badge: "Website Development Services",
  heroTitle: "Premium Websites That",
  heroTitleAccent: "Convert Visitors Into Customers",
  heroSubtitle: "Fast. Beautiful. SEO-optimized. Conversion-focused. We build premium websites that don't just look stunning — they rank on Google, load in under 2 seconds, and turn every visitor into a paying customer.",
  heroBgImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=85",
  heroStats: [
    { v: "300+",   l: "Websites Delivered" },
    { v: "<1.5s",  l: "Avg. Load Time" },
    { v: "+285%",  l: "Avg. Conversion Lift" },
  ],
  statsBar: [
    { value: "300+",   label: "Websites Delivered",        color: "#00D084" },
    { value: "<1.5s",  label: "Avg. Page Load Time",       color: "#00A3FF" },
    { value: "+285%",  label: "Avg. Conversion Lift",      color: "#FF6B00" },
    { value: "100%",   label: "Mobile Optimized",          color: "#8B5CF6" },
  ],
  benefitsTitle: "Websites Built to",
  benefitsTitleAccent: "Rank, Convert & Scale",
  benefitsSubtitle: "Six powerful advantages that make our website development service the best investment your brand can make.",
  benefits: [
    { icon: Zap,        title: "Lightning-Fast Performance",  desc: "Sub-1.5 second load times with 95+ Google PageSpeed scores. Speed is SEO. Speed is conversions. We deliver both.", color: "#00D084" },
    { icon: Globe,      title: "SEO-First Architecture",      desc: "Every website we build is architected for search engine dominance — technical SEO, schema markup, Core Web Vitals, and more.", color: "#00A3FF" },
    { icon: TrendingUp, title: "Conversion-Optimized Design", desc: "Every element — CTA placement, color psychology, UX flow — is designed to maximize your conversion rate and revenue.", color: "#FF6B00" },
    { icon: Eye,        title: "Premium Visual Design",       desc: "Stunning, brand-aligned designs that position you as the premium choice in your market and build instant trust.", color: "#8B5CF6" },
    { icon: Shield,     title: "Secure & Scalable",           desc: "Enterprise-grade security, SSL, GDPR compliance, and infrastructure that scales with your business growth.", color: "#FF3EA5" },
    { icon: BarChart3,  title: "Analytics & Tracking Setup",  desc: "Full Google Analytics 4, Search Console, heatmaps, and conversion tracking setup so you know exactly what's working.", color: "#00D084" },
  ],
  splitImage: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete Website",
  splitTitleAccent: "Design & Development Package",
  splitBadgeOverlay: "Development In Progress",
  splitOverlayText: "Your website being built with precision — every pixel, every line of code optimized for performance and conversions.",
  features: [
    { title: "Custom UI/UX Design",        desc: "Fully custom designs tailored to your brand — no templates, no cookie-cutter layouts." },
    { title: "Next.js / React Development",desc: "Built with the latest tech stack for maximum performance, SEO, and scalability." },
    { title: "Mobile-First Responsive",    desc: "Pixel-perfect on every device — desktop, tablet, and mobile — with flawless UX." },
    { title: "SEO Technical Setup",        desc: "Meta tags, schema markup, sitemap, robots.txt, and Core Web Vitals optimization." },
    { title: "E-Commerce Integration",     desc: "Shopify, WooCommerce, or custom cart solutions with payment gateway integration." },
    { title: "CMS Integration",            desc: "Easy-to-manage content with Sanity, Contentful, or WordPress CMS integration." },
    { title: "Speed Optimization",         desc: "Image compression, lazy loading, CDN setup, and code splitting for sub-2s load times." },
    { title: "Post-Launch Support",        desc: "30-day post-launch support, bug fixes, and performance monitoring included." },
  ],
  processTitle: "From Concept to",
  processTitleAccent: "Live & Converting",
  processSubtitle: "A proven 4-step development process that delivers premium websites on time, on budget, every time.",
  process: [
    { num: "01", title: "Discovery & Wireframe", desc: "We deep-dive into your brand, goals, and competitors to create detailed wireframes and a conversion-focused site architecture.", color: "#00D084", duration: "Week 1" },
    { num: "02", title: "Design & Prototype",    desc: "Full UI/UX design in Figma with your brand identity — colors, typography, imagery — reviewed and approved before development begins.", color: "#00A3FF", duration: "Week 2–3" },
    { num: "03", title: "Development & QA",      desc: "We build your website with clean, scalable code. Full QA testing across all devices and browsers before launch.", color: "#FF6B00", duration: "Week 4–6" },
    { num: "04", title: "Launch & Optimize",     desc: "We launch your site, set up analytics, submit to Google, and monitor performance — then optimize based on real user data.", color: "#8B5CF6", duration: "Week 7+" },
  ],
  testimonials: [
    { name: "Sarah Mitchell",  role: "CEO, TechVenture Inc.",       text: "MySocialCrux built our new website in 6 weeks. It loads in 0.9 seconds, ranks #1 for our main keywords, and our conversion rate went from 1.8% to 6.2%. Best investment we've made.", metric: "+244% Conversions", avatar: "SM", color: "#00D084" },
    { name: "Marcus Williams", role: "CMO, FitLife Brand",          text: "The e-commerce site they built for us generated $180K in revenue in the first month. The UX is flawless and our cart abandonment rate dropped by 40%.", metric: "$180K Month 1",     avatar: "MW", color: "#00A3FF" },
    { name: "Emma Thompson",   role: "Head of Growth, StartupX",    text: "Our old website had a 78% bounce rate. MySocialCrux rebuilt it and we're now at 32%. Organic traffic tripled in 90 days thanks to their SEO-first architecture.", metric: "-59% Bounce Rate",  avatar: "ET", color: "#FF6B00" },
  ],
  faqs: [
    { q: "How long does it take to build a website?",    a: "A standard business website takes 4–6 weeks from kickoff to launch. E-commerce sites typically take 6–10 weeks. We provide a detailed timeline at the start of every project." },
    { q: "What technology do you use?",                  a: "We primarily build with Next.js, React, and Tailwind CSS for maximum performance and SEO. For e-commerce, we use Shopify or WooCommerce. For CMS, we use Sanity, Contentful, or WordPress based on your needs." },
    { q: "Will my website rank on Google?",              a: "Yes. Every website we build is architected for SEO from day one — technical SEO, schema markup, Core Web Vitals optimization, and proper site structure. We also submit your sitemap to Google Search Console at launch." },
    { q: "Do you design and develop, or just develop?",  a: "We do both. Our team includes UI/UX designers and developers who work together to deliver a complete, polished product — from wireframes and visual design to fully coded, live website." },
    { q: "Can you redesign my existing website?",        a: "Absolutely. Website redesigns are one of our most common projects. We audit your existing site, identify conversion and SEO issues, and rebuild it with a focus on performance and growth." },
    { q: "What's included after launch?",                a: "Every project includes 30 days of post-launch support — bug fixes, minor adjustments, and performance monitoring. We also offer ongoing maintenance and growth retainers for clients who want continued optimization." },
  ],
  relatedServices: [
    { title: "SEO Services",            href: "/seo-services/",                                       color: "#00A3FF" },
    { title: "Website Traffic Boost",   href: "/website-traffic-boost/",                              color: "#FF6B00" },
    { title: "Content Writing",         href: "/content-writing-services/",                           color: "#8B5CF6" },
    { title: "Press Release & PR",      href: "/press-release-creation-global-publication-services/", color: "#FF3EA5" },
  ],
  ctaTitle: "Ready to Build a Website That",
  ctaTitleAccent: "Actually Grows Your Business?",
  ctaSubtitle: "Join 300+ brands that trust MySocialCrux to build premium, high-converting websites. Get your free website audit and proposal today.",
  ctaButton: "Get Free Website Proposal",
};

export default function WebDevContent() {
  return <ServicePageTemplate d={data} />;
}
