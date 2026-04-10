/**
 * Utility Functions
 *
 * A collection of shared helper functions used throughout the application
 * to simplify common tasks and promote code reuse.
 *
 * Current Utilities:
 * - `cn`: Merges Tailwind CSS classes with support for conditional logic and priority resolution.
 *
 * Technical Notes:
 * - Leverages `clsx` for conditional class handling.
 * - Leverages `tailwind-merge` to fix class conflicts (e.g., padding overrides).
 */

import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes using clsx and tailwind-merge.
 *
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
