/**
 * Project Details Page
 *
 * Renders a full case study view for a selected project based on its slug.
 * This is the main entry point for /projects/[slug] routes.
 *
 * Responsibilities:
 * - Resolve the slug from route params (async, per Next.js 16 convention)
 * - Fetch project data by slug from the static data layer
 * - Handle not-found cases via notFound()
 * - Generate static params for build-time pre-rendering
 * - Generate dynamic metadata for SEO
 * - Compose all detail section components in semantic order
 *
 * Architecture Notes:
 * - This is an async Server Component (Next.js 16: params is a Promise).
 * - All sections are rendered server-side for optimal performance.
 * - Client interactivity is isolated to ProjectGallery and CopyCommandBlock.
 * - Uses generateStaticParams to pre-render all known project pages.
 */

import { notFound } from "next/navigation"
import type { Metadata } from "next"
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

import { getProjectDetailsBySlug, getAllProjectSlugs } from "@/data/project-details"
import { ProjectHero } from "@/components/projects/ProjectHero"
import { SectionBlock } from "@/components/projects/SectionBlock"
import { TechStack } from "@/components/projects/TechStack"
import { FeatureList } from "@/components/projects/FeatureList"
import { CopyCommandBlock } from "@/components/projects/CopyCommandBlock"
import { ProjectStructureBlock } from "@/components/projects/ProjectStructureBlock"

/**
 * Pre-renders all project detail pages at build time.
 */
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

/**
 * Dynamic metadata for SEO — each project page gets its own title and description.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectDetailsBySlug(slug)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | Charlesson`,
    description: project.description,
  }
}

/**
 * Main page component for /projects/[slug].
 */
export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectDetailsBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <article className="min-h-screen">
      {/* Hero Section */}
      <ProjectHero project={project} />

      {/* Content Sections */}
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        {/* Divider */}
        <hr className="border-border/50" />

        {/* Problem */}
        <SectionBlock title="The Problem" icon={Target} id="problem">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            {project.problem}
          </p>
        </SectionBlock>

        <hr className="border-border/50" />

        {/* Solution */}
        <SectionBlock title="The Solution" icon={Lightbulb} id="solution">
          <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
            {project.solution}
          </p>
        </SectionBlock>

        <hr className="border-border/50" />

        {/* Technologies */}
        <SectionBlock title="Technologies" icon={Layers} id="technologies">
          <TechStack items={project.tech} />
        </SectionBlock>

        <hr className="border-border/50" />

        {/* Features */}
        <SectionBlock title="Key Features" icon={Star} id="features">
          <FeatureList features={project.features} />
        </SectionBlock>

        <hr className="border-border/50" />

        {/* Challenges */}
        <SectionBlock title="Challenges Faced" icon={AlertTriangle} id="challenges">
          <ul className="space-y-4">
            {project.challenges.map((challenge, index) => (
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
        <SectionBlock title="Learnings" icon={BookOpen} id="learnings">
          <ul className="space-y-4">
            {project.learnings.map((learning, index) => (
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
        <SectionBlock title="Future Improvements" icon={Rocket} id="improvements">
          <ul className="space-y-4">
            {project.improvements.map((improvement, index) => (
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
        <SectionBlock title="Project Structure" icon={FolderTree} id="structure">
          <ProjectStructureBlock structure={project.projectStructure} />
        </SectionBlock>

        <hr className="border-border/50" />

        {/* How to Run */}
        <SectionBlock title="How to Run" icon={Terminal} id="how-to-run">
          <CopyCommandBlock commands={project.commands} />
        </SectionBlock>

        {/* Bottom Navigation */}
        <div className="flex justify-center py-12 md:py-16">
          <a
            href="/#projetos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span>View all projects</span>
          </a>
        </div>
      </div>
    </article>
  )
}
