import type { Metadata } from "next";
import BlogContent from "./BlogContent";

export const metadata: Metadata = {
  title: "Blog | MySocialCrux Digital Marketing Insights",
  description: "Expert insights on social media growth, SEO, digital marketing strategies, and brand building from the MySocialCrux team.",
};

export default function BlogPage() {
  return <BlogContent />;
}
