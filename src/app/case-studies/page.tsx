import type { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies | MySocialCrux Results",
  description: "Real results from real brands. See how MySocialCrux has scaled 500+ brands with measurable, lasting growth.",
  keywords: ["digital marketing case studies", "social media growth results", "MySocialCrux results", "brand growth examples"],
  alternates: { canonical: "https://mysocialcrux.com/case-studies/" },
  openGraph: {
    title: "Case Studies | MySocialCrux Results",
    description: "Real results from real brands. See how MySocialCrux has scaled 500+ brands with measurable, lasting growth.",
    url: "https://mysocialcrux.com/case-studies/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "MySocialCrux Case Studies" }],
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
