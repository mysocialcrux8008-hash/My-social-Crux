import type { Metadata } from "next";
import InstagramGrowthContent from "./InstagramGrowthContent";

export const metadata: Metadata = {
  title: "Instagram Growth Services | MySocialCrux",
  description:
    "Grow your Instagram from zero to 100K+ with MySocialCrux's proven organic growth strategies. Real followers, real engagement, real revenue.",
  keywords: ["Instagram growth services", "grow Instagram followers", "Instagram marketing agency", "organic Instagram growth"],
  alternates: { canonical: "https://mysocialcrux.com/instagram-growth-services/" },
  openGraph: {
    title: "Instagram Growth Services | MySocialCrux",
    description: "Grow your Instagram from zero to 100K+ with proven organic growth strategies. Real followers, real engagement.",
    url: "https://mysocialcrux.com/instagram-growth-services/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Instagram Growth Services" }],
  },
};

export default function InstagramGrowthPage() {
  return <InstagramGrowthContent />;
}
