"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, FileText, Globe, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#8B5CF6",
  accentGradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
  badge: "Press Release & Global Publication Services",
  heroTitle: "Get Featured in Forbes, TechCrunch &",
  heroTitleAccent: "200+ Global Publications",
  heroSubtitle: "Instant credibility. Global reach. Investor-grade authority. Our press release creation and global distribution service gets your brand featured in the world's most trusted publications — building the credibility that money can't buy.",
  heroBgImage: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=85",
  heroStats: [
    { v: "1,000+",  l: "Press Releases Published" },
    { v: "200+",    l: "Global Publications" },
    { v: "48 Hrs",  l: "Avg. Publication Time" },
  ],
  statsBar: [
    { value: "1,000+", label: "Press Releases Published",    color: "#8B5CF6" },
    { value: "200+",   label: "Global Publications Network", color: "#6D28D9" },
    { value: "48 Hrs", label: "Avg. Publication Time",       color: "#00D084" },
    { value: "$4.2M",  label: "Funding Raised by Clients",   color: "#FF6B00" },
  ],
  benefitsTitle: "Everything You Need to",
  benefitsTitleAccent: "Build Global Media Authority",
  benefitsSubtitle: "Six powerful advantages that make our press release and PR distribution service the fastest way to build brand credibility worldwide.",
  benefits: [
    { icon: Globe,      title: "200+ Global Publications",    desc: "Your story published on Forbes, TechCrunch, Business Insider, Entrepreneur, AP News, and 200+ trusted global outlets.", color: "#8B5CF6" },
    { icon: FileText,   title: "Professional PR Writing",     desc: "Our expert PR writers craft compelling press releases that journalists actually want to publish — not generic templates.", color: "#6D28D9" },
    { icon: TrendingUp, title: "Instant Brand Credibility",   desc: "Being featured in top-tier publications instantly positions your brand as an industry authority and builds investor trust.", color: "#00D084" },
    { icon: Eye,        title: "SEO Backlink Authority",      desc: "Every publication creates high-authority backlinks to your website, boosting your Google rankings and domain authority.", color: "#FF6B00" },
    { icon: Shield,     title: "Guaranteed Publication",      desc: "We guarantee your press release will be published on our network of 200+ outlets. No publication = full refund.", color: "#FF3EA5" },
    { icon: BarChart3,  title: "Detailed Coverage Reports",   desc: "Full report of every publication, backlink, estimated reach, and media value of your press release campaign.", color: "#8B5CF6" },
  ],
  splitImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete Press Release Creation",
  splitTitleAccent: "& Global Distribution Package",
  splitBadgeOverlay: "PR Campaign Active",
  splitOverlayText: "Your press release being distributed to 200+ global publications — building credibility and backlinks around the world.",
  features: [
    { title: "Professional PR Writing",      desc: "Expert press release written by our PR team in AP Style — compelling, newsworthy, and publication-ready." },
    { title: "Forbes & TechCrunch Network",  desc: "Direct distribution to Forbes, TechCrunch, Business Insider, Entrepreneur, and top-tier tech and business outlets." },
    { title: "200+ News Outlets",            desc: "Syndication across AP News, PR Newswire, Globe Newswire, and 200+ regional and industry-specific publications." },
    { title: "Google News Indexing",         desc: "Your press release indexed on Google News for maximum search visibility and organic discovery." },
    { title: "SEO Backlink Building",        desc: "High-authority do-follow backlinks from every publication to boost your domain authority and Google rankings." },
    { title: "Social Media Amplification",   desc: "Press release promoted across our social media network for additional reach and engagement." },
    { title: "Journalist Outreach",          desc: "Direct pitching to relevant journalists and editors for potential feature stories and interviews." },
    { title: "Full Coverage Report",         desc: "Detailed report with every publication link, estimated reach, media value, and backlink analysis." },
  ],
  processTitle: "From Story to",
  processTitleAccent: "Global Headlines",
  processSubtitle: "A proven 4-step PR process that has published 1,000+ press releases in 200+ global publications.",
  process: [
    { num: "01", title: "Story Discovery",   desc: "We interview you to uncover the most newsworthy angle of your story — product launch, funding, milestone, or brand news.", color: "#8B5CF6", duration: "Day 1" },
    { num: "02", title: "PR Writing",        desc: "Our expert PR writers craft a compelling, AP-Style press release that journalists want to publish and readers want to share.", color: "#6D28D9", duration: "Day 2–3" },
    { num: "03", title: "Review & Approve",  desc: "You review and approve the press release. We make any revisions until you're 100% satisfied before distribution begins.", color: "#00A3FF", duration: "Day 4" },
    { num: "04", title: "Global Distribution", desc: "We distribute to 200+ publications simultaneously. Most go live within 48 hours. Full coverage report delivered within 72 hours.", color: "#00D084", duration: "Day 5–7" },
  ],
  testimonials: [
    { name: "David Chen",      role: "CMO, NexaGrowth",               text: "MySocialCrux got us featured in Forbes, TechCrunch, and 200+ publications for our Series A announcement. The credibility it built helped us close our funding round faster.", metric: "200+ Publications", avatar: "DC", color: "#8B5CF6" },
    { name: "Sarah Mitchell",  role: "CEO, TechVenture Inc.",          text: "Our product launch press release generated 2.4M impressions and 180 high-authority backlinks. Our domain authority jumped from 22 to 48 in 60 days.", metric: "180 Backlinks",      avatar: "SM", color: "#6D28D9" },
    { name: "Emma Thompson",   role: "Head of Growth, StartupX",       text: "Being featured in Business Insider and Entrepreneur completely transformed how investors and partners perceive our brand. We closed 3 major partnerships within 30 days of publication.", metric: "3 Partnerships",    avatar: "ET", color: "#FF6B00" },
  ],
  faqs: [
    { q: "Which publications will my press release appear in?",  a: "Your press release will be distributed to our network of 200+ publications including Forbes, TechCrunch, Business Insider, Entrepreneur, AP News, PR Newswire, Globe Newswire, and hundreds of industry-specific and regional outlets." },
    { q: "How long does it take to get published?",              a: "Most press releases go live within 48 hours of final approval. The full distribution across all 200+ outlets typically completes within 72 hours. We provide a live coverage report as publications go live." },
    { q: "Do you guarantee publication?",                        a: "Yes. We guarantee your press release will be published on our network of 200+ outlets. If we fail to deliver the guaranteed placements, you receive a full refund — no questions asked." },
    { q: "What makes a good press release?",                     a: "A newsworthy angle is key — product launches, funding rounds, major milestones, industry research, or significant partnerships. Our PR writers will help you identify the most compelling angle for your story." },
    { q: "Will the press release help my SEO?",                  a: "Yes. Every publication creates high-authority backlinks to your website. A single press release campaign typically generates 50–200+ backlinks from trusted domains, significantly boosting your domain authority and Google rankings." },
    { q: "Can I use the press release coverage for marketing?",  a: "Absolutely. We provide a full coverage report with all publication links. You can display 'As Seen In' badges on your website, share coverage on social media, and use it in investor decks and sales materials." },
  ],
  relatedServices: [
    { title: "SEO Services",              href: "/seo-services/",                    color: "#00A3FF" },
    { title: "Content Writing",           href: "/content-writing-services/",        color: "#FF6B00" },
    { title: "LinkedIn Growth Services",  href: "/linkedin-growth-services/",        color: "#0A66C2" },
    { title: "Website Development",       href: "/website-development-services/",    color: "#00D084" },
  ],
  ctaTitle: "Ready to Get Your Brand",
  ctaTitleAccent: "Featured Globally?",
  ctaSubtitle: "Join 1,000+ brands that trust MySocialCrux to get them featured in Forbes, TechCrunch, and 200+ global publications. Get your free PR consultation today.",
  ctaButton: "Get Free PR Consultation",
};

export default function PressReleaseContent() {
  return <ServicePageTemplate d={data} />;
}
