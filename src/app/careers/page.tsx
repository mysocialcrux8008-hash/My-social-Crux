import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers | Join MySocialCrux Team",
  description: "Make your next big career move at MySocialCrux. We're hiring talented marketers, strategists, and creatives.",
  keywords: ["MySocialCrux careers", "digital marketing jobs India", "marketing agency hiring", "social media jobs"],
  alternates: { canonical: "https://mysocialcrux.com/careers/" },
  openGraph: {
    title: "Careers | Join MySocialCrux Team",
    description: "Make your next big career move at MySocialCrux. We're hiring talented marketers, strategists, and creatives.",
    url: "https://mysocialcrux.com/careers/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Careers at MySocialCrux" }],
  },
};

export default function CareersPage() {
  return <CareersContent />;
}
