/**
 * Project Hero Component
 *
 * The top section of the project detail page.
 * Combines the image gallery, project title, description, and action links
 * into a visually impactful hero area.
 *
 * Responsibilities:
 * - Display project title and subtitle with strong typography
 * - Compose the ProjectGallery and ProjectLinks components
 * - Provide a gradient background for visual depth
 * - Include a "Back to Projects" navigation link
 *
 * Layout:
 * - Two-column on desktop (text | gallery)
 * - Stacked on mobile (text → gallery)
 */

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ProjectGallery } from "./ProjectGallery"
import { ProjectLinks } from "./ProjectLinks"
import type { ProjectDetails } from "@/types/projects"

type ProjectHeroProps = {
  project: ProjectDetails
}

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative pt-24 pb-12 md:pt-32 md:pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Back Navigation */}
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to Projects
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* Text Content */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-wide mb-3">
                Case Study
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {project.title}
              </h1>
              <p className="mt-3 text-lg md:text-xl text-muted-foreground font-medium">
                {project.subtitle}
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>

            <ProjectLinks
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          </div>

          {/* Gallery */}
          <div>
            <ProjectGallery
              images={project.images}
              title={project.title}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
