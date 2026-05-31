import type { Metadata } from "next";
import CareersContent from "./CareersContent";

export const metadata: Metadata = {
  title: "Careers | Join MySocialCrux Team",
  description: "Make your next big career move at MySocialCrux. We're hiring talented marketers, strategists, and creatives.",
};

export default function CareersPage() {
  return <CareersContent />;
}
