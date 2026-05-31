import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import { homeFaqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "FAQ | MySocialCrux",
  description: "Frequently asked questions about MySocialCrux digital marketing services, pricing, and process.",
};

export default function FAQPage() {
  return (
    <>
      <div style={{ paddingTop: "72px", background: "#000" }}>
        <FAQSection
          faqs={homeFaqs}
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about working with MySocialCrux."
        />
      </div>
      <CTASection />
    </>
  );
}
