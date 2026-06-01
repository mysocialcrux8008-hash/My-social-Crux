import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: {
    default: "MySocialCrux | Premium Digital Marketing Agency | Meilleure Promotions Services Pvt Ltd",
    template: "%s | MySocialCrux",
  },
  description:
    "MySocialCrux is a premium digital marketing agency operated by Meilleure Promotions Services Private Limited. We help brands scale on Instagram, YouTube, LinkedIn, and beyond with SEO, social media growth, press releases, and more.",
  keywords: [
    "digital marketing agency India",
    "social media growth",
    "Instagram growth services",
    "SEO services Jaipur",
    "YouTube growth",
    "press release services",
    "MySocialCrux",
    "Meilleure Promotions Services",
  ],
  authors: [{ name: "Meilleure Promotions Services Private Limited" }],
  creator: "MySocialCrux — Meilleure Promotions Services Private Limited",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mysocialcrux.com",
    siteName: "MySocialCrux",
    title: "MySocialCrux | Premium Digital Marketing Agency",
    description:
      "Scale your brand with MySocialCrux — operated by Meilleure Promotions Services Private Limited. Trusted by 500+ brands worldwide.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MySocialCrux | Premium Digital Marketing Agency",
    description: "Scale your brand with MySocialCrux — trusted by 500+ brands worldwide.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Sora:wght@300;400;500;600;700;800&family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ background: "#000000", color: "#FFFFFF", fontFamily: "'Inter', sans-serif", overflowX: "hidden", maxWidth: "100vw" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
