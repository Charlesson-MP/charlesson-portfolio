/**
 * Language Provider
 *
 * Provides language management to the entire application via React Context.
 * Wraps the component tree in `layout.tsx` alongside `ThemeProvider`.
 *
 * Responsibilities:
 * - Initialize and manage the current language state
 * - Persist the selected language in `localStorage`
 * - Provide `language`, `setLanguage`, and `toggleLanguage` via context
 *
 * Hydration Safety:
 * - The provider always renders with the default language (`"pt"`) on the server
 * - After mount, it reads `localStorage` and updates state if a persisted
 *   value is found, avoiding SSR/client mismatch
 *
 * Technical Notes:
 * - Marked with `"use client"` because it depends on browser APIs (`localStorage`)
 * - The context is exported for use by `useLanguage()` and `useTranslation()` hooks
 */

"use client";

import {
  createContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

import type { Language } from "@/locales";

const STORAGE_KEY = "language";
const DEFAULT_LANGUAGE: Language = "pt";

export type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);

  // Hydration-safe: read localStorage only after mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "pt" || stored === "en") {
      setLanguageState(stored);
    }
  }, []);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem(STORAGE_KEY, lang);
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState((prev) => {
      const next = prev === "pt" ? "en" : "pt";
      localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
