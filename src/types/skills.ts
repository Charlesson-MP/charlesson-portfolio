/**
 * Skills Type Definitions
 *
 * Defines all types related to the Skills domain in the portfolio.
 *
 * Purpose:
 * - Provide a structured and type-safe representation of skills and categories.
 * - Ensure consistency between data (`/data/skills.ts`) and UI components.
 * - Enable scalable and maintainable skill management.
 *
 * Data Modeling:
 * - Skills are grouped into categories (e.g., Frontend, Performance, Tools).
 * - Each skill includes a localized name and description.
 * - Icons are represented as React components using `react-icons`.
 *
 * Shared Types:
 * - Uses `LocalizedString` from `/types/common.ts` for multilingual support.
 *
 * Types:
 * - `Skill`: Represents a single skill with name, description, and icon.
 * - `SkillCategory`: Represents a group of related skills.
 *
 * Usage:
 * - Consumed by the Skills section components.
 * - Used by `/data/skills.ts` as the source of truth for content structure.
 *
 * Notes:
 * - Icons are stored as `IconType` to allow flexible rendering in the UI layer.
 * - This file defines structure only — no data or UI logic should be included.
 */

import { IconType } from "react-icons"
import { LocalizedString } from "./common"

export type Skill = {
  name: LocalizedString
  description: LocalizedString
  icon: IconType
}

export type SkillCategory = {
  title: LocalizedString
  skills: Skill[]
}