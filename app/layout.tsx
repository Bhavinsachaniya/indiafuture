import type { Metadata } from "next";
import { Instrument_Serif, Work_Sans } from "next/font/google";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-work-sans",
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
    <html lang="en" className={`${instrumentSerif.variable} ${workSans.variable}`}>
      <body>
        <NextTopLoader color="#eb5e28" showSpinner={false} height={3} />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
