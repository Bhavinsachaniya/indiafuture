"use client";
import { programsConfig } from "@/config/programs";

import { ProgramHero } from "@/components/programs/ProgramHero";
import { TrustedBy } from "@/components/programs/TrustedBy";
import { WhyProgramExists } from "@/components/programs/WhyProgramExists";
import { WhatYouWillLearn } from "@/components/programs/WhatYouWillLearn";
import { CurriculumTimeline } from "@/components/programs/CurriculumTimeline";
import { LiveProjects } from "@/components/programs/LiveProjects";
import { LearningExperience } from "@/components/programs/LearningExperience";
import { ProgramOutcomes } from "@/components/programs/ProgramOutcomes";
import { IndustryTestimonialsSection } from "@/components/site/IndustryTestimonialsSection";
import { FAQ } from "@/components/site/FAQ";
import { ProgramCTA } from "@/components/programs/ProgramCTA";
import { ExperienceAndOutcomes } from "@/components/programs/upskilling/ExperienceAndOutcomes";
import { CareerAndMentors } from "@/components/programs/upskilling/CareerAndMentors";

export default function MasterclassesPage() {
  const data = programsConfig.masterclasses;

  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
      <main className="flex-1 flex flex-col pt-20">
        <ProgramHero data={data} />
        {/*         <TrustedBy /> */}
        <WhyProgramExists data={data} />
        {/*   <WhatYouWillLearn data={data} /> */}
        <CurriculumTimeline data={data} />
        <ExperienceAndOutcomes />

        {/* <LiveProjects data={data} /> */}
        {/* <LearningExperience data={data} /> */}
        {/*   <ProgramOutcomes data={data} /> */}
        {/* <IndustryTestimonialsSection /> */}
        {/*    <FAQ /> */}
        <ProgramCTA data={data} />
      </main>
    </div>
  );
}
