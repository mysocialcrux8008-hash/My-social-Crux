import type { Metadata } from "next";
import CaseStudiesContent from "./CaseStudiesContent";

export const metadata: Metadata = {
  title: "Case Studies | MySocialCrux Results",
  description: "Real results from real brands. See how MySocialCrux has scaled 500+ brands with measurable, lasting growth.",
};

export default function CaseStudiesPage() {
  return <CaseStudiesContent />;
}
