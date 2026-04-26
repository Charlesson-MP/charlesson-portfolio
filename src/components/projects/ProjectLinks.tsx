/**
 * Project Links Component (Client)
 *
 * Renders action buttons for the project hero section:
 * a Live Demo link and a GitHub repository link.
 *
 * Responsibilities:
 * - Display primary CTA (Live Demo) and secondary CTA (GitHub)
 * - Open links in new tabs with security attributes
 * - Resolve localized button labels via useTranslation
 * - Maintain visual consistency with the portfolio's Button component
 *
 * Notes:
 * - Client Component because it uses useTranslation for localized labels.
 */

"use client"

import { ExternalLink } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import { Button } from "@/components/ui/Button"
import { useTranslation } from "@/hooks/use-translation"

type ProjectLinksProps = {
  liveUrl: string
  githubUrl: string
}

export function ProjectLinks({ liveUrl, githubUrl }: ProjectLinksProps) {
  const t = useTranslation()

  return (
    <div className="flex flex-wrap gap-3">
      <Button asChild size="lg" className="gap-2">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">
          <ExternalLink className="h-4 w-4" />
          {t.projects.liveDemo}
        </a>
      </Button>
      <Button asChild variant="outline" size="lg" className="gap-2">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub className="h-4 w-4" />
          GitHub
        </a>
      </Button>
    </div>
  )
}
