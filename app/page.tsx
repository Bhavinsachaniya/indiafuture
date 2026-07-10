import { HeroSection } from "@/components/ui/hero-1";
import FUIBentoGrid from "@/components/ui/bento";
import { Studios } from "@/components/site/Studios";
import { WhyIndiaFutureBento } from "@/components/site/WhyIndiaFutureBento";
import { Method } from "@/components/site/method/Method";
import { ProgramsList } from "@/components/site/ProgramsList";
import { UpskillingProgram } from "@/components/site/UpskillingProgram";
import { AISolutions } from "@/components/site/AISolutions";
import { Impact } from "@/components/site/Impact";
import { Stats } from "@/components/site/Stats";
import { Testimonials } from "@/components/site/Testimonials";
import { Community } from "@/components/site/Community";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { StudentShowcaseSection } from "@/components/site/StudentShowcaseSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <HeroSection />
        {/*      <WhyIndiaFutureBento /> */}
        <Stats />
        <ProgramsList />
        <Method />
        <StudentShowcaseSection />
        {/*  <UpskillingProgram /> */}
        {/*  <AISolutions /> */}

        <Impact />

        <Testimonials />
        {/*  <Community /> */}
        {/* <Pricing /> */}
        <FAQ />

        <CTA />
      </main>
    </div>
  );
}
