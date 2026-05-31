"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, Smartphone, Target, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#FF3EA5",
  accentGradient: "linear-gradient(135deg, #FF3EA5, #8B5CF6)",
  badge: "App Install Campaigns Services",
  heroTitle: "Scale Your App to",
  heroTitleAccent: "Millions of Real Installs",
  heroSubtitle: "High-volume installs. Industry-low CPI. Real users who engage. Our precision-targeted app install campaigns deliver massive download volume across iOS and Android — at a cost-per-install 60% below industry average.",
  heroBgImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=85",
  heroStats: [
    { v: "50M+",  l: "App Installs Delivered" },
    { v: "-60%",  l: "Below Avg. CPI" },
    { v: "500+",  l: "Apps Scaled" },
  ],
  statsBar: [
    { value: "50M+",  label: "Total App Installs Delivered",  color: "#FF3EA5" },
    { value: "-60%",  label: "Below Industry Avg. CPI",       color: "#8B5CF6" },
    { value: "500+",  label: "Apps Scaled",                   color: "#00D084" },
    { value: "4.2★",  label: "Avg. App Store Rating Clients", color: "#FF6B00" },
  ],
  benefitsTitle: "Everything You Need to",
  benefitsTitleAccent: "Dominate the App Stores",
  benefitsSubtitle: "Six powerful advantages that make our app install campaign service the fastest way to scale your app downloads and user base.",
  benefits: [
    { icon: TrendingUp, title: "Massive Install Volume",       desc: "Drive 10,000–1,000,000+ real app installs per month through precision-targeted campaigns across Meta, Google, TikTok, and programmatic networks.", color: "#FF3EA5" },
    { icon: Target,     title: "Precision User Targeting",     desc: "Target users by demographics, interests, device type, location, and behavioral signals — ensuring every install comes from your ideal user profile.", color: "#8B5CF6" },
    { icon: Smartphone, title: "iOS & Android Coverage",       desc: "Full coverage across both App Store and Google Play with platform-specific creative and bidding strategies optimized for each ecosystem.", color: "#00D084" },
    { icon: Eye,        title: "60% Below Industry CPI",       desc: "Our advanced bidding algorithms and creative optimization consistently deliver cost-per-installs 60% below the industry average.", color: "#FF6B00" },
    { icon: Shield,     title: "Fraud-Free Installs",          desc: "Advanced fraud detection and prevention ensures every install is from a real user. Zero incentivized or bot installs — ever.", color: "#00A3FF" },
    { icon: BarChart3,  title: "Real-Time Campaign Dashboard", desc: "Live campaign dashboards with installs, CPI, retention rates, in-app events, and ROAS tracking across all channels.", color: "#FF3EA5" },
  ],
  splitImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete App Install",
  splitTitleAccent: "& User Acquisition System",
  splitBadgeOverlay: "Campaign Live",
  splitOverlayText: "Your app install campaign running 24/7 — delivering real users across iOS and Android around the clock.",
  features: [
    { title: "Meta Ads (Facebook & Instagram)", desc: "High-volume install campaigns on Meta's network with advanced audience targeting and creative testing." },
    { title: "Google UAC Campaigns",            desc: "Universal App Campaigns across Google Search, Play Store, YouTube, and Display Network." },
    { title: "TikTok App Install Ads",          desc: "Viral TikTok campaigns targeting Gen Z and millennial users with engaging video creatives." },
    { title: "Programmatic & DSP Campaigns",    desc: "Reach users across 10,000+ premium apps and websites through programmatic ad networks." },
    { title: "App Store Optimization (ASO)",    desc: "Optimize your App Store and Google Play listing to convert ad traffic into installs at maximum rate." },
    { title: "Creative Production",             desc: "High-converting ad creatives — static, video, and playable ads — tested and optimized continuously." },
    { title: "Retargeting Campaigns",           desc: "Re-engage users who viewed your app page but didn't install with personalized retargeting ads." },
    { title: "In-App Event Optimization",       desc: "Optimize campaigns beyond installs — targeting users who complete registrations, purchases, or key in-app actions." },
  ],
  processTitle: "From Launch to",
  processTitleAccent: "App Store Dominance",
  processSubtitle: "A proven 4-step system that has delivered 50M+ app installs for 500+ apps across every category.",
  process: [
    { num: "01", title: "App Audit & Strategy",  desc: "We audit your app store listing, current campaigns, and competitors to build a precision install strategy with realistic CPI targets.", color: "#FF3EA5", duration: "Week 1" },
    { num: "02", title: "Creative & Setup",      desc: "We produce high-converting ad creatives, set up campaign structures across all channels, and configure tracking and attribution.", color: "#8B5CF6", duration: "Week 2" },
    { num: "03", title: "Launch & Optimize",     desc: "Campaigns go live across all channels simultaneously. Daily optimization of bids, creatives, and audiences to hit CPI targets.", color: "#00A3FF", duration: "Week 3" },
    { num: "04", title: "Scale & Report",        desc: "Weekly reports with installs, CPI, retention, and ROAS. We scale winning campaigns and cut losers to maximize your budget efficiency.", color: "#00D084", duration: "Ongoing" },
  ],
  testimonials: [
    { name: "Emma Thompson",   role: "Head of Growth, StartupX",    text: "MySocialCrux delivered 50,000 app installs in our first month at a CPI that was 62% below what our previous agency was charging. Our app hit #3 in the App Store charts.", metric: "50K Installs/Month", avatar: "ET", color: "#FF3EA5" },
    { name: "David Chen",      role: "CMO, NexaGrowth",              text: "The TikTok app install campaign they ran went viral. We got 120,000 installs in 2 weeks at $0.38 CPI. Our app went from 500 to 150,000 users in 30 days.", metric: "$0.38 CPI",          avatar: "DC", color: "#8B5CF6" },
    { name: "Marcus Williams", role: "CMO, FitLife Brand",           text: "Our fitness app was struggling at 2,000 monthly installs. MySocialCrux scaled us to 45,000 installs per month within 60 days. Our in-app purchase revenue grew 8x.", metric: "8x Revenue Growth",  avatar: "MW", color: "#00A3FF" },
  ],
  faqs: [
    { q: "What platforms do you run app install campaigns on?",  a: "We run campaigns across Meta (Facebook & Instagram), Google UAC (Search, Play Store, YouTube, Display), TikTok, Snapchat, Apple Search Ads, and programmatic DSP networks — covering every major channel where your target users spend time." },
    { q: "What is CPI and what CPI can I expect?",              a: "CPI (Cost Per Install) is the amount you pay for each app download. Our campaigns consistently deliver CPIs 60% below industry average. Typical CPIs range from $0.30–$2.00 for Android and $0.80–$4.00 for iOS, depending on your app category and target market." },
    { q: "Are the installs from real users?",                   a: "Yes, 100%. We use advanced fraud detection and only run campaigns on premium, verified traffic sources. Every install is from a real person who chose to download your app. Zero incentivized or bot installs." },
    { q: "Do you handle creative production?",                  a: "Yes. Our creative team produces all ad creatives — static images, video ads, and playable ads — specifically designed for app install campaigns. We continuously A/B test creatives to find the highest-converting formats." },
    { q: "Can you help with App Store Optimization (ASO)?",     a: "Yes. ASO is included in our service. We optimize your App Store and Google Play listing — title, description, screenshots, preview video, and keywords — to maximize the conversion rate of users who land on your app page." },
    { q: "What's the minimum budget for app install campaigns?", a: "We recommend a minimum monthly budget of $5,000 for meaningful scale and optimization. However, we can work with budgets starting from $2,000/month for smaller apps or specific geo-targeted campaigns." },
  ],
  relatedServices: [
    { title: "WhatsApp Marketing",        href: "/whatsapp-marketing-services/",    color: "#25D366" },
    { title: "Website Traffic Boost",     href: "/website-traffic-boost/",          color: "#FF6B00" },
    { title: "Social Media Growth",       href: "/instagram-growth-services/",      color: "#E1306C" },
    { title: "Voting Services & Polls",   href: "/voting-services-online-polls/",   color: "#00A3FF" },
  ],
  ctaTitle: "Ready to Scale Your App to",
  ctaTitleAccent: "Millions of Users?",
  ctaSubtitle: "Join 500+ apps that trust MySocialCrux to deliver high-volume, low-CPI installs. Get your free app growth audit and campaign proposal today.",
  ctaButton: "Get Free App Growth Audit",
};

export default function AppInstallContent() {
  return <ServicePageTemplate d={data} />;
}
