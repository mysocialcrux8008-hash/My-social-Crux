import type { Metadata } from "next";
import ServicesHero from "./ServicesHero";
import ServicesCategories from "./ServicesCategories";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Digital Marketing Services | MySocialCrux",
  description: "Explore MySocialCrux's full suite of 15+ digital marketing services — social media growth, SEO, YouTube, press releases, website development, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesCategories />
      <CTASection
        title="Not Sure Which Service You Need?"
        subtitle="Our growth strategists will analyze your brand and recommend the perfect combination of services to hit your goals."
        primaryCTA="Get a Free Strategy Call"
        primaryHref="/contact"
        secondaryCTA="View Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
