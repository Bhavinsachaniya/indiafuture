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
import { FinalCTA } from "@/components/programs/upskilling/FinalCTA";

export const Route = createFileRoute("/programs/ai-upskilling")({
  component: AIUpskillingPage,
});

function AIUpskillingPage() {
  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
      <Nav theme="light" />
      
      <main className="flex-1 flex flex-col pt-20">
        <HeroAndSnapshot />
        
        <div className="relative">
          <OverviewAndCurriculum />
          <ProjectsAndTools />
          <ExperienceAndOutcomes />
          <CareerAndMentors />
          <CertificateAndFAQ />
          <FinalCTA />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
