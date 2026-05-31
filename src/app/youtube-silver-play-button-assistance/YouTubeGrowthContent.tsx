"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, Users, Play, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#FF0000",
  accentGradient: "linear-gradient(135deg, #FF0000, #CC0000)",
  badge: "YouTube Silver Play Button Assistance",
  heroTitle: "Hit 100K Subscribers &",
  heroTitleAccent: "Earn Your Silver Play Button",
  heroSubtitle: "Real subscribers. Real views. Real channel growth. Our proven YouTube growth system has helped hundreds of creators hit 100K subscribers and claim their Silver Play Button faster than they ever thought possible.",
  heroBgImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&q=85",
  heroStats: [
    { v: "500+",   l: "Channels Scaled to 100K" },
    { v: "2.1M+",  l: "Best Monthly Views" },
    { v: "8 Months", l: "Fastest Silver Play Button" },
  ],
  statsBar: [
    { value: "500+",    label: "Channels Scaled to 100K",    color: "#FF0000" },
    { value: "2.1M+",   label: "Best Monthly Views",          color: "#CC0000" },
    { value: "68%",     label: "Avg. Watch Time Retention",   color: "#00D084" },
    { value: "8 Months",label: "Fastest Silver Play Button",  color: "#FF6B00" },
  ],
  benefitsTitle: "Everything You Need to",
  benefitsTitleAccent: "Hit 100K on YouTube",
  benefitsSubtitle: "Six powerful advantages that make our YouTube growth service the fastest path to your Silver Play Button.",
  benefits: [
    { icon: TrendingUp, title: "Explosive Subscriber Growth",  desc: "Gain 2,000–20,000+ real, targeted subscribers every month using our proven content strategy and YouTube SEO engine.", color: "#FF0000" },
    { icon: Play,       title: "Viral Video Strategy",         desc: "We craft video concepts and titles engineered to rank on YouTube search and get recommended by the algorithm.", color: "#CC0000" },
    { icon: Users,      title: "100% Real Subscribers",        desc: "Zero bots, zero fake accounts. Every subscriber is a real person genuinely interested in your content and niche.", color: "#00D084" },
    { icon: Eye,        title: "Massive View Count Growth",    desc: "Reach millions through YouTube SEO, Shorts strategy, end screens, cards, and algorithm-optimized thumbnails.", color: "#FF6B00" },
    { icon: Shield,     title: "Platform-Safe Methods",        desc: "All strategies are 100% compliant with YouTube's Terms of Service. Your channel is always protected from strikes.", color: "#8B5CF6" },
    { icon: BarChart3,  title: "Detailed Analytics Reports",   desc: "Weekly performance reports with subscriber growth, views, watch time, CTR, and revenue potential analysis.", color: "#FF0000" },
  ],
  splitImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete YouTube Channel Growth",
  splitTitleAccent: "& Monetization System",
  splitBadgeOverlay: "Channel Growth Active",
  splitOverlayText: "Your YouTube growth campaign running 24/7 — gaining subscribers and views while you focus on creating content.",
  features: [
    { title: "Channel Optimization",    desc: "Channel art, description, playlists, and about section optimized for maximum subscriber conversion and search ranking." },
    { title: "YouTube SEO Strategy",    desc: "Keyword research, title optimization, description templates, and tag strategy to rank your videos on page 1." },
    { title: "Thumbnail Design",        desc: "High-CTR thumbnail templates and design guidelines that dramatically increase click-through rates." },
    { title: "Content Calendar",        desc: "Custom video content calendar with topic ideas, titles, and optimal upload schedule for algorithm favor." },
    { title: "YouTube Shorts Strategy", desc: "Viral Shorts strategy to rapidly grow subscribers and feed traffic to your long-form content." },
    { title: "Competitor Analysis",     desc: "Deep analysis of top channels in your niche to identify content gaps and growth opportunities." },
    { title: "Community Tab Strategy",  desc: "Engage your audience between uploads with polls, updates, and community posts that boost retention." },
    { title: "Monetization Roadmap",    desc: "Clear path to YouTube Partner Program eligibility — 1,000 subscribers and 4,000 watch hours." },
  ],
  processTitle: "From Zero to",
  processTitleAccent: "Silver Play Button",
  processSubtitle: "A proven 4-step system that has helped 500+ creators hit 100K subscribers and earn their Silver Play Button.",
  process: [
    { num: "01", title: "Channel Audit",    desc: "We analyze your current channel, content, audience, and competitors to identify the fastest path to 100K subscribers.", color: "#FF0000", duration: "Day 1–2" },
    { num: "02", title: "Strategy Build",   desc: "Custom growth roadmap with content calendar, SEO strategy, Shorts plan, and thumbnail guidelines tailored to your niche.", color: "#CC0000", duration: "Day 3–5" },
    { num: "03", title: "Launch & Execute", desc: "We go live with your growth campaign — optimizing videos, publishing Shorts, engaging community, and tracking daily.", color: "#FF6B00", duration: "Week 2" },
    { num: "04", title: "Scale & Report",   desc: "Weekly reports, continuous optimization, and scaling what works to maximize your monthly subscriber and view growth.", color: "#00D084", duration: "Ongoing" },
  ],
  testimonials: [
    { name: "Priya Sharma",    role: "Founder, LuxeStyle Co.",        text: "MySocialCrux's YouTube strategy helped us hit the Silver Play Button in just 8 months. We went from 8K to 100K subscribers and now earn $12K/month from AdSense alone.", metric: "100K in 8 Months", avatar: "PS", color: "#FF0000" },
    { name: "Marcus Williams", role: "CMO, FitLife Brand",            text: "The YouTube SEO strategy got our videos ranking on page 1 for 23 competitive keywords. Our channel went from 500 to 45K subscribers in 4 months.", metric: "+8,900%", avatar: "MW", color: "#CC0000" },
    { name: "Emma Thompson",   role: "Head of Growth, StartupX",      text: "The Shorts strategy alone brought in 2.1M views in our first month. We gained 18,000 subscribers from Shorts in 30 days. Absolutely incredible results.", metric: "2.1M Views/Month", avatar: "ET", color: "#FF6B00" },
  ],
  faqs: [
    { q: "How long does it take to hit 100K subscribers?",  a: "It depends on your starting point, niche, and content quality. Our fastest client hit 100K in 8 months from scratch. Most clients see significant growth (10K+ new subscribers) within the first 60–90 days." },
    { q: "Are the subscribers real people?",                a: "100% yes. We use only organic growth methods — YouTube SEO, Shorts, community building, and content strategy. Every subscriber is a real person who chose to subscribe. No bots, ever." },
    { q: "Will this get my channel banned or struck?",      a: "No. All our methods are fully compliant with YouTube's Terms of Service and Community Guidelines. We've grown 500+ channels without a single strike or ban." },
    { q: "Do I need to create the videos myself?",          a: "You create the videos (or we can connect you with our video production partners). We handle everything else — SEO, thumbnails, titles, descriptions, Shorts strategy, and community management." },
    { q: "What is the Silver Play Button?",                 a: "The YouTube Silver Play Button is an award YouTube sends to channels that reach 100,000 subscribers. It's a major milestone that signals credibility, unlocks monetization features, and opens doors to brand partnerships." },
    { q: "Can you help with YouTube monetization?",         a: "Yes. We provide a clear monetization roadmap to hit 1,000 subscribers and 4,000 watch hours (YouTube Partner Program requirements). We also advise on AdSense optimization, sponsorships, and merchandise." },
  ],
  relatedServices: [
    { title: "Instagram Growth Services",  href: "/instagram-growth-services/",           color: "#FF3EA5" },
    { title: "Telegram Channel Growth",    href: "/telegram-channel-growth-services/",    color: "#0088CC" },
    { title: "Spotify & SoundCloud",       href: "/spotify-soundcloud-streams-services/", color: "#1DB954" },
    { title: "Website Traffic Boost",      href: "/website-traffic-boost/",               color: "#FF6B00" },
  ],
  ctaTitle: "Ready to Earn Your",
  ctaTitleAccent: "Silver Play Button?",
  ctaSubtitle: "Join 500+ creators and brands that trust MySocialCrux to grow their YouTube channel to 100K subscribers. Get your free channel audit today.",
  ctaButton: "Get Free Channel Audit",
};

export default function YouTubeGrowthContent() {
  return <ServicePageTemplate d={data} />;
}
