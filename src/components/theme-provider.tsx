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
