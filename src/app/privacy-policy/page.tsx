import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy | MySocialCrux",
  description: "MySocialCrux Privacy Policy — how we collect, use, and protect your personal information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    content: `We collect information you provide directly to us, such as when you fill out a contact form, request a consultation, or communicate with us via email or WhatsApp. This includes:

• Name, email address, phone number, and company name
• Service interests and budget information
• Messages and correspondence you send us
• Technical information such as IP address, browser type, and device information collected automatically when you visit our website`,
  },
  {
    title: "2. How We Use Your Information",
    content: `We use the information we collect to:

• Respond to your inquiries and provide the services you request
• Send you marketing communications about our services (with your consent)
• Improve our website and services
• Comply with legal obligations
• Protect against fraudulent or illegal activity

We do not sell, rent, or share your personal information with third parties for their marketing purposes.`,
  },
  {
    title: "3. Cookies and Tracking Technologies",
    content: `Our website uses cookies and similar tracking technologies to enhance your browsing experience. These include:

• Essential cookies required for the website to function
• Analytics cookies to understand how visitors use our site
• Marketing cookies to deliver relevant advertisements

You can control cookie settings through your browser preferences. Disabling certain cookies may affect website functionality.`,
  },
  {
    title: "4. Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.`,
  },
  {
    title: "5. Data Retention",
    content: `We retain your personal information for as long as necessary to provide our services and comply with legal obligations. When your information is no longer needed, we securely delete or anonymize it.`,
  },
  {
    title: "6. Your Rights",
    content: `Depending on your location, you may have the following rights regarding your personal information:

• Right to access the personal information we hold about you
• Right to correct inaccurate or incomplete information
• Right to request deletion of your personal information
• Right to object to or restrict processing of your information
• Right to data portability

To exercise these rights, contact us at ankit@mysocialcrux.com.`,
  },
  {
    title: "7. Third-Party Links",
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: "8. Children's Privacy",
    content: `Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.`,
  },
  {
    title: "9. Changes to This Policy",
    content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website with an updated effective date. Your continued use of our services after changes constitutes acceptance of the updated policy.`,
  },
  {
    title: "10. Contact Us",
    content: `If you have questions about this Privacy Policy or our data practices, please contact us:

Meilleure Promotions Services Private Limited
(MySocialCrux — Brand)
E-42, Anand Puri, Bees Dukan, Adarsh Nagar
Jaipur, Rajasthan 302004, India
Email: ankit@mysocialcrux.com
Phone: +91 72299 23456`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      lastUpdated="January 1, 2025"
      sections={sections}
      accentColor="#FF3EA5"
    />
  );
}
