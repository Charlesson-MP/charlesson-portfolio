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
    image: "/projects/mile-artesanatos/preview-mile-artesanatos-1.png",
    description:
    {
      pt: "Plataforma web de e-commerce de artesanato desenvolvida com Next.js e Tailwind CSS, com foco em desempenho, design responsivo e validações server-side para garantir segurança e integridade dos dados.",
      en: "Craft e-commerce platform built with Next.js and Tailwind CSS, focused on performance, responsive design, and server-side validation to ensure data security and integrity.",
    },
    tech: ["Next.js", "Tailwind CSS", "Validação", "TypeScript"],
    liveUrl: "https://mile-artesanatos.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/mile-artesanatos",
  },
  {
    slug: "mortugaba-tech",
    title: "Mortugaba Tech",
    image: "/projects/mortugaba-tech/preview-mortugaba-tech-1.png",
    description:
    {
      pt: "Plataforma institucional moderna desenvolvida com Next.js e Tailwind CSS para apresentar serviços e soluções tecnológicas, com foco em design responsivo, organização de conteúdo e experiência do usuário.",
      en: "Modern institutional platform built with Next.js and Tailwind CSS to showcase technology services and solutions, focused on responsive design, content organization, and user experience.",
    },
    tech: ["Next.js", "Tailwind CSS", "SEO", "TypeScript", "UX"],
    liveUrl: "https://mortugaba-tech.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/mortugaba-tech",
  },
  {
    slug: "los-burgers",
    title: "Los Burgers",
    image: "/projects/los-burgers/preview-los-burgers-1.png",
    description:
    {
      pt: "Aplicação de e-commerce para delivery de hamburgueria desenvolvida com Vue.js e Tailwind CSS, com foco em experiência do usuário, navegação fluida e interface moderna.",
      en: "Burger delivery e-commerce application built with Vue.js and Tailwind CSS, focused on user experience, smooth navigation, and a modern interface.",
    },
    tech: ["Vue.js", "Tailwind CSS", "SEO", "Performance"],
    liveUrl: "https://los-burgers.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/los-burgers",
  },
  {
    slug: "wiki-movies",
    title: "Wiki Movies",
    image: "/projects/wiki-movies/preview-wiki-movies-1.png",
    description:
    {
      pt: "Aplicação web para busca e exploração de filmes consumindo API externa, com interface dinâmica e foco em organização e exibição de dados.",
      en: "Web application for searching and exploring movies using an external API, featuring a dynamic interface focused on data organization and presentation.",
    },
    tech: ["JavaScript", "REST API", "CSS3", "HTML5"],
    liveUrl: "https://charlesson-mp.github.io/wiki-movies/",
    githubUrl: "https://github.com/Charlesson-MP/wiki-movies",
  },
]
