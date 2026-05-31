import type { Metadata } from "next";
import HomeHero from "@/components/home/HomeHero";
import BrandsMarquee from "@/components/home/BrandsMarquee";
import HomeServices from "@/components/home/HomeServices";
import HomeSplitSection from "@/components/home/HomeSplitSection";
import HomeToolSection from "@/components/home/HomeToolSection";
import HomeImageStats from "@/components/home/HomeImageStats";
import HomeStatsBar from "@/components/home/HomeStatsBar";
import HomeTestimonial from "@/components/home/HomeTestimonial";
import HomeBrandLogos from "@/components/home/HomeBrandLogos";
import HomeIndustries from "@/components/home/HomeIndustries";
import HomeFinalCTA from "@/components/home/HomeFinalCTA";
import FAQSection from "@/components/FAQSection";
import { homeFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "MySocialCrux | Premium Digital Marketing Agency USA",
  description: "Scale your brand with MySocialCrux — the premium digital marketing agency trusted by 500+ brands.",
};

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <BrandsMarquee />
      <HomeServices />
      <HomeSplitSection />
      <HomeToolSection />
      <HomeImageStats />
      <HomeStatsBar />
      <HomeTestimonial />
      <HomeBrandLogos />
      <HomeIndustries />
      <FAQSection faqs={homeFaqs} />
      <HomeFinalCTA />
    </>
  );
}
