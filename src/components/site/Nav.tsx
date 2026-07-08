import React, { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Programs", href: "#studios" },
  { label: "Method", href: "#method" },
  { label: "Community", href: "#community" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
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
          ? `top-4 w-[calc(100%-2rem)] max-w-5xl rounded-full border backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] ${
              theme === "dark" ? "border-cream/10 bg-[#161413]/80" : "border-border/40 bg-background/80"
            }`
          : "top-0 w-full border-b border-transparent bg-transparent"
      }`}
    >
      <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14 px-6" : "h-20 container-x"}`}>
        <Link to="/" className="flex items-center gap-2">
          <span className={`grid h-8 w-8 place-items-center rounded-lg font-display text-lg ${theme === "dark" ? "bg-cream text-ink" : "bg-ink text-cream"}`}>I</span>
          <span className="font-display text-xl">IndiaFutureAI</span>
        </Link>
        <nav className={`hidden md:flex items-center gap-8 text-sm ${theme === "dark" ? "text-cream/70" : "text-ink-soft"}`}>
          {links.map((l) => (
            <a key={l.href} href={`/${l.href}`} className={`transition-colors ${theme === "dark" ? "hover:text-cream" : "hover:text-ink"}`}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
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
