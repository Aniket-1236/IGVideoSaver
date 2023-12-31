import { siteConfig } from "@/configs/site";
import { Metadata } from "next";

export const mainMetadata: Metadata = {
  metadataBase: new URL("https://igvideosaver.in"),
  title: "IGVideoSaver - Download Instagram Videos Online",
  description: siteConfig.description,
  keywords: [
    "IGVideoSaver",
    "IGVideoSaver.in",
    "Instagram downloader",
    "Reels downloader",
    "Instagram reel saver",
    "Instagram reel video downloader",
    "Reels video saver",
    "Free Instagram saver",
    "Instagram video download app",
    "Free Instagram downloader",
    "Instagram video downloader",
    "download Instagram videos",
    "Instagram download tool",
    "Instagram video saver",
    "online video downloader",
  ],
  authors: [
    {
      name: "Aniket",
      url: "",
    },
  ],
  creator: "Aniket",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "white" },
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImageUrl,
        width: 1250,
        height: 945,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImageUrl],
    creator: "Aniket",
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/images/favicon-32x32.png",
    apple: "/images/apple-touch-icon.png",
  },
  manifest: "/webmanifest.json",
};
