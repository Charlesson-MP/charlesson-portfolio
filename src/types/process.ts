/**
 * Process Type Definitions
 *
 * Defines the data structure for the "How I Work" (process/workflow) section
 * of the portfolio.
 *
 * Purpose:
 * - Represent each step of the development workflow in a structured way.
 * - Enable rendering of a step-by-step UI (timeline, cards, or similar).
 * - Support internationalization using shared localized types.
 *
 * Data Modeling Strategy:
 * - Each step represents a stage in the development process (from understanding
 *   the problem to delivery and collaboration).
 * - Content is fully data-driven, allowing easy updates without changing UI logic.
 * - Ordering is controlled by the `number` field (not array index), ensuring flexibility.
 *
 * Shared Types:
 * - Uses `LocalizedString` from `/types/common.ts` for multilingual support.
 *
 * Fields:
 * - `number`: Numeric order of the step (can be formatted in the UI).
 * - `title`: Localized title of the step.
 * - `description`: Localized description explaining the step.
 * - `icon` (optional): Icon component from `lucide-react` for visual representation.
 *
 * Usage:
 * - Consumed by the "How I Work" section component.
 * - Typically mapped into UI elements like cards, timelines, or step indicators.
 *
 * Notes:
 * - Icons are optional to allow flexibility in design (minimal vs. rich UI).
 * - Formatting (e.g., leading zeros like "01") should be handled in the UI layer.
 */

import { LucideIcon } from "lucide-react"
import { LocalizedString } from "./common"

export type ProcessStep = {
  number: number
  title: LocalizedString
  description: LocalizedString
  icon?: LucideIcon
}