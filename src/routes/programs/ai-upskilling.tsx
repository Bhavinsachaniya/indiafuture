import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { WhyProgramExists } from "@/components/programs/WhyProgramExists";

import { ProgramHero } from "@/components/programs/ProgramHero";
import { programsConfig } from "@/config/programs";

// Custom Upskilling Components
const OverviewAndCurriculum = React.lazy(() => import("@/components/programs/upskilling/OverviewAndCurriculum").then(m => ({ default: m.OverviewAndCurriculum })));
const ProjectsAndTools = React.lazy(() => import("@/components/programs/upskilling/ProjectsAndTools").then(m => ({ default: m.ProjectsAndTools })));
const ExperienceAndOutcomes = React.lazy(() => import("@/components/programs/upskilling/ExperienceAndOutcomes").then(m => ({ default: m.ExperienceAndOutcomes })));
const CareerAndMentors = React.lazy(() => import("@/components/programs/upskilling/CareerAndMentors").then(m => ({ default: m.CareerAndMentors })));
const CertificateAndFAQ = React.lazy(() => import("@/components/programs/upskilling/CertificateAndFAQ").then(m => ({ default: m.CertificateAndFAQ })));
const FinalCTA = React.lazy(() => import("@/components/programs/upskilling/FinalCTA").then(m => ({ default: m.FinalCTA })));

const WhatYouWillLearn = React.lazy(() => import("@/components/programs/WhatYouWillLearn").then(m => ({ default: m.WhatYouWillLearn })));
const Testimonials = React.lazy(() => import("@/components/site/Testimonials").then(m => ({ default: m.Testimonials })));

export const Route = createFileRoute("/programs/ai-upskilling")({
  component: AIUpskillingPage,
});

function AIUpskillingPage() {
  const data = programsConfig.upskilling;

  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
      <Nav theme="light" />
      
      <main className="flex-1 flex flex-col pt-20">
        <ProgramHero data={data} />
        
        <div className="relative">
          <WhyProgramExists data={data} />
          
          <React.Suspense fallback={<div className="h-24 w-full bg-surface" />}>
            <WhatYouWillLearn data={data} />
            <OverviewAndCurriculum />
            <ProjectsAndTools />
            <ExperienceAndOutcomes />
            <CareerAndMentors />
            <CertificateAndFAQ />
            <Testimonials />
            <FinalCTA />
          </React.Suspense>
        </div>
      </main>
      
      <React.Suspense fallback={null}>
        <Footer />
      </React.Suspense>
    </div>
  );
}
