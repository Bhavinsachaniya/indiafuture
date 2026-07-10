import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Adoption Programs",
  description:
    "Help teams integrate AI into daily workflows through productivity training, automation, department-specific use cases, and implementation support.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
