import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Workshops & Certifications",
  description:
    "Interactive AI workshops and certification programs designed for schools, colleges, universities, organizations, and MSMEs.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
