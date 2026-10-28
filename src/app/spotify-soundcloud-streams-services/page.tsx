import type { Metadata } from "next";
import SpotifyGrowthContent from "./SpotifyGrowthContent";

export const metadata: Metadata = {
  title: "Spotify & SoundCloud Streams Services | MySocialCrux",
  description: "Boost your Spotify and SoundCloud streams with real listeners. MySocialCrux's proven music promotion strategies grow your plays, followers, and playlist placements.",
  keywords: ["Spotify streams services", "SoundCloud promotion", "grow Spotify plays", "music marketing agency", "Spotify playlist placement", "SoundCloud followers"],
  alternates: { canonical: "https://mysocialcrux.com/spotify-soundcloud-streams-services/" },
  openGraph: {
    title: "Spotify & SoundCloud Streams Services | MySocialCrux",
    description: "Boost your Spotify and SoundCloud streams with real listeners. Grow your plays and playlist placements.",
    url: "https://mysocialcrux.com/spotify-soundcloud-streams-services/",
    images: [{ url: "/logo.png", width: 1200, height: 630, alt: "Spotify & SoundCloud Streams Services" }],
  },
};

export default function SpotifyGrowthPage() {
  return <SpotifyGrowthContent />;
}
