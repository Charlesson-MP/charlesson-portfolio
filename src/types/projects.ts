/**
 * Project Type Definitions
 *
 * Defines all types related to the projects domain in the portfolio.
 *
 * Purpose:
 * - Provide structured and type-safe models for project data.
 * - Ensure consistency between data (`/data`) and UI layers.
 * - Support scalable and maintainable project case studies.
 *
 * Architecture (Option B — Separated Data):
 * - `Project` → summary data for listing cards
 * - `ProjectDetails` → full data for case study pages
 * - Both are linked via the `slug` field
 *
 * Data Modeling:
 * - Separates project content from UI labels (handled in locale files)
 * - Stores only project-specific data in this domain
 * - Supports multilingual content using shared types
 *
 * Shared Types:
 * - Uses reusable types from `/types/common.ts`:
 *   - `LocalizedString`
 *   - `LocalizedStringList`
 *
 * Types:
 * - `Project`: Lightweight summary used in listings
 * - `ProjectDetails`: Full case study data
 * - `TechItem`: Technology with icon key and description
 * - `Feature`: Feature with title and description
 * - `Command`: Terminal command for setup instructions
 *
 * Usage:
 * - Listing components use `Project`
 * - Detail pages use `ProjectDetails`
 *
 * Notes:
 * - Icon fields use string identifiers to keep the data layer serializable
 * - Icon mapping (string → component) is handled in the UI layer
 * - This file defines structure only — no data or UI logic
 */
import { LocalizedString } from "./common"

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