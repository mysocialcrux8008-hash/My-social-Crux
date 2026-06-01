import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | MySocialCrux",
  description: "MySocialCrux Cookie Policy — how we use cookies and tracking technologies on our website.",
};

const sections = [
  {
    title: "1. What Are Cookies",
    content: `Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help the website remember your preferences and improve your browsing experience.

Cookies are widely used to make websites work more efficiently and to provide information to website owners about how their site is being used.`,
  },
  {
    title: "2. How We Use Cookies",
    content: `MySocialCrux uses cookies for the following purposes:

• To ensure the website functions correctly and securely
• To remember your preferences and settings
• To analyze how visitors use our website so we can improve it
• To measure the effectiveness of our marketing campaigns
• To provide personalized content and advertisements`,
  },
  {
    title: "3. Types of Cookies We Use",
    content: `Essential Cookies: These are necessary for the website to function. They enable core functionality such as page navigation and access to secure areas. The website cannot function properly without these cookies.

Analytics Cookies: We use analytics tools (such as Google Analytics) to understand how visitors interact with our website. These cookies collect information about pages visited, time spent on the site, and how visitors arrived at the site.

Marketing Cookies: These cookies track your browsing activity to help us deliver relevant advertisements and measure campaign performance. They may be set by us or by third-party advertising partners.

Preference Cookies: These cookies remember your preferences (such as language or region) to provide a more personalized experience.`,
  },
  {
    title: "4. Third-Party Cookies",
    content: `We may use third-party services that set their own cookies, including:

• Google Analytics (website analytics)
• Google Ads (advertising)
• Meta Pixel (Facebook/Instagram advertising)
• LinkedIn Insight Tag (LinkedIn advertising)

These third parties have their own privacy policies governing their use of cookies. We encourage you to review their policies.`,
  },
  {
    title: "5. Managing Cookies",
    content: `You can control and manage cookies in several ways:

Browser Settings: Most browsers allow you to refuse or delete cookies through their settings. However, disabling cookies may affect the functionality of our website.

Opt-Out Tools:
• Google Analytics: tools.google.com/dlpage/gaoptout
• Google Ads: adssettings.google.com
• Meta: facebook.com/settings?tab=ads

Note: If you use multiple devices or browsers, you will need to manage cookie settings on each one separately.`,
  },
  {
    title: "6. Cookie Duration",
    content: `Cookies can be either "session cookies" or "persistent cookies":

Session Cookies: These are temporary and are deleted when you close your browser. They are used to maintain your session while browsing our website.

Persistent Cookies: These remain on your device for a set period or until you delete them manually. They are used to remember your preferences across multiple visits.

The duration of specific cookies varies. Analytics and marketing cookies typically last between 30 days and 2 years.`,
  },
  {
    title: "7. Updates to This Policy",
    content: `We may update this Cookie Policy from time to time to reflect changes in our use of cookies or applicable laws. We will notify you of significant changes by updating the effective date at the top of this page.`,
  },
  {
    title: "8. Contact Us",
    content: `If you have questions about our use of cookies, contact us:

Meilleure Promotions Services Private Limited
(MySocialCrux — Brand)
E-42, Anand Puri, Bees Dukan, Adarsh Nagar
Jaipur, Rajasthan 302004, India
Email: ankit@mysocialcrux.com
Phone: +91 72299 23456`,
  },
];

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="How we use cookies and tracking technologies on the MySocialCrux website."
      lastUpdated="January 1, 2025"
      sections={sections}
      accentColor="#00D084"
    />
  );
}
