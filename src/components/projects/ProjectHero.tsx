/**
 * Project Hero Component (Client)
 *
 * The top section of the project detail page.
 * Combines the image gallery, project title, description, and action links
 * into a visually impactful hero area.
 *
 * Responsibilities:
 * - Display project title and subtitle with strong typography
 * - Resolve localized strings (subtitle, description) based on the active language
 * - Clamps long descriptions to standardize layout height, providing a modal for full text
 * - Compose the ProjectGallery and ProjectLinks components
 * - Provide a gradient background for visual depth
 * - Include a "Back to Projects" navigation link
 *
 * Notes:
 * - Client Component because it uses useLanguage to resolve localized fields
 *   and manages modal state.
 */

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, X } from "lucide-react"
import { ProjectGallery } from "./ProjectGallery"
import { ProjectLinks } from "./ProjectLinks"
import type { ProjectDetails } from "@/types/projects"
import { useLanguage } from "@/hooks/use-language"
import { useTranslation } from "@/hooks/use-translation"

type ProjectHeroProps = {
  project: ProjectDetails
}

export function ProjectHero({ project }: ProjectHeroProps) {
  const { language } = useLanguage()
  const t = useTranslation()
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isModalOpen])

  return (
    <>
      <section className="relative pt-20 pb-10 md:pt-28 md:pb-12 overflow-hidden min-h-[calc(100vh-4rem)] flex items-center">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 lg:px-8 relative w-full">
          {/* Back Navigation */}
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6 md:mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            {t.projects.btnBackLabel}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="flex flex-col gap-4 lg:gap-6">
                <div>
                  <p className="text-sm font-medium text-primary uppercase tracking-wide mb-2">
                    {project.category[language]}
                  </p>
                  <h1 className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                    {project.title}
                  </h1>
                  <p className="mt-2 text-lg md:text-xl text-muted-foreground font-medium">
                    {project.subtitle[language]}
                  </p>
                </div>

                {/* Standardized description height using line-clamp */}
                <div>
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed line-clamp-4 md:line-clamp-5">
                    {project.description[language]}
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="mt-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                  >
                    {t.projects.readFullDescription}
                  </button>
                </div>
              </div>

              <div>
                <ProjectLinks
                  liveUrl={project.liveUrl}
                  githubUrl={project.githubUrl}
                />
              </div>
            </div>

            {/* Gallery */}
            <div className="w-full">
              <ProjectGallery
                images={project.images}
                title={project.title}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Full Description Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-sm"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-card text-card-foreground p-6 sm:p-8 rounded-2xl border border-border shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <div className="flex justify-between items-center mb-6">
              <h2 id="modal-title" className="text-xl sm:text-2xl font-bold">
                {t.projects.fullDescription}
              </h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/50 hover:bg-muted text-muted-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              {project.description[language]}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
