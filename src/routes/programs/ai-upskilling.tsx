import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

// Custom Upskilling Components
import { HeroAndSnapshot } from "@/components/programs/upskilling/HeroAndSnapshot";
import { OverviewAndCurriculum } from "@/components/programs/upskilling/OverviewAndCurriculum";
import { ProjectsAndTools } from "@/components/programs/upskilling/ProjectsAndTools";
import { ExperienceAndOutcomes } from "@/components/programs/upskilling/ExperienceAndOutcomes";
import { CareerAndMentors } from "@/components/programs/upskilling/CareerAndMentors";
import { CertificateAndFAQ } from "@/components/programs/upskilling/CertificateAndFAQ";
import { FinalCTA, StickyWidget } from "@/components/programs/upskilling/FinalCTA";

export const Route = createFileRoute("/programs/ai-upskilling")({
  component: AIUpskillingPage,
});

function AIUpskillingPage() {
  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
      <Nav theme="light" />
      
      <main className="flex-1 flex flex-col pt-20">
        <HeroAndSnapshot />
        
        {/* Main Content Area */}
        <div className="relative">
          
          {/* 
            The Sticky Widget floats on the right side of the viewport on large screens. 
            We position it absolutely/fixed relative to the page. 
          */}
          <div className="hidden xl:block fixed top-32 right-8 2xl:right-[calc(50%-700px)] z-50">
            <StickyWidget />
          </div>
          
          {/* Full-width sections */}
          <div className="xl:pr-[360px] max-w-[1600px] mx-auto">
            <OverviewAndCurriculum />
            <ProjectsAndTools />
            <ExperienceAndOutcomes />
            <CareerAndMentors />
            <CertificateAndFAQ />
          </div>
          
          <FinalCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
