import type { Metadata } from "next";
import AppInstallContent from "./AppInstallContent";

export const metadata: Metadata = {
  title: "App Install Campaigns Services | MySocialCrux",
  description: "Scale your app downloads with precision-targeted install campaigns. MySocialCrux delivers high-volume, low-CPI app installs across iOS and Android for every app category.",
  keywords: ["app install campaigns", "mobile app marketing", "app download campaigns", "iOS app installs", "Android app installs", "CPI campaigns", "app growth agency"],
};

export default function AppInstallPage() {
  return <AppInstallContent />;
}
