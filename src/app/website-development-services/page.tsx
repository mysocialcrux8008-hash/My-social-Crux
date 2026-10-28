import type { Metadata } from "next";
import WebDevContent from "./WebDevContent";

export const metadata: Metadata = {
  title: "Website Development Services | MySocialCrux",
  description: "Premium website development services — fast, SEO-optimized, conversion-focused websites built for growth. From landing pages to full e-commerce platforms.",
  keywords: ["website development services", "web design agency", "custom website development", "SEO website design", "e-commerce development", "Next.js development"],
  alternates: { canonical: "https://mysocialcrux.com/website-development-services/" },
  openGraph: {
    title: "Website Development Services | MySocialCrux",
    description: "Fast, SEO-optimized, conversion-focused websites built for growth. Landing pages to full e-commerce platforms.",
    url: "https://mysocialcrux.com/website-development-services/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Website Development Services" }],
  },
};

export default function WebDevPage() {
  return <WebDevContent />;
}
