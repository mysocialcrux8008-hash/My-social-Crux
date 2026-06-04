import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Return & Refund Policy | MySocialCrux",
  description: "MySocialCrux Return & Refund Policy — understand our refund terms, eligibility, and process for all digital marketing services.",
};

const sections = [
  {
    title: "1. Overview",
    content: `At MySocialCrux (a brand of Meilleure Promotions Services Private Limited), we are committed to delivering high-quality digital marketing services. We take client satisfaction seriously and have established this policy to ensure fair and transparent handling of refund requests.

Please read this policy carefully before purchasing any of our services. By placing an order, you agree to the terms outlined in this Return & Refund Policy.`,
  },
  {
    title: "2. Nature of Our Services",
    content: `MySocialCrux provides digital marketing services including social media growth, SEO, content writing, press release distribution, website development, WhatsApp marketing, app install campaigns, and more.

As these are digital services that involve labor, strategy, and third-party platform execution, they are generally non-returnable once work has commenced. However, we have specific refund provisions outlined below.`,
  },
  {
    title: "3. Refund Eligibility",
    content: `You may be eligible for a full or partial refund under the following circumstances:

• Service Not Started: If you request a cancellation before any work has begun on your order, you are eligible for a 100% refund.

• Service Guarantee Not Met: For services where we have provided a specific guarantee (e.g., guaranteed publication of press releases, guaranteed vote delivery), if we fail to deliver as promised, you are eligible for a full refund or service re-delivery at no extra cost.

• Technical Error: If a payment was charged incorrectly or a duplicate payment was made, you are eligible for a full refund of the duplicate amount.

• Non-Delivery: If a service was paid for but not delivered within the agreed timeframe without any communication from our team, you may request a refund.`,
  },
  {
    title: "4. Non-Refundable Services",
    content: `The following are NOT eligible for refunds:

• Services where work has already commenced or been delivered
• Social media growth services where followers/subscribers have already been delivered
• SEO services after keyword research and on-page optimization has been completed
• Content writing services after content has been delivered and approved
• Press release services after distribution has been completed
• Website development services after design approval and development has started
• Any service where results were delivered but did not meet subjective expectations (e.g., "I don't like the style")
• Services cancelled after the 48-hour cooling-off period from purchase`,
  },
  {
    title: "5. Cooling-Off Period",
    content: `You have 48 hours from the time of purchase to cancel your order and receive a full refund, provided that:

• No work has been started on your project
• No resources or third-party costs have been committed

After 48 hours, or once work has commenced (whichever is earlier), cancellations will not be eligible for a full refund. A partial refund may be considered based on the percentage of work completed.`,
  },
  {
    title: "6. Partial Refunds",
    content: `Partial refunds may be granted at our discretion in the following situations:

• Service is partially delivered and you wish to cancel the remaining portion
• Significant delay in delivery caused by our team (not by client-side delays)
• Service quality falls materially below agreed specifications

The partial refund amount will be calculated based on the proportion of work not yet completed, minus any non-recoverable costs already incurred (such as third-party fees, advertising spend, or distribution costs).`,
  },
  {
    title: "7. How to Request a Refund",
    content: `To request a refund, please follow these steps:

1. Email us at ankit@mysocialcrux.com with the subject line: "Refund Request — [Your Order ID]"
2. Include your full name, order details, date of purchase, and reason for the refund request
3. Our team will acknowledge your request within 24 hours (business days)
4. We will review your request and respond with a decision within 3–5 business days
5. Approved refunds will be processed within 7–10 business days to your original payment method

Please note: Refund requests made via WhatsApp or social media will not be accepted. All requests must be submitted via email for proper documentation.`,
  },
  {
    title: "8. Refund Processing Time",
    content: `Once a refund is approved:

• Credit/Debit Card payments: 7–10 business days to reflect in your account
• Bank Transfer/NEFT/IMPS: 3–5 business days
• UPI payments: 1–3 business days
• International payments: 10–15 business days

Processing times may vary depending on your bank or payment provider. MySocialCrux is not responsible for delays caused by banking institutions.`,
  },
  {
    title: "9. Disputes & Chargebacks",
    content: `We strongly encourage clients to contact us directly before initiating a chargeback with their bank or payment provider. Unauthorized chargebacks may result in:

• Suspension of your account and all active services
• Legal action to recover disputed amounts plus associated fees
• Reporting to credit bureaus where applicable

We are always willing to resolve disputes fairly and promptly. Please reach out to us first and give us the opportunity to make it right.`,
  },
  {
    title: "10. Changes to This Policy",
    content: `We reserve the right to modify this Return & Refund Policy at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after changes constitutes acceptance of the updated policy.

For services purchased before a policy change, the policy in effect at the time of purchase will apply.`,
  },
  {
    title: "11. Contact Us",
    content: `If you have any questions about our Return & Refund Policy, please contact us:

Meilleure Promotions Services Private Limited
(MySocialCrux — Brand)
E-42, Anand Puri, Bees Dukan, Adarsh Nagar
Jaipur, Rajasthan 302004, India
Email: ankit@mysocialcrux.com
Phone: +91 72299 23456
Hours: Open 24 Hours, 7 Days a Week`,
  },
];

export default function ReturnRefundPage() {
  return (
    <LegalPage
      title="Return & Refund Policy"
      subtitle="Our fair and transparent refund terms for all MySocialCrux digital marketing services."
      lastUpdated="January 1, 2025"
      sections={sections}
      accentColor="#FF6B00"
    />
  );
}
