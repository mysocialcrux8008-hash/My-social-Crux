"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, Users, Zap, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#1DA1F2",
  accentGradient: "linear-gradient(135deg, #1DA1F2, #0D8BD9)",
  badge: "Twitter X Growth Services",
  heroTitle: "Grow Your Twitter X to",
  heroTitleAccent: "100K+ Real Followers Fast",
  heroSubtitle: "Real followers. Viral reach. Real influence. Our proven Twitter X growth system has scaled thousands of accounts across every niche — from personal brands to Fortune 500 companies.",
  heroBgImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=85",
  heroStats: [
    { v: "25K+", l: "Accounts Grown" },
    { v: "+5,200%", l: "Best Follower Growth" },
    { v: "30 Days", l: "First Results" },
  ],
  statsBar: [
    { value: "25K+",   label: "Twitter X Accounts Grown",   color: "#1DA1F2" },
    { value: "5,200%", label: "Best Follower Growth",        color: "#0D8BD9" },
    { value: "9.8%",   label: "Avg. Engagement Rate",        color: "#00D084" },
    { value: "30 Days",label: "First Results Guaranteed",    color: "#FF6B00" },
  ],
  benefitsTitle: "Everything You Need to",
  benefitsTitleAccent: "Dominate Twitter X",
  benefitsSubtitle: "Six powerful advantages that make our Twitter X growth service the fastest way to build real influence on the platform.",
  benefits: [
    { icon: TrendingUp, title: "Explosive Follower Growth",   desc: "Gain 1,000–20,000+ real, targeted followers every month using our proven organic growth and viral content engine.", color: "#1DA1F2" },
    { icon: Zap,        title: "Viral Tweet Strategy",        desc: "We craft tweets and threads engineered to go viral — maximizing impressions, retweets, and follower spikes.", color: "#0D8BD9" },
    { icon: Users,      title: "100% Real Followers",         desc: "Zero bots, zero fake accounts. Every follower is a real person genuinely interested in your content and niche.", color: "#00D084" },
    { icon: Eye,        title: "Massive Organic Reach",       desc: "Reach millions through strategic hashtags, trending topics, Twitter Spaces, and algorithm-optimized posting.", color: "#FF6B00" },
    { icon: Shield,     title: "Platform-Safe Methods",       desc: "All strategies are 100% compliant with Twitter X's Terms of Service. Your account is always protected.", color: "#8B5CF6" },
    { icon: BarChart3,  title: "Detailed Analytics Reports",  desc: "Weekly performance reports with follower growth, impressions, engagement rate, and viral content analysis.", color: "#1DA1F2" },
  ],
  splitImage: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete Twitter X Growth",
  splitTitleAccent: "& Influence System",
  splitBadgeOverlay: "Live Campaign Active",
  splitOverlayText: "Your Twitter X growth campaign running 24/7 — gaining followers and impressions while you sleep.",
  features: [
    { title: "Profile Optimization",     desc: "Bio, header, pinned tweet, and profile photo optimized to convert visitors into followers instantly." },
    { title: "Content Strategy",         desc: "Custom tweet calendar with viral hooks, thread ideas, and optimal posting times for maximum reach." },
    { title: "Thread Writing",           desc: "High-performing Twitter threads that educate, entertain, and drive massive follower growth." },
    { title: "Hashtag Research",         desc: "Data-driven hashtag strategy updated weekly to maximize discoverability and trending potential." },
    { title: "Engagement Campaigns",     desc: "Strategic engagement with top accounts in your niche to boost visibility and attract followers." },
    { title: "Twitter Spaces Strategy",  desc: "Host and participate in Twitter Spaces to build authority and grow your audience rapidly." },
    { title: "Trending Topic Leverage",  desc: "Real-time monitoring and strategic participation in trending conversations for viral exposure." },
    { title: "DM Automation",            desc: "Smart welcome sequences and engagement automation to nurture new followers into loyal fans." },
  ],
  processTitle: "From Zero to",
  processTitleAccent: "Twitter X Authority",
  processSubtitle: "A proven 4-step system that has grown 25,000+ Twitter X accounts to real influence.",
  process: [
    { num: "01", title: "Account Audit",    desc: "We analyze your current profile, content, audience, and competitors to identify growth and viral content opportunities.", color: "#1DA1F2", duration: "Day 1–2" },
    { num: "02", title: "Strategy Build",   desc: "Custom growth roadmap with tweet calendar, thread strategy, hashtag research, and engagement plan tailored to your brand.", color: "#0D8BD9", duration: "Day 3–5" },
    { num: "03", title: "Launch & Execute", desc: "We go live with your growth campaign — tweeting, engaging, trending, and optimizing daily for maximum follower growth.", color: "#00A3FF", duration: "Week 2" },
    { num: "04", title: "Scale & Report",   desc: "Weekly reports, continuous optimization, and scaling viral content to maximize your monthly follower and impression growth.", color: "#00D084", duration: "Ongoing" },
  ],
  testimonials: [
    { name: "Alex Morgan",     role: "CEO, MySocialCrux",          text: "Our Twitter X account went from 800 to 42K followers in 3 months. One thread went viral with 2M impressions and brought in 8,000 followers in a single day.", metric: "+5,200%", avatar: "AM", color: "#1DA1F2" },
    { name: "James Rodriguez", role: "Marketing Director, BrandForge", text: "The viral thread strategy alone generated 500K+ impressions in the first month. Our brand awareness on Twitter X is now unmatched in our industry.", metric: "500K+ Impr.", avatar: "JR", color: "#0D8BD9" },
    { name: "Priya Sharma",    role: "Founder, LuxeStyle Co.",     text: "MySocialCrux turned our dormant Twitter account into our #1 traffic source. We get 10,000+ website visits per month directly from Twitter X now.", metric: "10K+ Visits/mo", avatar: "PS", color: "#00A3FF" },
  ],
  faqs: [
    { q: "How quickly will I see results?",         a: "Most clients see measurable follower growth within the first 7–14 days. Significant results (1,000+ new followers) typically happen within the first 30 days, with viral content potentially delivering thousands in a single day." },
    { q: "Are the followers real people?",          a: "100% yes. We use only organic growth methods — viral content, strategic engagement, and community building. Every follower is a real person genuinely interested in your content. No bots, ever." },
    { q: "Will this get my account suspended?",     a: "No. All our methods are fully compliant with Twitter X's Terms of Service. We've grown 25,000+ accounts without a single suspension or restriction." },
    { q: "Do you write the tweets and threads?",    a: "Yes. Our content team writes all tweets, threads, and replies in your brand voice. You review and approve before anything goes live, or we can post directly with your approval." },
    { q: "Can you help with Twitter X Ads?",        a: "Yes, Twitter X Ads (Promoted Tweets) can be added as an accelerator to your organic growth strategy. We manage the entire ad campaign for maximum follower growth at the lowest cost." },
    { q: "What's included in the weekly reports?",  a: "Weekly reports include follower growth, impressions, engagement rate, top-performing tweets, viral content analysis, and recommendations for the next week." },
  ],
  relatedServices: [
    { title: "Instagram Growth Services", href: "/instagram-growth-services/",     color: "#FF3EA5" },
    { title: "Facebook Page Growth",      href: "/facebook-page-growth-services/", color: "#1877F2" },
    { title: "LinkedIn Growth Services",  href: "/linkedin-growth-services/",      color: "#0A66C2" },
    { title: "YouTube Growth",            href: "/youtube-silver-play-button-assistance/", color: "#FF0000" },
  ],
  ctaTitle: "Ready to Go Viral on",
  ctaTitleAccent: "Twitter X?",
  ctaSubtitle: "Join 25,000+ brands and creators that trust MySocialCrux to grow their Twitter X presence. Get your free strategy call today.",
  ctaButton: "Get Free Strategy Call",
};

export default function TwitterGrowthContent() {
  return <ServicePageTemplate d={data} />;
}
