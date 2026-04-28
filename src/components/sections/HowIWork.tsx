/**
 * HowIWork Section
 *
 * Displays the "How I Work" process section.
 */

"use client"

import { useState } from "react"
import { processSteps } from "@/data/process"
import { MobileStepCard } from "../ui/MobileStepCard"
import { DesktopStepCard } from "../ui/DesktopStepCard"
import { useTranslation } from "@/hooks/use-translation"

export function HowIWork() {
  const [openStep, setOpenStep] = useState<string | null>(null)
  const t = useTranslation()

  const handleToggle = (stepNumber: string) => {
    setOpenStep(openStep === stepNumber ? null : stepNumber)
  }

  return (
    <section id="como-trabalho" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
            {t.howIWork.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.howIWork.subtitle}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty leading-relaxed">
            {t.howIWork.description}
          </p>
        </div>

        {/* Mobile: Accordion layout */}
        <div className="lg:hidden max-w-lg mx-auto">
          <div className="flex flex-col gap-4">
            {processSteps.map((step) => (
              <MobileStepCard
                key={step.number}
                step={step}
                isOpen={openStep === step.number.toString()}
                onToggle={() => handleToggle(step.number.toString())}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Zig-zag timeline layout */}
        <div className="hidden lg:block max-w-5xl mx-auto">
          <div className="relative">
            {processSteps.map((step, index) => (
              <DesktopStepCard
                key={step.number}
                step={step}
                isLast={index === processSteps.length - 1}
                isEven={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}