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
 * - `LocalizedString`: A string localized in Portuguese and English.
 * - `LocalizedStringList`: A list of strings localized in Portuguese and English.
 *
 * Note on section titles:
 * - Section titles (e.g., "The Problem", "Challenges") are UI labels, not project data.
 *   They live in the locale files (pt.ts / en.ts) under `projects.sections`.
 *   This avoids repeating the same titles across every project entry.
 *
 * Usage:
 * - Card listing imports `Project` from data/projects.ts
 * - Detail page imports `ProjectDetails` from data/project-details.ts
 */

/**
 * Reusable localized string type — reduces boilerplate across the data model.
 */
export type LocalizedString = {
  pt: string
  en: string
}

/**
 * Reusable localized string list type — for challenges, learnings, etc.
 */
export type LocalizedStringList = {
  pt: string[]
  en: string[]
}

/**
 * Summary type used by project listing cards.
 * Kept lightweight — only the fields needed for the card UI.
 */
export type Project = {
  slug: string
  title: string
  image: string
  description: LocalizedString
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
  description: LocalizedString
}

/**
 * A project feature displayed as a card in the detail page.
 */
export type Feature = {
  title: LocalizedString
  description: LocalizedString
}

/**
 * A terminal command for the "How to Run" section.
 */
export type Command = {
  label: LocalizedString
  command: string
}

/**
 * Full case study data for the project detail page.
 * Contains all content sections rendered on /projects/[slug].
 *
 * Section titles are NOT stored here — they come from the locale files.
 * Only content that varies per project is stored in this type.
 */
export type ProjectDetails = {
  slug: string
  category: LocalizedString
  title: string
  subtitle: LocalizedString
  description: LocalizedString
  images: string[]
  liveUrl: string
  githubUrl: string
  problem: LocalizedString
  solution: LocalizedString
  tech: TechItem[]
  features: Feature[]
  challenges: LocalizedStringList
  learnings: LocalizedStringList
  improvements: LocalizedStringList
  projectStructure: string
  commands: Command[]
}