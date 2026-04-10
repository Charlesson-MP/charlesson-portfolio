/**
 * Theme Provider
 *
 * Provides theme management (light/dark mode) to the entire application using `next-themes`.
 * This component wraps the application in the root layout to ensure theme state is
 * consistent across all pages and components.
 *
 * Responsibilities:
 * - Initialize and manage the current theme state.
 * - Synchronize theme with local storage and system preferences.
 * - Provide the theme context for components using `useTheme`.
 *
 * Technical Notes:
 * - Marked with `"use client"` because it depends on browser-only context.
 * - Configuration options like `attribute` and `defaultTheme` are passed via props in `layout.tsx`.
 */

"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/**
 * Custom ThemeProvider component for next-themes integration.
 *
 * @param props - Children and other NextThemes attributes
 * @returns ThemeProvider wrapped with necessary attributes
 */
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
