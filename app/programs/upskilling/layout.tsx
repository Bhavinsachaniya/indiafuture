import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Upskilling Program",
  description:
    "An 8-week hands-on journey that takes learners from AI fundamentals to real-world implementation through projects, automation, and practical workflows.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
