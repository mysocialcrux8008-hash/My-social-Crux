import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service | MySocialCrux",
  description: "MySocialCrux Terms of Service — the terms and conditions governing your use of our services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: `By accessing our website or using any of our services, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our services.

These terms apply to all visitors, users, and clients of MySocialCrux, including social media growth services, SEO, content writing, press release distribution, and all other services we offer.`,
  },
  {
    title: "2. Services Description",
    content: `MySocialCrux provides digital marketing services including but not limited to:

• Social media growth and management (Instagram, Facebook, LinkedIn, Twitter X, YouTube, Telegram)
• Search engine optimization (SEO) and Google My Business ranking
• Website development and design
• Press release creation and global distribution
• Content writing and brand messaging
• WhatsApp marketing campaigns
• App install campaigns
• Voting and poll promotion services
• Spotify and SoundCloud stream promotion

The specific scope of services will be defined in individual service agreements or proposals.`,
  },
  {
    title: "3. Client Responsibilities",
    content: `As a client, you agree to:

• Provide accurate, complete, and current information required for us to perform the services
• Grant us necessary access to your social media accounts, website, or other platforms as required
• Comply with the terms of service of all relevant third-party platforms
• Not engage in any activities that violate applicable laws or third-party rights
• Pay all fees according to agreed payment terms
• Provide timely feedback and approvals to avoid delays in service delivery`,
  },
  {
    title: "4. Payment Terms",
    content: `Payment terms will be specified in individual service agreements. Generally:

• Services require upfront payment or a deposit before commencement
• Monthly retainer services are billed in advance
• All fees are non-refundable unless otherwise specified in writing
• Late payments may result in service suspension
• Prices are subject to change with 30 days' notice for ongoing services`,
  },
  {
    title: "5. Intellectual Property",
    content: `Upon full payment, you own all content specifically created for you. However:

• MySocialCrux retains ownership of our proprietary methodologies, tools, and frameworks
• We reserve the right to showcase your project as a case study (with your permission)
• You grant us a license to use your brand assets solely for providing the contracted services
• Third-party content, stock images, and licensed materials remain subject to their respective licenses`,
  },
  {
    title: "6. Confidentiality",
    content: `Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the engagement. This includes business strategies, campaign data, pricing, and any information marked as confidential. This obligation survives termination of the service agreement.`,
  },
  {
    title: "7. Results and Guarantees",
    content: `While we strive to deliver excellent results:

• Digital marketing involves inherent uncertainties and we cannot guarantee specific outcomes
• Past performance does not guarantee future results
• Social media platforms and search engines regularly change their algorithms
• Results may vary based on industry, competition, budget, and other factors
• Any specific guarantees will be stated explicitly in individual service agreements`,
  },
  {
    title: "8. Limitation of Liability",
    content: `To the maximum extent permitted by law, MySocialCrux's total liability for any claims arising from our services shall not exceed the total fees paid by you in the three months preceding the claim. We are not liable for indirect, incidental, special, or consequential damages, including loss of profits or business opportunities.`,
  },
  {
    title: "9. Termination",
    content: `Either party may terminate services with 30 days' written notice. Upon termination:

• You will pay for all services rendered up to the termination date
• We will provide you with all deliverables completed to date
• Both parties will return or destroy confidential information of the other party
• Provisions regarding intellectual property, confidentiality, and limitation of liability survive termination`,
  },
  {
    title: "10. Governing Law",
    content: `These Terms of Service are governed by the laws of Rajasthan, India. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan.`,
  },
  {
    title: "11. Contact Us",
    content: `For questions about these Terms of Service, contact us:

Meilleure Promotions Services Private Limited
(MySocialCrux — Brand)
E-42, Anand Puri, Bees Dukan, Adarsh Nagar
Jaipur, Rajasthan 302004, India
Email: ankit@mysocialcrux.com
Phone: +91 72299 23456`,
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      subtitle="The terms and conditions governing your use of MySocialCrux services."
      lastUpdated="January 1, 2025"
      sections={sections}
      accentColor="#00A3FF"
    />
  );
}
