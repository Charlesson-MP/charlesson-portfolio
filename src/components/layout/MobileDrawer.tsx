"use client";

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
      />

      {/* Drawer */}
      <div
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
          <h2 className="text-lg font-semibold text-foreground">Menu</h2>
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