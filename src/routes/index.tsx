import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { HeroSection, LogosSection } from "@/components/ui/hero-1";
import FUIBentoGrid from "@/components/ui/bento";
import { Studios } from "@/components/site/Studios";
import { Method } from "@/components/site/method/Method";
import { UpskillingProgram } from "@/components/site/UpskillingProgram";
import { AISolutions } from "@/components/site/AISolutions";
import { Impact } from "@/components/site/Impact";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Community } from "@/components/site/Community";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";
import { StudentShowcaseSection } from "@/components/site/StudentShowcaseSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <HeroSection />
        <LogosSection />
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
        <StudentShowcaseSection />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
