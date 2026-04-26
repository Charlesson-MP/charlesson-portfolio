/**
 * Projects Section
 *
 * Displays selected projects using a card-based layout.
 *
 * Data is sourced from a centralized structure, enabling scalability
 * and easy maintenance. Each project is rendered as an independent
 * article with semantic structure and reusable UI components.
 *
 * Clicking the card image or title navigates to /projects/[slug]
 * for the full case study view.
 */
"use client"

import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Badge } from "../ui/Badge";
import { projects } from "@/data/projects";
import { Button } from "../ui/Button";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { useTranslation } from "@/hooks/use-translation"
import { useLanguage } from "@/hooks/use-language"

export function Projects() {
  const { language } = useLanguage()
  const t = useTranslation()

  return (
    <section id="projetos" className="py-16 md:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mb-12">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
              {t.projects.title}
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              {t.projects.subtitle}
            </h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(320px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(380px,1fr))] gap-6">
            {projects.map((project) => (
              <Card 
                key={project.slug}
                className="group relative flex flex-col overflow-hidden p-0 gap-0 border-border/50 hover:border-border hover:shadow-md transition-all duration-300"
              >
                <div className="relative w-full aspect-video overflow-hidden border-b border-border/10 block">
                  <Image 
                    src={project.image} 
                    alt={`${t.projects.imageAlt} ${project.title}`} 
                    fill 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                  />
                </div>
                <CardHeader className="p-6 pb-4">
                  <CardTitle className="text-xl font-semibold text-foreground">
                    <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors after:absolute after:inset-0 after:z-0">
                      {project.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed line-clamp-2">
                    {project.description[language]}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-4 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline"
                        className="text-xs font-medium"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 gap-3 mt-auto relative z-10">
                  <Button asChild variant="default" size="sm" className="gap-2">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {t.projects.liveDemo}
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="gap-2">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
  )
}