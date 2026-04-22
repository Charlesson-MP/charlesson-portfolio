/**
 * useLanguage Hook
 *
 * Provides access to the current language state and controls.
 *
 * Returns:
 * - `language` — the current active language code ("pt" | "en")
 * - `setLanguage` — set a specific language
 * - `toggleLanguage` — switch between "pt" and "en"
 *
 * Must be used within a `<LanguageProvider>`.
 * Throws an error if used outside the provider tree.
 */

"use client";

import { useContext } from "react";
import { LanguageContext } from "@/components/providers/language-provider";

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used within a <LanguageProvider>. " +
        "Wrap your component tree with <LanguageProvider> in layout.tsx."
    );
  }

  return context;
}
