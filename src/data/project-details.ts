/**
 * Project Details Data
 *
 * Full case study content for each project in the portfolio.
 * This data powers the /projects/[slug] detail pages.
 *
 * Responsibilities:
 * - Provide complete project information (problem, solution, tech, etc.)
 * - Supply image galleries, terminal commands, and file structures
 * - Expose a lookup helper for fetching by slug
 *
 * Architecture Notes:
 * - Separated from data/projects.ts (summary data) following Option B.
 * - Data is serializable — no component imports. Tech icons are resolved
 *   at render time by the TechStack component using the `icon` string key.
 * - To add a new project: append a ProjectDetails object and add images
 *   to public/projects/[slug]/.
 */

import { ProjectDetails } from "@/types/projects"

export const projectDetails: ProjectDetails[] = [
  {
    slug: "mile-artesanatos",
    category: { pt: "Comércio eletrônico", en: "E-commerce" },
    title: "Mile Artesanatos",
    subtitle: {
      pt: "Vitrine virtual para um negócio artesanal real",
      en: "Virtual showcase for a real handcraft business"
    },
    description: {
      pt: "O Mile Artesanatos é uma aplicação web desenvolvida para apresentar e organizar produtos artesanais de forma moderna, responsiva e performática. O projeto foi construído utilizando Next.js e Tailwind CSS, com foco em uma experiência de usuário fluida e visualmente agradável. A aplicação conta com uma estrutura otimizada para renderização e navegação, aproveitando os recursos do App Router do Next.js para melhorar desempenho e organização do código.O layout foi cuidadosamente projetado para se adaptar a diferentes dispositivos, garantindo uma experiência consistente tanto em desktop quanto em mobile. Um dos principais diferenciais do projeto é a implementação de validações server- side, que impedem manipulações indevidas de dados diretamente pelo cliente(como via DevTools), reforçando a segurança e confiabilidade da aplicação. Este projeto demonstra a aplicação de boas práticas de desenvolvimento frontend, incluindo componentização, separação de responsabilidades, organização de dados e preocupação com escalabilidade e manutenção do código.",
      en: "Mile Artesanatos is a web application designed to showcase and organize handmade products in a modern, responsive, and high-performance interface. The project was built using Next.js and Tailwind CSS, focusing on delivering a smooth and visually appealing user experience. The application leverages Next.js App Router features to optimize rendering and navigation, ensuring better performance and code organization. The layout was carefully designed to be fully responsive, providing a consistent experience across desktop and mobile devices. One of the key highlights of the project is the implementation of server-side validation, preventing improper data manipulation directly from the client (e.g., via browser DevTools), which enhances application security and reliability. This project demonstrates the use of frontend best practices, including component-based architecture, separation of concerns, structured data handling, and a strong focus on scalability and maintainability.",
    },
    images: [
      "/projects/mile-artesanatos/preview-mile-artesanatos-1.png",
      "/projects/mile-artesanatos/preview-mile-artesanatos-2.png",
      "/projects/mile-artesanatos/preview-mile-artesanatos-3.png",
      "/projects/mile-artesanatos/preview-mile-artesanatos-4.png",
      "/projects/mile-artesanatos/preview-mile-artesanatos-5.png"
    ],
    liveUrl: "https://mile-artesanatos.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/mile-artesanatos",
    problem: {
      pt: "O cliente — um artesão local — dependia inteiramente do boca a boca e das redes sociais para vender seus produtos artesanais. Não havia um local centralizado para exibir o catálogo de produtos, compartilhar preços ou receber consultas. Os clientes em potencial não conseguiam navegar pelos produtos de forma independente, o que resultava em perda de vendas e comunicação manual repetitiva.",
      en: "The client — a local artisan — relied entirely on word-of-mouth and social media to sell handcrafted products. There was no centralized place to display the product catalog, share pricing, or receive inquiries. Potential customers had no way to browse products independently, leading to lost sales and repetitive manual communication.",
    },
    solution: {
      pt: "Criei uma loja virtual responsiva que serve como fonte única de informações confiáveis ​​para o negócio. O site apresenta uma galeria de produtos selecionados com categorias, um formulário de contato com validação no servidor para evitar spam e um layout limpo otimizado para dispositivos móveis — onde a maioria dos clientes navega. O resultado é uma presença online profissional que funciona 24 horas por dia, 7 dias por semana.",
      en: "I built a responsive virtual storefront that serves as the single source of truth for the business. The site features a curated product gallery with categories, a contact form with server-side validation to prevent spam, and a clean layout optimized for mobile devices — where most customers browse. The result is a professional online presence that works 24/7.",
    },
    tech: [
      {
        name: "React",
        icon: "FaReact",
        description: {
          pt: "Interface de usuário baseada em componentes com hooks e gerenciamento de estado",
          en: "Component-based UI with hooks and state management"
        },
      },
      {
        name: "Tailwind CSS",
        icon: "RiTailwindCssFill",
        description: {
          pt: "Estilização utilitária para design responsivo e consistente",
          en: "Utility-first styling for responsive, consistent design"
        },
      },
      {
        name: "JavaScript",
        icon: "FaJs",
        description: {
          pt: "Lógica do lado do cliente, manipulação de formulários e interatividade",
          en: "Client-side logic, form handling, and interactivity"
        },
      },
      {
        name: "Vite",
        icon: "SiVite",
        description: {
          pt: "Ferramenta de build rápida com HMR instantâneo para desenvolvimento",
          en: "Fast build tool with instant HMR for development"
        },
      },
      {
        name: "Vercel",
        icon: "IoLogoVercel",
        description: {
          pt: "Implantação contínua e hospedagem de borda",
          en: "Continuous deployment and edge hosting"
        },
      },
    ],
    features: [
      {
        title: {
          pt: "Galeria de Produtos",
          en: "Product Gallery"
        },
        description: {
          pt: "Layout em grade categorizado com pré-visualizações de imagens e detalhes do produto para facilitar a navegação",
          en: "Categorized grid layout with image previews and product details for easy browsing"
        },
      },
      {
        title: {
          pt: "Formulário de Contato",
          en: "Contact Form"
        },
        description: {
          pt: "Formulário com validação no servidor com mensagens de feedback e prevenção de spam",
          en: "Server-side validated form with feedback messages and spam prevention"
        }
      },
      {
        title: {
          pt: "Design Responsivo",
          en: "Responsive Design"
        },
        description: {
          pt: "Layout mobile-first que se adapta perfeitamente a todos os tamanhos de tela",
          en: "Mobile-first layout that adapts seamlessly to all screen sizes"
        }
      },
      {
        title: {
          pt: "Performance Otimizada",
          en: "Performance Optimized"
        },
        description: {
          pt: "Imagens com carregamento lento e ativos otimizados para tempos de carregamento rápidos em qualquer conexão",
          en: "Lazy-loaded images and optimized assets for fast load times on any connection"
        }
      },
    ],
    challenges: {
      pt: [
        "Criar um layout que exibisse produtos artesanais de forma atraente, mantendo tempos de carregamento rápidos, exigiu otimização cuidadosa de imagens e estratégias de carregamento lento.",
        "Implementar validação robusta de formulários sem um framework de backend — resolvido com padrões de validação do lado do cliente e do servidor.",
        "Criar uma identidade visual que refletisse a marca artesanal sem um briefing de design — iterado por meio de vários mockups com feedback do cliente."
      ],
      en: [
        "Designing a layout that showcases handcraft products in an appealing way while keeping load times fast — required careful image optimization and lazy loading strategies.",
        "Implementing robust form validation without a backend framework — solved with client + server-side validation patterns.",
        "Creating a visual identity that reflects the artisan brand without a design brief — iterated through multiple mockups with client feedback."
      ],
    },
    learnings: {
      pt: [
        "Trabalhar diretamente com um cliente real ensinou-me a traduzir necessidades de negócio em requisitos técnicos e a gerenciar expectativas por meio de feedback iterativo.",
        "Aprofundou o entendimento de padrões de validação de formulários e como construir confiança por meio de feedback de UI (estados de sucesso/erro, indicadores de carregamento).",
        "Aprendi a importância de projetar para o dispositivo menos capaz primeiro — a maioria dos clientes do cliente navega em smartphones mais antigos."
      ],
      en: [
        "Working directly with a real client taught me to translate business needs into technical requirements and manage expectations through iterative feedback.",
        "Deepened understanding of form validation patterns and how to build trust through UI feedback (success/error states, loading indicators).",
        "Learned the importance of designing for the least capable device first — the majority of the client's customers browse on older smartphones.",
      ],
    },
    improvements: {
      pt: [
        "Integrar um headless CMS (ex: Sanity) para que o cliente possa atualizar produtos sem alterações de código.",
        "Adicionar uma integração com WhatsApp para consultas diretas de produtos com mensagens pré-preenchidas.",
        "Implementar pipeline de otimização de imagens com formatos WebP/AVIF e srcset responsivos.",
        "Adicionar funcionalidade de busca e filtragem de produtos."
      ],
      en: [
        "Integrate a headless CMS (e.g., Sanity) so the client can update products without code changes.",
        "Add a WhatsApp integration for direct product inquiries with pre-filled messages.",
        "Implement image optimization pipeline with WebP/AVIF formats and responsive srcsets.",
        "Add product search and filtering functionality.",
      ],
    },
    projectStructure: `
      src/
      ├── components/
      │   ├── Header.jsx
      │   ├── Footer.jsx
      │   ├── ProductCard.jsx
      │   ├── ProductGrid.jsx
      │   ├── ContactForm.jsx
      │   └── ui/
      │       ├── Button.jsx
      │       └── Input.jsx
      ├── pages/
      │   ├── Home.jsx
      │   ├── Products.jsx
      │   └── Contact.jsx
      ├── data/
      │   └── products.js
      ├── styles/
      │   └── globals.css
      ├── App.jsx
      └── main.jsx`,
    commands: [
      { label: { pt: "Clone o repositório", en: "Clone the repository" }, command: "git clone https://github.com/Charlesson-MP/mile-artesanatos.git" },
      { label: { pt: "Navegue até o projeto", en: "Navigate to project" }, command: "cd mile-artesanatos" },
      { label: { pt: "Instale as dependências", en: "Install dependencies" }, command: "npm install" },
      { label: { pt: "Inicie o servidor de desenvolvimento", en: "Start development server" }, command: "npm run dev" },
    ],
  },
  {
    slug: "mortugaba-tech",
    category: { pt: "Estudo de caso", en: "Case Study" },
    title: "Mortugaba Tech",
    subtitle: {
      pt: "Projeto colaborativo de equipe com stack web moderna",
      en: "Collaborative team project with modern web stack"
    },
    description:
    {
      pt: "O Mortugaba Tech é uma aplicação web institucional desenvolvida com o objetivo de apresentar serviços, soluções e informações relacionadas à área de tecnologia de forma clara, organizada e profissional. O projeto foi construído utilizando Next.js e Tailwind CSS, priorizando desempenho, responsividade e uma interface moderna. A estrutura da aplicação foi pensada para facilitar a navegação e a compreensão do conteúdo, com seções bem definidas e organização visual que guia o usuário ao longo da página. O uso do App Router do Next.js contribui para uma arquitetura mais escalável e manutenção mais simples do código. O design responsivo garante que a aplicação funcione perfeitamente em diferentes dispositivos, desde smartphones até desktops, mantendo consistência visual e usabilidade. Além disso, o projeto demonstra boas práticas como componentização, reutilização de componentes e separação de responsabilidades. Este projeto evidencia a capacidade de desenvolver aplicações institucionais profissionais, com foco em apresentação de serviços, clareza de comunicação e qualidade técnica na implementação frontend.",
      en: "Mortugaba Tech is an institutional web application designed to present technology-related services, solutions, and information in a clear, structured, and professional way. The project was built using Next.js and Tailwind CSS, prioritizing performance, responsiveness, and a modern user interface. The application structure was designed to improve navigation and content clarity, with well - defined sections and a visual hierarchy that guides users throughout the page. The use of Next.js App Router contributes to a more scalable architecture and easier code maintenance. The responsive design ensures a seamless experience across different devices, from mobile to desktop, maintaining visual consistency and usability.Additionally, the project follows best practices such as component- based architecture, component reusability, and separation of concerns. This project demonstrates the ability to build professional institutional applications focused on service presentation, clear communication, and solid frontend engineering practices.",
    },
    images: [
      "/projects/mortugaba-tech/preview-mortugaba-tech-1.png",
      "/projects/mortugaba-tech/preview-mortugaba-tech-2.png",
      "/projects/mortugaba-tech/preview-mortugaba-tech-3.png"
    ],
    liveUrl: "https://mortugaba-tech.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/mortugaba-tech",
    problem: {
      pt: "A maioria dos desenvolvedores iniciantes constrói projetos isoladamente, perdendo habilidades críticas de colaboração esperadas em ambientes profissionais. Havia necessidade de um projeto que enfatizasse trabalho em equipe, disciplina de controle de versão e padrões compartilhados de qualidade de código — habilidades que são frequentemente mais difíceis de demonstrar do que a habilidade técnica.",
      en: "Most beginner developers build projects in isolation, missing critical collaboration skills expected in professional environments. There was a need for a project that emphasizes teamwork, version control discipline, and shared code quality standards — skills that are often harder to demonstrate than technical ability.",
    },
    solution: {
      pt: "Organizamos um projeto em equipe usando fluxos de trabalho Git padrão da indústria: branches de recursos, pull requests com revisões e commits convencionais. O projeto em si é um site responsivo construído com Next.js e TypeScript, fornecendo experiência real com frameworks modernos enquanto praticamos o desenvolvimento colaborativo.",
      en: "We organized a team project using industry-standard Git workflows: feature branches, pull requests with reviews, and conventional commits. The project itself is a responsive website built with Next.js and TypeScript, providing real experience with modern frameworks while practicing collaborative development.",
    },
    tech: [
      {
        name: "Next.js",
        icon: "RiNextjsFill",
        description: { pt: "Framework React com SSR, roteamento e otimização.", en: "React framework with SSR, routing, and optimization" },
      },
      {
        name: "TypeScript",
        icon: "SiTypescript",
        description: { pt: "Tipagem estática para um código mais seguro e autodescritivo.", en: "Static typing for safer, self-documenting code" },
      },
      {
        name: "Tailwind CSS",
        icon: "RiTailwindCssFill",
        description: { pt: "CSS utilitário para estilização consistente da equipe.", en: "Utility-first CSS for consistent team styling" },
      },
      {
        name: "Git",
        icon: "FaGitAlt",
        description: { pt: "Controle de versão com branching e merge strategies.", en: "Version control with branching and merge strategies" },
      },
      {
        name: "GitHub",
        icon: "FaGithub",
        description: { pt: "Colaboração via PRs, issues, and code review.", en: "Collaboration via PRs, issues, and code review" },
      },
      {
        name: "Vercel",
        icon: "IoLogoVercel",
        description: { pt: "Deployments de preview para cada pull request.", en: "Preview deployments for each pull request" },
      },
    ],
    features: [
      {
        title: { pt: "Fluxo de trabalho Git", en: "Git Workflow" },
        description:
          { pt: "Branches de recursos, pull requests e revisões de código seguindo as melhores práticas da indústria.", en: "Feature branches, pull requests, and code reviews following industry best practices." },
      },
      {
        title: { pt: "Layout Responsivo", en: "Responsive Layout" },
        description: { pt: "Design mobile-first com breakpoints consistentes em todas as páginas.", en: "Mobile-first design with consistent breakpoints across all pages." },
      },
      {
        title: { pt: "Segurança de Tipos", en: "Type Safety" },
        description:
          { pt: "Cobertura total de TypeScript garantindo detecção de erros em tempo de compilação.", en: "Full TypeScript coverage ensuring compile-time error detection." },
      },
      {
        title: { pt: "Deployments de Preview", en: "Preview Deployments" },
        description:
          { pt: "Cada PR gera uma URL de preview para revisão visual antes do merge.", en: "Each PR generates a preview URL for visual review before merge." },
      }
    ],
    challenges: {
      pt: [
        "Coordenar o trabalho entre vários membros da equipe com diferentes horários e níveis de habilidade — resolvido com atribuições claras de tarefas e comunicação assíncrona.",
        "Gerenciar conflitos de mesclagem em componentes compartilhados — estabeleceu um padrão de propriedade de componentes e PRs menores e focados.",
        "Garantir estilo de código consistente entre a equipe — implementou regras do ESLint e configuração do Prettier.",
      ],
      en: [
        "Coordinating work across multiple team members with different schedules and skill levels — resolved with clear task assignments and async communication.",
        "Managing merge conflicts in shared components — established a component ownership pattern and smaller, focused PRs.",
        "Ensuring consistent code style across the team — implemented ESLint rules and Prettier configuration.",
      ],
    },
    learnings: {
      pt: [
        "A colaboração real exige mais comunicação do que código — aprendi a escrever descrições de PR descritivas e comentários de revisão construtivos.",
        "Estratégias de ramificação Git (feature, develop, main) reduzem significativamente os problemas de integração quando seguidas consistentemente.",
        "Trabalhar com TypeScript em um ambiente de equipe expõe seu verdadeiro valor — as definições de tipo servem como documentação viva para código compartilhado.",
      ],
      en: [
        "Real collaboration requires more communication than code — learned to write descriptive PR descriptions and constructive review comments.",
        "Git branching strategies (feature, develop, main) significantly reduce integration issues when followed consistently.",
        "Working with TypeScript in a team environment exposes its true value — type definitions serve as living documentation for shared code.",
      ],
    },
    improvements: {
      pt: [
        "Adicionar pipeline de CI/CD com linting automatizado e testes na criação de PR.",
        "Implementar uma biblioteca de componentes com Storybook para documentação visual.",
        "Adicionar suporte de internacionalização (i18n) para múltiplos idiomas.",
      ],
      en: [
        "Add CI/CD pipeline with automated linting and testing on PR creation.",
        "Implement a component library with Storybook for visual documentation.",
        "Add internationalization (i18n) support for multiple languages.",
      ],
    },
    projectStructure: `
    src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   └── globals.css
    ├── components/
    │   ├── Header.tsx
    │   ├── Footer.tsx
    │   ├── Hero.tsx
    │   └── ui/
    │       ├── Button.tsx
    │       └── Card.tsx
    ├── lib/
    │   └── utils.ts
    └── types/
        └── index.ts`,
    commands: [
      { label: { pt: "Clone o repositório", en: "Clone the repository" }, command: "git clone https://github.com/Charlesson-MP/mortugaba-tech.git" },
      { label: { pt: "Navegue até o projeto", en: "Navigate to project" }, command: "cd mortugaba-tech" },
      { label: { pt: "Instale as dependências", en: "Install dependencies" }, command: "npm install" },
      { label: { pt: "Inicie o servidor de desenvolvimento", en: "Start development server" }, command: "npm run dev" },
    ],
  },
  {
    slug: "los-burgers",
    category: { pt: "Comércio eletrônico", en: "E-commerce" },
    title: "Los Burgers",
    subtitle: {
      pt: "Landing page comercial focada em performance e SEO. Otimização de Core Web Vitals e boas práticas de carregamento.",
      en: "Commercial landing page with performance-first approach"
    },
    description: {
      pt: "O Los Burgers é uma aplicação web de e-commerce desenvolvida para simular o fluxo de pedidos de uma hamburgueria, proporcionando uma experiência de usuário intuitiva e eficiente. O projeto foi construído utilizando Vue.js e Tailwind CSS, com foco em interatividade, organização do estado da aplicação e design moderno. A interface foi projetada para facilitar a navegação entre produtos, permitindo ao usuário visualizar opções, adicionar itens ao carrinho e acompanhar o pedido de forma simples e rápida. A experiência é otimizada para diferentes dispositivos, garantindo responsividade e consistência visual. O projeto demonstra o uso de conceitos importantes como gerenciamento de estado, componentização e manipulação dinâmica de dados, além de boas práticas de organização de código e separação de responsabilidades.Este projeto evidencia a capacidade de desenvolver aplicações interativas no contexto de e-commerce, com foco em usabilidade, fluidez na navegação e qualidade na construção da interface.",
      en: "Los Burgers is a web-based e-commerce application designed to simulate the ordering flow of a burger delivery service, providing an intuitive and efficient user experience. The project was built using Vue.js and Tailwind CSS, focusing on interactivity, state management, and modern UI design. The interface was designed to simplify product navigation, allowing users to browse items, add them to the cart, and manage their order in a smooth and straightforward way. The experience is fully responsive, ensuring consistency across different devices. The project demonstrates key concepts such as state management, component-based architecture, and dynamic data handling, along with best practices in code organization and separation of concerns. This project highlights the ability to build interactive e-commerce applications, with a strong focus on usability, smooth navigation, and high-quality frontend implementation.",
    },
    images: [
      "/projects/los-burgers/preview-los-burgers-1.png",
      "/projects/los-burgers/preview-los-burgers-2.png",
      "/projects/los-burgers/preview-los-burgers-3.png",
      "/projects/los-burgers/preview-los-burgers-4.png",
      "/projects/los-burgers/preview-los-burgers-5.png",
    ],
    liveUrl: "https://los-burgers.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/los-burgers",
    problem: {
      pt: "Pequenos restaurantes dependem de perfis genéricos em aplicativos de entrega, com marca limitada e sem controle de SEO. O cliente precisava de uma landing page dedicada que carregasse instantaneamente no celular, ranqueasse bem no Google e refletisse a identidade única do restaurante — tudo sem custos de manutenção técnica contínua.",
      en: "Small food businesses often rely on generic delivery app profiles that offer limited branding and no control over SEO. The client needed a dedicated landing page that loads instantly on mobile, ranks well on Google, and reflects the restaurant's unique identity — all without ongoing technical maintenance costs.",
    },
    solution: {
      pt: "Desenvolvi uma landing page leve e otimizada para performance usando Vue.js com foco em Core Web Vitals. A página possui imagens otimizadas com lazy loading, HTML semântico para SEO, marcação de dados estruturados e layout responsivo que funciona em qualquer dispositivo. Os scores do Lighthouse consistentemente atingem mais de 95+ em todas as categorias.",
      en: "I built a lightweight, performance-optimized landing page using Vue.js with a focus on Core Web Vitals scores. The page features optimized images with lazy loading, semantic HTML for SEO, structured data markup, and a responsive layout that looks great on any device. Lighthouse scores consistently hit 95+ across all categories.",
    },
    tech: [
      {
        name: "Vue.js",
        icon: "FaVuejs",
        description: { pt: "Framework progressivo para interfaces reativas baseadas em componentes", en: "Progressive framework for reactive, component-based UI" },
      },
      {
        name: "Tailwind CSS",
        icon: "RiTailwindCssFill",
        description: { pt: "Estilização rápida com classes utilitárias otimizadas para performance", en: "Rapid styling with performance-friendly utility classes" },
      },
      {
        name: "HTML5",
        icon: "FaHtml5",
        description: { pt: "Marcação semântica para acessibilidade e SEO", en: "Semantic markup for accessibility and SEO" },
      },
      {
        name: "CSS3",
        icon: "FaCss3Alt",
        description: { pt: "Animações personalizadas e design responsivo", en: "Custom animations and responsive design" },
      },
      {
        name: "Vite",
        icon: "SiVite",
        description: { pt: "Output de build otimizado com tree-shaking e minification", en: "Optimized build output with tree-shaking and minification" },
      },
      {
        name: "Vercel",
        icon: "IoLogoVercel",
        description: { pt: "Deploy na edge para entrega global de baixa latência", en: "Edge deployment for global low-latency delivery" },
      },
    ],
    features: [
      {
        title: { pt: "Lighthouse 95+", en: "Lighthouse 95+" },
        description: { pt: "Scores consistentes acima de 95 em Performance, Acessibilidade, Melhores Práticas e SEO", en: "Consistent scores above 95 in Performance, Accessibility, Best Practices, and SEO" },
      },
      {
        title: { pt: "Otimização de Imagens", en: "Image Optimization" },
        description: { pt: "Otimização de imagens com lazy loading, dimensionamento adequado e otimização de formato para LCP rápido", en: "Lazy loading, proper sizing, and format optimization for fast LCP" },
      },
      {
        title: { pt: "SEO Otimizado", en: "SEO Optimized" },
        description: { pt: "Meta tags, dados estruturados, HTML semântico e integração com Open Graph", en: "Meta tags, structured data, semantic HTML, and Open Graph integration" },
      },
      {
        title: { pt: "Mobile-First Design", en: "Mobile-First Design" },
        description: { pt: "Design mobile-first para dispositivos móveis, onde a maioria dos clientes de alimentação navega", en: "Designed for mobile devices first, where most food customers browse" },
      },
    ],
    challenges: {
      pt: [
        "Alcançar pontuações consistentes do Lighthouse acima de 95 exigiu otimização agressiva de imagens — implementei srcsets responsivos e negociação de formato.",
        "Balancear a riqueza visual (fotografia de alimentos) com restrições de desempenho — usei carregamento lento estratégico e técnicas de placeholder.",
        "Implementar marcação de dados estruturados para SEO de negócios locais sem complicar demais a base de código.",
      ],
      en: [
        "Achieving consistent Lighthouse scores above 95 required aggressive image optimization — implemented responsive srcsets and format negotiation.",
        "Balancing visual richness (food photography) with performance constraints — used strategic lazy loading and placeholder techniques.",
        "Implementing structured data markup for local business SEO without overcomplicating the codebase.",
      ],
    },
    learnings: {
      pt: [
        "Otimização de desempenho é um processo iterativo — pequenas mudanças no carregamento de imagens, exibição de fontes e adiamento de scripts se acumulam em melhorias significativas.",
        "Core Web Vitals (LCP, FID, CLS) exigem estratégias de otimização diferentes; entender cada métrica é essencial para melhorias direcionadas.",
        "SEO não é apenas sobre meta tags — estrutura HTML semântica, velocidade da página e usabilidade móvel são fatores de ranqueamento igualmente importantes.",
      ],
      en: [
        "Performance optimization is an iterative process — small changes to image loading, font display, and script deferral compound into significant improvements.",
        "Core Web Vitals (LCP, FID, CLS) require different optimization strategies; understanding each metric is essential for targeted improvements.",
        "SEO is not just about meta tags — semantic HTML structure, page speed, and mobile usability are equally important ranking factors.",
      ],
    },
    improvements: {
      pt: [
        "Adicionar integração de pedidos online com API de plataforma de delivery.",
        "Implementar seção de menu dinâmico alimentada por CMS headless.",
        "Adicionar integração com Google Maps mostrando a localização do restaurante.",
        "Implementar analytics para rastrear o desempenho da página e o comportamento do usuário."
      ],
      en: [
        "Add online ordering integration with a delivery platform API.",
        "Implement a dynamic menu section powered by a headless CMS.",
        "Add Google Maps integration showing the restaurant location.",
        "Implement analytics to track page performance and user behavior."
      ],
    },
    projectStructure: `
      src/
      ├── components/
      │   ├── AppHeader.vue
      │   ├── AppFooter.vue
      │   ├── HeroSection.vue
      │   ├── MenuSection.vue
      │   ├── InfoSection.vue
      │   └── ui/
      │       ├── BaseButton.vue
      │       └── BaseCard.vue
      ├── assets/
      │   ├── images/
      │   └── styles/
      │       └── main.css
      ├── App.vue
      └── main.js`,
    commands: [
      { label: { pt: "Clone o repositório", en: "Clone the repository" }, command: "git clone https://github.com/Charlesson-MP/los-burgers.git" },
      { label: { pt: "Navegue até o projeto", en: "Navigate to project" }, command: "cd los-burgers" },
      { label: { pt: "Instale as dependências", en: "Install dependencies" }, command: "npm install" },
      { label: { pt: "Inicie o servidor de desenvolvimento", en: "Start development server" }, command: "npm run dev" },
    ],
  },
  {
    slug: "wiki-movies",
    category: { pt: "Estudo de caso", en: "Case Study" },
    title: "Wiki Movies",
    subtitle: {
      pt: "SPA com consumo de API externa e renderização dinâmica",
      en: "SPA with external API consumption and dynamic rendering"
    },
    description: {
      pt: "O Wiki Movies é uma aplicação web desenvolvida para permitir a busca e exploração de filmes a partir de uma API externa, oferecendo uma interface dinâmica e intuitiva para visualização de informações como títulos, avaliações e imagens. O projeto foi construído com foco na manipulação e exibição de dados provenientes de requisições assíncronas, demonstrando a integração com APIs externas e o tratamento de respostas para renderização em tempo real na interface. A aplicação apresenta uma navegação simples e eficiente, permitindo ao usuário buscar filmes, visualizar resultados e acessar detalhes relevantes de forma rápida. O layout foi desenvolvido para ser responsivo, garantindo uma boa experiência em diferentes dispositivos. Este projeto evidencia a capacidade de trabalhar com consumo de APIs, gerenciamento de estado e atualização dinâmica da interface, além da organização do código e separação de responsabilidades em aplicações frontend.",
      en: "The Wiki Movies is a web application developed to allow the search and exploration of movies from an external API, offering a dynamic and intuitive interface for viewing information such as titles, ratings, and images. The project was built with a focus on the manipulation and display of data from asynchronous requests, demonstrating the integration with external APIs and the treatment of responses for real-time rendering on the interface. The application presents a simple and efficient navigation, allowing the user to search for movies, view results, and access relevant details quickly. The layout was developed to be responsive, ensuring a good experience on different devices. This project demonstrates the ability to work with API consumption, state management, and dynamic interface updates, as well as the organization of code and separation of responsibilities in frontend applications.",
    },
    images: [
      "/projects/wiki-movies/preview-wiki-movies-1.png",
      "/projects/wiki-movies/preview-wiki-movies-2.png",
      "/projects/wiki-movies/preview-wiki-movies-3.png",
      "/projects/wiki-movies/preview-wiki-movies-4.png",
    ],
    liveUrl: "https://charlesson-mp.github.io/wiki-movies/",
    githubUrl: "https://github.com/Charlesson-MP/wiki-movies",
    problem: {
      pt: "Entusiastas de cinema buscam uma forma rápida e organizada de descobrir e pesquisar filmes, livre da desordem das grandes plataformas de streaming. Para mim, como desenvolvedor, era essencial comprovar proficiência em JavaScript vanilla e integração de API sem depender de frameworks, demonstrando uma base sólida de conhecimento.",
      en: "Movie enthusiasts seek a quick, organized way to discover and search for films, free from the clutter of major streaming platforms. For me, as a developer, it was essential to demonstrate proficiency in vanilla JavaScript and API integration without relying on frameworks, showcasing a solid foundation of knowledge.",
    },
    solution: {
      pt: "Desenvolvi uma SPA eficiente que consome dados de filmes dinamicamente através da API do TMDB. A aplicação possui uma barra de pesquisa com requisições debounced, exibindo cartões de filmes com pôsteres e avaliações em um layout de grade responsivo. Construída integralmente com JavaScript vanilla, HTML5 e CSS3, demonstra competências essenciais em desenvolvimento web sem o uso de abstrações de framework.",
      en: "I developed an efficient SPA that consumes movie data dynamically through the TMDB API. The application features a search bar with debounced requests, displaying movie cards with posters and ratings in a responsive grid layout. Built entirely with vanilla JavaScript, HTML5, and CSS3, it demonstrates essential web development skills without the use of framework abstractions.",
    },
    tech: [
      {
        name: "JavaScript",
        icon: "FaJs",
        description: {
          pt: "ES6+ para chamadas de API, manipulação de DOM e lógica assíncrona",
          en: "ES6+ for API calls, DOM manipulation, and async logic",
        },
      },
      {
        name: "REST API",
        icon: "FaSearch",
        description: {
          pt: "Integração com a TMDB API para recuperação de dados de filmes",
          en: "TMDB API integration for movie data retrieval",
        },
      },
      {
        name: "HTML5",
        icon: "FaHtml5",
        description: {
          pt: "Estrutura semântica e acessibilidade",
          en: "Semantic structure and accessibility",
        },
      },
      {
        name: "CSS3",
        icon: "FaCss3Alt",
        description: {
          pt: "Layout de grade, animações e design responsivo",
          en: "Grid layout, animations, and responsive design",
        },
      },
      {
        name: "GitHub Pages",
        icon: "FaGithub",
        description: {
          pt: "Hospedagem estática com suporte a domínio personalizado",
          en: "Static hosting with custom domain support",
        },
      },
    ],
    features: [
      {
        title: {
          pt: "Busca em Tempo Real",
          en: "Real-Time Search",
        },
        description: {
          pt: "Campo de busca com debounce que consulta a TMDB API e atualiza os resultados dinamicamente",
          en: "Debounced search input that queries the TMDB API and updates results dynamically",
        },
      },
      {
        title: {
          pt: "Renderização Dinâmica",
          en: "Dynamic Rendering",
        },
        description: {
          pt: "Cartões de filmes são gerados a partir de dados da API usando manipulação de DOM - sem necessidade de frameworks",
          en: "Movie cards are generated from API data using DOM manipulation - no frameworks needed",
        },
      },
      {
        title: {
          pt: "Layout Responsivo",
          en: "Responsive Grid",
        },
        description: {
          pt: "Layout de grade CSS que se adapta de 1 a 4 colunas baseado no tamanho da tela",
          en: "CSS Grid layout that adapts from 1 to 4 columns based on screen size",
        },
      },
      {
        title: {
          pt: "Tratamento de Erros",
          en: "Error Handling",
        },
        description: {
          pt: "Tratamento de falhas de API, resultados vazios e problemas de rede",
          en: "Graceful handling of API failures, empty results, and network issues.",
        },
      },
    ],
    challenges: {
      pt: [
        "Gerenciamento de chamadas de API assíncronas e condições de corrida na busca - implementei padrões de debounce e cancelamento de requisições",
        "Construir uma grade responsiva sem frameworks CSS exigiu um entendimento mais profundo de CSS Grid e media queries",
        "Lidar com limites de taxa de API e estados de erro de forma graciosa para manter uma experiência de usuário fluida"
      ],
      en: [
        "Managing asynchronous API calls and race conditions in search — implemented debouncing and request cancellation patterns.",
        "Building a responsive grid without CSS frameworks required deeper understanding of CSS Grid and media queries.",
        "Handling API rate limits and error states gracefully to maintain a smooth user experience."
      ]
    },
    learnings: {
      pt: [
        "Gerenciamento de chamadas de API assíncronas e condições de corrida na busca - implementei padrões de debounce e cancelamento de requisições",
        "Construir uma grade responsiva sem frameworks CSS exigiu um entendimento mais profundo de CSS Grid e media queries",
        "Lidar com limites de taxa de API e estados de erro de forma graciosa para manter uma experiência de usuário fluida"
      ],
      en: [
        "Managing asynchronous API calls and race conditions in search — implemented debouncing and request cancellation patterns.",
        "Building a responsive grid without CSS frameworks required deeper understanding of CSS Grid and media queries.",
        "Handling API rate limits and error states gracefully to maintain a smooth user experience."
      ]
    },
    improvements: {
      pt: [
        "Adicionar páginas de detalhes de filmes com informações de elenco e trailers.",
        "Implementar favoritos/watchlist usando localStorage para persistência.",
        "Adicionar paginação ou scroll infinito para navegar em grandes conjuntos de resultados.",
        "Migrar para TypeScript para melhor manutenibilidade e segurança de tipos.",
      ],
      en: [
        "Add movie detail pages with cast information and trailers.",
        "Implement favorites/watchlist using localStorage for persistence.",
        "Add pagination or infinite scroll for browsing large result sets.",
        "Migrate to TypeScript for better maintainability and type safety.",
      ],
    },
    projectStructure: `├── css/
│   ├── styles.css
│   └── responsive.css
├── js/
│   ├── api.js
│   ├── dom.js
│   ├── search.js
│   └── app.js
├── assets/
│   └── images/
├── index.html
└── README.md`,
    commands: [
      { label: { pt: "Clone o repositório", en: "Clone the repository" }, command: "git clone https://github.com/Charlesson-MP/wiki-movies.git" },
      { label: { pt: "Navegar até o projeto", en: "Navigate to project" }, command: "cd wiki-movies" },
      { label: { pt: "Abrir no navegador", en: "Open in browser" }, command: "open index.html" },
    ],
  },
]

/**
 * Lookup helper — retrieves a project's full details by slug.
 * Returns undefined if no match is found (triggers notFound in the page).
 */
export function getProjectDetailsBySlug(slug: string): ProjectDetails | undefined {
  return projectDetails.find((project) => project.slug === slug)
}

/**
 * Returns all project slugs — used by generateStaticParams
 * to pre-render all detail pages at build time.
 */
export function getAllProjectSlugs(): string[] {
  return projectDetails.map((project) => project.slug)
}
