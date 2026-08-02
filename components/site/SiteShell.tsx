"use client";

import { usePathname } from "next/navigation";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudio = pathname === "/studio" || pathname.startsWith("/studio/");

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <Nav />
      {children}
      <WhatsAppFloat />
      <Footer />
    </>
  );
}
