import type { Metadata, Viewport } from "next";
import "../index.css";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

const siteUrl = "https://sammdevl.github.io/artistry-folio";

export const metadata: Metadata = {
  title: {
    default: "Samuel Dipta Yogi Taruna | Full Stack Developer Portfolio",
    template: "%s | Samuel Dipta Portfolio",
  },
  description:
    "Portfolio of Samuel Dipta Yogi Taruna — a Full Stack Developer specializing in React, TypeScript, Node.js, and modern web technologies. Explore my projects, skills, and get in touch.",
  keywords: [
    "Samuel Dipta Yogi Taruna",
    "Full Stack Developer",
    "React Developer",
    "TypeScript",
    "Node.js",
    "Portfolio",
    "Web Developer",
    "Frontend Developer",
    "Indonesia",
  ],
  authors: [{ name: "Samuel Dipta Yogi Taruna", url: siteUrl }],
  creator: "Samuel Dipta Yogi Taruna",
  publisher: "Samuel Dipta Yogi Taruna",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Samuel Dipta Portfolio",
    title: "Samuel Dipta Yogi Taruna | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, TypeScript, and modern web technologies. Check out my projects and skills.",
    images: [
      {
        url: "/Profile_Picture.JPG",
        width: 800,
        height: 800,
        alt: "Samuel Dipta Yogi Taruna - Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Dipta Yogi Taruna | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, TypeScript, and modern web technologies.",
    images: ["/Profile_Picture.JPG"],
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
  icons: {
    icon: "/icon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1b2d",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="uOgEfAaepFu2zVfOoRcgVk-CTWhEi6KSommd2_Tnj-M" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
