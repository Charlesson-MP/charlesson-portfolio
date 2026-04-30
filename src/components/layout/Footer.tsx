/**
 * Footer Component
 *
 * Site-wide footer with branding, internal navigation,
 * external links (GitHub, LinkedIn, CV), and copyright.
 */

"use client"

import React from "react"
import { Download } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { useTranslation } from "@/hooks/use-translation"
import { useLanguage } from "@/hooks/use-language"
import { Logo } from "@/components/ui/Logo"

export function Footer() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const { language } = useLanguage()
  const t = useTranslation()
  const file = language === "pt" ? "/cv/charlesson-mendes-cv-pt.pdf" : "/cv/charlesson-mendes-resume-en.pdf"

  const ariaLabel = {
    pt: {
      github: "Acessar meu GitHub",
      linkedin: "Acessar meu LinkedIn",
      downloadCV: "Baixar Currículo",
      backToTop: "Voltar ao topo",
    },
    en: {
      github: "Access my GitHub",
      linkedin: "Access my LinkedIn",
      downloadCV: "Download Resume",
      backToTop: "Back to top",
    }
  }

  return (
    <footer className="w-full border-t border-border bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* Column 1 - Branding */}
          <div className="flex flex-col space-y-4 md:justify-self-center">
            <Logo className="w-20 h-20 self-center" />
            <h3 className="text-2xl font-bold text-foreground tracking-tight text-center">
              Charlesson Mendes
            </h3>
            <p className="text-foreground font-medium text-center">
              {t.footer.activityArea}
            </p>
            <p className="text-sm text-muted-foreground mt-2 text-center">
              {t.footer.question}
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="flex flex-col space-y-4 md:justify-self-center">
            <h4 className="text-lg font-semibold text-foreground text-center">{t.footer.navigationTitle}</h4>
            <nav className="flex flex-col space-y-3">
              {[
                { name: { pt: "Sobre", en: "About" }, ariaLabel: { pt: "Ir para a seção Sobre", en: "Go to section About" }, id: "sobre" },
                { name: { pt: "Projetos", en: "Projects" }, ariaLabel: { pt: "Ir para a seção Projetos", en: "Go to section Projects" }, id: "projetos" },
                { name: { pt: "Habilidades", en: "Skills" }, ariaLabel: { pt: "Ir para a seção Habilidades", en: "Go to section Skills" }, id: "skills" },
                { name: { pt: "Experiência", en: "Experience" }, ariaLabel: { pt: "Ir para a seção Experiência", en: "Go to section Experience" }, id: "experience" },
                { name: { pt: "Contato", en: "Contact" }, ariaLabel: { pt: "Ir para a seção Contato", en: "Go to section Contact" }, id: "contato" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="w-fit text-muted-foreground hover:text-primary relative group transition-colors duration-200 self-center"
                  aria-label={item.ariaLabel[language]}
                >
                  {item.name[language]}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - External Links */}
          <div className="flex flex-col space-y-4 md:justify-self-center">
            <h4 className="text-lg font-semibold text-foreground text-center">{t.footer.linksTitle}</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/Charlesson-MP"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group w-fit self-center"
                aria-label={ariaLabel[language].github}
              >
                <FaGithub className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/charlesson-mendes-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 group w-fit self-center"
                aria-label={ariaLabel[language].linkedin}
              >
                <FaLinkedin className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
                <span>LinkedIn</span>
              </a>
              <a
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 group text-left w-fit cursor-pointer self-center"
                aria-label={ariaLabel[language].downloadCV}
                href={file}
                rel="noopener noreferrer"
                download
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
                <span>{t.footer.btnDownloadCVLabel}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex justify-center items-center">
          <p className="text-sm text-muted-foreground text-center">
            &copy; 2026 Charlesson Mendes — {t.footer.copyMessage}
          </p>
        </div>
      </div>
    </footer>
  )
}
