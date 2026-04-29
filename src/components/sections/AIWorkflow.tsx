/**
 * AI Workflow Section
 *
 * Showcases how AI tools are integrated into the development process
 * to improve productivity, code quality, and problem-solving.
 *
 * Content is driven by structured data, ensuring consistency
 * and easy maintenance across the application.
 */

import { aiUseCases } from "@/data/aiWorkFlow"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/hooks/use-translation"
import { Bot } from "lucide-react"

export function AIWorkflow() {
  const { language } = useLanguage()
  const t = useTranslation()

  return (
    <section id="ia-workflow" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4 text-center">
            {t.iaWorkFlow.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center text-balance">
            {t.iaWorkFlow.subtitle}
          </h3>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-center text-pretty">
            {t.iaWorkFlow.description}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {aiUseCases.map((useCase) => (
              <div
                key={useCase.title[language]}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary w-fit mb-4">
                  <useCase.icon className="h-5 w-5" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {useCase.title[language]}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {useCase.description[language]}
                </p>
              </div>
            ))}
          </div>

          <div className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 border border-border">
            <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">
                {t.iaWorkFlow.title2}
              </h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {t.iaWorkFlow.description2}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}