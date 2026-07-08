import React from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

// Data
import { programsConfig } from "@/config/programs";

// Reusable Program Components
import { ProgramHero } from "@/components/programs/ProgramHero";
import { TrustedBy } from "@/components/programs/TrustedBy";
import { WhyProgramExists } from "@/components/programs/WhyProgramExists";

const WhatYouWillLearn = React.lazy(() => import("@/components/programs/WhatYouWillLearn").then(m => ({ default: m.WhatYouWillLearn })));
const CurriculumTimeline = React.lazy(() => import("@/components/programs/CurriculumTimeline").then(m => ({ default: m.CurriculumTimeline })));
const LiveProjects = React.lazy(() => import("@/components/programs/LiveProjects").then(m => ({ default: m.LiveProjects })));
const LearningExperience = React.lazy(() => import("@/components/programs/LearningExperience").then(m => ({ default: m.LearningExperience })));
const ProgramOutcomes = React.lazy(() => import("@/components/programs/ProgramOutcomes").then(m => ({ default: m.ProgramOutcomes })));
const Testimonials = React.lazy(() => import("@/components/site/Testimonials").then(m => ({ default: m.Testimonials })));
const ProgramFAQ = React.lazy(() => import("@/components/programs/ProgramFAQ").then(m => ({ default: m.ProgramFAQ })));
const ProgramCTA = React.lazy(() => import("@/components/programs/ProgramCTA").then(m => ({ default: m.ProgramCTA })));

export const Route = createFileRoute("/programs/masterclasses")({
  component: MasterclassesPage,
});

function MasterclassesPage() {
  const data = programsConfig.masterclasses;

  return (
    <div className="min-h-screen bg-surface text-ink font-sans flex flex-col selection:bg-brand/20 selection:text-brand">
      <Nav theme="light" />
      
      <main className="flex-1 flex flex-col pt-20">
        <ProgramHero data={data} />
        <TrustedBy />
        <WhyProgramExists data={data} />
        
        <React.Suspense fallback={<div className="h-24 w-full bg-surface" />}>
          <WhatYouWillLearn data={data} />
          <CurriculumTimeline data={data} />
          <LiveProjects data={data} />
          <LearningExperience data={data} />
          <ProgramOutcomes data={data} />
          <Testimonials />
          <ProgramFAQ data={data} />
          <ProgramCTA data={data} />
        </React.Suspense>
      </main>
      
      <Footer />
    </div>
  );
}
