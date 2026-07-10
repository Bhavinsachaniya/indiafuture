import { createFileRoute } from "@tanstack/react-router";



import { ProgramHero } from "@/components/programs/ProgramHero";
import { programsConfig } from "@/config/programs";

// Custom Upskilling Components
import { OverviewAndCurriculum } from "@/components/programs/upskilling/OverviewAndCurriculum";
import { ProjectsAndTools } from "@/components/programs/upskilling/ProjectsAndTools";
import { ExperienceAndOutcomes } from "@/components/programs/upskilling/ExperienceAndOutcomes";
import { CareerAndMentors } from "@/components/programs/upskilling/CareerAndMentors";
import { CertificateAndFAQ } from "@/components/programs/upskilling/CertificateAndFAQ";
import { FinalCTA } from "@/components/programs/upskilling/FinalCTA";

import { WhyProgramExists } from "@/components/programs/WhyProgramExists";
import { WhatYouWillLearn } from "@/components/programs/WhatYouWillLearn";
import { Testimonials } from "@/components/site/Testimonials";

export const Route = createFileRoute("/programs/ai-upskilling")({
  component: AIUpskillingPage,
});

function AIUpskillingPage() {
  const data = programsConfig.upskilling;

  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
<main className="flex-1 flex flex-col pt-20">
        <ProgramHero data={data} />
        
        <div className="relative">
          <WhyProgramExists data={data} />
          <WhatYouWillLearn data={data} />
          <OverviewAndCurriculum />
          <ProjectsAndTools />
          <ExperienceAndOutcomes />
          <CareerAndMentors />
          <CertificateAndFAQ />
          <Testimonials />
          <FinalCTA />
        </div>
      </main>
</div>
  );
}
