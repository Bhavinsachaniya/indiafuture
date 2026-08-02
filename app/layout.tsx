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

export const metadata: Metadata = {
  title: {
    default: "Indiafuture — AI Learning & Implementation Studio",
    template: "%s | IndiaFutureAI",
  },
  description:
    "Indiafuture helps builders, teams and founders implement AI in real workflows. Learn by shipping, not by watching.",
  openGraph: {
    title: "Indiafuture — AI Learning & Implementation Studio",
    description:
      "Learn AI by building. Cohort studios, live implementations, and a community of practitioners.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon1.png",
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
