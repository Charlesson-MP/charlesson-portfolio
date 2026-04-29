/**
 * Experience Data
 *
 * Centralized data source for all professional experiences displayed
 * in the Experience section of the portfolio.
 *
 * - Each entry represents a role with company, period, and description
 * - Content is localized (pt/en) for internationalization support
 *
 * Purpose:
 * Separate content from presentation, allowing components to remain
 * clean, reusable, and focused only on rendering logic.
 *
 * Notes:
 * - Structured to support both timeline and card-based layouts
 * - Easy to extend with additional fields (e.g., links, technologies)
 */

import { Experience } from "@/types/experience";

export const experiences: Experience[] = [
  {
    title: { pt: "Desenvolvedor Frontend", en: "Frontend Developer" },
    company: "",
    period: "2024 — Atualmente",
    description: {
      pt: "Desenvolvimento de interfaces web modernas, responsivas e orientadas à performance utilizando React, Next.js e Vue.js, com Tailwind CSS e TypeScript. Experiência na criação de landing pages, e-commerces e aplicações com consumo de APIs, aplicando boas práticas de componentização, organização de código, documentação técnica e responsividade. Familiaridade com otimização de performance, SEO técnico e versionamento com Git, atuando em projetos individuais e colaborativos. Atualmente, direciono meus estudos para o desenvolvimento de ferramentas próprias com potencial de monetização.",
      en: "Development of modern, responsive, high-performance web interfaces using React, Next.js, and Vue.js, with Tailwind CSS and TypeScript. Experience in creating landing pages, e-commerces, and applications consuming APIs, applying good practices in componentization, code organization, technical documentation, and responsiveness. Familiarity with performance optimization, technical SEO, and Git version control, working on individual and collaborative projects. Currently, I am directing my studies toward developing proprietary tools with monetization potential.",
    },
  },
  {
    title: { pt: "Técnico em TI", en: "IT Technician" },
    company: "Prefeitura Municipal de Vitória da Conquista - BA",
    period: "2022 — 2024",
    description: {
      pt:
        "Atuação no suporte técnico remoto e presencial para múltiplas secretarias municipais, com foco em resolução de problemas e estabilidade operacional dos sistemas. Responsável por instalação, configuração e manutenção de softwares, redes e equipamentos, além de atendimento direto ao usuário final, desenvolvendo comunicação clara, empática e orientada à solução.",
      en:
        "Performing remote and in-person technical support for multiple municipal departments, with a focus on problem-solving and system operational stability. Responsible for installing, configuring and maintaining software, networks and equipment, as well as providing direct support to end users, developing clear, empathetic and solution-oriented communication.",
    },
  },
  {
    title: { pt: "Técnico de Redes", en: "Network Technician" },
    company: "Conecta",
    period: "2013 — 2015",
    description: {
      pt:
        "Responsável pela instalação e manutenção de redes residenciais e comerciais, além de suporte técnico em computadores e notebooks. Experiência prática em infraestrutura de redes e resolução de problemas técnicos em campo.",
      en:
        "Responsible for the installation and maintenance of residential and commercial networks, as well as technical support for computers and notebooks. Practical experience in network infrastructure and field troubleshooting.",
    },
  },
  {
    title: { pt: "Designer Gráfico", en: "Graphic Designer" },
    company: "Gráfica Universo",
    period: "2016 - 2017",
    description: {
      pt:
        "Atuação na criação e edição de materiais gráficos utilizando CorelDRAW, incluindo vetorização de imagens e desenvolvimento de artes personalizadas para clientes. Experiência voltada à comunicação visual, atenção a detalhes e adaptação de identidade gráfica para diferentes demandas.",
      en:
        "Performed graphic design and editing using CorelDRAW, including image vectorization and development of personalized artwork for clients. Experience focused on visual communication, attention to detail and adaptation of graphic identity to different demands.",
    },
  },
];