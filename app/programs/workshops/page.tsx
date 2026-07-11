"use client";
import { programsConfig } from "@/config/programs";

import { ProgramHero } from "@/components/programs/ProgramHero";
import { TrustedBy } from "@/components/programs/TrustedBy";
import { WhyProgramExists } from "@/components/programs/WhyProgramExists";
import { WhatYouWillLearn } from "@/components/programs/custom/WhatYouWillLearn";
import { CurriculumTimeline } from "@/components/programs/CurriculumTimeline";
import { LiveProjects } from "@/components/programs/LiveProjects";
import { LearningExperience } from "@/components/programs/LearningExperience";
import { ProgramOutcomes } from "@/components/programs/ProgramOutcomes";
import { IndustryTestimonialsSection } from "@/components/site/IndustryTestimonialsSection";
import { FAQ } from "@/components/site/FAQ";
import { ProgramCTA } from "@/components/programs/ProgramCTA";
import { ExperienceAndOutcomes } from "@/components/programs/custom/ExperienceAndOutcomes";
import { ExperienceAndOutcomes1 } from "@/components/programs/workshops/ExperienceAndOutcomes1";

export default function CustomProgramPage() {
  const data = programsConfig.custom;

  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
      <main className="flex-1 flex flex-col pt-20">
        <ProgramHero data={data} />
        <ExperienceAndOutcomes />
        {/*  <TrustedBy /> */}
        {/*     <WhyProgramExists data={data} /> */}
        <WhatYouWillLearn />
        {/* <CurriculumTimeline data={data} />
        <LiveProjects data={data} />
        <LearningExperience data={data} /> */}
        {/* <ProgramOutcomes data={data} /> */}
        {/*  <IndustryTestimonialsSection />
        <FAQ /> */}
        <ExperienceAndOutcomes1 />
        <ProgramCTA data={data} />
      </main>
    </div>
  );
}
