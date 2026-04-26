/**
 * Project Details Page (Server Component)
 *
 * Entry point for /projects/[slug] routes.
 * This file is a pure Server Component — it handles:
 * - Route param resolution (async, per Next.js 16 convention)
 * - Static param generation for build-time pre-rendering
 * - Dynamic metadata for SEO
 * - Data fetching and not-found handling
 *
 * All client-side rendering (i18n, interactivity) is delegated to
 * ProjectDetailsContent, which is a Client Component.
 */

import { notFound } from "next/navigation"
import type { Metadata } from "next"

import { getProjectDetailsBySlug, getAllProjectSlugs } from "@/data/project-details"
import { ProjectDetailsContent } from "@/components/projects/ProjectDetailsContent"

/**
 * Pre-renders all project detail pages at build time.
 */
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }))
}

/**
 * Dynamic metadata for SEO — each project page gets its own title and description.
 */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectDetailsBySlug(slug)

  if (!project) {
    return { title: "Project Not Found" }
  }

  return {
    title: `${project.title} | Charlesson`,
    description: project.description.en,
  }
}

/**
 * Main page component for /projects/[slug].
 * Resolves route params, fetches data, and delegates rendering to the client.
 */
export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectDetailsBySlug(slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailsContent project={project} />
}
