import type { Metadata } from "next";
import VotingServicesContent from "./VotingServicesContent";

export const metadata: Metadata = {
  title: "Voting Services & Online Polls | MySocialCrux",
  description: "Win online contests, boost poll results, and dominate public voting campaigns. MySocialCrux delivers real, targeted votes for online polls, contests, and award nominations.",
  keywords: ["voting services", "online poll votes", "contest voting services", "online voting boost", "poll promotion", "award nomination votes", "online contest help"],
};

export default function VotingServicesPage() {
  return <VotingServicesContent />;
}
