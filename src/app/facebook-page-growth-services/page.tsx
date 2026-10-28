import type { Metadata } from "next";
import FacebookGrowthContent from "./FacebookGrowthContent";

export const metadata: Metadata = {
  title: "Facebook Page Growth Services | MySocialCrux",
  description: "Grow your Facebook Page with real likes, followers, and engagement. MySocialCrux's proven Facebook growth strategies deliver measurable results in 30 days.",
  keywords: ["Facebook page growth", "grow Facebook followers", "Facebook marketing agency", "Facebook page likes"],
  alternates: { canonical: "https://mysocialcrux.com/facebook-page-growth-services/" },
  openGraph: {
    title: "Facebook Page Growth Services | MySocialCrux",
    description: "Grow your Facebook Page with real likes, followers, and engagement. Measurable results in 30 days.",
    url: "https://mysocialcrux.com/facebook-page-growth-services/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Facebook Page Growth Services" }],
  },
};

export default function FacebookGrowthPage() {
  return <FacebookGrowthContent />;
}
