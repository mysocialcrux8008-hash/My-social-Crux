"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, PenTool, Target, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#F59E0B",
  accentGradient: "linear-gradient(135deg, #F59E0B, #D97706)",
  badge: "Content Writing & Brand Messaging Services",
  heroTitle: "Words That Rank, Convert &",
  heroTitleAccent: "Build Your Brand Authority",
  heroSubtitle: "Premium content that ranks on Google, converts readers into customers, and positions your brand as the undisputed authority in your industry. From SEO blogs to brand messaging — every word is engineered for impact.",
  heroBgImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1542435503-956c469947f6?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=85",
  heroStats: [
    { v: "5,000+",  l: "Articles Published" },
    { v: "+280%",   l: "Avg. Organic Traffic Lift" },
    { v: "Top 3",   l: "Avg. Google Ranking" },
  ],
  statsBar: [
    { value: "5,000+", label: "Articles & Pages Written",    color: "#F59E0B" },
    { value: "+280%",  label: "Avg. Organic Traffic Lift",   color: "#D97706" },
    { value: "Top 3",  label: "Avg. Google Ranking",         color: "#00D084" },
    { value: "4.6%",   label: "Avg. Content Conversion Rate",color: "#00A3FF" },
  ],
  benefitsTitle: "Content That Does More Than",
  benefitsTitleAccent: "Just Fill Pages",
  benefitsSubtitle: "Six powerful advantages that make our content writing service the highest-ROI marketing investment for your brand.",
  benefits: [
    { icon: TrendingUp, title: "SEO-Optimized Content",       desc: "Every piece is researched, structured, and optimized to rank on page 1 of Google — driving compounding organic traffic for years.", color: "#F59E0B" },
    { icon: PenTool,    title: "Expert Brand Voice",           desc: "We write in your brand's unique voice — whether authoritative, conversational, or bold — ensuring every word feels authentically yours.", color: "#D97706" },
    { icon: Target,     title: "Conversion-Focused Copy",      desc: "Content engineered to move readers through your funnel — from awareness to consideration to purchase — with strategic CTAs.", color: "#00D084" },
    { icon: Eye,        title: "Research-Backed Authority",    desc: "Every article is backed by data, expert insights, and original research that positions your brand as the go-to authority.", color: "#00A3FF" },
    { icon: Shield,     title: "100% Original & Plagiarism-Free", desc: "All content is 100% original, human-written, and passes Copyscape. No AI-generated filler, no plagiarism — ever.", color: "#8B5CF6" },
    { icon: BarChart3,  title: "Performance Tracking",         desc: "Monthly content performance reports showing rankings, traffic, engagement, and conversion data for every piece we write.", color: "#F59E0B" },
  ],
  splitImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete Content Writing",
  splitTitleAccent: "& Brand Messaging System",
  splitBadgeOverlay: "Content Campaign Active",
  splitOverlayText: "Your content strategy running 24/7 — publishing, ranking, and converting your target audience around the clock.",
  features: [
    { title: "SEO Blog Articles",           desc: "Long-form, keyword-optimized blog posts (1,500–5,000 words) that rank on Google and drive qualified organic traffic." },
    { title: "Website Copywriting",         desc: "Homepage, about, services, and landing page copy that converts visitors into leads and customers." },
    { title: "Brand Messaging Framework",   desc: "Core brand story, tagline, value proposition, and messaging pillars that define your brand's voice and positioning." },
    { title: "Social Media Content",        desc: "Platform-specific captions, hooks, and content for Instagram, LinkedIn, Twitter, and Facebook." },
    { title: "Email Marketing Copy",        desc: "High-converting email sequences, newsletters, and drip campaigns that nurture leads and drive sales." },
    { title: "Product Descriptions",        desc: "Compelling e-commerce product descriptions that highlight benefits, overcome objections, and drive purchases." },
    { title: "Case Studies & Whitepapers",  desc: "In-depth case studies and whitepapers that build authority and generate B2B leads." },
    { title: "Content Strategy & Calendar", desc: "Full content strategy with topic clusters, keyword mapping, and 3-month editorial calendar." },
  ],
  processTitle: "From Brief to",
  processTitleAccent: "High-Performing Content",
  processSubtitle: "A proven 4-step content creation process that delivers SEO-optimized, conversion-focused content every time.",
  process: [
    { num: "01", title: "Discovery & Research",  desc: "We research your brand, audience, competitors, and target keywords to build a content strategy that drives real results.", color: "#F59E0B", duration: "Week 1" },
    { num: "02", title: "Strategy & Planning",   desc: "Custom content calendar with topic clusters, keyword targets, content types, and publishing schedule tailored to your goals.", color: "#D97706", duration: "Week 2" },
    { num: "03", title: "Write & Optimize",      desc: "Our expert writers craft every piece with SEO best practices, your brand voice, and conversion psychology built in from the start.", color: "#00A3FF", duration: "Ongoing" },
    { num: "04", title: "Publish & Track",       desc: "Content published on schedule with monthly performance reports showing rankings, traffic, and conversion data.", color: "#00D084", duration: "Monthly" },
  ],
  testimonials: [
    { name: "James Rodriguez", role: "Marketing Director, BrandForge",  text: "MySocialCrux's content team wrote 24 SEO articles for us in 3 months. 18 of them now rank on page 1 of Google. Our organic traffic grew by 280% and we're generating 60+ leads per month from content alone.", metric: "+280% Traffic",   avatar: "JR", color: "#F59E0B" },
    { name: "Sarah Mitchell",  role: "CEO, TechVenture Inc.",            text: "The brand messaging framework they created completely transformed how we communicate our value. Our website conversion rate went from 1.9% to 5.8% after the copy rewrite.", metric: "+205% Conversions", avatar: "SM", color: "#D97706" },
    { name: "Marcus Williams", role: "CMO, FitLife Brand",               text: "The social media content they write for us consistently gets 3–5x more engagement than what we were producing in-house. Our Instagram reach tripled in 60 days.", metric: "3x Engagement",     avatar: "MW", color: "#00A3FF" },
  ],
  faqs: [
    { q: "What types of content do you write?",           a: "We write everything — SEO blog articles, website copy, landing pages, social media content, email sequences, product descriptions, case studies, whitepapers, press releases, and brand messaging frameworks." },
    { q: "How do you match my brand voice?",              a: "We start every engagement with a brand voice discovery session. We analyze your existing content, interview your team, and create a brand voice guide that our writers follow for every piece." },
    { q: "Is the content SEO-optimized?",                 a: "Yes. Every blog article and web page is fully SEO-optimized — keyword research, proper heading structure, meta descriptions, internal linking, and readability optimization for both Google and human readers." },
    { q: "Do you use AI to write content?",               a: "No. All our content is 100% human-written by experienced writers with subject matter expertise in your industry. We never use AI-generated content. Every piece passes Copyscape for originality." },
    { q: "How many articles can you produce per month?",  a: "We can scale from 4 to 40+ articles per month depending on your needs. We have a team of 20+ specialized writers across industries who can handle high-volume content production without sacrificing quality." },
    { q: "How long before I see SEO results from content?", a: "New content typically starts ranking within 60–90 days. Significant page 1 rankings usually happen within 3–6 months. Content SEO compounds over time — the more you publish, the faster your entire site ranks." },
  ],
  relatedServices: [
    { title: "SEO Services",              href: "/seo-services/",                                       color: "#00A3FF" },
    { title: "Website Development",       href: "/website-development-services/",                       color: "#00D084" },
    { title: "Press Release & PR",        href: "/press-release-creation-global-publication-services/", color: "#8B5CF6" },
    { title: "Social Media Growth",       href: "/instagram-growth-services/",                          color: "#FF3EA5" },
  ],
  ctaTitle: "Ready for Content That",
  ctaTitleAccent: "Actually Grows Your Business?",
  ctaSubtitle: "Join 500+ brands that trust MySocialCrux to create content that ranks, converts, and builds lasting brand authority. Get your free content audit today.",
  ctaButton: "Get Free Content Audit",
};

export default function ContentWritingContent() {
  return <ServicePageTemplate d={data} />;
}
