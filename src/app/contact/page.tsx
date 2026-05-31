import type { Metadata } from "next";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact MySocialCrux | Get a Free Strategy Consultation",
  description:
    "Ready to scale your brand? Contact MySocialCrux for a free strategy consultation. Our team is ready to help you grow.",
};

export default function ContactPage() {
  return <ContactContent />;
}
