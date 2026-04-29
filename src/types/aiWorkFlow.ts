/**
 * AI Workflow Type Definitions
 *
 * Defines the data structure for AI-assisted workflow steps
 * displayed in the AI Workflow section of the portfolio.
 *
 * - Represents steps, tools, and descriptions of the workflow
 * - Uses localized fields for multilingual support (pt/en)
 *
 * Purpose:
 * Ensure type safety and consistency between the data layer (/data)
 * and presentation layer (/components).
 *
 * Notes:
 * - Designed to be flexible for different workflow representations
 * - Can be extended with additional metadata (e.g., tools, links, tags)
 */

import { LucideIcon } from "lucide-react"
import { LocalizedString } from "./common"

export type AiWorkFlow = {
  icon: LucideIcon,
  title: LocalizedString,
  description: LocalizedString,
}