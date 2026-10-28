import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutTeam from "./AboutTeam";
import AboutStats from "./AboutStats";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About MySocialCrux | Premium Digital Marketing Agency",
  description: "Learn about MySocialCrux — the premium digital marketing agency built for brands that refuse to stand still. Our story, mission, team, and values.",
  keywords: ["about MySocialCrux", "digital marketing agency India", "Meilleure Promotions Services", "marketing agency team"],
  alternates: { canonical: "https://mysocialcrux.com/about/" },
  openGraph: {
    title: "About MySocialCrux | Premium Digital Marketing Agency",
    description: "Learn about MySocialCrux — built for brands that refuse to stand still. Our story, mission, team, and values.",
    url: "https://mysocialcrux.com/about/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "About MySocialCrux" }],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutTeam />
      <AboutStats />
      <CTASection
        title="Ready to Work With the Best?"
        subtitle="Join 500+ ambitious brands that chose MySocialCrux to power their growth. Let's build something extraordinary."
        primaryCTA="Start Your Growth Journey"
        secondaryCTA="View Our Services"
        secondaryHref="/services"
      />
    </>
  );
}
