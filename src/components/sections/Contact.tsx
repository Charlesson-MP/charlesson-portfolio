/**
 * Contact Section
 *
 * Provides multiple ways for users to get in touch,
 * including email and LinkedIn.
 *
 * Copy-to-clipboard functionality to improve UX.
 */

"use client"

import { useState } from "react"
import { Mail, Copy, Check } from "lucide-react"
import { FaLinkedin } from "react-icons/fa"
import { useTranslation } from "@/hooks/use-translation"

export function Contact() {
  const t = useTranslation()
  const [copied, setCopied] = useState(false)
  const email = "charlessonmendes@gmail.com"

  const handleCopy = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contato" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
            {t.contact.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {t.contact.subtitle}
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            {t.contact.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          <div className="flex items-center justify-between pl-6 pr-4 py-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group h-full">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 flex-1 min-w-0"
              title="Enviar email"
            >
              <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                <Mail className="h-5 w-5" />
              </div>
              <div className="text-left min-w-0">
                <p className="text-xs text-muted-foreground whitespace-nowrap">Email</p>
                <p className="text-foreground font-medium text-sm truncate">{email}</p>
              </div>
            </a>
            <div className="w-px h-10 bg-border hidden md:block shrink-0 mx-2"></div>
            <button
              onClick={handleCopy}
              className={`p-2.5 rounded-lg transition-colors flex items-center justify-center shrink-0 ${copied ? 'bg-green-500/10 text-green-500' : 'text-muted-foreground hover:bg-primary/10 hover:text-primary'}`}
              aria-label="Copiar email"
              title="Copiar email"
            >
              {copied ? (
                <Check className="h-5 w-5" />
              ) : (
                <Copy className="h-5 w-5" />
              )}
            </button>
          </div>
          
          <a
            href="https://linkedin.com/in/charlesson-mendes-developer"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors group h-full"
          >
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
              <FaLinkedin className="h-5 w-5" />
            </div>
            <div className="text-left min-w-0">
              <p className="text-xs text-muted-foreground whitespace-nowrap">LinkedIn</p>
              <p className="text-foreground font-medium text-sm truncate">charlesson-mendes-developer</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}