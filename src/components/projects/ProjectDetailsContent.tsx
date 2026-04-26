/**
 * Project Details Content (Client Component)
 *
 * Renders the full content body of a project detail page.
 * Extracted from page.tsx to isolate client-side i18n logic
 * (useLanguage, useTranslation) away from the Server Component page shell.
 *
 * Responsibilities:
 * - Resolve all localized strings based on the active language
 * - Compose all project detail sections (hero, problem, solution, etc.)
 * - Use section titles from locale files (t.projects.sections)
 * - Provide the "Back to Projects" navigation CTA
 *
 * Architecture Notes:
 * - This is a Client Component because it depends on useLanguage/useTranslation.
 * - The parent page.tsx remains a Server Component for generateMetadata/generateStaticParams.
 * - Project data is passed as a serialized prop from the server.
 * - Section titles come from locale files, NOT from project data (avoids repetition).
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
  Terminal,
  Layers,
  Star,
} from "lucide-react"

import type { ProjectDetails } from "@/types/projects"
import { ProjectHero } from "@/components/projects/ProjectHero"
import { SectionBlock } from "@/components/projects/SectionBlock"
import { TechStack } from "@/components/projects/TechStack"
import { FeatureList } from "@/components/projects/FeatureList"
import { CopyCommandBlock } from "@/components/projects/CopyCommandBlock"
import { ProjectStructureBlock } from "@/components/projects/ProjectStructureBlock"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/hooks/use-translation"

type ProjectDetailsContentProps = {
  project: ProjectDetails
}

export function ProjectDetailsContent({ project }: ProjectDetailsContentProps) {
  const { language } = useLanguage()
  const t = useTranslation()

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <ProjectHero project={project} />

      {/* Content Sections */}
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Divider */}
        <hr className="border-border/50" />

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

        <hr className="border-border/50" />

        {/* How to Run */}
        <SectionBlock title={t.projects.sections.howToRun} icon={Terminal} id="how-to-run">
          <CopyCommandBlock commands={project.commands} />
        </SectionBlock>

        {/* Bottom Navigation */}
        <div className="flex justify-center py-12 md:py-16">
          <a
            href="/#projetos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span>{t.projects.CTATitleProjectDetails}</span>
          </a>
        </div>
      </div>
    </article>
  )
}
