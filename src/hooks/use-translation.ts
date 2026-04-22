/**
 * useTranslation Hook
 *
 * Returns the active translation object based on the current language.
 * The returned object is fully typed as `Translations` (derived from `pt.ts`).
 *
 * Usage:
 * ```tsx
 * const t = useTranslation();
 * <span>{t.header.about}</span>
 * ```
 *
 * Must be used within a `<LanguageProvider>`.
 */

"use client";

import { locales } from "@/locales";
import { useLanguage } from "./use-language";

export function useTranslation() {
  const { language } = useLanguage();
  return locales[language];
}
