# Project Details Page — Architecture

## Overview

The project detail page (`/projects/[slug]`) renders a full case study for each portfolio project. It is built as a statically generated dynamic route using Next.js App Router.

## Data Flow

```
data/projects.ts ─────────────→ Projects Section (listing cards)
                                     │
                                     │ Link to /projects/[slug]
                                     ▼
data/project-details.ts ─────→ page.tsx (detail page)
                                     │
                              getProjectDetailsBySlug(slug)
                                     │
                              ┌──────┴──────┐
                              │   Compose    │
                              │  Components  │
                              └──────────────┘
```

### Data Modeling: Option B (Separated Files)

| File                     | Purpose              | Type Used        |
|--------------------------|----------------------|------------------|
| `data/projects.ts`       | Card listing summary | `Project`        |
| `data/project-details.ts`| Full case study data | `ProjectDetails` |

Both share a `slug` field for linkage. This separation keeps each file focused and prevents the listing data from growing with detail content.

## Component Hierarchy

| Component              | Type     | Purpose                                |
|------------------------|----------|----------------------------------------|
| `ProjectHero`          | Server   | Title, subtitle, gallery, and links    |
| `ProjectGallery`       | Client   | Interactive image carousel             |
| `ProjectLinks`         | Server   | Live Demo + GitHub buttons             |
| `SectionBlock`         | Server   | Reusable section wrapper (×9)          |
| `TechStack`            | Server   | Tech cards with icons                  |
| `FeatureList`          | Server   | Numbered feature cards                 |
| `CopyCommandBlock`     | Client   | Terminal block with copy-to-clipboard  |
| `ProjectStructureBlock`| Server   | File tree display                      |

Only 2 components are Client Components (Gallery and CopyCommand), minimizing client-side JavaScript.

## Adding a New Project

1. Add a summary entry to `data/projects.ts` (with a unique `slug`)
2. Add a full detail entry to `data/project-details.ts` (same `slug`)
3. Add preview images to `public/projects/`
4. The page is automatically generated via `generateStaticParams`

## SEO

Each project page has dynamic metadata via `generateMetadata()`:
- Title: `{Project Name} | Charlesson`
- Description: Project description from data

## Error Handling

Invalid slugs trigger `notFound()` which renders `not-found.tsx` — a custom 404 page within the existing layout.
