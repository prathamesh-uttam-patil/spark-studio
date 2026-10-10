// src/lib/metadata.ts
import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://sparkstudio.design";
const SITE_NAME = "SPARK Studio";
const DEFAULT_DESCRIPTION =
  "SPARK Studio combines design, web development, AI, and interactive experiences to help businesses build distinctive digital products and brand experiences.";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SPARK Studio — Creative Technology & Digital Experiences",
    template: "%s — SPARK Studio",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "creative technology studio",
    "web design",
    "web development",
    "AI solutions",
    "3D web experiences",
    "digital branding",
    "interactive experiences",
    "Prathamesh",
    "Rohan",
  ],
  authors: [{ name: "SPARK Studio" }],
  creator: "SPARK Studio",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "SPARK Studio — Creative Technology & Digital Experiences",
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "SPARK Studio — Creative Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SPARK Studio — Creative Technology & Digital Experiences",
    description: DEFAULT_DESCRIPTION,
    images: ["/og-default.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export function createMetadata(overrides: Partial<Metadata>): Metadata {
  return {
    ...defaultMetadata,
    ...overrides,
    openGraph: {
      ...(defaultMetadata.openGraph as object),
      ...(overrides.openGraph || {}),
    },
    twitter: {
      ...(defaultMetadata.twitter as object),
      ...(overrides.twitter || {}),
    },
  };
}
