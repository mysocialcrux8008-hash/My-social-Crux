import type { Metadata } from "next";
import TelegramGrowthContent from "./TelegramGrowthContent";

export const metadata: Metadata = {
  title: "Telegram Channel Growth Services | MySocialCrux",
  description: "Grow your Telegram channel with real, active members. MySocialCrux's proven Telegram growth strategies deliver measurable results in 30 days.",
  keywords: ["Telegram channel growth", "grow Telegram members", "Telegram marketing agency", "Telegram channel promotion", "Telegram subscribers"],
  alternates: { canonical: "https://mysocialcrux.com/telegram-channel-growth-services/" },
  openGraph: {
    title: "Telegram Channel Growth Services | MySocialCrux",
    description: "Grow your Telegram channel with real, active members. Measurable results in 30 days.",
    url: "https://mysocialcrux.com/telegram-channel-growth-services/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Telegram Channel Growth Services" }],
  },
};

export default function TelegramGrowthPage() {
  return <TelegramGrowthContent />;
}
