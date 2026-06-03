"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, Users, ThumbsUp, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#1877F2",
  accentGradient: "linear-gradient(135deg, #1877F2, #0052CC)",
  badge: "Facebook Page Growth Services",
  heroTitle: "Grow Your Facebook Page to",
  heroTitleAccent: "100K+ Real Followers",
  heroSubtitle: "Real page likes. Real engagement. Real business results. Our proven Facebook growth system has scaled thousands of pages across every industry.",
  heroBgImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=85",
  heroStats: [
    { v: "30K+", l: "Pages Grown" },
    { v: "+3,200%", l: "Best Page Growth" },
    { v: "30 Days", l: "First Results" },
  ],
  statsBar: [
    { value: "30K+", label: "Facebook Pages Grown", color: "#1877F2" },
    { value: "3,200%", label: "Best Page Growth", color: "#0052CC" },
    { value: "6.2%", label: "Avg. Engagement Rate", color: "#00D084" },
    { value: "30 Days", label: "First Results Guaranteed", color: "#FF6B00" },
  ],
  benefitsTitle: "Everything You Need to",
  benefitsTitleAccent: "Dominate Facebook",
  benefitsSubtitle: "Six powerful advantages that set our Facebook Page growth service apart from everyone else.",
  benefits: [
    { icon: TrendingUp, title: "Explosive Page Growth", desc: "Gain 1,000–15,000+ real, targeted page likes every month using our proven organic and paid growth engine.", color: "#1877F2" },
    { icon: ThumbsUp, title: "High Post Engagement", desc: "We build communities that interact. Expect 5–10% engagement rates vs. the industry average of 0.5–1%.", color: "#0052CC" },
    { icon: Users, title: "100% Real Followers", desc: "Zero bots, zero fake accounts. Every follower is a real person genuinely interested in your brand.", color: "#00D084" },
    { icon: Eye, title: "Massive Organic Reach", desc: "Reach millions of potential customers through strategic content, Facebook Groups, and algorithm optimization.", color: "#FF6B00" },
    { icon: Shield, title: "Platform-Safe Methods", desc: "All strategies are 100% compliant with Facebook's Terms of Service. Your page is always protected.", color: "#8B5CF6" },
    { icon: BarChart3, title: "Detailed Analytics Reports", desc: "Weekly performance reports with growth metrics, reach data, engagement stats, and actionable insights.", color: "#1877F2" },
  ],
  splitImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete Facebook Page Growth",
  splitTitleAccent: "System",
  splitBadgeOverlay: "Live Campaign Active",
  splitOverlayText: "Your Facebook growth campaign running 24/7 — gaining followers and engagement while you sleep.",
  features: [
    { title: "Page Optimization", desc: "Complete profile, cover photo, CTA button, and About section optimized for conversions." },
    { title: "Content Strategy", desc: "Custom content calendar with post ideas, caption templates, and optimal posting schedule." },
    { title: "Facebook Ads Management", desc: "Targeted ad campaigns to accelerate page growth and reach your ideal audience." },
    { title: "Audience Research", desc: "Deep analysis of your target audience to ensure every follower is a potential customer." },
    { title: "Competitor Analysis", desc: "Identify what's working for top competitors and leverage those insights for your page." },
    { title: "Facebook Groups Strategy", desc: "Leverage Facebook Groups to build community and drive organic page growth." },
    { title: "Video & Reels Strategy", desc: "Facebook Reels and video content strategy to maximize organic reach." },
    { title: "Messenger Automation", desc: "Smart welcome sequences and engagement automation to nurture new followers." },
  ],
  processTitle: "From Zero to",
  processTitleAccent: "Facebook Authority",
  processSubtitle: "A proven 4-step system that has grown 30,000+ Facebook pages.",
  process: [
    { num: "01", title: "Page Audit", desc: "We analyze your current page, content, audience, and competitors to identify growth opportunities.", color: "#1877F2", duration: "Day 1–2" },
    { num: "02", title: "Strategy Build", desc: "Custom growth roadmap with content calendar, ad strategy, and engagement plan tailored to your brand.", color: "#0052CC", duration: "Day 3–5" },
    { num: "03", title: "Launch & Execute", desc: "We go live with your growth campaign — posting, advertising, engaging, and optimizing daily.", color: "#00A3FF", duration: "Week 2" },
    { num: "04", title: "Scale & Report", desc: "Weekly reports, continuous optimization, and scaling what works to maximize your monthly page growth.", color: "#00D084", duration: "Ongoing" },
  ],
  testimonials: [
    { name: "David Chen", role: "CMO, NexaGrowth", text: "Our Facebook page went from 3K to 78K followers in 5 months. The engagement is incredible — these are real people who actually buy from us.", metric: "+2,500%", avatar: "DC", color: "#1877F2" },
    { name: "Emma Thompson", role: "Head of Growth, StartupX", text: "MySocialCrux's Facebook strategy completely transformed our brand presence. We went from invisible to industry leader in under 6 months.", metric: "+3,200%", avatar: "ET", color: "#0052CC" },
    { name: "James Rodriguez", role: "Marketing Director, BrandForge", text: "The Facebook Ads strategy alone tripled our page growth rate. Our cost-per-follower dropped by 70% within the first month.", metric: "-70% CPA", avatar: "JR", color: "#00A3FF" },
  ],
  faqs: [
    { q: "How quickly will I see results?", a: "Most clients see measurable page growth within the first 7–14 days. Significant results (1,000+ new followers) typically happen within the first 30 days." },
    { q: "Are the followers real people?", a: "100% yes. We use only organic and legitimate paid growth methods. Every follower is a real person genuinely interested in your content and brand. No bots, ever." },
    { q: "Will this get my page banned?", a: "No. All our methods are fully compliant with Facebook's Terms of Service. We've grown 30,000+ pages without a single ban or restriction." },
    { q: "Do you run Facebook Ads?", a: "Yes, Facebook Ads are part of our growth strategy. We manage the entire ad campaign — creative, targeting, bidding, and optimization — for maximum results." },
    { q: "What types of businesses do you work with?", a: "We work with all business types — e-commerce, local businesses, personal brands, B2B companies, nonprofits, and more. Our strategies are customized for your specific industry." },
    { q: "What's included in the monthly reports?", a: "Weekly reports include page likes growth, post reach, engagement rate, ad performance, top-performing content, and recommendations for the next week." },
  ],
  relatedServices: [
    { title: "Instagram Growth Services", href: "/instagram-growth-services/", color: "#FF3EA5" },
    { title: "LinkedIn Growth Services", href: "/linkedin-growth-services/", color: "#0077B5" },
    { title: "Twitter X Growth", href: "/twitter-x-growth-services/", color: "#1DA1F2" },
    { title: "YouTube Growth", href: "/youtube-silver-play-button-assistance/", color: "#FF0000" },
  ],
  ctaTitle: "Ready to Grow Your Facebook Page",
  ctaTitleAccent: "to 100K+?",
  ctaSubtitle: "Join 30,000+ brands that trust MySocialCrux to grow their Facebook presence. Get your free strategy call today.",
  ctaButton: "Get Free Strategy Call",
};

export default function FacebookGrowthContent() {
  return <ServicePageTemplate d={data} />;
}
