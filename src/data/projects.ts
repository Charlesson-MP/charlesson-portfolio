/**
 * Projects Data
 *
 * A collection of professional projects showcasing technical skills and problem-solving abilities.
 * Each project includes a description, technologies used, and links to live demos and source code.
 *
 * Technical Notes:
 * - Uses TypeScript interfaces for type safety.
 * - Follows a consistent structure for easy maintenance and scaling.
 * - Includes real-world examples of collaboration, performance optimization, and front-end development.
 * - The `slug` field is used for routing to /projects/[slug] detail pages.
 */

import { Project } from "@/types/projects"

export const projects: Project[] = [
  {
    slug: "mile-artesanatos",
    title: "Mile Artesanatos",
    image: "/projects/preview-mile-artesanatos.png",
    description: "Vitrine virtual para negócio real. Foco em UX, validação server-side e integração com formulários de contato.",
    tech: ["React", "Tailwind CSS", "Validação"],
    liveUrl: "https://mile-artesanatos.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/mile-artesanatos",
  },
  {
    slug: "mortugaba-tech",
    title: "Mortugaba Tech",
    image: "/projects/preview-mortugaba-tech.png",
    description: "Projeto em equipe desenvolvido com Next.js e Tailwind CSS. Foco em colaboração, workflow com Git e UI responsiva.",
    tech: ["Next.js", "Tailwind CSS", "Git", "TypeScript"],
    liveUrl: "https://mortugaba-tech.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/mortugaba-tech",
  },
  {
    slug: "los-burgers",
    title: "Los Burgers",
    image: "/projects/preview-los-burgers.png",
    description: "Landing page comercial focada em performance e SEO. Otimização de Core Web Vitals e boas práticas de carregamento.",
    tech: ["Vue.js", "Tailwind CSS", "SEO", "Performance"],
    liveUrl: "https://los-burgers.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/los-burgers",
  },
  {
    slug: "wiki-movies",
    title: "Wiki Movies",
    image: "/projects/preview-wiki-movies.png",
    description: "SPA desenvolvida com JavaScript e consumo de API externa. Renderização dinâmica e sistema de busca.",
    tech: ["JavaScript", "REST API", "CSS3", "HTML5"],
    liveUrl: "https://charlesson-mp.github.io/wiki-movies/",
    githubUrl: "https://github.com/Charlesson-MP/wiki-movies",
  },
]