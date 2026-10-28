import type { Metadata } from "next";
import YouTubeGrowthContent from "./YouTubeGrowthContent";

export const metadata: Metadata = {
  title: "YouTube Silver Play Button Assistance | MySocialCrux",
  description: "Hit 100K YouTube subscribers and earn your Silver Play Button faster with MySocialCrux's proven YouTube growth strategy. Real subscribers, real views, real channel growth.",
  keywords: ["YouTube Silver Play Button", "grow YouTube subscribers", "YouTube growth services", "100K YouTube subscribers", "YouTube marketing agency"],
  alternates: { canonical: "https://mysocialcrux.com/youtube-silver-play-button-assistance/" },
  openGraph: {
    title: "YouTube Silver Play Button Assistance | MySocialCrux",
    description: "Hit 100K YouTube subscribers and earn your Silver Play Button faster with proven growth strategy.",
    url: "https://mysocialcrux.com/youtube-silver-play-button-assistance/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "YouTube Growth Services" }],
  },
};

export default function YouTubeGrowthPage() {
  return <YouTubeGrowthContent />;
}
