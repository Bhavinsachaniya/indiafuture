import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

const links = [
  { label: "Studios", href: "#studios" },
  { label: "Method", href: "#method" },
  { label: "Community", href: "#community" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "top-4 w-[calc(100%-2rem)] max-w-5xl rounded-full border border-border/40 bg-background/80 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
          : "top-0 w-full border-b border-transparent bg-transparent"
      }`}
    >
      <div className={`mx-auto flex items-center justify-between transition-all duration-500 ${scrolled ? "h-14 px-6" : "h-20 container-x"}`}>
        <a href="#" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-ink text-cream font-display text-lg">I</span>
          <span className="font-display text-xl">Indiafuture</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-ink-soft">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center rounded-full bg-ink text-cream text-sm font-medium px-6 py-2.5 hover:opacity-90 transition-all hover:-translate-y-0.5"
          >
            Contact us
          </Link>
        </div>
      </div>
    </header>
  );
}
