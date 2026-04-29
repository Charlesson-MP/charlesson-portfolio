/**
 * Experience Type Definitions
 *
 * Defines the data structure for professional experience entries
 * displayed in the Experience section of the portfolio.
 *
 * - Represents roles, companies, periods, and responsibilities
 * - Uses localized fields for multilingual support (pt/en)
 *
 * Purpose:
 * Ensure type safety and consistency between the data layer (/data)
 * and presentation layer (/components).
 *
 * Notes:
 * - Designed to be simple and flexible for timeline or list-based layouts
 * - Supports expansion (e.g., links, tags, highlights) without breaking structure
 */

import { LocalizedString } from "./common";

export type Experience = {
  title: LocalizedString;
  company: string;
  period: string;
  description: LocalizedString;
};