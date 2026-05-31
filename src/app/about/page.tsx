import type { Metadata } from "next";
import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutTeam from "./AboutTeam";
import AboutStats from "./AboutStats";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "About MySocialCrux | Premium Digital Marketing Agency",
  description: "Learn about MySocialCrux — the premium digital marketing agency built for brands that refuse to stand still. Our story, mission, team, and values.",
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
