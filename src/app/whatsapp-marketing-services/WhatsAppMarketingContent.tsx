"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, MessageCircle, Zap, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#25D366",
  accentGradient: "linear-gradient(135deg, #25D366, #128C7E)",
  badge: "WhatsApp Marketing Services",
  heroTitle: "98% Open Rates. Direct Sales.",
  heroTitleAccent: "WhatsApp Marketing That Converts",
  heroSubtitle: "The most powerful direct marketing channel on the planet. WhatsApp delivers 98% open rates, 45% click-through rates, and direct access to your customers' most personal screen — their phone. We build campaigns that convert.",
  heroBgImage: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=85",
  heroStats: [
    { v: "98%",    l: "Message Open Rate" },
    { v: "45%",    l: "Avg. Click-Through Rate" },
    { v: "500+",   l: "Campaigns Launched" },
  ],
  statsBar: [
    { value: "98%",   label: "Message Open Rate",          color: "#25D366" },
    { value: "45%",   label: "Avg. Click-Through Rate",    color: "#128C7E" },
    { value: "500+",  label: "Campaigns Launched",         color: "#00A3FF" },
    { value: "8x",    label: "ROI vs Email Marketing",     color: "#FF6B00" },
  ],
  benefitsTitle: "Why WhatsApp Marketing",
  benefitsTitleAccent: "Outperforms Every Other Channel",
  benefitsSubtitle: "Six powerful advantages that make WhatsApp the highest-converting marketing channel for direct sales and customer engagement.",
  benefits: [
    { icon: MessageCircle, title: "98% Open Rate",              desc: "While email averages 20% open rates, WhatsApp messages are opened by 98% of recipients — usually within 3 minutes of delivery.", color: "#25D366" },
    { icon: Zap,           title: "Instant Direct Access",      desc: "Reach your customers on their most personal device with messages that feel personal, not promotional — driving 8x higher ROI than email.", color: "#128C7E" },
    { icon: TrendingUp,    title: "High-Converting Campaigns",  desc: "Our broadcast campaigns average 45% click-through rates and 12% direct conversion rates — numbers no other channel can match.", color: "#00D084" },
    { icon: Eye,           title: "Rich Media Messaging",       desc: "Send images, videos, PDFs, voice notes, and interactive buttons that create engaging, multimedia customer experiences.", color: "#FF6B00" },
    { icon: Shield,        title: "Compliant & Opt-In Only",    desc: "All campaigns use opt-in subscriber lists only. 100% compliant with WhatsApp Business API policies and GDPR regulations.", color: "#8B5CF6" },
    { icon: BarChart3,     title: "Real-Time Analytics",        desc: "Live campaign dashboards showing delivery rates, open rates, click rates, and revenue attribution for every message sent.", color: "#25D366" },
  ],
  splitImage: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete WhatsApp Marketing",
  splitTitleAccent: "& Automation System",
  splitBadgeOverlay: "Campaign Live",
  splitOverlayText: "Your WhatsApp marketing campaign delivering messages with 98% open rates — converting subscribers into customers 24/7.",
  features: [
    { title: "WhatsApp Business API Setup",   desc: "Official WhatsApp Business API integration with your CRM, e-commerce platform, or website." },
    { title: "Broadcast Campaign Strategy",   desc: "High-converting broadcast campaigns for product launches, promotions, and announcements." },
    { title: "Automated Welcome Sequences",   desc: "Smart onboarding sequences that nurture new subscribers from first message to first purchase." },
    { title: "Subscriber List Building",      desc: "Opt-in funnel strategy to grow your WhatsApp subscriber list with qualified, high-intent contacts." },
    { title: "Chatbot & Auto-Reply Setup",    desc: "AI-powered chatbots and auto-reply flows that handle FAQs, qualify leads, and book appointments 24/7." },
    { title: "Rich Media Content Creation",   desc: "Professional images, videos, and interactive message templates designed for maximum engagement." },
    { title: "Abandoned Cart Recovery",       desc: "Automated WhatsApp sequences that recover abandoned carts with personalized messages and offers." },
    { title: "Campaign Analytics & Reporting",desc: "Weekly reports with delivery rates, open rates, CTR, conversion rates, and revenue generated." },
  ],
  processTitle: "From Zero to",
  processTitleAccent: "WhatsApp Revenue Machine",
  processSubtitle: "A proven 4-step system that has launched 500+ high-converting WhatsApp marketing campaigns.",
  process: [
    { num: "01", title: "Strategy & Setup",     desc: "We audit your current marketing, define your WhatsApp strategy, and set up your Business API account and CRM integration.", color: "#25D366", duration: "Week 1" },
    { num: "02", title: "List Building",        desc: "We build your opt-in subscriber list through landing pages, social media, and website pop-ups — growing your audience fast.", color: "#128C7E", duration: "Week 2" },
    { num: "03", title: "Campaign Launch",      desc: "We create and launch your first broadcast campaign and automated sequences — delivering messages with 98% open rates.", color: "#00A3FF", duration: "Week 3" },
    { num: "04", title: "Optimize & Scale",     desc: "Weekly A/B testing, campaign optimization, and scaling successful sequences to maximize revenue from every subscriber.", color: "#00D084", duration: "Ongoing" },
  ],
  testimonials: [
    { name: "Emma Thompson",   role: "Head of Growth, StartupX",    text: "Our WhatsApp broadcast campaign generated $48K in revenue in 72 hours with a single message to 12,000 subscribers. The 98% open rate is real — nothing else comes close.", metric: "$48K in 72 Hours",  avatar: "ET", color: "#25D366" },
    { name: "Marcus Williams", role: "CMO, FitLife Brand",           text: "The abandoned cart recovery sequence MySocialCrux built recovers 28% of our abandoned carts automatically. That's $22K in additional monthly revenue we were leaving on the table.", metric: "+$22K/Month",      avatar: "MW", color: "#128C7E" },
    { name: "Priya Sharma",    role: "Founder, LuxeStyle Co.",       text: "We switched from email to WhatsApp for our product launches. Our open rate went from 18% to 96% and our launch revenue doubled. WhatsApp marketing is a complete game-changer.", metric: "2x Launch Revenue", avatar: "PS", color: "#00A3FF" },
  ],
  faqs: [
    { q: "Is WhatsApp marketing legal?",                    a: "Yes, when done correctly. We use only opt-in subscriber lists — people who have explicitly agreed to receive messages from your brand. All campaigns are fully compliant with WhatsApp Business API policies and GDPR regulations." },
    { q: "Do I need the WhatsApp Business API?",            a: "For professional broadcast campaigns to large lists, yes. We handle the entire API setup and approval process for you. For smaller businesses, we can also work with WhatsApp Business app strategies." },
    { q: "How do I build my WhatsApp subscriber list?",     a: "We build your opt-in list through multiple channels — website pop-ups, social media campaigns, QR codes, landing pages, and existing customer databases. We create the entire opt-in funnel for you." },
    { q: "What's the difference between broadcast and automation?", a: "Broadcasts are one-time messages sent to your entire list (like a product launch or promotion). Automation sequences are triggered by user actions — like a welcome series when someone subscribes or an abandoned cart recovery when someone doesn't complete a purchase." },
    { q: "Can WhatsApp marketing work for B2B?",            a: "Absolutely. WhatsApp is highly effective for B2B — appointment reminders, proposal follow-ups, client updates, and lead nurturing. Many of our B2B clients see 3–5x higher response rates on WhatsApp vs email." },
    { q: "What results can I realistically expect?",        a: "Most clients see 90%+ open rates, 40%+ click-through rates, and 10–15% direct conversion rates from broadcast campaigns. Revenue results vary by industry, but our average client generates 8x ROI on their WhatsApp marketing investment." },
  ],
  relatedServices: [
    { title: "App Install Campaigns",     href: "/app-install-campaigns-services/",  color: "#FF3EA5" },
    { title: "Instagram Growth Services", href: "/instagram-growth-services/",        color: "#E1306C" },
    { title: "Telegram Channel Growth",   href: "/telegram-channel-growth-services/", color: "#0088CC" },
    { title: "Content Writing",           href: "/content-writing-services/",         color: "#F59E0B" },
  ],
  ctaTitle: "Ready to Unlock the Power of",
  ctaTitleAccent: "WhatsApp Marketing?",
  ctaSubtitle: "Join 500+ brands that trust MySocialCrux to build high-converting WhatsApp marketing campaigns. Get your free strategy consultation today.",
  ctaButton: "Get Free WhatsApp Strategy",
};

export default function WhatsAppMarketingContent() {
  return <ServicePageTemplate d={data} />;
}
