import React, { Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { HeroSection, LogosSection } from "@/components/ui/hero-1";

// Lazy-loaded below-the-fold sections to drastically reduce initial bundle size
const Studios = React.lazy(() => import("@/components/site/Studios").then(m => ({ default: m.Studios })));
const FUIBentoGrid = React.lazy(() => import("@/components/ui/bento"));
const Method = React.lazy(() => import("@/components/site/method/Method").then(m => ({ default: m.Method })));
const UpskillingProgram = React.lazy(() => import("@/components/site/UpskillingProgram").then(m => ({ default: m.UpskillingProgram })));
const AISolutions = React.lazy(() => import("@/components/site/AISolutions").then(m => ({ default: m.AISolutions })));
const Impact = React.lazy(() => import("@/components/site/Impact").then(m => ({ default: m.Impact })));
const Stats = React.lazy(() => import("@/components/site/Stats").then(m => ({ default: m.Stats })));
const Testimonials = React.lazy(() => import("@/components/site/Testimonials").then(m => ({ default: m.Testimonials })));
const Community = React.lazy(() => import("@/components/site/Community").then(m => ({ default: m.Community })));
const Pricing = React.lazy(() => import("@/components/site/Pricing").then(m => ({ default: m.Pricing })));
const FAQ = React.lazy(() => import("@/components/site/FAQ").then(m => ({ default: m.FAQ })));
const CTA = React.lazy(() => import("@/components/site/CTA").then(m => ({ default: m.CTA })));
const Footer = React.lazy(() => import("@/components/site/Footer").then(m => ({ default: m.Footer })));

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        {/* Above the fold (eager loaded) */}
        <HeroSection />
        <LogosSection />
        
        {/* Below the fold (lazy loaded) */}
        <Suspense fallback={<div className="h-24 w-full bg-background" />}>
          <Studios />
          <FUIBentoGrid />
          <Method />
          <UpskillingProgram />
          <AISolutions />
          <Impact />
          <Stats />
          <Testimonials />
          <Community />
          <Pricing />
          <FAQ />
          <CTA />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
