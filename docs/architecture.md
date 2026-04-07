# Architecture Overview

## Folder Structure
```
src/
│
├── app/                # Routing (Next.js App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/         # Reusable components
│   ├── ui/
│   ├── layout/
│   │   └── Header.tsx
│   └── sections/
│
├── hooks/              # Custom hooks
│
├── lib/                # Helpers, utils, configs
│
└── types/              # Global types (TypeScript)
```

### Separation of Concerns

The project follows a clear separation of responsibilities:

- `app/` → Routing and layout structure
- `components/` → UI and reusable components
- `hooks/` → Reusable logic
- `lib/` → Utility functions and helpers
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