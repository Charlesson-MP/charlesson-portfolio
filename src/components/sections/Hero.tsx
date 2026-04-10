/**
 * Hero Section
 *
 * Main landing section of the portfolio.
 * Displays personal introduction, call-to-actions,
 * social links, and profile image.
 *
 * Responsibilities:
 * - Present developer identity
 * - Highlight main skills and focus
 * - Provide navigation to key sections
 */

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export function Hero() {
  return (
    <section id="inicio" className="min-h-screen flex items-center pt-24 pb-16 md:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          <div className="max-w-2xl flex-1 flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-primary font-medium mb-4 text-sm tracking-wide uppercase">
              Frontend Developer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight text-balance">
              Charlesson Mendes Pereira
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Frontend Developer focado em construir aplicações web responsivas e de alta performance
              usando Next.js, React e Tailwind CSS. Forte atenção à performance, SEO e experiência do usuário.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button asChild size="lg" className="group">
                <Link href="#projetos">
                  Ver Projetos
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#contato">
                  Fale Comigo
                </Link>
              </Button>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg"
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/charlesson-mendes-developer"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:charlessonmendes@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end w-full">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-4 border-muted/30 shadow-2xl transition-transform duration-500 hover:-translate-y-2">
              <Image
                src="/Charlesson.jpg"
                alt="Charlesson Mendes Pereira"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 640px) 224px, (max-width: 1024px) 288px, (max-width: 1280px) 320px, 384px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
