import type { Metadata } from "next";
import InfluencerContent from "./InfluencerContent";

export const metadata: Metadata = {
  title: "Influencer Marketing Services | MySocialCrux",
  description: "Scale your brand with MySocialCrux's influencer marketing services. We connect brands with the right influencers across Instagram, YouTube, TikTok & more for authentic, high-ROI campaigns.",
  keywords: ["influencer marketing services", "influencer marketing agency", "Instagram influencer marketing", "YouTube influencer campaigns", "micro influencer marketing", "brand influencer partnerships"],
  alternates: { canonical: "https://mysocialcrux.com/influencer-marketing-services/" },
  openGraph: {
    title: "Influencer Marketing Services | MySocialCrux",
    description: "Connect brands with the right creators — handling discovery, content, and campaign delivery end to end.",
    url: "https://mysocialcrux.com/influencer-marketing-services/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Influencer Marketing Services" }],
  },
};

export default function InfluencerMarketingPage() {
  return <InfluencerContent />;
}
