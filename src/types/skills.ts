/**
 * Skill Types
 *
 * Type definitions for the Skills domain used across the application.
 *
 * - Defines the structure of a single skill (Skill)
 * - Defines grouped skill categories (SkillCategory)
 * - Uses IconType (react-icons) for flexible and reusable icon components
 *
 * Purpose:
 * Provide strong typing and consistency between data and UI layers,
 * ensuring type safety and better developer experience.
 *
 * Notes:
 * These types are shared between the data layer (/data) and
 * presentation layer (/components), promoting scalability
 * and easier maintenance.
 */

import { IconType } from "react-icons"

export type Skill = {
  name: string
  description: string
  icon: IconType
}

export type SkillCategory = {
  title: string
  skills: Skill[]
}