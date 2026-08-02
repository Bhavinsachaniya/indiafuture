import { HeroSection } from "@/components/ui/hero-1";
import FUIBentoGrid from "@/components/ui/bento";
import { Studios } from "@/components/site/Studios";
import { WhyIndiaFutureBento } from "@/components/site/WhyIndiaFutureBento";
import { LearningMethodologySection } from "@/components/site/method/LearningMethodologySection";
import { ProgramOfferingsSection } from "@/components/site/ProgramOfferingsSection";
import { UpskillingProgram } from "@/components/site/UpskillingProgram";
import { AISolutions } from "@/components/site/AISolutions";
import { ImpactMetricsSection } from "@/components/site/ImpactMetricsSection";
import { Stats } from "@/components/site/Stats";
import { IndustryTestimonialsSection } from "@/components/site/IndustryTestimonialsSection";
import { WallOfLoveSection } from "@/components/site/WallOfLoveSection";
import { Community } from "@/components/site/Community";
import { Pricing } from "@/components/site/Pricing";
import { FAQ } from "@/components/site/FAQ";
import { CTA } from "@/components/site/CTA";
import { ProjectShowcaseSection } from "@/components/site/ProjectShowcaseSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main>
        <HeroSection />
        <Stats />
        <ProgramOfferingsSection />
        <LearningMethodologySection />
        <ProjectShowcaseSection />
        {/*  <UpskillingProgram /> */}
        {/*  <AISolutions /> */}

        <ImpactMetricsSection />

        <IndustryTestimonialsSection />
        <WallOfLoveSection />
        {/*  <Community /> */}
        {/* <Pricing /> */}
        <FAQ />

        <CTA />
      </main>
    </div>
  );
}
