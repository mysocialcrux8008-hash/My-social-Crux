import type { Metadata } from "next";
import LinkedInGrowthContent from "./LinkedInGrowthContent";

export const metadata: Metadata = {
  title: "LinkedIn Growth Services | MySocialCrux",
  description: "Grow your LinkedIn profile and company page with real followers, connections, and engagement. MySocialCrux's proven LinkedIn growth strategies deliver B2B results in 30 days.",
  keywords: ["LinkedIn growth services", "grow LinkedIn followers", "LinkedIn marketing agency", "LinkedIn company page growth", "B2B LinkedIn strategy"],
  alternates: { canonical: "https://mysocialcrux.com/linkedin-growth-services/" },
  openGraph: {
    title: "LinkedIn Growth Services | MySocialCrux",
    description: "Grow your LinkedIn profile and company page with real followers, connections, and engagement.",
    url: "https://mysocialcrux.com/linkedin-growth-services/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "LinkedIn Growth Services" }],
  },
};

export default function LinkedInGrowthPage() {
  return <LinkedInGrowthContent />;
}
