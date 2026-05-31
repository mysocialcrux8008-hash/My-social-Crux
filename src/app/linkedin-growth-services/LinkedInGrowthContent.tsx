"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, Users, Briefcase, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#0A66C2",
  accentGradient: "linear-gradient(135deg, #0A66C2, #004182)",
  badge: "LinkedIn Growth Services",
  heroTitle: "Grow Your LinkedIn to",
  heroTitleAccent: "50K+ Real Connections & Followers",
  heroSubtitle: "Real connections. Real B2B leads. Real business growth. Our proven LinkedIn strategy has scaled thousands of profiles and company pages across every industry.",
  heroBgImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=85",
  heroStats: [
    { v: "20K+", l: "Profiles & Pages Grown" },
    { v: "+3,650%", l: "Best Follower Growth" },
    { v: "30 Days", l: "First Results" },
  ],
  statsBar: [
    { value: "20K+",   label: "Profiles & Pages Grown",    color: "#0A66C2" },
    { value: "3,650%", label: "Best Follower Growth",       color: "#004182" },
    { value: "12.5%",  label: "Avg. Engagement Rate",       color: "#00D084" },
    { value: "30 Days",label: "First Results Guaranteed",   color: "#FF6B00" },
  ],
  benefitsTitle: "Everything You Need to",
  benefitsTitleAccent: "Dominate LinkedIn",
  benefitsSubtitle: "Six powerful advantages that make our LinkedIn growth service the #1 choice for B2B brands and professionals.",
  benefits: [
    { icon: TrendingUp, title: "Explosive Connection Growth",  desc: "Gain 500–5,000+ targeted connections and followers every month from your exact ideal customer profile.", color: "#0A66C2" },
    { icon: Briefcase,  title: "High-Quality B2B Leads",       desc: "We don't just grow numbers — we attract decision-makers, executives, and buyers who convert into real revenue.", color: "#004182" },
    { icon: Users,      title: "100% Real Connections",        desc: "Zero fake profiles. Every connection is a real professional genuinely relevant to your industry and goals.", color: "#00D084" },
    { icon: Eye,        title: "Massive Profile Visibility",   desc: "Reach millions of professionals through strategic content, LinkedIn newsletters, and algorithm optimization.", color: "#FF6B00" },
    { icon: Shield,     title: "Platform-Safe Methods",        desc: "All strategies are 100% compliant with LinkedIn's Terms of Service. Your profile and page are always protected.", color: "#8B5CF6" },
    { icon: BarChart3,  title: "Detailed Analytics Reports",   desc: "Weekly performance reports with connection growth, post impressions, engagement data, and lead generation metrics.", color: "#0A66C2" },
  ],
  splitImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete LinkedIn Growth",
  splitTitleAccent: "& Lead Generation System",
  splitBadgeOverlay: "Live Campaign Active",
  splitOverlayText: "Your LinkedIn growth campaign running 24/7 — gaining connections, followers, and leads while you focus on your business.",
  features: [
    { title: "Profile Optimization",      desc: "Headline, summary, experience, and banner optimized to attract your ideal audience and rank in LinkedIn search." },
    { title: "Content Strategy",          desc: "Custom content calendar with post ideas, thought leadership articles, and optimal posting schedule for maximum reach." },
    { title: "Connection Outreach",       desc: "Targeted connection campaigns to your exact ICP — by industry, job title, company size, and location." },
    { title: "LinkedIn Newsletter",       desc: "Build a subscriber base with a branded LinkedIn newsletter that positions you as the go-to authority in your niche." },
    { title: "Company Page Growth",       desc: "Grow your company page followers with organic strategies and employee advocacy programs." },
    { title: "Competitor Analysis",       desc: "Identify what top competitors are doing on LinkedIn and leverage those insights for your growth strategy." },
    { title: "LinkedIn Articles & SEO",   desc: "Long-form articles optimized for LinkedIn and Google search to drive inbound connections and leads." },
    { title: "InMail & DM Strategy",      desc: "High-converting InMail sequences and connection message templates that generate real business conversations." },
  ],
  processTitle: "From Zero to",
  processTitleAccent: "LinkedIn Authority",
  processSubtitle: "A proven 4-step system that has grown 20,000+ LinkedIn profiles and company pages.",
  process: [
    { num: "01", title: "Profile Audit",     desc: "We analyze your current profile, content, audience, and competitors to identify growth and lead generation opportunities.", color: "#0A66C2", duration: "Day 1–2" },
    { num: "02", title: "Strategy Build",    desc: "Custom growth roadmap with content calendar, outreach sequences, and engagement plan tailored to your B2B goals.", color: "#004182", duration: "Day 3–5" },
    { num: "03", title: "Launch & Execute",  desc: "We go live with your growth campaign — posting, connecting, engaging, and optimizing daily for maximum results.", color: "#00A3FF", duration: "Week 2" },
    { num: "04", title: "Scale & Report",    desc: "Weekly reports, continuous optimization, and scaling what works to maximize your monthly connection and follower growth.", color: "#00D084", duration: "Ongoing" },
  ],
  testimonials: [
    { name: "David Chen",      role: "CMO, NexaGrowth",            text: "Our LinkedIn company page grew from 1.2K to 45K followers in 4 months. We raised our Series A funding largely thanks to the credibility MySocialCrux built for us.", metric: "+3,650%", avatar: "DC", color: "#0A66C2" },
    { name: "Sarah Mitchell",  role: "CEO, TechVenture Inc.",       text: "The LinkedIn strategy generated 200+ qualified B2B leads in the first 60 days. Our pipeline grew by $2M. This is the best marketing investment we've ever made.", metric: "200+ Leads", avatar: "SM", color: "#004182" },
    { name: "Emma Thompson",   role: "Head of Growth, StartupX",    text: "MySocialCrux turned our LinkedIn into a lead generation machine. We went from zero presence to being recognized as thought leaders in our industry.", metric: "+2,800%", avatar: "ET", color: "#00A3FF" },
  ],
  faqs: [
    { q: "How quickly will I see results?",          a: "Most clients see measurable connection and follower growth within the first 7–14 days. Significant results (500+ new connections) typically happen within the first 30 days." },
    { q: "Are the connections real professionals?",  a: "100% yes. We use only organic outreach and legitimate growth methods. Every connection is a real professional relevant to your industry and target audience. No fake profiles, ever." },
    { q: "Will this get my account restricted?",     a: "No. All our methods are fully compliant with LinkedIn's Terms of Service. We've grown 20,000+ profiles and pages without a single restriction or ban." },
    { q: "Do you work with personal profiles and company pages?", a: "Yes, we work with both personal LinkedIn profiles (for executives, founders, and professionals) and company pages. We tailor the strategy based on your specific goals." },
    { q: "Can you help generate B2B leads?",         a: "Absolutely. LinkedIn is the #1 B2B lead generation platform. Our outreach sequences, content strategy, and connection campaigns are specifically designed to generate qualified leads and business conversations." },
    { q: "What's included in the weekly reports?",   a: "Weekly reports include connection growth, follower count, post impressions, engagement rate, profile views, search appearances, and lead generation metrics." },
  ],
  relatedServices: [
    { title: "Instagram Growth Services", href: "/instagram-growth-services/",       color: "#FF3EA5" },
    { title: "Facebook Page Growth",      href: "/facebook-page-growth-services/",   color: "#1877F2" },
    { title: "Twitter X Growth",          href: "/twitter-x-growth-services/",       color: "#1DA1F2" },
    { title: "Press Release & PR",        href: "/press-release-creation-global-publication-services/", color: "#8B5CF6" },
  ],
  ctaTitle: "Ready to Turn LinkedIn Into Your",
  ctaTitleAccent: "#1 Lead Generation Channel?",
  ctaSubtitle: "Join 20,000+ professionals and brands that trust MySocialCrux to grow their LinkedIn presence and generate real B2B results. Get your free strategy call today.",
  ctaButton: "Get Free Strategy Call",
};

export default function LinkedInGrowthContent() {
  return <ServicePageTemplate d={data} />;
}
