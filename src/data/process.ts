/**
 * Process Data (How I Work Section)
 *
 * Contains the data used to render the "How I Work" / workflow section
 * of the portfolio.
 *
 * Purpose:
 * - Provide a centralized, data-driven definition of each process step.
 * - Keep content separated from UI logic for better maintainability.
 * - Allow easy updates, reordering, or localization without modifying components.
 *
 * Structure:
 * - Each item follows the `ProcessStep` type defined in `/types/process.ts`.
 * - Steps are ordered using the `number` field (not array index).
 * - Text content is localized using `LocalizedString` (pt/en).
 *
 * Content Strategy:
 * - Each step represents a stage in the development workflow:
 *   from problem understanding to delivery and collaboration.
 * - Descriptions focus on clarity, professionalism, and value delivery.
 *
 * Icons:
 * - Icons are defined using `lucide-react` components.
 * - They are passed as references (not strings), keeping strong typing
 *   and enabling direct rendering in the UI layer.
 *
 * Usage:
 * - Imported and consumed by the "How I Work" section component.
 * - Typically rendered as cards, timeline steps, or interactive UI elements.
 *
 * Notes:
 * - Formatting (e.g., leading zeros like "01") should be handled in the UI.
 * - This file should remain purely declarative (no logic).
 */

import { ProcessStep } from "@/types/process";
import { Code2, LayoutPanelLeft, Search, Wrench, Gauge, GitBranch } from 'lucide-react';


export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: {
      pt: 'Entendendo o Problema',
      en: 'Understanding the problem'
    },
    description: {
      pt: 'Antes de escrever qualquer código, analiso o problema com profundidade, buscando dividir em partes menores e mais gerenciáveis. Esse processo me ajuda a ter clareza e evita retrabalho.',
      en: 'Before writing any code, I analyze the problem in depth, seeking to break it down into smaller, more manageable parts. This process helps me gain clarity and avoid rework.'
    },
    icon: Search,
  },
  {
    number: 2,
    title: {
      pt: 'Planejamento e Estrutura',
      en: 'Planning and Structure'
    },
    description: {
      pt: 'Defino a base do projeto considerando arquitetura, organização dos componentes e identidade visual (cores, tipografia e estilo), garantindo consistência desde o início.',
      en: 'I define the foundation of the project by considering architecture, component organization, and visual identity (colors, typography, and style), ensuring consistency from the start.'
    },
    icon: LayoutPanelLeft,
  },
  {
    number: 3,
    title: {
      pt: 'Desenvolvimento Orientado a Solução',
      en: 'Solution-Oriented Development'
    },
    description: {
      pt: 'Desenvolvo focado em entregar valor, escrevendo código limpo e escalável. Em projetos de estudo, aprofundo mais a implementação; em projetos reais, priorizo eficiência e prazo.',
      en: 'I develop with a focus on delivering value, writing clean and scalable code. In study projects, I delve deeper into the implementation; in real projects, I prioritize efficiency and deadlines.'
    },
    icon: Code2,
  },
  {
    number: 4,
    title: {
      pt: 'Ferramentas e IA como Aceleradores',
      en: 'Tools and AI as Accelerators'
    },
    description: {
      pt: 'Uso ferramentas modernas, incluindo IA e prototipação, para acelerar processos e validar ideias — sempre mantendo controle técnico sobre a solução.',
      en: 'I use modern tools, including AI and prototyping, to accelerate processes and validate ideas — always maintaining technical control over the solution.'
    },
    icon: Wrench,
  },
  {
    number: 5,
    title: {
      pt: 'Otimização e Qualidade',
      en: 'Optimization and Quality'
    },
    description: {
      pt: 'Refino performance, SEO e experiência do usuário, garantindo que a aplicação seja rápida, acessível e bem estruturada.',
      en: 'I refine performance, SEO, and user experience, ensuring the application is fast, accessible, and well-structured.'
    },
    icon: Gauge,
  },
  {
    number: 6,
    title: {
      pt: 'Entrega e Colaboração',
      en: 'Delivery and Collaboration'
    },
    description: {
      pt: 'Valorizo comunicação clara, versionamento com Git e boas práticas de equipe, garantindo que o projeto seja sustentável e fácil de evoluir.',
      en: 'I value clear communication, version control with Git, and team best practices, ensuring that the project is sustainable and easy to evolve.'
    },
    icon: GitBranch,
  },
]