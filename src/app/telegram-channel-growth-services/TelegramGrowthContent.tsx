"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, Users, Send, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#0088CC",
  accentGradient: "linear-gradient(135deg, #0088CC, #006699)",
  badge: "Telegram Channel Growth Services",
  heroTitle: "Grow Your Telegram Channel to",
  heroTitleAccent: "100K+ Active Members",
  heroSubtitle: "Real members. High engagement. Unstoppable community growth. Our proven Telegram growth system has scaled thousands of channels across crypto, news, education, entertainment, and every major niche.",
  heroBgImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&q=85",
  heroStats: [
    { v: "15K+",   l: "Channels Grown" },
    { v: "+6,800%", l: "Best Member Growth" },
    { v: "30 Days", l: "First Results" },
  ],
  statsBar: [
    { value: "15K+",    label: "Telegram Channels Grown",    color: "#0088CC" },
    { value: "6,800%",  label: "Best Member Growth",          color: "#006699" },
    { value: "72%",     label: "Avg. Message Open Rate",      color: "#00D084" },
    { value: "30 Days", label: "First Results Guaranteed",    color: "#FF6B00" },
  ],
  benefitsTitle: "Everything You Need to",
  benefitsTitleAccent: "Dominate Telegram",
  benefitsSubtitle: "Six powerful advantages that make our Telegram channel growth service the fastest way to build a massive, engaged community.",
  benefits: [
    { icon: TrendingUp, title: "Explosive Member Growth",     desc: "Gain 1,000–50,000+ real, targeted members every month using our proven cross-promotion and organic growth engine.", color: "#0088CC" },
    { icon: Send,       title: "72% Message Open Rate",       desc: "Telegram delivers 72% open rates vs. 20% for email. We help you build a channel your members actually read and engage with.", color: "#006699" },
    { icon: Users,      title: "100% Real Members",           desc: "Zero bots, zero fake accounts. Every member is a real person genuinely interested in your channel's content and niche.", color: "#00D084" },
    { icon: Eye,        title: "Massive Organic Reach",       desc: "Reach millions through strategic cross-channel promotions, Telegram directories, and viral content strategies.", color: "#FF6B00" },
    { icon: Shield,     title: "Platform-Safe Methods",       desc: "All strategies are 100% compliant with Telegram's Terms of Service. Your channel is always protected from bans.", color: "#8B5CF6" },
    { icon: BarChart3,  title: "Detailed Analytics Reports",  desc: "Weekly performance reports with member growth, message views, engagement rate, and channel health metrics.", color: "#0088CC" },
  ],
  splitImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete Telegram Channel Growth",
  splitTitleAccent: "& Community System",
  splitBadgeOverlay: "Channel Growth Active",
  splitOverlayText: "Your Telegram growth campaign running 24/7 — gaining members and engagement while you focus on your content.",
  features: [
    { title: "Channel Optimization",      desc: "Channel name, description, username, and pinned message optimized to convert visitors into members instantly." },
    { title: "Content Strategy",          desc: "Custom content calendar with post ideas, message templates, and optimal posting schedule for maximum engagement." },
    { title: "Cross-Channel Promotion",   desc: "Strategic promotions in relevant Telegram channels and groups to drive targeted member growth." },
    { title: "Telegram Directory Listing",desc: "List your channel in top Telegram directories and search engines for organic discovery." },
    { title: "Viral Content Creation",    desc: "Shareable content formats — polls, quizzes, exclusive content — that members forward to their networks." },
    { title: "Bot & Automation Setup",    desc: "Welcome bots, moderation bots, and engagement automation to keep your community active and growing." },
    { title: "Competitor Analysis",       desc: "Identify what top channels in your niche are doing and leverage those insights for your growth strategy." },
    { title: "Monetization Strategy",     desc: "Turn your Telegram channel into a revenue stream through subscriptions, sponsorships, and premium content." },
  ],
  processTitle: "From Zero to",
  processTitleAccent: "Telegram Authority",
  processSubtitle: "A proven 4-step system that has grown 15,000+ Telegram channels to massive, engaged communities.",
  process: [
    { num: "01", title: "Channel Audit",    desc: "We analyze your current channel, content, audience, and competitors to identify the fastest path to 100K members.", color: "#0088CC", duration: "Day 1–2" },
    { num: "02", title: "Strategy Build",   desc: "Custom growth roadmap with content calendar, promotion plan, bot setup, and engagement strategy tailored to your niche.", color: "#006699", duration: "Day 3–5" },
    { num: "03", title: "Launch & Execute", desc: "We go live with your growth campaign — promoting, posting, engaging, and optimizing daily for maximum member growth.", color: "#00A3FF", duration: "Week 2" },
    { num: "04", title: "Scale & Report",   desc: "Weekly reports, continuous optimization, and scaling what works to maximize your monthly member and engagement growth.", color: "#00D084", duration: "Ongoing" },
  ],
  testimonials: [
    { name: "Alex Morgan",     role: "Crypto Channel Owner",          text: "Our Telegram channel went from 500 to 48K members in 3 months. The engagement is incredible — 72% of members read every message we send. Revenue from sponsorships tripled.", metric: "+9,500%", avatar: "AM", color: "#0088CC" },
    { name: "David Chen",      role: "CMO, NexaGrowth",               text: "MySocialCrux grew our Telegram news channel to 100K members in 6 months. We now have the largest Telegram channel in our industry niche.", metric: "100K Members", avatar: "DC", color: "#006699" },
    { name: "Sarah Mitchell",  role: "CEO, TechVenture Inc.",          text: "The cross-channel promotion strategy brought in 15,000 highly targeted members in the first month alone. Our Telegram is now our #1 revenue channel.", metric: "15K in Month 1", avatar: "SM", color: "#00A3FF" },
  ],
  faqs: [
    { q: "How quickly will I see results?",          a: "Most clients see measurable member growth within the first 7–14 days. Significant results (1,000+ new members) typically happen within the first 30 days, with cross-promotion campaigns delivering thousands in a single day." },
    { q: "Are the members real people?",             a: "100% yes. We use only organic and legitimate growth methods — cross-promotions, directory listings, and viral content. Every member is a real person genuinely interested in your channel. No bots, ever." },
    { q: "Will this get my channel banned?",         a: "No. All our methods are fully compliant with Telegram's Terms of Service. We've grown 15,000+ channels without a single ban or restriction." },
    { q: "What niches do you work with?",            a: "We work across all Telegram niches — crypto, finance, news, entertainment, education, gaming, lifestyle, business, and more. Our strategies are customized for your specific niche and audience." },
    { q: "Can you help monetize my Telegram channel?", a: "Yes. We provide a complete monetization roadmap including Telegram Premium subscriptions, sponsored posts, affiliate marketing, and premium content strategies to turn your channel into a revenue stream." },
    { q: "What's included in the weekly reports?",   a: "Weekly reports include member growth, message views, engagement rate, top-performing content, promotion campaign results, and recommendations for the next week." },
  ],
  relatedServices: [
    { title: "YouTube Silver Play Button",  href: "/youtube-silver-play-button-assistance/",  color: "#FF0000" },
    { title: "Spotify & SoundCloud",        href: "/spotify-soundcloud-streams-services/",    color: "#1DB954" },
    { title: "Website Traffic Boost",       href: "/website-traffic-boost/",                  color: "#FF6B00" },
    { title: "WhatsApp Marketing",          href: "/whatsapp-marketing-services/",             color: "#25D366" },
  ],
  ctaTitle: "Ready to Grow Your Telegram Channel",
  ctaTitleAccent: "to 100K+ Members?",
  ctaSubtitle: "Join 15,000+ channel owners that trust MySocialCrux to grow their Telegram presence. Get your free channel audit today.",
  ctaButton: "Get Free Channel Audit",
};

export default function TelegramGrowthContent() {
  return <ServicePageTemplate d={data} />;
}
