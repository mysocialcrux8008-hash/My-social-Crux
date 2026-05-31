import type { Metadata } from "next";
import PressReleaseContent from "./PressReleaseContent";

export const metadata: Metadata = {
  title: "Press Release Creation & Global Publication Services | MySocialCrux",
  description: "Get your brand featured in Forbes, TechCrunch, Business Insider, and 200+ global publications. MySocialCrux's press release and PR distribution services build instant credibility.",
  keywords: ["press release services", "global PR distribution", "get featured in Forbes", "press release writing", "media coverage", "PR agency", "news distribution"],
};

export default function PressReleasePage() {
  return <PressReleaseContent />;
}
