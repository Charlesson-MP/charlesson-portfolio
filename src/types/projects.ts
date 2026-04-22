/**
 * Project Type Definitions
 *
 * Defines all types related to the projects domain in the portfolio.
 *
 * Architecture (Option B — Separated Data):
 * - `Project` is used by the project listing cards (summary data).
 * - `ProjectDetails` is used by the project detail/case study page (full data).
 * - Both are linked by the `slug` field, enabling independent data files
 *   while maintaining a clear relationship.
 *
 * Supporting types:
 * - `TechItem`: A technology with icon identifier and description.
 * - `Feature`: A project feature with title and description.
 * - `Command`: A terminal command with a label for the "How to Run" section.
 *
 * Usage:
 * - Card listing imports `Project` from data/projects.ts
 * - Detail page imports `ProjectDetails` from data/project-details.ts
 */

/**
 * Summary type used by project listing cards.
 * Kept lightweight — only the fields needed for the card UI.
 */
export type Project = {
  slug: string
  title: string
  image: string
  description: string
  tech: string[]
  liveUrl: string
  githubUrl: string
}

/**
 * A single technology entry for the detail page tech stack section.
 * `icon` stores a string key that maps to a react-icons component at render time,
 * keeping the data layer serializable and free of component imports.
 */
export type TechItem = {
  name: string
  icon: string
  description: string
}

/**
 * A project feature displayed as a card in the detail page.
 */
export type Feature = {
  title: string
  description: string
}

/**
 * A terminal command for the "How to Run" section.
 */
export type Command = {
  label: string
  command: string
}

/**
 * Full case study data for the project detail page.
 * Contains all content sections rendered on /projects/[slug].
 */
export type ProjectDetails = {
  slug: string
  title: string
  subtitle: string
  description: string
  images: string[]
  liveUrl: string
  githubUrl: string
  problem: string
  solution: string
  tech: TechItem[]
  features: Feature[]
  challenges: string[]
  learnings: string[]
  improvements: string[]
  projectStructure: string
  commands: Command[]
}