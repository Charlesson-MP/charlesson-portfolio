/**
 * Footer Component
 *
 * Responsável por exibir o rodapé do portfólio com:
 * - Navegação interna (scroll entre seções)
 * - Informações de branding
 * - Links externos (GitHub, LinkedIn, CV)
 * - Mensagem de copyright
 * - Botão de voltar ao topo
 *
 * Suporte a internacionalização (i18n) utilizando os arquivos pt.ts e en.ts.
 *
 * Stack: Next.js + Tailwind CSS + TypeScript
 */

"use client";

import React from "react";
import { Download, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "../../hooks/use-translation";
import { useLanguage } from "@/hooks/use-language";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const { language } = useLanguage();
  const t = useTranslation();

  return (
    <footer className="w-full border-t border-border bg-background mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          
          {/* Column 1 - Branding */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-2xl font-bold text-foreground tracking-tight">
              Charlesson Mendes
            </h3>
            <p className="text-foreground font-medium">
              {t.footer.activityArea}
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              {t.footer.question}
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold text-foreground">Navegação</h4>
            <nav className="flex flex-col space-y-3">
              {[
                { name: { pt: "Sobre", en: "About" }, id: "sobre" },
                { name: { pt: "Projetos", en: "Projects" }, id: "projetos" },
                { name: { pt: "Habilidades", en: "Skills" }, id: "skills" },
                { name: { pt: "Experiência", en: "Experience" }, id: "experience" },
                { name: { pt: "Contato", en: "Contact" }, id: "contato" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => scrollToSection(e, item.id)}
                  className="w-fit text-muted-foreground hover:text-primary relative group transition-colors duration-200"
                  aria-label={`Ir para a seção ${item.name}`}
                >
                  {item.name[language]}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3 - External Links */}
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold text-foreground">{t.footer.linksTitle}</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="https://github.com/charlesson-mp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200 group w-fit"
                aria-label="Acessar meu GitHub"
              >
                <FaGithub className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/charlesson-mendes-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 group w-fit"
                aria-label="Acessar meu LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
                <span>LinkedIn</span>
              </a>
              <button
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors duration-200 group text-left w-fit cursor-pointer"
                aria-label="Baixar Currículo"
                onClick={() => alert("Download do CV simulado!")}
              >
                <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-200" />
                <span>{t.footer.btnDownloadCVLabel}</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            {t.footer.copyMessage}
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group cursor-pointer"
            aria-label="Voltar ao topo"
          >
            <span>{t.footer.btnBackToTopLabel}</span>
            <div className="p-2 bg-muted rounded-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-200">
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-200" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
