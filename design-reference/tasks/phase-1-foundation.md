# Phase 1: Project Foundation

## Context
- Read CLAUDE.md for architecture rules and design tokens.
- Read design-reference/NOICELAND-Design-System.md for FULL component specs,
  page layouts, interaction details, and responsive rules. This is the single
  source of truth — follow it literally.

## Task: Initialize project and build the complete homepage + listing + article pages

### 1. Initialize Project

```bash
npm create astro@latest . -- --template minimal --typescript strict --install
npx astro add tailwind
npx astro add sitemap
npm install @astrojs/rss @tailwindcss/typography
npm install -D pagefind
```

### 2. Configure

**astro.config.mjs:**
- Set `site` to your production URL (placeholder: `https://noiceland.com`)
- Add sitemap integration
- Configure Shiki with `github-dark` theme
- Set markdown to use `@tailwindcss/typography`

**tailwind.config.mjs** — encode ALL NOICELAND design tokens:

```js
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'gray-900': '#111111',
        'gray-800': '#222222',
        'gray-600': '#666666',
        'gray-500': '#999999',
        'gray-400': '#AAADB0',
        'gray-300': '#CCCCCC',
        'gray-200': '#E2E2E2',
        'gray-100': '#E6E6E6',
        'blue-500': '#0000EE',
        'blue-400': '#3898EC',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        'hero': ['48px', { lineHeight: '1.1', fontWeight: '700' }],
        'h1': ['36px', { lineHeight: '1.17', fontWeight: '700' }],
        'h2': ['30px', { lineHeight: '1.2', fontWeight: '400' }],
        'h3': ['20px', { lineHeight: '1.2', fontWeight: '400' }],
        'body-lg': ['18px', { lineHeight: '1.7', fontWeight: '400' }],
        'body': ['16px', { lineHeight: '1.5', fontWeight: '400' }],
        'ui': ['14px', { lineHeight: '1.43', fontWeight: '400' }],
        'caption': ['12px', { lineHeight: '1.5', fontWeight: '400' }],
        'meta': ['11px', { lineHeight: '1.27', fontWeight: '400' }],
        'overline': ['10px', { lineHeight: '1.2', fontWeight: '600' }],
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '24': '96px',
      },
      maxWidth: {
        'container': '1200px',
        'article-header': '800px',
        'article': '680px',
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
```

**package.json** — update build script:
```json
"scripts": {
  "dev": "astro dev",
  "build": "astro build && pagefind --site dist",
  "preview": "astro preview"
}
```

**src/content.config.ts:**
```typescript
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string().min(10).max(100),
    description: z.string().max(160),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default("NOICELAND"),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    excerpt: z.string().optional(),
  }),
});

const authors = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/authors" }),
  schema: z.object({
    name: z.string(),
    bio: z.string().optional(),
    avatar: z.string().optional(),
  }),
});

export const collections = { blog, authors };
```

### 3. Build Components

Follow the design system specs in NOICELAND-Design-System.md sections 2.1–2.5 exactly.

**BaseHead.astro** — full `<head>`:
- charset, viewport, title, meta description
- Google Fonts: preconnect + Playfair Display 400/700, Inter 400/600, display=swap
- OG tags: og:title, og:description, og:image, og:url, og:type
- Twitter Card meta
- Canonical URL link
- Sitemap link: /sitemap-index.xml
- RSS link: /rss.xml

**Header.astro** — per design system section 2.1:
- `<header>` with flexbox, space-between, center-aligned
- Height: 80px, NOT sticky (scrolls with page)
- Logo: "NOICELAND" text, font-sans bold, link to /
- Nav: Home, Latest, About — font-sans 14px, gap 24px
- Hover: opacity 0.7, transition 0.2s
- Mobile: hide nav, show hamburger (☰), expand vertical menu on click
- Container: max-w-container, mx-auto, px-12 desktop / px-6 mobile

**ArticleCard.astro** — per design system section 2.2:
- Props: `post` data, `size` ("default" | "small" | "large")
- Entire card is clickable `<a>` wrapping `<article>`
- ImageWrapper: aspect-ratio 3/2 (default/small) or 16/9 (large), overflow-hidden, NO border-radius
- Image: object-fit cover, transition transform 0.3s
- Meta: category label — font-sans, 10px, semibold, uppercase, letter-spacing 1px, gray-600
- Title: font-serif, 20px default / 16px small / 24px large, black
- Author: font-sans, 11px, uppercase, letter-spacing 0.5px, gray-600, "BY {name}"
- Hover: image scale(1.05), title opacity 0.7

**GhostButton.astro** — per design system section 2.3:
- Props: `href`, `text`
- font-sans, 14px, semibold, uppercase, letter-spacing 1px
- padding 12px 32px, border 1px solid black, bg transparent
- Hover: bg black, text white, transition 0.3s

**Footer.astro** (Full version) — per design system section 2.4:
- Dark bg #111111, white text
- TopRow: logo left, copyright right
- Divider: hr with rgba(255,255,255,0.1) border
- BottomRow: 5-column CSS grid, gap 24px
  - Columns 1-4: link lists with column titles (12px uppercase semibold)
  - Column 5: newsletter form (email input + submit button)
- Responsive: 3col tablet → 1col stack mobile

**MinimalFooter.astro** — per design system section 2.5:
- Dark bg, flexbox space-between
- Left: "NOICELAND" logo, Right: copyright

**Pagination.astro:**
- Prev/Next links with page numbers
- font-sans, centered, gap-6

### 4. Build Layouts

**BaseLayout.astro:**
- HTML shell: `<!DOCTYPE html>`, lang="en"
- `<head>`: BaseHead component
- `<body>`: Header + `<main><slot /></main>` + footer slot (pages choose FullFooter or MinimalFooter)

**BlogPost.astro** — per design system section 3.3:
- ArticleHeader: max-w-article-header, mx-auto, py-12, flex col gap-4
  - CategoryLabel (overline style)
  - Title: h1, font-serif, 48px hero size, bold
  - AuthorRow: avatar (40px circle) + name (11px uppercase)
- HeroImage: full container width, mb-12
- ArticleContent: max-w-article, mx-auto, font-serif, 18px, text-gray-800
  - Style all prose elements per design system section 3.3:
    p margin-bottom 24px, ul padding-left 24px disc, blockquote 24px bold with top border
- MinimalFooter at bottom

**BlogList.astro:**
- Page header with title
- Grid of ArticleCards
- Pagination
- MinimalFooter

### 5. Build Pages

**index.astro** — per design system section 3.1 EXACTLY:
- HeroSection: CSS grid 60%/40%, min-height 480px
  - Left: featured post image, full bleed
  - Right: category label + title (48px serif) + excerpt + author
  - Mobile: stack vertically
- FeaturedGrid: 3-column grid, gap 32px, 6 ArticleCards
  - margin-top 64px
- LatestPostsSection:
  - "LATEST POSTS" centered overline title, margin 64px 0
  - 4-column grid, gap 24px, 8 ArticleCards size="small"
  - GhostButton "VIEW ALL LATEST POSTS" centered, margin-top 48px
- BottomGrid: 2-column grid, gap 32px, 4 ArticleCards size="large"
  - margin-top 64px
- FullFooter

**blog/index.astro** (or latest/index.astro) — per design system section 3.2:
- PageHeader: margin-top 64px, margin-bottom 48px
  - H1: "LATEST POSTS", font-serif 36px bold uppercase
- PostsGrid: 3-column, gap 32px, paginated (12 per page)
- MinimalFooter

**blog/[...slug].astro:**
- getStaticPaths from getCollection('blog'), filter out drafts
- Render with BlogPost layout

**about.astro:**
- Simple page with prose content, max-w-article centered
- MinimalFooter

**404.astro:**
- Centered message with link back to homepage

### 6. Sample Content

Create 8+ blog posts in `src/content/blog/` with varied categories and tags.
At least 2 should have `featured: true`. Use realistic titles and excerpts.
Categories: "Technology", "Design", "Culture", "Travel".
Create `src/content/authors/authors.json` with one author entry.

### 7. Global Styles

**src/styles/global.css:**
- Tailwind directives (@tailwind base, components, utilities)
- CSS custom properties from design system section 1.1 (all color tokens as --color-*)
- Typography prose overrides to match design system article styles:
  - prose headings: font-serif
  - prose body: font-serif, 18px, gray-800, line-height 1.7
  - prose blockquote: serif 24px bold, border-top 2px solid gray-800, padding-top 30px
  - prose links: blue-500
  - prose images: full width, margin-y 32px
- Global reset per design system section 7

### 8. Verify

- `npm run dev` → all pages render correctly
- `npm run build` → zero errors
- Check: homepage matches design system layout (hero 60/40, grids, spacing)
- Check: article page matches design system (800px header, 680px content)
- Check: responsive at 375px, 768px, 1440px
- Check: all hover effects work (card image zoom, title fade, ghost button)
