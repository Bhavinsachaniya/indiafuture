import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/site/SiteShell";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const siteUrl = "https://www.indiafutureai.com"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Indiafuture — AI Learning & Implementation Studio",
    template: "%s | IndiaFutureAI",
  },
  description:
    "Indiafuture helps builders, teams and founders implement AI in real workflows. Learn by shipping, not by watching.",
  openGraph: {
    title: "IndiaFutureAI",
    description: "India's AI Upskilling Partner. Learn • Build • Win",
    url: siteUrl,
    siteName: "IndiaFutureAI",
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "IndiaFutureAI",
        type: "image/jpeg",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IndiaFutureAI",
    description: "India's AI Upskilling Partner. Learn • Build • Win",
    images: [`${siteUrl}/og-image.jpg`],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plusJakarta.variable}`}>
      <body>
        <NextTopLoader color="#eb5e28" showSpinner={false} height={3} />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
