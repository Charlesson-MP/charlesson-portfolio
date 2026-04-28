/**
 * SectionBlock Component
 *
 * Reusable section wrapper with icon + title heading for project detail pages.
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
