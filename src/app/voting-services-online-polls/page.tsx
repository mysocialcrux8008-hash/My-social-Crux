import type { Metadata } from "next";
import VotingServicesContent from "./VotingServicesContent";

export const metadata: Metadata = {
  title: "Voting Services & Online Polls | MySocialCrux",
  description: "Win online contests, boost poll results, and dominate public voting campaigns. MySocialCrux delivers real, targeted votes for online polls, contests, and award nominations.",
  keywords: ["voting services", "online poll votes", "contest voting services", "online voting boost", "poll promotion", "award nomination votes", "online contest help"],
  alternates: { canonical: "https://mysocialcrux.com/voting-services-online-polls/" },
  openGraph: {
    title: "Voting Services & Online Polls | MySocialCrux",
    description: "Win online contests and dominate public voting campaigns with real, targeted votes.",
    url: "https://mysocialcrux.com/voting-services-online-polls/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Voting Services & Online Polls" }],
  },
};

export default function VotingServicesPage() {
  return <VotingServicesContent />;
}
