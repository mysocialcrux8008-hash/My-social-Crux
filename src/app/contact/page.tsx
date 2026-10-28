import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact MySocialCrux | Get a Free Strategy Consultation",
  description:
    "Ready to scale your brand? Contact MySocialCrux for a free strategy consultation. Our team is ready to help you grow.",
  keywords: ["contact MySocialCrux", "free marketing consultation", "digital marketing agency contact", "get a strategy call"],
  alternates: { canonical: "https://mysocialcrux.com/contact/" },
  openGraph: {
    title: "Contact MySocialCrux | Get a Free Strategy Consultation",
    description: "Ready to scale your brand? Contact MySocialCrux for a free strategy consultation.",
    url: "https://mysocialcrux.com/contact/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Contact MySocialCrux" }],
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
