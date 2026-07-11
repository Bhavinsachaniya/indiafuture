"use client";
import { ProgramHero } from "@/components/programs/ProgramHero";
import { programsConfig } from "@/config/programs";

import { OverviewAndCurriculum } from "@/components/programs/upskilling/OverviewAndCurriculum";
import { ProjectsAndTools } from "@/components/programs/upskilling/ProjectsAndTools";
import { ExperienceAndOutcomes } from "@/components/programs/upskilling/ExperienceAndOutcomes";
import { CareerAndMentors } from "@/components/programs/upskilling/CareerAndMentors";
import { CertificateAndFAQ } from "@/components/programs/upskilling/CertificateAndFAQ";
import { FinalCTA } from "@/components/programs/upskilling/FinalCTA";

import { WhyProgramExists } from "@/components/programs/WhyProgramExists";
import { WhatYouWillLearn } from "@/components/programs/WhatYouWillLearn";
import { IndustryTestimonialsSection } from "@/components/site/IndustryTestimonialsSection";
import { UpskillingProgram } from "@/components/site/UpskillingProgram";
import { ProjectShowcaseSection } from "@/components/site/ProjectShowcaseSection";
import { FAQ } from "@/components/site/FAQ";

export default function AIUpskillingPage() {
  const data = programsConfig.upskilling;

  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
      <main className="flex-1 flex flex-col pt-20">
        <ProgramHero data={data} />

        <div className="relative">
          <WhyProgramExists data={data} />
          <UpskillingProgram />
          {/*     <WhatYouWillLearn data={data} /> */}
          <OverviewAndCurriculum />
          {/*  <ProjectShowcaseSection /> */}
          {/*  <ProjectsAndTools /> */}
          {/*  <ExperienceAndOutcomes /> */}
          {/*  <CareerAndMentors /> */}
          {/*   <CertificateAndFAQ /> */}
          {/*  <FAQ /> */}
          {/* <IndustryTestimonialsSection /> */}
          <FinalCTA />
        </div>
      </main>
    </div>
  );
}
