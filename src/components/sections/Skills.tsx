/**
 * Skills Section
 *
 * Displays categorized technical skills with icons, names, and
 * interactive popovers for descriptions. Data sourced from /data/skills.ts.
 */

"use client"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"
import { Card } from "@/components/ui/Card"
import { Skill } from "@/types/skills"
import { skillCategories } from "@/data/skills"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/hooks/use-translation"
import type { Language } from "@/locales"
import { Info } from "lucide-react"


function SkillCard({ skill, language }: { skill: Skill; language: Language }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Card className="group relative flex items-center gap-3 px-4 py-3 bg-card border border-border hover:border-primary/50 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
          <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
            <skill.icon className="h-6 w-6"/>
          </span>
          <span className="text-sm font-medium text-foreground">
            {skill.name[language]}
          </span>
          <Info className="absolute top-1.5 right-1.5 h-3.5 w-3.5 text-primary/40 group-hover:text-primary transition-colors" />
        </Card>
      </PopoverTrigger>
      <PopoverContent 
        side="top" 
        sideOffset={8}
        className="max-w-[240px] px-4 py-3 text-sm leading-relaxed text-center text-card-foreground border border-border shadow-xl rounded-xl animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-200"
      >
        <p className="font-semibold mb-1 text-primary">{skill.name[language]}</p>
        <p className="text-muted-foreground">{skill.description[language]}</p>
      </PopoverContent>
    </Popover>
  )
}

export function Skills() {
  const { language } = useLanguage()
  const t = useTranslation()

  return (
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
  )
}
