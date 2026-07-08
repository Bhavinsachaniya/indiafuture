import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

// Data
import { programsConfig } from "@/config/programs";

// Reusable Program Components
import { ProgramHero } from "@/components/programs/ProgramHero";
import { TrustedBy } from "@/components/programs/TrustedBy";
import { WhyProgramExists } from "@/components/programs/WhyProgramExists";
import { WhatYouWillLearn } from "@/components/programs/WhatYouWillLearn";
import { CurriculumTimeline } from "@/components/programs/CurriculumTimeline";
import { LiveProjects } from "@/components/programs/LiveProjects";
import { LearningExperience } from "@/components/programs/LearningExperience";
import { ProgramOutcomes } from "@/components/programs/ProgramOutcomes";
import { Testimonials } from "@/components/site/Testimonials";
import { ProgramFAQ } from "@/components/programs/ProgramFAQ";
import { ProgramCTA } from "@/components/programs/ProgramCTA";

export const Route = createFileRoute("/programs/workshops")({
  component: WorkshopsProgramPage,
});

function WorkshopsProgramPage() {
  const data = programsConfig.workshops;

  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
      <Nav theme="light" />
      
      <main className="flex-1 flex flex-col pt-20">
        <ProgramHero data={data} />
        <TrustedBy />
        <WhyProgramExists data={data} />
        <WhatYouWillLearn data={data} />
        <CurriculumTimeline data={data} />
        <LiveProjects data={data} />
        <LearningExperience data={data} />
        <ProgramOutcomes data={data} />
        <Testimonials />
        <ProgramFAQ data={data} />
        <ProgramCTA data={data} />
      </main>
      
      <Footer />
    </div>
  );
}
