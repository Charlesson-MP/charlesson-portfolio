/**
 * MobileStepCard Component
 *
 * Displays a collapsible step card for the "How I Work" section on mobile devices.
 *
 * Handles expand/collapse interaction and renders step content (icon, title, description).
 */

import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

function MobileStepCard({ 
  step,
  isOpen,
  onToggle
}: { 
  step: typeof processSteps[0]
  isOpen: boolean
  onToggle: () => void
}) {
  
  const { language } = useLanguage()

  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={cn(
          "w-full p-5 rounded-2xl bg-card border text-left transition-all duration-300",
          isOpen 
            ? "border-primary/30 shadow-lg" 
            : "border-border shadow-sm hover:shadow-md hover:border-primary/20"
        )}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="text-xs font-semibold text-muted-foreground tracking-wide">
              {step.number}
            </span>
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              {step.icon ? <step.icon className="h-4 w-4" /> : null}
            </div>
            <h4 className="font-semibold text-foreground">
              {step.title[language]}
            </h4>
          </div>
          <ChevronDown 
            className={cn(
              "h-5 w-5 text-muted-foreground shrink-0 transition-transform duration-300",
              isOpen && "rotate-180"
            )} 
          />
        </div>
        
        <div
          className={cn(
            "grid transition-all duration-300 ease-in-out",
            isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <p className="text-muted-foreground leading-relaxed text-sm text-pretty pl-[72px]">
              {step.description[language]}
            </p>
          </div>
        </div>
      </button>
    </div>
  )
}

export { MobileStepCard }
