/**
 * Header Component
 *
 * Main navigation bar of the application, responsible for global navigation,
 * theme control, language switching, and mobile menu integration.
 *
 * Responsibilities:
 * - Render primary navigation links (desktop and mobile)
 * - Provide theme toggle (light/dark mode)
 * - Provide language toggle (pt/en)
 * - Control mobile navigation drawer (open/close state)
 * - Enhance UX with scroll-based visual feedback
 *
 * Behavior:
 * - Fixed at the top of the viewport
 * - Changes appearance on scroll (background, blur, border, shadow)
 * - Responsive layout:
 *   - Desktop: inline navigation links
 *   - Mobile: hamburger menu + drawer (MobileDrawer)
 *
 * State Management:
 * - `isMenuOpen`: controls MobileDrawer visibility
 * - `isScrolled`: tracks scroll position to apply visual styles
 * - `language`: manages current language state (pt/en)
 * - `mounted`: ensures theme is only resolved after client hydration
 *
 * Theme Handling:
 * - Uses `next-themes` to manage light/dark mode
 * - Prevents hydration mismatch by deferring theme resolution until mount
 *
 * Accessibility:
 * - Buttons include descriptive aria-labels
 * - Navigation is keyboard accessible
 * - Mobile menu integrates with an accessible dialog (MobileDrawer)
 *
 * Integration:
 * - Uses `MobileDrawer` for mobile navigation
 * - Uses `Logo` component for branding
 * - Uses custom `Button` component for consistent UI
 *
 * Dependencies:
 * - Next.js Link (client-side navigation)
 * - lucide-react (icons)
 * - next-themes (theme management)
 *
 * Notes:
 * - Scroll listener is attached on mount and cleaned up on unmount
 * - Layout constrained using max-width container (max-w-7xl)
 * - Designed for extensibility (e.g., i18n integration in future)
 */

"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import { Menu, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { MobileDrawer } from "@/components/layout/MobileDrawer";

const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
];

type Language = "pt" | "en";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [language, setLanguage] = useState<Language>("pt");
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme : "light";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full  ${
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20 gap-4">
          <Link
            href="/"
            className=" flex items-center text-lg font-semibold text-foreground hover:text-primary transition-colors shrink-0"
          >
            <Logo className="w-14 h-14 transition-transform duration-300 hover:scale-105" />
            Charlesson
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              aria-label="Alternar idioma"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs font-medium uppercase">{language}</span>
            </Button>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-muted-foreground hover:text-foreground"
              aria-label={
                currentTheme === "dark"
                  ? "Ativar modo claro"
                  : "Ativar modo escuro"
              }
            >
              {currentTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={navLinks}
        language={language}
        onToggleLanguage={toggleLanguage}
      />
    </header>
  );
}
