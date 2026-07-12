"use client";
import { programsConfig } from "@/config/programs";

import { ProgramHero } from "@/components/programs/custom/ProgramHero";
import { PracticalAutomations } from "@/components/programs/custom/PracticalAutomations";
import { Industries } from "@/components/programs/custom/Industries";
import { TrustedBy } from "@/components/programs/TrustedBy";
import { WhyProgramExists } from "@/components/programs/WhyProgramExists";
import { WhatYouWillLearn } from "@/components/programs/WhatYouWillLearn";
import { CurriculumTimeline } from "@/components/programs/CurriculumTimeline";
import { LiveProjects } from "@/components/programs/LiveProjects";
import { LearningExperience } from "@/components/programs/LearningExperience";
import { ProgramOutcomes } from "@/components/programs/ProgramOutcomes";
import { IndustryTestimonialsSection } from "@/components/site/IndustryTestimonialsSection";
import { FAQ } from "@/components/site/FAQ";
import { ProgramCTA } from "@/components/programs/custom/ProgramCTA";
import { ExperienceAndOutcomes } from "@/components/programs/custom/ExperienceAndOutcomes";

export default function WorkshopsProgramPage() {
  const data = programsConfig.workshops;

  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
      <main className="flex-1 flex flex-col pt-20">
        <ProgramHero data={data} />
        <PracticalAutomations />
        <Industries />
        {/* <TrustedBy /> */}
        <ExperienceAndOutcomes />
        {/* <WhyProgramExists data={data} />
        <WhatYouWillLearn data={data} />
        <CurriculumTimeline data={data} />
        <LiveProjects data={data} />
        <LearningExperience data={data} />
        <ProgramOutcomes data={data} /> */}
        <IndustryTestimonialsSection />
        {/*    <FAQ /> */}
        <ProgramCTA data={data} />
      </main>
    </div>
  );
}
