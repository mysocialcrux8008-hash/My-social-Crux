import type { Metadata } from "next";
import AppInstallContent from "./AppInstallContent";

export const metadata: Metadata = {
  title: "App Install Campaigns Services | MySocialCrux",
  description: "Scale your app downloads with precision-targeted install campaigns. MySocialCrux delivers high-volume, low-CPI app installs across iOS and Android for every app category.",
  keywords: ["app install campaigns", "mobile app marketing", "app download campaigns", "iOS app installs", "Android app installs", "CPI campaigns", "app growth agency"],
  alternates: { canonical: "https://mysocialcrux.com/app-install-campaigns-services/" },
  openGraph: {
    title: "App Install Campaigns Services | MySocialCrux",
    description: "Scale your app downloads with precision-targeted install campaigns. High-volume, low-CPI app installs.",
    url: "https://mysocialcrux.com/app-install-campaigns-services/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "App Install Campaign Services" }],
  },
};

export default function AppInstallPage() {
  return <AppInstallContent />;
}
