import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Labs & Campus Enablement",
  description:
    "Build an AI-ready institution with faculty development, student upskilling, AI labs, curriculum support, and long-term implementation.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
