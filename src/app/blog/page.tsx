import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | MySocialCrux Digital Marketing Insights",
  description: "Expert insights on social media growth, SEO, digital marketing strategies, and brand building from the MySocialCrux team.",
  keywords: ["digital marketing blog", "social media tips", "SEO tips", "marketing insights", "MySocialCrux blog"],
  alternates: { canonical: "https://mysocialcrux.com/blog/" },
  openGraph: {
    title: "Blog | MySocialCrux Digital Marketing Insights",
    description: "Expert insights on social media growth, SEO, digital marketing strategies, and brand building.",
    url: "https://mysocialcrux.com/blog/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "MySocialCrux Blog" }],
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
