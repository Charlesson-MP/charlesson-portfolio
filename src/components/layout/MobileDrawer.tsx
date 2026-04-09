/**
 * MobileDrawer Component
 *
 * An accessible and controlled mobile navigation drawer that slides in from the right.
 * Designed to replace the default mobile menu with a more robust and user-friendly experience.
 *
 * Responsibilities:
 * - Render navigation links dynamically for mobile users
 * - Provide a language toggle (pt/en)
 * - Handle open/close interactions (overlay click, close button, link click, Escape key)
 * - Manage focus behavior for accessibility
 * - Prevent background scrolling when active
 *
 * Accessibility Features:
 * - Uses `role="dialog"` and `aria-modal="true"` to define modal behavior
 * - Moves focus to the first interactive element when opened
 * - Restores focus to the triggering element when closed
 * - Implements manual focus trap (Tab / Shift+Tab) to keep navigation within the drawer
 * - Supports keyboard interaction (Escape to close)
 *
 * Behavior:
 * - Controlled via `isOpen` prop (controlled component pattern)
 * - Slides in/out using CSS transforms (translate-x)
 * - Overlay blocks interaction with background content
 * - Body scroll is locked while the drawer is open
 *
 * Technical Notes:
 * - Uses a helper (`getFocusableElements`) to centralize focusable element queries
 * - Consolidates keyboard handling into a single event listener
 * - Uses `requestAnimationFrame` to ensure DOM readiness before applying focus
 *
 * Integration:
 * - Typically used inside the Header component
 * - Receives navigation links, language state, and handlers via props
 *
 * Dependencies:
 * - Next.js Link (client-side navigation)
 * - lucide-react (icons)
 * - Custom Button component
 */

"use client";

import { useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { X, Globe } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  language: "pt" | "en";
  onToggleLanguage: () => void;
};

export function MobileDrawer({
  isOpen,
  onClose,
  links,
  language,
  onToggleLanguage,
}: Props) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  // 1. Helper to extract focusable elements cleanly and properly typed
  const getFocusableElements = useCallback(() => {
    if (!drawerRef.current) return [];
    return Array.from(
      drawerRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
    );
  }, [drawerRef]);

  // 2. Consolidated lifecycle hook for managing the drawer state, focus logic, and keyboard events
  useEffect(() => {
    if (isOpen) {
      // Focus management: Save the element that triggered the drawer to restore focus upon closing
      previousFocusRef.current = document.activeElement as HTMLElement;

      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        // 3. requestAnimationFrame usage:
        // By deferring the focus call to immediately after the browser paints, 
        // we guarantee that the newly visible DOM elements are fully ready to accept focus.
        requestAnimationFrame(() => {
          focusableElements[0].focus();
        });
      }

      // Prevent scrolling on the document body
      document.body.style.overflow = "hidden";

      // Consolidate global keydown events to handle both Escape and Tab navigation in a single listener
      const handleKeyDown = (e: KeyboardEvent) => {
        // Close drawer on Escape
        if (e.key === "Escape") return onClose();

        // Focus trap logic: cycle through elements inside the drawer on Tab
        if (e.key === "Tab") {
          const elements = getFocusableElements();
          if (elements.length === 0) return;

          const firstElement = elements[0];
          const lastElement = elements[elements.length - 1];

          if (e.shiftKey) {
            // Shift + Tab
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            // Tab
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "";

        // Restore focus to the original triggering element when the drawer closes
        if (previousFocusRef.current) {
          previousFocusRef.current.focus();
        }
      };
    }
  }, [isOpen, onClose, getFocusableElements]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/40 backdrop-blur-sm
          transition-opacity duration-300
          ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        ref={drawerRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="drawer-title"
        className={`
          fixed top-0 right-0 z-50 h-full w-72
          bg-background border-l border-border
          flex flex-col
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <h2 id="drawer-title" className="text-lg font-semibold text-foreground">
            Menu
          </h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto p-6">
          <ul className="flex flex-col gap-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="
                    block py-3 px-4 rounded-md
                    text-base font-medium
                    text-muted-foreground
                    hover:text-foreground hover:bg-accent
                    transition-all
                  "
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Language Toggle */}
          <div className="mt-8 pt-8 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={onToggleLanguage}
              className="w-full flex items-center justify-start gap-3 px-4 text-muted-foreground hover:text-foreground"
              aria-label={`Alterar idioma, o idioma atual é ${language}`}
            >
              <Globe className="h-5 w-5" />
              <span className="text-sm font-medium uppercase">
                Idioma: {language}
              </span>
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
}