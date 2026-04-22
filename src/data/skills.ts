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
    title: {
      pt: "Frontend",
      en: "Frontend",
    },
    skills: [
      {
        name: {
          pt: "React",
          en: "React",
        },
        description: {
          pt: "Hooks, Context API, desenvolvimento de SPAs e integração com APIs",
          en: "Hooks, Context API, development of SPAs and API integration",
        },
        icon: FaReact,
      },
      {
        name: {
          pt: "Next.js",
          en: "Next.js",
        },
        description: {
          pt: "SSR, otimização de SEO, performance e roteamento avançado",
          en: "SSR, SEO optimization, performance and advanced routing",
        },
        icon: RiNextjsFill,
      },
      {
        name: {
          pt: "Vue.js",
          en: "Vue.js",
        },
        description: {
          pt: "Composition API, componentes reativos e gerenciamento de estado",
          en: "Composition API, reactive components and state management",
        },
        icon: FaVuejs,
      },
      {
        name: {
          pt: "TypeScript",
          en: "TypeScript",
        },
        description: {
          pt: "Tipagem estática, interfaces e código mais seguro e manutenível",
          en: "Static typing, interfaces and more secure and maintainable code",
        },
        icon: SiTypescript,
      },
      {
        name: {
          pt: "JavaScript",
          en: "JavaScript",
        },
        description: {
          pt: "ES6+, programação assíncrona e manipulação do DOM",
          en: "ES6+, asynchronous programming and DOM manipulation",
        },
        icon: FaJs,
      },
      {
        name: {
          pt: "Tailwind CSS",
          en: "Tailwind CSS",
        },
        description: {
          pt: "UI responsiva, design systems e prototipagem rápida",
          en: "Responsive UI, design systems and rapid prototyping",
        },
        icon: RiTailwindCssFill,
      },
      {
        name: {
          pt: "HTML5",
          en: "HTML5",
        },
        description: {
          pt: "Semântica, acessibilidade e estruturação de conteúdo",
          en: "Semantics, accessibility and content structuring",
        },
        icon: FaHtml5,
      },
      {
        name: {
          pt: "CSS3",
          en: "CSS3",
        },
        description: {
          pt: "Layouts flexíveis, animações e design responsivo",
          en: "Flexible layouts, animations and responsive design",
        },
        icon: FaCss3Alt,
      },
    ],
  },
  {
    title: {
      pt: "Performance & SEO",
      en: "Performance & SEO",
    },
    skills: [
      {
        name: {
          pt: "Core Web Vitals",
          en: "Core Web Vitals",
        },
        description: {
          pt: "Otimização de LCP, FID e CLS para melhor experiência",
          en: "LCP, FID and CLS optimization for better experience",
        },
        icon: BsFillLightningChargeFill,
      },
      {
        name: {
          pt: "Lighthouse",
          en: "Lighthouse",
        },
        description: {
          pt: "Auditorias de performance, acessibilidade e boas práticas",
          en: "Performance, accessibility and best practices audits",
        },
        icon: MdSpeed,
      },
      {
        name: {
          pt: "SEO Técnico",
          en: "Technical SEO",
        },
        description: {
          pt: "Meta tags, structured data e otimização para buscadores",
          en: "Meta tags, structured data and search engine optimization",
        },
        icon: FaSearch,
      },
      {
        name: {
          pt: "Lazy Loading",
          en: "Lazy Loading",
        },
        description: {
          pt: "Carregamento otimizado de imagens e componentes",
          en: "Optimized loading of images and components",
        },
        icon: FaImage,
      },
    ],
  },
  {
    title: {
      pt: "Ferramentas",
      en: "Tools",
    },
    skills: [
      {
        name: {
          pt: "Git",
          en: "Git",
        },
        description: {
          pt: "Controle de versão, branches e colaboração em equipe",
          en: "Version control, branches and team collaboration",
        },
        icon: FaGitAlt,
      },
      {
        name: {
          pt: "GitHub",
          en: "GitHub",
        },
        description: {
          pt: "Pull requests, code review e CI/CD",
          en: "Pull requests, code review and CI/CD",
        },
        icon: FaGithub,
      },
      {
        name: {
          pt: "Vercel",
          en: "Vercel",
        },
        description: {
          pt: "Deploy contínuo, preview deployments e edge functions",
          en: "Continuous deployment, preview deployments and edge functions",
        },
        icon: IoLogoVercel,
      },
      {
        name: {
          pt: "Vite",
          en: "Vite",
        },
        description: {
          pt: "Build rápido, HMR instantâneo e bundling otimizado",
          en: "Fast build, instant HMR and optimized bundling",
        },
        icon: SiVite,
      },
      {
        name: {
          pt: "VS Code",
          en: "VS Code",
        },
        description: {
          pt: "Extensões, snippets e produtividade no desenvolvimento",
          en: "Extensions, snippets and productivity in development",
        },
        icon: VscVscode,
      },
    ],
  },
]

export { skillCategories }
