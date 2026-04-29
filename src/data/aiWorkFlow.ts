/**
 * AI Workflow Data
 *
 * Centralized data source for AI-assisted workflow steps displayed
 * in the AI Workflow section of the portfolio.
 *
 * - Each entry represents a step in the workflow process
 * - Content is localized (pt/en) for internationalization support
 *
 * Purpose:
 * Separate content from presentation, allowing components to remain
 * clean, reusable, and focused only on rendering logic.
 *
 * Notes:
 * - Structured to support timeline or step-based layouts
 * - Easy to extend with tools, examples, or external references
 */

import { Bot, Bug, BookOpen } from "lucide-react";
import { AiWorkFlow } from "../types/aiWorkFlow";

export const aiUseCases: AiWorkFlow[] = [
  {
    icon: Bot,
    title: {
      pt: "Assistência na Codificação",
      en: "Coding Assistant",
    },
    description: {
      pt: "Uso IA para acelerar tarefas repetitivas, gerar boilerplate e explorar diferentes abordagens para resolver problemas.",
      en: "I use AI to speed up repetitive tasks, generate boilerplate, and explore different approaches to solving problems.",
    },
  },
  {
    icon: Bug,
    title: {
      pt: "Suporte em Debugging",
      en: "Debugging Support",
    },
    description: {
      pt: "Ferramentas de IA me ajudam a identificar bugs mais rapidamente, sugerindo possíveis causas e soluções.",
      en: "AI tools help me identify bugs more quickly, suggesting possible causes and solutions.",
    },
  },
  {
    icon: BookOpen,
    title: {
      pt: "Aprendizado Acelerado",
      en: "Accelerated Learning",
    },
    description: {
      pt: "Acelero meu aprendizado de novas tecnologias e conceitos usando IA como ferramenta de suporte.",
      en: "I accelerate my learning of new technologies and concepts using AI as a support tool.",
    },
  },
];