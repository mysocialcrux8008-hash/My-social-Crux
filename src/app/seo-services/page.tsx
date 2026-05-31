import type { Metadata } from "next";
import SEOContent from "./SEOContent";

export const metadata: Metadata = {
  title: "SEO Services & Google My Business Ranking | MySocialCrux",
  description: "Dominate Google search results with MySocialCrux's proven SEO services. Page 1 rankings, Google My Business optimization, and local SEO that drives real revenue.",
  keywords: ["SEO services", "Google My Business ranking", "local SEO", "page 1 Google ranking", "SEO agency", "organic search optimization", "GMB optimization"],
};

export default function SEOPage() {
  return <SEOContent />;
}
