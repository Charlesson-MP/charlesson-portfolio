/**
 * Skills Data
 *
 * Contains the data used to render the Skills section of the portfolio.
 *
 * Purpose:
 * - Provide a centralized, data-driven definition of skill categories and items.
 * - Keep content separated from UI logic for better maintainability and scalability.
 * - Allow easy updates, reordering, and localization without modifying components.
 *
 * Structure:
 * - Data is organized into categories (e.g., Frontend, Performance & SEO, Tools).
 * - Each category contains a list of skills.
 * - Each skill includes:
 *   - `name`: Localized skill name (pt/en)
 *   - `description`: Localized description of the skill
 *   - `icon`: Icon component from `react-icons`
 *
 * Data Modeling:
 * - Follows the `SkillCategory` type defined in `/types/skills.ts`.
 * - Uses `LocalizedString` from `/types/common.ts` for multilingual support.
 *
 * Icons:
 * - Icons are imported from `react-icons` and stored as component references.
 * - This allows flexible rendering and styling directly in the UI layer.
 *
 * Usage:
 * - Imported and consumed by the Skills section component.
 * - Typically rendered as grouped cards, grids, or interactive lists.
 *
 * Notes:
 * - This file is purely declarative and should not contain business logic.
 * - UI concerns such as layout, animations, and formatting are handled in components.
 * - New skills or categories can be added without impacting existing structure.
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
