/**
 * Header Component
 *
 * Main navigation bar with desktop/mobile navigation, theme toggle,
 * language switching, and scroll spy-based active section tracking.
 */

"use client";

import { useState, useEffect, useMemo } from "react";

import Link from "next/link";
import { Menu, Moon, Sun, Globe } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import { useLanguage } from "@/hooks/use-language";
import { useTranslation } from "@/hooks/use-translation";
import { MobileDrawer } from "@/components/layout/MobileDrawer";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const { resolvedTheme, setTheme } = useTheme();

  const { language, toggleLanguage } = useLanguage();
  const t = useTranslation();

  const navLinks = useMemo(() => [
    { href: "/#sobre", label: t.header.about },
    { href: "/#habilidades", label: t.header.skills },
    { href: "/#projetos", label: t.header.projects },
    { href: "/#experiencia", label: t.header.experience },
    { href: "/#contato", label: t.header.contact },
  ], [t]);

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

  useEffect(() => {
    if (isMenuOpen) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            window.history.replaceState(null, "", `/#${id}`);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    const hero = document.getElementById("inicio");
    if (hero) observer.observe(hero);

    navLinks.forEach((link) => {
      const id = link.href.split("#")[1];
      if (id) {
        const element = document.getElementById(id);
        if (element) {
          observer.observe(element);
        }
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isMenuOpen, navLinks]);

  const toggleTheme = () => {
    setTheme(currentTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full  ${isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
          }`}
      >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 lg:h-20 gap-4">
          <Link
            href="/#inicio"
            className=" flex items-center text-lg font-semibold text-foreground hover:text-primary transition-colors shrink-0"
          >
            <Logo className="w-14 h-14 transition-transform duration-300 hover:scale-105" />
            Charlesson
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.split("#")[1];
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-sm font-medium transition-colors ${isActive
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Controls */}
          <div className="flex items-center gap-2">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-1.5 text-muted-foreground hover:text-foreground"
              aria-label={t.header.toggleLanguage}
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
                  ? t.header.toggleTheme.light
                  : t.header.toggleTheme.dark
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
              className="lg:hidden"
              onClick={() => setIsMenuOpen(true)}
              aria-label={t.header.openMenu}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </nav>
      </div>

      </header>

      {/* Mobile Navigation Drawer */}
      <MobileDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={navLinks}
        activeSection={activeSection}
      />
    </>
  );
}
