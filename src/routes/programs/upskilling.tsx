import { createFileRoute } from "@tanstack/react-router";

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
import { FAQ } from "@/components/site/FAQ";
import { ProgramCTA } from "@/components/programs/ProgramCTA";

export const Route = createFileRoute("/programs/upskilling")({
  component: UpskillingProgramPage,
});

function UpskillingProgramPage() {
  const data = programsConfig.upskilling;

  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
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
        <FAQ />
        <ProgramCTA data={data} />
      </main>
</div>
  );
}
