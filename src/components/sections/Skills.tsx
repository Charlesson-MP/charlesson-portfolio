/**
 * Skills Section
 *
 * Displays categorized technical skills using reusable Card components.
 * Each category contains a list of skills with icons and descriptions.
 *
 * Responsibilities:
 * - Render skill categories and their respective items
 * - Display icons, names, and descriptions for each skill
 * - Integrate with the global i18n system for multilingual support
 *
 * Data Handling:
 * - Skill data is sourced from /data/skills.ts
 * - Translatable fields (e.g., category titles and descriptions)
 *   are structured per language (pt/en)
 * - The current language is obtained via useLanguage()
 *
 * i18n Integration:
 * - Uses useTranslation() for section-level UI text (titles, subtitles)
 * - Uses useLanguage() to select localized content from the dataset
 *
 * Notes:
 * - Marked as "use client" because it depends on React hooks and context
 * - Designed to be easily extendable with new categories or skills
 */

"use client"

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/Tooltip"
import { Card } from "@/components/ui/Card"
import { Skill } from "@/types/skills"
import { skillCategories } from "@/data/skills"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/hooks/use-translation"
import type { Language } from "@/locales"


function SkillCard({ skill, language }: { skill: Skill; language: Language }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className="group flex items-center gap-3 px-4 py-3 bg-card border border-border hover:border-primary/30 hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-default">
          <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
            <skill.icon className="h-6 w-6"/>
          </span>
          <span className="text-sm font-medium text-foreground">
            {skill.name[language]}
          </span>
        </Card>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        sideOffset={8}
        className="max-w-[220px] px-3 py-2 text-sm leading-relaxed text-center bg-card text-card-foreground border border-border shadow-lg rounded-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-150"
      >
        <p>{skill.description[language]}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export function Skills() {
  const { language } = useLanguage()
  const t = useTranslation()

  return (
    <TooltipProvider delayDuration={100}>
      <section id="habilidades" className="py-16 md:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mb-12">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
              {t.skills.title}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              {t.skills.subtitle}
            </h3>
            <p className="text-muted-foreground max-w-2xl">
              {t.skills.hint}
            </p>
          </div>

          <div className="space-y-12">
            {skillCategories.map((category) => (
              <div key={category.title.en}>
                <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary/50" />
                  {category.title[language]}
                </h4>
                <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4">
                  {category.skills.map((skill) => (
                    <SkillCard key={skill.name.en} skill={skill} language={language} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}