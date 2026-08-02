"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { COHORT_BATCHES } from "@/data/cohort";
import { STUDIO_URL } from "@/lib/studio";

const links = [
  { label: "Creator Fellowship", href: "/programs/ai-upskilling" },
  { label: "Masterclass", href: "/programs/masterclasses" },
  { label: "Automations", href: "/programs/custom" },
  { label: "AI Labs", href: "/programs/workshops" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export const Nav = React.memo(function Nav({ theme = "light" }: { theme?: "light" | "dark" }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cohortOpen, setCohortOpen] = useState(false);
  const [mobileCohortOpen, setMobileCohortOpen] = useState(false);
  const cohortRef = useRef<HTMLDivElement>(null);
  const isDark = theme === "dark";
  const cohortActive = pathname.startsWith("/cohort");

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

  useEffect(() => {
    setMobileOpen(false);
    setCohortOpen(false);
    setMobileCohortOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!cohortOpen) return;
    const onPointerDown = (event: MouseEvent) => {
      if (!cohortRef.current?.contains(event.target as Node)) {
        setCohortOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCohortOpen(false);
    };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [cohortOpen]);

  const linkClass = (active: boolean) =>
    `relative inline-flex h-11 items-center px-3 text-[1rem] font-medium leading-none tracking-[-0.01em] transition-colors xl:px-3.5 xl:text-[1.075rem] ${
      active ? (isDark ? "text-cream" : "text-ink") : isDark ? "hover:text-cream" : "hover:text-ink"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || mobileOpen
          ? isDark
            ? "border-b border-cream/10 bg-[#161413]/95 backdrop-blur-xl"
            : "border-b border-border/60 bg-cream/90 backdrop-blur-xl shadow-[0_1px_0_rgb(0,0,0,0.03)]"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[4.5rem] w-full max-w-[1440px] items-center justify-between gap-4 pl-3 pr-4 sm:pl-4 sm:pr-6 md:h-20 md:pl-5 md:pr-8 lg:pl-6">
        <div className="flex min-w-0 flex-1 items-center gap-5 lg:gap-7 xl:gap-8">
          <Link
            href="/"
            className="flex h-11 shrink-0 items-center gap-2.5"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/favicon1.png"
              alt="IndiaFutureAI Logo"
              width={36}
              height={36}
              unoptimized
              className={`h-9 w-9 object-contain ${isDark ? "rounded-lg bg-white" : "mix-blend-multiply"}`}
            />
            <span
              className={`font-display text-[1.4rem] leading-none tracking-tight md:text-[1.55rem] ${
                isDark ? "text-cream" : "text-ink"
              }`}
            >
              IndiaFutureAI
            </span>
          </Link>

          <nav
            className={`hidden h-11 items-center gap-1 lg:flex ${
              isDark ? "text-cream/65" : "text-ink-soft"
            }`}
          >
            <div ref={cohortRef} className="relative">
              <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={cohortOpen}
                onClick={() => setCohortOpen((open) => !open)}
                className={`${linkClass(cohortActive)} gap-1`}
              >
                Cohort
                <motion.span
                  animate={{ rotate: cohortOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="inline-flex"
                >
                  <ChevronDown className="h-4 w-4" />
                </motion.span>
                {cohortActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-3 bottom-1.5 h-[2.5px] rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>

              <AnimatePresence>
                {cohortOpen && (
                  <motion.div
                    role="menu"
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.98 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className={`absolute left-0 top-[calc(100%+0.5rem)] z-50 min-w-[11rem] overflow-hidden rounded-2xl border p-1.5 shadow-[0_16px_40px_-16px_rgba(22,20,19,0.28)] ${
                      isDark ? "border-cream/10 bg-[#161413]" : "border-border/80 bg-white"
                    }`}
                  >
                    {COHORT_BATCHES.map((batch, i) => (
                      <motion.div
                        key={batch.id}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 * i, duration: 0.2 }}
                      >
                        <Link
                          href={batch.href}
                          role="menuitem"
                          onClick={() => setCohortOpen(false)}
                          className={`block rounded-xl px-3.5 py-2.5 text-sm font-medium transition-colors ${
                            isDark
                              ? "text-cream/80 hover:bg-cream/10 hover:text-cream"
                              : "text-ink-soft hover:bg-brand-soft/50 hover:text-ink"
                          }`}
                        >
                          {batch.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {links.map((l) => {
              const active = isActivePath(pathname, l.href);
              return (
                <Link key={l.href} href={l.href} className={linkClass(active)}>
                  {l.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 bottom-1.5 h-[2.5px] rounded-full bg-brand"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}

            <Link href={STUDIO_URL} className={linkClass(pathname.startsWith("/studio"))}>
              Studio
              {pathname.startsWith("/studio") && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-3 bottom-1.5 h-[2.5px] rounded-full bg-brand"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          </nav>
        </div>

        <div className="flex h-11 shrink-0 items-center gap-3">
          <Link
            href="/contact"
            className={`hidden h-11 items-center rounded-full text-[1rem] font-semibold leading-none tracking-[-0.01em] px-6 transition-all hover:opacity-90 sm:inline-flex md:px-7 md:text-[1.05rem] ${
              isActivePath(pathname, "/contact")
                ? "ring-2 ring-brand/40 ring-offset-2 ring-offset-transparent"
                : ""
            } ${isDark ? "bg-cream text-ink" : "bg-ink text-cream"}`}
          >
            <motion.span
              className="inline-flex items-center"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact us
            </motion.span>
          </Link>

          <motion.button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
            whileTap={{ scale: 0.92 }}
            className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
              isDark ? "text-cream hover:bg-cream/10" : "text-ink hover:bg-ink/[0.06]"
            }`}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                transition={{ duration: 0.18 }}
                className="inline-flex"
              >
                {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className={`overflow-hidden border-t lg:hidden ${
              isDark ? "border-cream/10 bg-[#161413]" : "border-border/60 bg-cream"
            }`}
          >
            <motion.nav
              className="container-x mx-auto flex flex-col gap-1 py-4"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.05, delayChildren: 0.05 } },
              }}
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <button
                  type="button"
                  onClick={() => setMobileCohortOpen((o) => !o)}
                  className={`flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-left text-xl font-medium tracking-[-0.01em] transition-colors ${
                    cohortActive
                      ? isDark
                        ? "bg-cream/10 text-cream border-l-2 border-brand"
                        : "bg-brand-soft/60 text-ink border-l-2 border-brand"
                      : isDark
                        ? "text-cream/80 hover:bg-cream/5 hover:text-cream"
                        : "text-ink hover:bg-ink/[0.04]"
                  }`}
                >
                  Cohort
                  <motion.span animate={{ rotate: mobileCohortOpen ? 180 : 0 }}>
                    <ChevronDown className="h-5 w-5" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {mobileCohortOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="ml-3 mt-1 flex flex-col gap-1 border-l border-border/60 pl-3 pb-2">
                        {COHORT_BATCHES.map((batch) => (
                          <Link
                            key={batch.id}
                            href={batch.href}
                            onClick={() => setMobileOpen(false)}
                            className={`rounded-lg px-3 py-2.5 text-base font-medium ${
                              isDark
                                ? "text-cream/75 hover:text-cream"
                                : "text-ink-soft hover:text-ink"
                            }`}
                          >
                            {batch.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {links.map((l) => {
                const active = isActivePath(pathname, l.href);
                return (
                  <motion.div
                    key={l.href}
                    variants={{
                      hidden: { opacity: 0, x: -12 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <Link
                      href={l.href}
                      onClick={() => setMobileOpen(false)}
                      className={`rounded-lg px-3 py-3.5 text-xl font-medium tracking-[-0.01em] transition-colors block ${
                        active
                          ? isDark
                            ? "bg-cream/10 text-cream border-l-2 border-brand"
                            : "bg-brand-soft/60 text-ink border-l-2 border-brand"
                          : isDark
                            ? "text-cream/80 hover:bg-cream/5 hover:text-cream"
                            : "text-ink hover:bg-ink/[0.04]"
                      }`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                );
              })}

              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <Link
                  href={STUDIO_URL}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-lg px-3 py-3.5 text-xl font-medium tracking-[-0.01em] transition-colors block ${
                    pathname.startsWith("/studio")
                      ? isDark
                        ? "bg-cream/10 text-cream border-l-2 border-brand"
                        : "bg-brand-soft/60 text-ink border-l-2 border-brand"
                      : isDark
                        ? "text-cream/80 hover:bg-cream/5 hover:text-cream"
                        : "text-ink hover:bg-ink/[0.04]"
                  }`}
                >
                  Studio
                </Link>
              </motion.div>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className={`mt-3 inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold sm:hidden ${
                    isDark ? "bg-cream text-ink" : "bg-ink text-cream"
                  }`}
                >
                  Contact us
                </Link>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
});
