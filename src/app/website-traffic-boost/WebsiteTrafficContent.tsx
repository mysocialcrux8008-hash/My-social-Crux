"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, Users, MousePointer, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#FF6B00",
  accentGradient: "linear-gradient(135deg, #FF6B00, #E55A00)",
  badge: "Website Traffic Boost Services",
  heroTitle: "Drive Millions of Targeted Visitors",
  heroTitleAccent: "to Your Website Every Month",
  heroSubtitle: "Real visitors. High intent. Real conversions. Our proven multi-channel traffic boost system drives targeted, buyer-ready visitors to your website — turning clicks into customers and traffic into revenue.",
  heroBgImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=85",
  heroStats: [
    { v: "1,000+",  l: "Websites Boosted" },
    { v: "+312%",   l: "Avg. Traffic Increase" },
    { v: "30 Days", l: "First Results" },
  ],
  statsBar: [
    { value: "1,000+", label: "Websites Boosted",          color: "#FF6B00" },
    { value: "+312%",  label: "Avg. Traffic Increase",     color: "#E55A00" },
    { value: "4.8%",   label: "Avg. Conversion Rate",      color: "#00D084" },
    { value: "30 Days",label: "First Results Guaranteed",  color: "#00A3FF" },
  ],
  benefitsTitle: "Everything You Need to",
  benefitsTitleAccent: "Explode Your Website Traffic",
  benefitsSubtitle: "Six powerful advantages that make our website traffic boost service the fastest way to grow your online presence and revenue.",
  benefits: [
    { icon: TrendingUp,   title: "Explosive Traffic Growth",    desc: "Drive 10,000–500,000+ targeted monthly visitors to your website through SEO, social, paid, and referral channels.", color: "#FF6B00" },
    { icon: MousePointer, title: "High-Intent Visitors",        desc: "We don't just send traffic — we send buyers. Every visitor is targeted by intent, demographics, and purchase behavior.", color: "#E55A00" },
    { icon: Users,        title: "100% Real Human Traffic",     desc: "Zero bots, zero fake visits. Every visitor is a real person genuinely interested in your products or services.", color: "#00D084" },
    { icon: Eye,          title: "Multi-Channel Approach",      desc: "We combine SEO, social media, content marketing, paid ads, and influencer traffic for maximum reach and diversity.", color: "#00A3FF" },
    { icon: Shield,       title: "Safe & Compliant Methods",    desc: "All traffic sources are legitimate and compliant with Google's guidelines. No black-hat tactics that risk your rankings.", color: "#8B5CF6" },
    { icon: BarChart3,    title: "Detailed Analytics Reports",  desc: "Weekly reports with traffic sources, visitor behavior, conversion rates, bounce rates, and revenue attribution.", color: "#FF6B00" },
  ],
  splitImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete Multi-Channel",
  splitTitleAccent: "Traffic Generation System",
  splitBadgeOverlay: "Traffic Campaign Active",
  splitOverlayText: "Your traffic boost campaign running 24/7 — driving targeted visitors to your website around the clock.",
  features: [
    { title: "SEO Traffic Strategy",       desc: "On-page and off-page SEO to rank for high-intent keywords and drive consistent organic traffic." },
    { title: "Social Media Traffic",       desc: "Strategic social media campaigns across Instagram, Facebook, LinkedIn, and Twitter to drive referral traffic." },
    { title: "Content Marketing",          desc: "High-value blog posts, infographics, and videos that attract and convert your target audience." },
    { title: "Paid Traffic Campaigns",     desc: "Google Ads, Meta Ads, and native advertising campaigns optimized for maximum traffic at lowest cost." },
    { title: "Influencer Traffic",         desc: "Partner with niche influencers to drive highly targeted, pre-qualified visitors to your website." },
    { title: "Email Traffic Campaigns",    desc: "Re-engagement email sequences and newsletter campaigns that drive repeat visitors and conversions." },
    { title: "Referral & PR Traffic",      desc: "Press releases and media placements that generate high-authority referral traffic from top publications." },
    { title: "Conversion Rate Optimization", desc: "Landing page optimization to ensure every visitor has the highest possible chance of converting." },
  ],
  processTitle: "From Low Traffic to",
  processTitleAccent: "Traffic Powerhouse",
  processSubtitle: "A proven 4-step system that has boosted traffic for 1,000+ websites across every industry.",
  process: [
    { num: "01", title: "Website Audit",    desc: "We analyze your current traffic sources, SEO health, content gaps, and conversion funnel to identify the fastest growth opportunities.", color: "#FF6B00", duration: "Day 1–2" },
    { num: "02", title: "Strategy Build",   desc: "Custom multi-channel traffic roadmap with SEO plan, content calendar, ad strategy, and influencer targets tailored to your industry.", color: "#E55A00", duration: "Day 3–5" },
    { num: "03", title: "Launch & Execute", desc: "We go live across all channels simultaneously — publishing content, launching ads, activating influencers, and tracking daily.", color: "#00A3FF", duration: "Week 2" },
    { num: "04", title: "Scale & Report",   desc: "Weekly reports, continuous optimization, and scaling the highest-performing channels to maximize your monthly traffic and revenue.", color: "#00D084", duration: "Ongoing" },
  ],
  testimonials: [
    { name: "James Rodriguez", role: "Marketing Director, BrandForge",  text: "MySocialCrux boosted our website traffic from 12K to 49K monthly visitors in 6 months. Our organic revenue tripled and we now rank #1 for 23 of our target keywords.", metric: "+312% Traffic",   avatar: "JR", color: "#FF6B00" },
    { name: "Sarah Mitchell",  role: "CEO, TechVenture Inc.",            text: "The multi-channel traffic strategy drove 180K visitors in our first month of working together. Our conversion rate went from 1.2% to 4.8% with their CRO work.", metric: "180K Visitors/mo", avatar: "SM", color: "#E55A00" },
    { name: "David Chen",      role: "CMO, NexaGrowth",                  text: "The influencer traffic campaign alone brought 45,000 highly targeted visitors in 30 days. Our cost-per-acquisition dropped by 65% compared to our previous agency.", metric: "-65% CPA",         avatar: "DC", color: "#00A3FF" },
  ],
  faqs: [
    { q: "How quickly will I see traffic growth?",       a: "Paid traffic campaigns can deliver results within 24–48 hours of launch. SEO and content marketing typically show significant results within 30–60 days, with compounding growth over time." },
    { q: "Is the traffic from real people?",             a: "100% yes. We use only legitimate traffic sources — SEO, social media, paid ads, influencers, and content marketing. Every visitor is a real person. No bots or fake traffic, ever." },
    { q: "Will this hurt my Google rankings?",           a: "No. All our traffic methods are fully compliant with Google's Webmaster Guidelines. We use only white-hat SEO and legitimate traffic sources that improve, not harm, your search rankings." },
    { q: "What industries do you work with?",            a: "We work with all industries — e-commerce, SaaS, local businesses, healthcare, real estate, finance, education, and more. Our traffic strategies are customized for your specific industry and target audience." },
    { q: "Do you offer conversion rate optimization?",   a: "Yes. Traffic without conversions is wasted. We include landing page analysis and CRO recommendations with every campaign to ensure your traffic converts into leads and sales." },
    { q: "What's included in the weekly reports?",       a: "Weekly reports include total visitors, traffic by source (organic, social, paid, referral), bounce rate, average session duration, conversion rate, and revenue attribution." },
  ],
  relatedServices: [
    { title: "SEO Services",              href: "/seo-services/",                                          color: "#00A3FF" },
    { title: "Website Development",       href: "/website-development-services/",                          color: "#00D084" },
    { title: "Press Release & PR",        href: "/press-release-creation-global-publication-services/",    color: "#8B5CF6" },
    { title: "App Install Campaigns",     href: "/app-install-campaigns-services/",                        color: "#FF3EA5" },
  ],
  ctaTitle: "Ready to Explode Your",
  ctaTitleAccent: "Website Traffic?",
  ctaSubtitle: "Join 1,000+ businesses that trust MySocialCrux to drive targeted, high-converting traffic to their websites. Get your free traffic audit today.",
  ctaButton: "Get Free Traffic Audit",
};

export default function WebsiteTrafficContent() {
  return <ServicePageTemplate d={data} />;
}
