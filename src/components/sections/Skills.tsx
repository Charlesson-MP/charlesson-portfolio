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



function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Card className="group flex items-center gap-3 px-4 py-3 bg-card border border-border hover:border-primary/30 hover:shadow-md hover:scale-[1.02] transition-all duration-200 cursor-default">
          <span className="text-muted-foreground group-hover:text-primary transition-colors duration-200">
            <skill.icon className="h-5 w-5"/>
          </span>
          <span className="text-sm font-medium text-foreground">
            {skill.name}
          </span>
        </Card>
      </TooltipTrigger>
      <TooltipContent 
        side="top" 
        sideOffset={8}
        className="max-w-[220px] px-3 py-2 text-sm leading-relaxed text-center bg-card text-card-foreground border border-border shadow-lg rounded-lg animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 duration-150"
      >
        <p>{skill.description}</p>
      </TooltipContent>
    </Tooltip>
  )
}

export function Skills() {
  return (
    <TooltipProvider delayDuration={100}>
      <section id="habilidades" className="py-10 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
              Habilidades
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Tecnologias e ferramentas que utilizo
            </h3>
            <p className="text-muted-foreground mb-12 max-w-2xl">
              Passe o mouse sobre cada habilidade para ver como a utilizo no dia a dia.
            </p>

            <div className="space-y-12">
              {skillCategories.map((category) => (
                <div key={category.title}>
                  <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                    <span className="w-8 h-px bg-primary/50" />
                    {category.title}
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                    {category.skills.map((skill) => (
                      <SkillCard key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}