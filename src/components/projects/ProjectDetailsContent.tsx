/**
 * ProjectDetailsContent Component
 *
 * Composes the full project detail page body (hero, sections, navigation).
 * Extracted as a Client Component to isolate i18n hooks from the Server Component page shell.
 */

"use client"

import {
  AlertTriangle,
  Lightbulb,
  Target,
  Zap,
  BookOpen,
  Rocket,
  FolderTree,
  Layers,
  Star,
  Link,
} from "lucide-react"

import type { ProjectDetails } from "@/types/projects"
import { ProjectHero } from "@/components/projects/ProjectHero"
import { SectionBlock } from "@/components/projects/SectionBlock"
import { TechStack } from "@/components/projects/TechStack"
import { FeatureList } from "@/components/projects/FeatureList"
import { ProjectStructureBlock } from "@/components/projects/ProjectStructureBlock"
import { ProjectTOC } from "@/components/projects/ProjectTOC"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/hooks/use-translation"

type ProjectDetailsContentProps = {
  project: ProjectDetails
}

export function ProjectDetailsContent({ project }: ProjectDetailsContentProps) {
  const { language } = useLanguage()
  const t = useTranslation()

  const sections = [
    { id: "problem", title: t.projects.sections.problem },
    { id: "solution", title: t.projects.sections.solution },
    { id: "technologies", title: t.projects.sections.technologies },
    { id: "features", title: t.projects.sections.features },
    { id: "challenges", title: t.projects.sections.challenges },
    { id: "learnings", title: t.projects.sections.learnings },
    { id: "improvements", title: t.projects.sections.improvements },
    { id: "structure", title: t.projects.sections.projectStructure },
  ]

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <ProjectHero project={project} />

      {/* Content Sections */}
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl relative pb-12">
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-12">
          
          <ProjectTOC sections={sections} />

          <div className="flex-1 min-w-0">
            {/* Divider */}
            <hr className="border-border/50 hidden lg:block mb-12" />

            {/* Problem */}
            <SectionBlock title={t.projects.sections.problem} icon={Target} id="problem">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {project.problem[language]}
              </p>
            </SectionBlock>

            <hr className="border-border/50" />

            {/* Solution */}
            <SectionBlock title={t.projects.sections.solution} icon={Lightbulb} id="solution">
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {project.solution[language]}
              </p>
            </SectionBlock>

            <hr className="border-border/50" />

            {/* Technologies */}
            <SectionBlock title={t.projects.sections.technologies} icon={Layers} id="technologies">
              <TechStack items={project.tech} />
            </SectionBlock>

            <hr className="border-border/50" />

            {/* Features */}
            <SectionBlock title={t.projects.sections.features} icon={Star} id="features">
              <FeatureList features={project.features} />
            </SectionBlock>

            <hr className="border-border/50" />

            {/* Challenges */}
            <SectionBlock title={t.projects.sections.challenges} icon={AlertTriangle} id="challenges">
              <ul className="space-y-4">
                {project.challenges[language].map((challenge, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-destructive/10 text-destructive text-xs font-bold shrink-0 mt-0.5">
                      {index + 1}
                    </span>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {challenge}
                    </p>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <hr className="border-border/50" />

            {/* Learnings */}
            <SectionBlock title={t.projects.sections.learnings} icon={BookOpen} id="learnings">
              <ul className="space-y-4">
                {project.learnings[language].map((learning, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </span>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {learning}
                    </p>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <hr className="border-border/50" />

            {/* Future Improvements */}
            <SectionBlock title={t.projects.sections.improvements} icon={Rocket} id="improvements">
              <ul className="space-y-4">
                {project.improvements[language].map((improvement, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-accent/20 text-accent-foreground text-xs font-bold shrink-0 mt-0.5">
                      →
                    </span>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                      {improvement}
                    </p>
                  </li>
                ))}
              </ul>
            </SectionBlock>

            <hr className="border-border/50" />

            {/* Project Structure */}
            <SectionBlock title={t.projects.sections.projectStructure} icon={FolderTree} id="structure">
              <ProjectStructureBlock structure={project.projectStructure} />
            </SectionBlock>

            {/* Bottom Navigation */}
        <div className="flex justify-center py-12 md:py-16">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span>{t.projects.CTATitleProjectDetails}</span>
          </Link>
        </div>
          </div>
        </div>
      </div>
    </article>
  )
}
