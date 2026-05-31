import type { Metadata } from "next";
import WebDevContent from "./WebDevContent";

export const metadata: Metadata = {
  title: "Website Development Services | MySocialCrux",
  description: "Premium website development services — fast, SEO-optimized, conversion-focused websites built for growth. From landing pages to full e-commerce platforms.",
  keywords: ["website development services", "web design agency", "custom website development", "SEO website design", "e-commerce development", "Next.js development"],
};

export default function WebDevPage() {
  return <WebDevContent />;
}
