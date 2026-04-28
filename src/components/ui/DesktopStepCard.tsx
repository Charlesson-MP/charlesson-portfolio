/**
 * DesktopStepCard Component
 *
 * Displays a timeline step card for the "How I Work" section on desktop layouts.
 *
 * Renders step content in an alternating zig-zag timeline format.
 */

import { processSteps } from "@/data/process";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/hooks/use-language";

function DesktopStepCard({ 
  step, 
  isLast,
  isEven
}: { 
  step: typeof processSteps[0]
  isLast: boolean
  isEven: boolean
}) {

  const { language } = useLanguage()

  return (
    <div className={cn(
      "relative flex gap-8",
      isEven ? "flex-row-reverse" : ""
    )}>
      {/* Timeline connector */}
      <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center h-full">
        {/* Step number circle */}
        <div className="relative z-10 flex items-center justify-center w-14 h-14 rounded-full bg-card border-2 border-primary/30 text-primary font-bold text-sm shadow-md shrink-0">
          {step.number}
        </div>
        {/* Connecting line */}
        {!isLast && (
          <div className="flex-1 w-0 border-l-2 border-dashed border-primary/30 my-2" />
        )}
      </div>

      {/* Content card - alternating sides */}
      <div className={cn(
        "w-[calc(50%-2rem)] pb-10",
        isEven ? "pr-0 pl-8" : "pl-0 pr-8"
      )}>
        <div className="group p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all duration-300">
          <div className="flex items-start gap-5">
            <div className="p-3 rounded-xl bg-primary/10 text-primary shrink-0">
              {step.icon ? <step.icon className="h-5 w-5" /> : null}
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-xs font-semibold text-muted-foreground tracking-wide mb-1 block">
                Passo {step.number}
              </span>
              <h4 className="font-bold text-foreground mb-3 text-lg">
                {step.title[language]}
              </h4>
              <p className="text-muted-foreground leading-relaxed text-pretty max-w-md">
                {step.description[language]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer for the other side */}
      <div className="w-[calc(50%-2rem)]" />
    </div>
  )
}

export { DesktopStepCard }