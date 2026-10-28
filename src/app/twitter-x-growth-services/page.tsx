import type { Metadata } from "next";
import TwitterGrowthContent from "./TwitterGrowthContent";

export const metadata: Metadata = {
  title: "Twitter X Growth Services | MySocialCrux",
  description: "Grow your Twitter X account with real followers, viral reach, and high engagement. MySocialCrux's proven Twitter X growth strategies deliver measurable results in 30 days.",
  keywords: ["Twitter X growth services", "grow Twitter followers", "Twitter marketing agency", "X growth strategy", "Twitter follower growth"],
  alternates: { canonical: "https://mysocialcrux.com/twitter-x-growth-services/" },
  openGraph: {
    title: "Twitter X Growth Services | MySocialCrux",
    description: "Grow your Twitter X account with real followers, viral reach, and high engagement.",
    url: "https://mysocialcrux.com/twitter-x-growth-services/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Twitter X Growth Services" }],
  },
};

export default function TwitterGrowthPage() {
  return <TwitterGrowthContent />;
}
