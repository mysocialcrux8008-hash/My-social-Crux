import type { Metadata } from "next";
import WebsiteTrafficContent from "./WebsiteTrafficContent";

export const metadata: Metadata = {
  title: "Website Traffic Boost Services | MySocialCrux",
  description: "Drive targeted, high-intent traffic to your website with MySocialCrux's proven multi-channel traffic boost strategies. Real visitors, real conversions, real revenue growth.",
  keywords: ["website traffic boost", "increase website traffic", "drive traffic to website", "website traffic services", "organic traffic growth", "targeted website visitors"],
  alternates: { canonical: "https://mysocialcrux.com/website-traffic-boost/" },
  openGraph: {
    title: "Website Traffic Boost Services | MySocialCrux",
    description: "Drive targeted, high-intent traffic to your website. Real visitors, real conversions, real revenue growth.",
    url: "https://mysocialcrux.com/website-traffic-boost/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Website Traffic Boost Services" }],
  },
};

export default function WebsiteTrafficPage() {
  return <WebsiteTrafficContent />;
}
