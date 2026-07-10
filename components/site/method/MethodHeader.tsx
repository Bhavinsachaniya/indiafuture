import React from "react";
import { HighlightText } from "@/components/ui/HighlightText";

export function MethodHeader() {
  return (
    <div className="relative z-10 flex flex-col items-center justify-start w-full text-center px-4 pointer-events-none">
      <div className="max-w-4xl mx-auto pointer-events-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-brand font-semibold flex items-center justify-center gap-4">
            <span className="w-12 h-[1px] bg-brand/40" /> THE METHOD{" "}
            <span className="w-12 h-[1px] bg-brand/40" />
          </p>
        </div>
        <h2 className="mt-3 font-display text-5xl md:text-6xl leading-[1.05] text-balance max-w-4xl mx-auto">
          We don't <em className="italic">teach</em> AI. We help{" "}
          <HighlightText className="text-white tracking-normal">you ship it</HighlightText>.
        </h2>
        <p className="mt-1 text-cream/70 text-lg leading-relaxed max-w-4xl mx-auto">
          Indiafuture is closer to a residency than a course. Every week is a real deliverable,
          reviewed by senior practitioners who work on production AI systems every day.
        </p>
      </div>
    </div>
  );
}
