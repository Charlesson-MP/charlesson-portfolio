/**
 * Skills Data
 *
 * Centralized data source for all skill categories and items displayed
 * in the Skills section of the portfolio.
 *
 * - Organized by category (e.g., Frontend, Performance, Tools)
 * - Each skill includes name, description, and icon reference
 * - Icons are stored as components (IconType) for flexible rendering
 *
 * Purpose:
 * Separate content from presentation, keeping the UI components clean,
 * maintainable, and focused only on rendering.
 *
 * Notes:
 * This structure allows easy updates, scalability, and future integration
 * with external data sources (e.g., CMS or API).
 */

import { SkillCategory } from "@/types/skills"
import {FaReact, FaVuejs, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaJs, FaSearch, FaImage } from "react-icons/fa"
import { BsFillLightningChargeFill } from "react-icons/bs";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiVite } from "react-icons/si";
import { MdSpeed } from "react-icons/md";
import { IoLogoVercel } from "react-icons/io5";
import { VscVscode } from "react-icons/vsc";

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        description: "Hooks, Context API, desenvolvimento de SPAs e integração com APIs",
        icon: FaReact,
      },
      {
        name: "Next.js",
        description: "SSR, otimização de SEO, performance e roteamento avançado",
        icon: RiNextjsFill,
      },
      {
        name: "Vue.js",
        description: "Composition API, componentes reativos e gerenciamento de estado",
        icon: FaVuejs,
      },
      {
        name: "TypeScript",
        description: "Tipagem estática, interfaces e código mais seguro e manutenível",
        icon: SiTypescript,
      },
      {
        name: "JavaScript",
        description: "ES6+, programação assíncrona e manipulação do DOM",
        icon: FaJs,
      },
      {
        name: "Tailwind CSS",
        description: "UI responsiva, design systems e prototipagem rápida",
        icon: RiTailwindCssFill,
      },
      {
        name: "HTML5",
        description: "Semântica, acessibilidade e estruturação de conteúdo",
        icon: FaHtml5,
      },
      {
        name: "CSS3",
        description: "Layouts flexíveis, animações e design responsivo",
        icon: FaCss3Alt,
      },
    ],
  },
  {
    title: "Performance & SEO",
    skills: [
      {
        name: "Core Web Vitals",
        description: "Otimização de LCP, FID e CLS para melhor experiência",
        icon: BsFillLightningChargeFill,
      },
      {
        name: "Lighthouse",
        description: "Auditorias de performance, acessibilidade e boas práticas",
        icon: MdSpeed,
      },
      {
        name: "SEO Técnico",
        description: "Meta tags, structured data e otimização para buscadores",
        icon: FaSearch,
      },
      {
        name: "Lazy Loading",
        description: "Carregamento otimizado de imagens e componentes",
        icon: FaImage,
      },
    ],
  },
  {
    title: "Ferramentas",
    skills: [
      {
        name: "Git",
        description: "Controle de versão, branches e colaboração em equipe",
        icon: FaGitAlt,
      },
      {
        name: "GitHub",
        description: "Pull requests, code review e CI/CD",
        icon: FaGithub,
      },
      {
        name: "Vercel",
        description: "Deploy contínuo, preview deployments e edge functions",
        icon: IoLogoVercel,
      },
      {
        name: "Vite",
        description: "Build rápido, HMR instantâneo e bundling otimizado",
        icon: SiVite,
      },
      {
        name: "VS Code",
        description: "Extensões, snippets e produtividade no desenvolvimento",
        icon: VscVscode,
      },
    ],
  },
]

export { skillCategories }
