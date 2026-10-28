import type { Metadata } from "next";
import ContentWritingContent from "./ContentWritingContent";

export const metadata: Metadata = {
  title: "Content Writing & Brand Messaging Services | MySocialCrux",
  description: "Premium content writing and brand messaging services that rank on Google, convert readers into customers, and build your brand authority. SEO blogs, web copy, social content & more.",
  keywords: ["content writing services", "brand messaging", "SEO content writing", "blog writing agency", "copywriting services", "website copywriting", "content marketing"],
  alternates: { canonical: "https://mysocialcrux.com/content-writing-services/" },
  openGraph: {
    title: "Content Writing & Brand Messaging Services | MySocialCrux",
    description: "Premium content writing that ranks on Google, converts readers, and builds brand authority.",
    url: "https://mysocialcrux.com/content-writing-services/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Content Writing Services" }],
  },
};

export default function ContentWritingPage() {
  return <ContentWritingContent />;
}
