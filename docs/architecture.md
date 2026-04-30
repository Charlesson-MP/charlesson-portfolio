# Architecture Overview

## Folder Structure
```
src/
│
├── app/                    # Routing (Next.js App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── projects/
│       └── [slug]/         # Dynamic route for project case studies
│           ├── page.tsx
│           └── not-found.tsx
│
├── components/             # Reusable components
│   ├── ui/                 # Base design system
│   │   ├── Badge.tsx
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Popover.tsx
│   │   ├── Tooltip.tsx
│   │   ├── Logo.tsx
│   │   ├── BackToTop.tsx
│   │   ├── DesktopStepCard.tsx
│   │   └── MobileStepCard.tsx
│   ├── layout/             # Structural (Header, Footer, Drawer)
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── MobileDrawer.tsx
│   ├── sections/           # Home page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── HowIWork.tsx
│   │   ├── Experience.tsx
│   │   ├── AIWorkflow.tsx
│   │   └── Contact.tsx
│   ├── projects/           # Project detail page components
│   │   ├── ProjectDetailsContent.tsx
│   │   ├── ProjectHero.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── ProjectLinks.tsx
│   │   ├── ProjectTOC.tsx
│   │   ├── TechStack.tsx
│   │   ├── SectionBlock.tsx
│   │   ├── FeatureList.tsx
│   │   └── ProjectStructureBlock.tsx
│   └── providers/          # Context providers
│       ├── language-provider.tsx
│       └── theme-provider.tsx
│
├── data/                   # Static data sources
│   ├── projects.ts         # Summary data (listing cards)
│   ├── project-details.ts  # Full case study data (detail pages)
│   ├── skills.ts
│   ├── experience.ts
│   ├── process.ts
│   └── aiWorkFlow.ts
│
├── hooks/                  # Custom hooks
│   ├── use-language.ts
│   └── use-translation.ts
│
├── lib/                    # Helpers, utils, configs
│   └── utils.ts
│
├── locales/                # Internationalization (i18n)
│   ├── pt.ts               # Portuguese translations
│   ├── en.ts               # English translations
│   └── index.ts            # Barrel file and derived types
│
└── types/                  # Global types (TypeScript)
    ├── common.ts           # LocalizedString
    ├── projects.ts         # Project, ProjectDetails, TechItem, Feature
    ├── skills.ts
    ├── experience.ts
    ├── process.ts
    └── aiWorkFlow.ts
```

### Separation of Concerns

The project follows a clear separation of responsibilities:

- `app/` → Routing, layout structure, and page composition
- `components/` → UI and reusable components
- `data/` → Static data (summary + detail), separate from presentation
- `hooks/` → Reusable logic
- `lib/` → Utility functions and helpers
- `locales/` → Internationalization (i18n) translation files
- `types/` → TypeScript type definitions

## Technical Decisions

- Use of Next.js App Router for scalable routing and layout composition
- /src-based structure for better organization
- Use of `@` alias pointing to `/src` for cleaner and maintainable imports

## Styling Strategy

The project uses a **hybrid styling approach** combining:

- Tailwind CSS for utility-first styling
- CSS variables for theme and design system

### Design System

All core design tokens (colors, spacing, radius) are defined in:

/src/app/globals.css

These tokens use CSS variables:

--background
--foreground
--primary
--secondary
...

Them act as the single source of truth for the application's visual identity.

### Tailwind Integration

Tailwind is configured to consume these variables via `tailwind.config.ts`:

Example:

bg-background → var(--background)
text-primary → var(--primary)

This ensures:

- Centralized theme control
- Easy dark mode support
- No hardcoded color values in components

This approach enforces a semantic styling pattern and avoids hardcoded values.

### Dark Mode

Dark mode is controlled via the `.dark` class at the root level.

All theme changes are automatically propagated through CSS variables,
ensuring consistency across the entire application.

## Documentation Strategy

- Global architecture documented in this file
- Key features documented in `/docs`
- All components must include a header comment explaining purpose and responsibilities