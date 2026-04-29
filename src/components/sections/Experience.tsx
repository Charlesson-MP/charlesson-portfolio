"use client"

import { experiences } from '@/data/experience'
import { useLanguage } from '@/hooks/use-language'
import { useTranslation } from '@/hooks/use-translation'

export function Experience() {
  const { language } = useLanguage()
  const t = useTranslation()

  return (
    <section id="experiencia" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
            {t.experience.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-12">
            {t.experience.subtitle}
          </h3>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 last:border-l-transparent"
              >
                <div className="absolute left-0 top-0 w-3 h-3 -translate-x-[7px] rounded-full bg-primary" />
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground font-medium">
                    {exp.period}
                  </p>
                  <h4 className="text-lg font-semibold text-foreground">
                    {exp.title[language]}
                  </h4>
                  <p className="text-primary font-medium">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description[language]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}