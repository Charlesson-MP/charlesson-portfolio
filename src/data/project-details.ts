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
    title: "Mile Artesanatos",
    subtitle: "Virtual showcase for a real handcraft business",
    description:
      "A modern virtual storefront designed to showcase handcrafted products for a small business. Built with React and Tailwind CSS, featuring server-side form validation, contact integration, and a focus on delivering a polished user experience that drives real customer engagement.",
    images: [
      "/projects/preview-mile-artesanatos.png",
      "/projects/preview-mile-artesanatos.png",
      "/projects/preview-mile-artesanatos.png",
    ],
    liveUrl: "https://mile-artesanatos.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/mile-artesanatos",
    problem:
      "The client — a local artisan — relied entirely on word-of-mouth and social media to sell handcrafted products. There was no centralized place to display the product catalog, share pricing, or receive inquiries. Potential customers had no way to browse products independently, leading to lost sales and repetitive manual communication.",
    solution:
      "I built a responsive virtual storefront that serves as the single source of truth for the business. The site features a curated product gallery with categories, a contact form with server-side validation to prevent spam, and a clean layout optimized for mobile devices — where most customers browse. The result is a professional online presence that works 24/7.",
    tech: [
      {
        name: "React",
        icon: "FaReact",
        description: "Component-based UI with hooks and state management",
      },
      {
        name: "Tailwind CSS",
        icon: "RiTailwindCssFill",
        description: "Utility-first styling for responsive, consistent design",
      },
      {
        name: "JavaScript",
        icon: "FaJs",
        description: "Client-side logic, form handling, and interactivity",
      },
      {
        name: "Vite",
        icon: "SiVite",
        description: "Fast build tool with instant HMR for development",
      },
      {
        name: "Vercel",
        icon: "IoLogoVercel",
        description: "Continuous deployment and edge hosting",
      },
    ],
    features: [
      {
        title: "Product Gallery",
        description:
          "Categorized grid layout with image previews and product details for easy browsing.",
      },
      {
        title: "Contact Form",
        description:
          "Server-side validated form with feedback messages and spam prevention.",
      },
      {
        title: "Responsive Design",
        description:
          "Mobile-first layout that adapts seamlessly to all screen sizes.",
      },
      {
        title: "Performance Optimized",
        description:
          "Lazy-loaded images and optimized assets for fast load times on any connection.",
      },
    ],
    challenges: [
      "Designing a layout that showcases handcraft products in an appealing way while keeping load times fast — required careful image optimization and lazy loading strategies.",
      "Implementing robust form validation without a backend framework — solved with client + server-side validation patterns.",
      "Creating a visual identity that reflects the artisan brand without a design brief — iterated through multiple mockups with client feedback.",
    ],
    learnings: [
      "Working directly with a real client taught me to translate business needs into technical requirements and manage expectations through iterative feedback.",
      "Deepened understanding of form validation patterns and how to build trust through UI feedback (success/error states, loading indicators).",
      "Learned the importance of designing for the least capable device first — the majority of the client's customers browse on older smartphones.",
    ],
    improvements: [
      "Integrate a headless CMS (e.g., Sanity) so the client can update products without code changes.",
      "Add a WhatsApp integration for direct product inquiries with pre-filled messages.",
      "Implement image optimization pipeline with WebP/AVIF formats and responsive srcsets.",
      "Add product search and filtering functionality.",
    ],
    projectStructure: `src/
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
      { label: "Clone the repository", command: "git clone https://github.com/Charlesson-MP/mile-artesanatos.git" },
      { label: "Navigate to project", command: "cd mile-artesanatos" },
      { label: "Install dependencies", command: "npm install" },
      { label: "Start development server", command: "npm run dev" },
    ],
  },
  {
    slug: "mortugaba-tech",
    title: "Mortugaba Tech",
    subtitle: "Collaborative team project with modern web stack",
    description:
      "A team-developed website built with Next.js and Tailwind CSS, focused on collaboration workflows, Git branching strategies, and responsive UI. This project simulates a real-world development environment with pull requests, code reviews, and shared coding standards.",
    images: [
      "/projects/preview-mortugaba-tech.png",
      "/projects/preview-mortugaba-tech.png",
      "/projects/preview-mortugaba-tech.png",
    ],
    liveUrl: "https://mortugaba-tech.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/mortugaba-tech",
    problem:
      "Most beginner developers build projects in isolation, missing critical collaboration skills expected in professional environments. There was a need for a project that emphasizes teamwork, version control discipline, and shared code quality standards — skills that are often harder to demonstrate than technical ability.",
    solution:
      "We organized a team project using industry-standard Git workflows: feature branches, pull requests with reviews, and conventional commits. The project itself is a responsive website built with Next.js and TypeScript, providing real experience with modern frameworks while practicing collaborative development.",
    tech: [
      {
        name: "Next.js",
        icon: "RiNextjsFill",
        description: "React framework with SSR, routing, and optimization",
      },
      {
        name: "TypeScript",
        icon: "SiTypescript",
        description: "Static typing for safer, self-documenting code",
      },
      {
        name: "Tailwind CSS",
        icon: "RiTailwindCssFill",
        description: "Utility-first CSS for consistent team styling",
      },
      {
        name: "Git",
        icon: "FaGitAlt",
        description: "Version control with branching and merge strategies",
      },
      {
        name: "GitHub",
        icon: "FaGithub",
        description: "Collaboration via PRs, issues, and code review",
      },
      {
        name: "Vercel",
        icon: "IoLogoVercel",
        description: "Preview deployments for each pull request",
      },
    ],
    features: [
      {
        title: "Git Workflow",
        description:
          "Feature branches, pull requests, and code reviews following industry best practices.",
      },
      {
        title: "Responsive Layout",
        description:
          "Mobile-first design with consistent breakpoints across all pages.",
      },
      {
        title: "Type Safety",
        description:
          "Full TypeScript coverage ensuring compile-time error detection.",
      },
      {
        title: "Preview Deployments",
        description:
          "Each PR generates a preview URL for visual review before merge.",
      },
    ],
    challenges: [
      "Coordinating work across multiple team members with different schedules and skill levels — resolved with clear task assignments and async communication.",
      "Managing merge conflicts in shared components — established a component ownership pattern and smaller, focused PRs.",
      "Ensuring consistent code style across the team — implemented ESLint rules and Prettier configuration.",
    ],
    learnings: [
      "Real collaboration requires more communication than code — learned to write descriptive PR descriptions and constructive review comments.",
      "Git branching strategies (feature, develop, main) significantly reduce integration issues when followed consistently.",
      "Working with TypeScript in a team environment exposes its true value — type definitions serve as living documentation for shared code.",
    ],
    improvements: [
      "Add CI/CD pipeline with automated linting and testing on PR creation.",
      "Implement a component library with Storybook for visual documentation.",
      "Add internationalization (i18n) support for multiple languages.",
    ],
    projectStructure: `src/
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
      { label: "Clone the repository", command: "git clone https://github.com/Charlesson-MP/mortugaba-tech.git" },
      { label: "Navigate to project", command: "cd mortugaba-tech" },
      { label: "Install dependencies", command: "npm install" },
      { label: "Start development server", command: "npm run dev" },
    ],
  },
  {
    slug: "los-burgers",
    title: "Los Burgers",
    subtitle: "Commercial landing page with performance-first approach",
    description:
      "A commercial landing page for a burger restaurant, built with Vue.js and Tailwind CSS. The project prioritizes Core Web Vitals optimization, SEO best practices, and fast loading times to maximize conversion and organic search visibility.",
    images: [
      "/projects/preview-los-burgers.png",
      "/projects/preview-los-burgers.png",
      "/projects/preview-los-burgers.png",
    ],
    liveUrl: "https://los-burgers.vercel.app/",
    githubUrl: "https://github.com/Charlesson-MP/los-burgers",
    problem:
      "Small food businesses often rely on generic delivery app profiles that offer limited branding and no control over SEO. The client needed a dedicated landing page that loads instantly on mobile, ranks well on Google, and reflects the restaurant's unique identity — all without ongoing technical maintenance costs.",
    solution:
      "I built a lightweight, performance-optimized landing page using Vue.js with a focus on Core Web Vitals scores. The page features optimized images with lazy loading, semantic HTML for SEO, structured data markup, and a responsive layout that looks great on any device. Lighthouse scores consistently hit 95+ across all categories.",
    tech: [
      {
        name: "Vue.js",
        icon: "FaVuejs",
        description: "Progressive framework for reactive, component-based UI",
      },
      {
        name: "Tailwind CSS",
        icon: "RiTailwindCssFill",
        description: "Rapid styling with performance-friendly utility classes",
      },
      {
        name: "HTML5",
        icon: "FaHtml5",
        description: "Semantic markup for accessibility and SEO",
      },
      {
        name: "CSS3",
        icon: "FaCss3Alt",
        description: "Custom animations and responsive design",
      },
      {
        name: "Vite",
        icon: "SiVite",
        description: "Optimized build output with tree-shaking and minification",
      },
      {
        name: "Vercel",
        icon: "IoLogoVercel",
        description: "Edge deployment for global low-latency delivery",
      },
    ],
    features: [
      {
        title: "Lighthouse 95+",
        description:
          "Consistent scores above 95 in Performance, Accessibility, Best Practices, and SEO.",
      },
      {
        title: "Image Optimization",
        description:
          "Lazy loading, proper sizing, and format optimization for fast LCP.",
      },
      {
        title: "SEO Optimized",
        description:
          "Meta tags, structured data, semantic HTML, and Open Graph integration.",
      },
      {
        title: "Mobile-First Design",
        description:
          "Designed for mobile devices first, where most food customers browse.",
      },
    ],
    challenges: [
      "Achieving consistent Lighthouse scores above 95 required aggressive image optimization — implemented responsive srcsets and format negotiation.",
      "Balancing visual richness (food photography) with performance constraints — used strategic lazy loading and placeholder techniques.",
      "Implementing structured data markup for local business SEO without overcomplicating the codebase.",
    ],
    learnings: [
      "Performance optimization is an iterative process — small changes to image loading, font display, and script deferral compound into significant improvements.",
      "Core Web Vitals (LCP, FID, CLS) require different optimization strategies; understanding each metric is essential for targeted improvements.",
      "SEO is not just about meta tags — semantic HTML structure, page speed, and mobile usability are equally important ranking factors.",
    ],
    improvements: [
      "Add online ordering integration with a delivery platform API.",
      "Implement a dynamic menu section powered by a headless CMS.",
      "Add Google Maps integration showing the restaurant location.",
      "Implement analytics to track page performance and user behavior.",
    ],
    projectStructure: `src/
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
      { label: "Clone the repository", command: "git clone https://github.com/Charlesson-MP/los-burgers.git" },
      { label: "Navigate to project", command: "cd los-burgers" },
      { label: "Install dependencies", command: "npm install" },
      { label: "Start development server", command: "npm run dev" },
    ],
  },
  {
    slug: "wiki-movies",
    title: "Wiki Movies",
    subtitle: "SPA with external API consumption and dynamic rendering",
    description:
      "A single-page application built with vanilla JavaScript that consumes The Movie Database (TMDB) API. Features dynamic content rendering, a real-time search system, and responsive design — all without frameworks, demonstrating strong JavaScript fundamentals.",
    images: [
      "/projects/preview-wiki-movies.png",
      "/projects/preview-wiki-movies.png",
      "/projects/preview-wiki-movies.png",
    ],
    liveUrl: "https://charlesson-mp.github.io/wiki-movies/",
    githubUrl: "https://github.com/Charlesson-MP/wiki-movies",
    problem:
      "Movie enthusiasts often want a quick, clean way to discover and search for movies without the clutter of major streaming platforms. Additionally, as a developer, I needed to demonstrate proficiency in vanilla JavaScript and API integration without relying on frameworks — proving strong fundamentals.",
    solution:
      "I created a clean SPA that connects to the TMDB API to fetch movie data dynamically. The app features a search bar with debounced requests, movie cards with posters and ratings, and a responsive grid layout. Built entirely with vanilla JavaScript, HTML5, and CSS3, it showcases core web development skills without framework abstractions.",
    tech: [
      {
        name: "JavaScript",
        icon: "FaJs",
        description: "ES6+ for API calls, DOM manipulation, and async logic",
      },
      {
        name: "REST API",
        icon: "FaSearch",
        description: "TMDB API integration for movie data retrieval",
      },
      {
        name: "HTML5",
        icon: "FaHtml5",
        description: "Semantic structure and accessibility",
      },
      {
        name: "CSS3",
        icon: "FaCss3Alt",
        description: "Grid layout, animations, and responsive design",
      },
      {
        name: "GitHub Pages",
        icon: "FaGithub",
        description: "Static hosting with custom domain support",
      },
    ],
    features: [
      {
        title: "Real-Time Search",
        description:
          "Debounced search input that queries the TMDB API and updates results dynamically.",
      },
      {
        title: "Dynamic Rendering",
        description:
          "Movie cards are generated from API data using DOM manipulation — no frameworks needed.",
      },
      {
        title: "Responsive Grid",
        description:
          "CSS Grid layout that adapts from 1 to 4 columns based on screen size.",
      },
      {
        title: "Error Handling",
        description:
          "Graceful handling of API failures, empty results, and network issues.",
      },
    ],
    challenges: [
      "Managing asynchronous API calls and race conditions in search — implemented debouncing and request cancellation patterns.",
      "Building a responsive grid without CSS frameworks required deeper understanding of CSS Grid and media queries.",
      "Handling API rate limits and error states gracefully to maintain a smooth user experience.",
    ],
    learnings: [
      "Building without frameworks forces a deep understanding of the DOM API, event delegation, and state management patterns.",
      "Proper error handling in API integrations is crucial — users need clear feedback for every possible state (loading, error, empty, success).",
      "Debouncing is essential for search-as-you-type features to avoid overwhelming APIs and degrading performance.",
    ],
    improvements: [
      "Add movie detail pages with cast information and trailers.",
      "Implement favorites/watchlist using localStorage for persistence.",
      "Add pagination or infinite scroll for browsing large result sets.",
      "Migrate to TypeScript for better maintainability and type safety.",
    ],
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
      { label: "Clone the repository", command: "git clone https://github.com/Charlesson-MP/wiki-movies.git" },
      { label: "Navigate to project", command: "cd wiki-movies" },
      { label: "Open in browser", command: "open index.html" },
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
