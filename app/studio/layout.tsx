import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-studio-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-studio-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "IndiaFutureAI Studio — Your Creative Team, On Demand",
  description:
    "IndiaFutureAI Studio is the creative implementation arm of IndiaFutureAI — organic content, paid media, and brand design, end to end.",
};

export default function StudioLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${fraunces.variable} ${inter.variable}`}>{children}</div>;
}
