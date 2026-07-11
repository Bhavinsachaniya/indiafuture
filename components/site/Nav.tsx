"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Home", href: "/" },
  { label: "Creator Fellowship", href: "/#creator-fellowship" },
  { label: "Masterclass", href: "/#masterclass" },
  { label: "Automations", href: "/#automations" },
  { label: "AI Labs", href: "/#ai-labs" },
  { label: "About Us", href: "/#about-us" },
];

export const Nav = React.memo(function Nav({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 12);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? `top-4 w-[calc(100%-2rem)] max-w-[1200px] rounded-full border shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
              theme === "dark" ? "border-cream/10 bg-[#161413]" : "border-border/40 bg-white"
            }`
          : "top-0 w-full border-b border-transparent bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14 px-6" : "h-20 container-x"}`}
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/favicon1.png"
            alt="IndiaFutureAI Logo"
            width={32}
            height={32}
            unoptimized
            className={`object-contain ${theme === "dark" ? "rounded-lg bg-white" : "mix-blend-multiply"}`}
          />
          <span className="font-display text-xl">IndiaFutureAI</span>
        </Link>
        <nav
          className={`hidden md:flex items-center gap-8 text-sm ${theme === "dark" ? "text-cream/70" : "text-ink-soft"}`}
        >
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition-colors ${theme === "dark" ? "hover:text-cream" : "hover:text-ink"}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={`inline-flex items-center rounded-full text-sm font-medium px-6 py-2.5 hover:opacity-90 transition-all hover:-translate-y-0.5 ${
              theme === "dark" ? "bg-cream text-ink" : "bg-ink text-cream"
            }`}
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
});
