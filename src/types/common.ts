/**
 * Common Type Definitions
 *
 * Centralizes reusable and domain-agnostic types shared across the application.
 *
 * Purpose:
 * - Avoid duplication of frequently used structures (e.g., localized content).
 * - Provide a single source of truth for cross-domain types.
 * - Improve consistency and maintainability across features.
 *
 * Guidelines:
 * - Only include generic and reusable types.
 * - Do NOT include domain-specific models (e.g., Project, Skill, ProcessStep).
 * - Keep this file small and focused — if it grows too much, consider splitting by concern.
 *
 * Current types:
 * - `LocalizedString`: Represents a string with Portuguese (pt) and English (en) translations.
 * - `LocalizedStringList`: Represents a list of localized strings for both languages.
 *
 * Usage:
 * - Import these types in domain files such as:
 *   `/types/projects.ts`, `/types/process.ts`, `/types/skills.ts`, etc.
 */

export type LocalizedString = {
  pt: string
  en: string
}