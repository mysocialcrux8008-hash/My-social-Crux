import type { Metadata } from "next";
import ContentWritingContent from "./ContentWritingContent";

export const metadata: Metadata = {
  title: "Content Writing & Brand Messaging Services | MySocialCrux",
  description: "Premium content writing and brand messaging services that rank on Google, convert readers into customers, and build your brand authority. SEO blogs, web copy, social content & more.",
  keywords: ["content writing services", "brand messaging", "SEO content writing", "blog writing agency", "copywriting services", "website copywriting", "content marketing"],
};

export default function ContentWritingPage() {
  return <ContentWritingContent />;
}
