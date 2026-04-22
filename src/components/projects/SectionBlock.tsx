/**
 * Section Block Component
 *
 * A reusable wrapper that provides consistent structure for each
 * content section on the project detail page.
 *
 * Responsibilities:
 * - Render a section heading with an optional icon
 * - Provide consistent spacing and styling across all detail sections
 * - Accept children for flexible content composition
 *
 * Used by: ProjectDetailsPage for Problem, Solution, Challenges,
 * Learnings, and Future Improvements sections.
 */

import { cn } from "@/lib/utils"
import { type LucideIcon } from "lucide-react"

type SectionBlockProps = {
  title: string
  icon?: LucideIcon
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionBlock({ title, icon: Icon, children, className, id }: SectionBlockProps) {
  return (
    <section id={id} className={cn("py-10 md:py-14", className)}>
      <div className="flex items-center gap-3 mb-6">
        {Icon && (
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary shrink-0">
            <Icon className="w-5 h-5" />
          </div>
        )}
        <h2 className="text-2xl md:text-3xl font-bold text-foreground">
          {title}
        </h2>
      </div>
      {children}
    </section>
  )
}
