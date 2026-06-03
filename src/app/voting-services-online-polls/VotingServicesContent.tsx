"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, BarChart2, Target, Eye, Shield, Zap } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#00A3FF",
  accentGradient: "linear-gradient(135deg, #00A3FF, #8B5CF6)",
  badge: "Voting Services & Online Polls",
  heroTitle: "Win Every Online Contest,",
  heroTitleAccent: "Poll & Award Nomination",
  heroSubtitle: "Real votes. Fast delivery. Guaranteed results. Our proven voting and poll promotion service has helped thousands of brands, creators, and individuals win online contests, dominate public polls, and secure award nominations worldwide.",
  heroBgImage: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=400&q=85",
  heroStats: [
    { v: "10,000+", l: "Contests Won" },
    { v: "500M+",   l: "Votes Delivered" },
    { v: "99.8%",   l: "Success Rate" },
  ],
  statsBar: [
    { value: "10,000+", label: "Contests & Polls Won",       color: "#00A3FF" },
    { value: "500M+",   label: "Total Votes Delivered",      color: "#8B5CF6" },
    { value: "99.8%",   label: "Campaign Success Rate",      color: "#00D084" },
    { value: "24 Hrs",  label: "Avg. Delivery Start Time",   color: "#FF6B00" },
  ],
  benefitsTitle: "Everything You Need to",
  benefitsTitleAccent: "Win Every Vote & Poll",
  benefitsSubtitle: "Six powerful advantages that make our voting and poll promotion service the most reliable way to win online contests and dominate public polls.",
  benefits: [
    { icon: TrendingUp, title: "Guaranteed Vote Delivery",    desc: "We guarantee delivery of every vote ordered. If we fall short of your target, we top up at no extra cost — 100% satisfaction guaranteed.", color: "#00A3FF" },
    { icon: Zap,        title: "Fast 24-Hour Start",          desc: "Campaigns start within 24 hours of order confirmation. For urgent contests, we offer express 6-hour start options.", color: "#8B5CF6" },
    { icon: Target,     title: "Geo-Targeted Votes",          desc: "Target votes from specific countries, regions, or demographics to match contest requirements and appear authentic.", color: "#00D084" },
    { icon: Eye,        title: "Natural Vote Patterns",       desc: "Votes delivered in natural, gradual patterns that mimic organic voting behavior — avoiding detection by contest platforms.", color: "#FF6B00" },
    { icon: Shield,     title: "Secure & Confidential",       desc: "Complete confidentiality guaranteed. We never share client information. All campaigns are handled with full discretion.", color: "#FF3EA5" },
    { icon: BarChart2,  title: "Real-Time Progress Tracking", desc: "Live dashboard showing vote delivery progress, current standings, and estimated completion time for your campaign.", color: "#00A3FF" },
  ],
  splitImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete Voting &",
  splitTitleAccent: "Poll Domination System",
  splitBadgeOverlay: "Campaign Active",
  splitOverlayText: "Your voting campaign delivering results in real time — moving you to the top of every contest and poll.",
  features: [
    { title: "Online Contest Votes",        desc: "Votes for any online contest platform — Facebook, Instagram, Twitter, dedicated contest websites, and more." },
    { title: "Award Nomination Votes",      desc: "Boost your votes for industry awards, business competitions, and recognition programs worldwide." },
    { title: "Social Media Poll Votes",     desc: "Dominate Twitter polls, Instagram polls, LinkedIn polls, and Facebook polls with targeted vote delivery." },
    { title: "Website & App Poll Votes",    desc: "Votes for embedded website polls, survey platforms, and mobile app voting features." },
    { title: "Geo-Targeted Campaigns",      desc: "Country-specific or region-specific vote delivery to meet contest eligibility requirements." },
    { title: "Express Delivery Option",     desc: "6-hour express start for urgent contests and last-minute campaigns with tight deadlines." },
    { title: "Vote Monitoring & Top-Up",    desc: "Continuous monitoring of your vote count with automatic top-ups if votes drop or are removed." },
    { title: "Confidential Reporting",      desc: "Private campaign reports showing delivery progress, vote counts, and campaign completion status." },
  ],
  processTitle: "From Entry to",
  processTitleAccent: "Contest Winner",
  processSubtitle: "A proven 4-step system that has delivered 500M+ votes and won 10,000+ online contests worldwide.",
  process: [
    { num: "01", title: "Contest Analysis",   desc: "We analyze your contest platform, current vote count, competition, and deadline to build the optimal vote delivery strategy.", color: "#00A3FF", duration: "Hour 1–2" },
    { num: "02", title: "Campaign Setup",     desc: "We configure your vote delivery campaign with the right targeting, pacing, and volume to hit your target safely and effectively.", color: "#8B5CF6", duration: "Hour 3–6" },
    { num: "03", title: "Vote Delivery",      desc: "Votes delivered in natural patterns starting within 24 hours. Real-time progress tracking available throughout the campaign.", color: "#00D084", duration: "24–72 Hrs" },
    { num: "04", title: "Monitor & Complete", desc: "We monitor your vote count until the contest closes, topping up as needed to maintain your lead and ensure you win.", color: "#FF6B00", duration: "Until Win" },
  ],
  testimonials: [
    { name: "Emma Thompson",   role: "Head of Growth, StartupX",    text: "We were trailing in a major industry award vote by 2,000 votes with 48 hours left. MySocialCrux delivered 5,000 votes in 24 hours and we won by a comfortable margin. Incredible service.", metric: "Award Won",          avatar: "ET", color: "#00A3FF" },
    { name: "Marcus Williams", role: "Content Creator",              text: "I was in a Facebook contest for a $10,000 prize. MySocialCrux got me from 3rd place to 1st in 12 hours. The votes looked completely natural and I won the contest easily.", metric: "$10K Contest Won",  avatar: "MW", color: "#8B5CF6" },
    { name: "Priya Sharma",    role: "Founder, LuxeStyle Co.",       text: "Our brand was nominated for a 'Best New Business' award. MySocialCrux's voting campaign secured us 15,000 votes and we won the award. The PR value was worth 100x the investment.", metric: "Best New Business",  avatar: "PS", color: "#00D084" },
  ],
  faqs: [
    { q: "What types of contests and polls do you support?",    a: "We support virtually all online voting platforms — Facebook contests, Instagram polls, Twitter polls, LinkedIn polls, dedicated contest websites, award nomination platforms, reality show voting, and custom website polls." },
    { q: "How quickly will votes start appearing?",             a: "Standard campaigns start within 24 hours of order confirmation. Express campaigns start within 6 hours. We provide a live tracking link so you can monitor vote delivery in real time." },
    { q: "Will the contest platform detect the votes?",         a: "Our votes are delivered in natural, gradual patterns that mimic organic voting behavior. We use advanced techniques to ensure votes appear authentic and avoid detection by contest monitoring systems." },
    { q: "What if I need votes from a specific country?",       a: "Yes, we offer geo-targeted vote delivery. If your contest requires votes from specific countries or regions, we can target accordingly. Just specify your requirements when placing your order." },
    { q: "What happens if votes are removed by the platform?",  a: "We monitor your vote count throughout the campaign. If votes are removed or dropped, we automatically top up at no extra cost to ensure you maintain your target vote count until the contest closes." },
    { q: "Is my order kept confidential?",                      a: "Absolutely. Complete confidentiality is guaranteed. We never share client information, campaign details, or order history with anyone. All campaigns are handled with full discretion and privacy." },
  ],
  relatedServices: [
    { title: "App Install Campaigns",     href: "/app-install-campaigns-services/",  color: "#FF3EA5" },
    { title: "WhatsApp Marketing",        href: "/whatsapp-marketing-services/",      color: "#25D366" },
    { title: "Social Media Growth",       href: "/instagram-growth-services/",        color: "#E1306C" },
    { title: "Website Traffic Boost",     href: "/website-traffic-boost/",            color: "#FF6B00" },
  ],
  ctaTitle: "Ready to Win Your Next",
  ctaTitleAccent: "Contest or Poll?",
  ctaSubtitle: "Join 10,000+ winners that trust MySocialCrux to deliver real votes and dominate online contests. Get started today — campaigns launch within 24 hours.",
  ctaButton: "Start Winning Today",
};

export default function VotingServicesContent() {
  return <ServicePageTemplate d={data} />;
}
