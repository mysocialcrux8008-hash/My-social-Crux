import type { Metadata } from "next";
import WhatsAppMarketingContent from "./WhatsAppMarketingContent";

export const metadata: Metadata = {
  title: "WhatsApp Marketing Services | MySocialCrux",
  description: "Drive sales with 98% open rates. MySocialCrux's WhatsApp marketing services build high-converting broadcast campaigns, automated sequences, and engaged communities.",
  keywords: ["WhatsApp marketing services", "WhatsApp broadcast campaigns", "WhatsApp business marketing", "WhatsApp automation", "WhatsApp bulk messaging"],
};

export default function WhatsAppMarketingPage() {
  return <WhatsAppMarketingContent />;
}
