/**
 * ProjectTOC Component
 *
 * Provides a sticky Table of Contents for project detail pages.
 * Supports smooth scrolling, active section highlighting via IntersectionObserver,
 * and responsive layouts (mobile pills vs. desktop sidebar).
 */

"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export type TocSection = {
  id: string
  title: string
}

type ProjectTOCProps = {
  sections: TocSection[]
}

export function ProjectTOC({ sections }: ProjectTOCProps) {
  const [activeSection, setActiveSection] = useState<string>(() => sections[0]?.id ?? "")

  useEffect(() => {
    // If no sections, do nothing
    if (!sections || sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        let maxRatio = 0
        let visibleId = ""

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.intersectionRatio > maxRatio) {
              maxRatio = entry.intersectionRatio
              visibleId = entry.target.id
            }
          }
        })

        if (visibleId) {
          setActiveSection(visibleId)
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )

    sections.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) {
        observer.observe(element)
      }
    })

    // Set initial active section to the first one if none is set
    // This is now handled by the lazy initializer in useState

    return () => observer.disconnect()
  }, [sections, activeSection])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      // Offset for sticky header/navs
      const y = element.getBoundingClientRect().top + window.scrollY - 100
      window.scrollTo({ top: y, behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Mobile view: sticky pills */}
      <nav 
        className="sticky top-[64px] z-40 lg:hidden mb-8 -mx-4 px-4 py-3 bg-background/80 backdrop-blur-md border-b border-border/50 overflow-x-auto flex items-center gap-2"
        style={{ scrollbarWidth: 'none' }}
      >
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={(e) => handleScroll(e, section.id)}
            className={cn(
              "whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors shrink-0",
              activeSection === section.id
                ? "bg-primary text-primary-foreground"
                : "bg-card text-muted-foreground border border-border/50 hover:bg-muted hover:text-foreground"
            )}
          >
            {section.title}
          </a>
        ))}
      </nav>

      {/* Desktop view: sticky sidebar */}
      <nav className="hidden lg:block w-[240px] shrink-0 sticky top-32 max-h-[calc(100vh-8rem)] overflow-y-auto pr-6">
        <div className="flex flex-col gap-3 relative border-l-2 border-border/30">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              onClick={(e) => handleScroll(e, section.id)}
              className={cn(
                "group flex items-center text-sm transition-all relative pl-5 py-1",
                activeSection === section.id
                  ? "text-primary font-medium"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {/* Timeline dot */}
              <div 
                className={cn(
                  "absolute -left-[6px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full bg-background border-2 transition-colors",
                  activeSection === section.id 
                    ? "border-primary bg-primary" 
                    : "border-border/50 group-hover:border-primary/50"
                )}
              />
              {section.title}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
