/**
 * Tailwind Configuration
 *
 * This file extends Tailwind to use the project's design system.
 *
 * Key concepts:
 * - Colors are mapped to CSS variables (defined in globals.css)
 * - Enables dark mode using class strategy
 * - Ensures consistent styling across the application
 *
 * Usage:
 * - Use semantic classes like bg-background, text-foreground
 * - Avoid hardcoded values (e.g. bg-white, text-black)
 */

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      /**
       * Semantic color system
       * These values come from CSS variables (globals.css)
       */
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        "primary-foreground": "var(--primary-foreground)",
        secondary: "var(--secondary)",
        "secondary-foreground": "var(--secondary-foreground)",
        muted: "var(--muted)",
        "muted-foreground": "var(--muted-foreground)",
        accent: "var(--accent)",
        "accent-foreground": "var(--accent-foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};

export default config;
