/**
 * Feature List Component (Client)
 *
 * Displays project features as numbered cards in a responsive grid.
 * Each feature has a title and description, presented with a visual
 * numbering system for clear hierarchy.
 *
 * Responsibilities:
 * - Render features in a 1-2 column responsive grid
 * - Provide numbered indicators for each feature
 * - Maintain visual consistency with the card-based design system
 * - Resolve localized strings (pt/en) based on the active language
 *
 * Notes:
 * - Client Component because it uses useLanguage to resolve localized fields.
 */

"use client"

import type { Feature } from "@/types/projects"
import { useLanguage } from "@/hooks/use-language"

type FeatureListProps = {
  features: Feature[]
}

export function FeatureList({ features }: FeatureListProps) {
  const { language } = useLanguage()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {features.map((feature, index) => (
        <div
          key={feature.title[language]}
          className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card hover:border-border hover:shadow-sm transition-all duration-200"
        >
          <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/10 text-primary font-bold text-sm shrink-0">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="min-w-0">
            <h3 className="font-semibold text-foreground text-sm">
              {feature.title[language]}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed mt-1">
              {feature.description[language]}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
