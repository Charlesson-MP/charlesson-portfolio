/**
 * Locales Barrel
 *
 * Central entry point for all translation files and derived types.
 * Adding a new language requires:
 *   1. Creating a new locale file (e.g. `es.ts`)
 *   2. Adding it to the `locales` map below
 *
 * TypeScript will automatically enforce that all locale files
 * match the shape of the default locale (`pt`).
 */

import { pt } from "./pt";
import { en } from "./en";

export const locales = { pt, en } as const;

/** Supported language codes — derived from the locales map */
export type Language = keyof typeof locales;

/** Shape of a translation object — derived from the default locale */
export type Translations = typeof pt;

export { pt, en };
