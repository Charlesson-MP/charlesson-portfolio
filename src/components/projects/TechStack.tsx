/**
 * Tech Stack Component (Client)
 *
 * Visually displays the technologies used in a project as interactive cards.
 * More engaging than simple badges — each tech gets its own card with
 * an icon, name, and brief description.
 *
 * Responsibilities:
 * - Map technology string keys to react-icons components
 * - Render a responsive grid of tech cards
 * - Resolve localized tech descriptions (pt/en) based on the active language
 * - Provide hover effects for interactivity
 *
 * Notes:
 * - Client Component because it uses useLanguage to resolve localized fields.
 * - Icon resolution uses a static map from string keys to react-icons components.
 *   This keeps the data layer serializable while leveraging the existing icon library.
 * - Fallback to a generic icon if the key is not found.
 */

"use client"

import { type IconType } from "react-icons"
import {
  FaReact,
  FaVuejs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSearch,
} from "react-icons/fa"
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri"
import { SiTypescript, SiVite } from "react-icons/si"
import { IoLogoVercel } from "react-icons/io5"
import { Code } from "lucide-react"
import type { TechItem } from "@/types/projects"
import { useLanguage } from "@/hooks/use-language"

/**
 * Maps icon string keys (from data layer) to react-icons components.
 * Add new entries here when introducing new technologies.
 */
const iconMap: Record<string, IconType> = {
  FaReact,
  FaVuejs,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaSearch,
  RiNextjsFill,
  RiTailwindCssFill,
  SiTypescript,
  SiVite,
  IoLogoVercel,
}

type TechStackProps = {
  items: TechItem[]
}

export function TechStack({ items }: TechStackProps) {
  const { language } = useLanguage()
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((tech) => {
        const IconComponent = iconMap[tech.icon]

        return (
          <div
            key={tech.name}
            className="group flex items-start gap-4 p-4 rounded-xl border border-border/50 bg-card hover:border-border hover:shadow-sm transition-all duration-200"
          >
            <div className="flex items-center justify-center w-11 h-11 rounded-lg bg-primary/10 text-primary shrink-0 group-hover:bg-primary/15 transition-colors">
              {IconComponent ? (
                <IconComponent className="w-5 h-5" />
              ) : (
                <Code className="w-5 h-5" />
              )}
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-foreground text-sm">
                {tech.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                {tech.description[language]}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
