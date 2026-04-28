/**
 * About Section
 *
 * Presents the developer's professional background and journey into frontend development.
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
