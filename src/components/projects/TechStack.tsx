/**
 * TechStack Component
 *
 * Displays project technologies as interactive cards with icons,
 * names, and localized descriptions.
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
