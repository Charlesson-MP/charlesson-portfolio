/**
 * About Section
 *
 * Presents a concise overview of the developer’s background, experience, and professional focus.
 * This section communicates the transition into frontend development, highlighting both technical
 * skills and user-centered thinking.
 *
 * Responsibilities:
 * - Display a brief professional narrative (background and transition into tech)
 * - Highlight key strengths such as problem-solving, attention to detail, and UX awareness
 * - Reinforce experience with real projects and modern development practices
 *
 * Content Strategy:
 * - Structured in short, readable paragraphs for better scanning
 * - Focuses on clarity and authenticity, avoiding overly generic statements
 * - Balances technical skills with design and user experience perspective
 *
 * Behavior:
 * - Static content (no dynamic state or interactivity)
 * - Acts as an anchor target for navigation (id="sobre")
 *
 * Layout:
 * - Centered container with controlled max-width for readability
 * - Vertical spacing optimized for comfortable reading
 *
 * Notes:
 * - Designed to support scroll-based navigation (scroll spy)
 * - Content can be easily adapted for i18n in future iterations
 */
"use client"

import { useTranslation } from "@/hooks/use-translation"

export function About() {

  const t = useTranslation()

  return (
    <section id="sobre" className="py-16 md:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
            {t.about.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            {t.about.subtitle}
          </h3>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {t.about.resume1}
            </p>

            <p>
              {t.about.resume2}
            </p>

            <p>
              {t.about.resume3}
            </p>

            <p>
              {t.about.resume4}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
