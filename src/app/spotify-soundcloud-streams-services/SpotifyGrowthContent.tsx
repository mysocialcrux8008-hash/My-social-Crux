"use client";
import ServicePageTemplate, { ServicePageData } from "@/components/ServicePageTemplate";
import { TrendingUp, Users, Music, Eye, Shield, BarChart3 } from "lucide-react";

const data: ServicePageData = {
  accentColor: "#1DB954",
  accentGradient: "linear-gradient(135deg, #1DB954, #158a3e)",
  badge: "Spotify & SoundCloud Streams Services",
  heroTitle: "Boost Your Music to",
  heroTitleAccent: "Millions of Real Streams",
  heroSubtitle: "Real streams. Real listeners. Real music career growth. Our proven music promotion system has helped hundreds of artists get discovered on Spotify and SoundCloud — from independent artists to major label releases.",
  heroBgImage: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1600&q=85",
  heroRightImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&q=85",
  heroRightImage2: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=400&q=85",
  heroStats: [
    { v: "2,000+",  l: "Artists Promoted" },
    { v: "500M+",   l: "Streams Delivered" },
    { v: "30 Days", l: "First Results" },
  ],
  statsBar: [
    { value: "2,000+", label: "Artists Promoted",           color: "#1DB954" },
    { value: "500M+",  label: "Total Streams Delivered",    color: "#158a3e" },
    { value: "85%",    label: "Playlist Placement Rate",    color: "#00A3FF" },
    { value: "30 Days",label: "First Results Guaranteed",   color: "#FF6B00" },
  ],
  benefitsTitle: "Everything You Need to",
  benefitsTitleAccent: "Get Discovered on Spotify & SoundCloud",
  benefitsSubtitle: "Six powerful advantages that make our music promotion service the fastest way to grow your streams and fanbase.",
  benefits: [
    { icon: TrendingUp, title: "Explosive Stream Growth",      desc: "Gain 10,000–1,000,000+ real streams every month through playlist placements, influencer promotions, and organic discovery.", color: "#1DB954" },
    { icon: Music,      title: "Playlist Placement",           desc: "Get your tracks placed on curated Spotify and SoundCloud playlists with millions of followers in your genre.", color: "#158a3e" },
    { icon: Users,      title: "100% Real Listeners",          desc: "Zero bots, zero fake streams. Every play comes from a real person genuinely interested in your music genre.", color: "#00D084" },
    { icon: Eye,        title: "Algorithm Boost",              desc: "Trigger Spotify's Discover Weekly, Release Radar, and Radio algorithms to reach millions of new listeners organically.", color: "#FF6B00" },
    { icon: Shield,     title: "Platform-Safe Methods",        desc: "All strategies are 100% compliant with Spotify's and SoundCloud's Terms of Service. Your artist account is always protected.", color: "#8B5CF6" },
    { icon: BarChart3,  title: "Detailed Analytics Reports",   desc: "Weekly performance reports with stream counts, listener demographics, playlist placements, and revenue estimates.", color: "#1DB954" },
  ],
  splitImage: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=900&q=85",
  splitBadge: "What's Included",
  splitTitle: "A Complete Music Promotion",
  splitTitleAccent: "& Discovery System",
  splitBadgeOverlay: "Promotion Campaign Active",
  splitOverlayText: "Your music promotion campaign running 24/7 — gaining streams, followers, and playlist placements while you create.",
  features: [
    { title: "Spotify Profile Optimization",  desc: "Artist bio, profile photo, header, and discography organized to convert listeners into followers." },
    { title: "Playlist Pitching",             desc: "Direct pitching to 500+ curated playlist owners in your genre for immediate stream boosts." },
    { title: "SoundCloud Promotion",          desc: "Targeted SoundCloud promotion to grow plays, likes, reposts, and followers on every track." },
    { title: "Influencer Music Promotion",    desc: "Get your music featured by music influencers, bloggers, and playlist curators with millions of followers." },
    { title: "Pre-Save Campaigns",            desc: "Build anticipation before release with pre-save campaigns that trigger Spotify's algorithm on day one." },
    { title: "Release Strategy",              desc: "Optimal release timing, metadata optimization, and promotional calendar for maximum first-week impact." },
    { title: "Genre Targeting",               desc: "Precision targeting to listeners who already love your genre — ensuring high save rates and repeat plays." },
    { title: "Revenue Optimization",          desc: "Maximize your Spotify royalties and SoundCloud monetization with stream volume and listener retention strategies." },
  ],
  processTitle: "From Unknown to",
  processTitleAccent: "Streaming Sensation",
  processSubtitle: "A proven 4-step system that has delivered 500M+ streams for 2,000+ artists worldwide.",
  process: [
    { num: "01", title: "Music Audit",      desc: "We analyze your current tracks, artist profile, genre positioning, and competitors to build the optimal promotion strategy.", color: "#1DB954", duration: "Day 1–2" },
    { num: "02", title: "Strategy Build",   desc: "Custom promotion roadmap with playlist targets, influencer list, release calendar, and pre-save campaign tailored to your genre.", color: "#158a3e", duration: "Day 3–5" },
    { num: "03", title: "Launch & Execute", desc: "We go live with your promotion campaign — pitching playlists, activating influencers, running pre-saves, and tracking daily.", color: "#00A3FF", duration: "Week 2" },
    { num: "04", title: "Scale & Report",   desc: "Weekly reports, continuous optimization, and scaling successful placements to maximize your monthly stream and follower growth.", color: "#00D084", duration: "Ongoing" },
  ],
  testimonials: [
    { name: "Marcus Williams", role: "Independent Artist, Hip-Hop",   text: "MySocialCrux got my single placed on 47 Spotify playlists in the first month. I went from 500 monthly listeners to 280,000. My Spotify royalties now cover my studio costs.", metric: "280K Listeners", avatar: "MW", color: "#1DB954" },
    { name: "Priya Sharma",    role: "Electronic Music Producer",      text: "The playlist pitching strategy got my track on a playlist with 2M followers. That single placement generated 800,000 streams in 30 days. Life-changing results.", metric: "800K Streams", avatar: "PS", color: "#158a3e" },
    { name: "Alex Morgan",     role: "Singer-Songwriter",              text: "MySocialCrux's SoundCloud promotion tripled my plays and followers in 60 days. I got signed to an indie label directly because of the traction they built for me.", metric: "+300% Plays", avatar: "AM", color: "#00A3FF" },
  ],
  faqs: [
    { q: "How quickly will I see stream growth?",        a: "Most artists see measurable stream growth within the first 7–14 days of campaign launch. Playlist placements can deliver thousands of streams within 24–48 hours of going live." },
    { q: "Are the streams from real listeners?",         a: "100% yes. We use only legitimate promotion methods — playlist pitching, influencer marketing, and organic discovery. Every stream comes from a real person who chose to listen. No bots or fake plays, ever." },
    { q: "Will this get my account banned?",             a: "No. All our methods are fully compliant with Spotify's and SoundCloud's Terms of Service. We've promoted 2,000+ artists without a single account ban or stream removal." },
    { q: "Do you work with all music genres?",           a: "Yes. We work with all genres — hip-hop, pop, R&B, electronic, rock, country, jazz, classical, and more. Our playlist network covers every major genre with dedicated curators." },
    { q: "Can you help with both Spotify and SoundCloud?", a: "Yes. Our service covers both platforms simultaneously. We tailor the strategy for each platform — playlist pitching for Spotify and community promotion for SoundCloud — to maximize results on both." },
    { q: "What's included in the weekly reports?",       a: "Weekly reports include stream counts by track, monthly listener growth, playlist placements secured, follower growth, save rate, and estimated royalty earnings." },
  ],
  relatedServices: [
    { title: "YouTube Silver Play Button",  href: "/youtube-silver-play-button-assistance/",  color: "#FF0000" },
    { title: "Telegram Channel Growth",     href: "/telegram-channel-growth-services/",       color: "#0088CC" },
    { title: "Website Traffic Boost",       href: "/website-traffic-boost/",                  color: "#FF6B00" },
    { title: "Instagram Growth Services",   href: "/instagram-growth-services/",              color: "#FF3EA5" },
  ],
  ctaTitle: "Ready to Get Your Music",
  ctaTitleAccent: "Heard by Millions?",
  ctaSubtitle: "Join 2,000+ artists that trust MySocialCrux to grow their Spotify and SoundCloud presence. Get your free music promotion audit today.",
  ctaButton: "Get Free Music Audit",
};

export default function SpotifyGrowthContent() {
  return <ServicePageTemplate d={data} />;
}
