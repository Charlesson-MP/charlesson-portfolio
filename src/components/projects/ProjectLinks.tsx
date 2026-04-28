/**
 * ProjectLinks Component
 *
 * Action buttons for Live Demo and GitHub links in the project hero.
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
