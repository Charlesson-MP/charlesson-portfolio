"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const { language } = useLanguage()

  const ariaLabel = {
    pt: "Voltar ao topo",
    en: "Back to top",
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 p-3 bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label={ariaLabel[language]}
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}
