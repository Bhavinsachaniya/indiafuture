import React from "react";
import { cn } from "@/lib/utils";

export function HighlightText({ 
  children, 
  className 
}: { 
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("relative inline-block border border-brand bg-brand/10 px-3 py-1 mx-2 align-middle overflow-visible", className)}>
      <span className="absolute -top-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
      <span className="absolute -top-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
      <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-brand border border-brand"></span>
      <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-brand border border-brand"></span>
      {children}
    </span>
  );
}
