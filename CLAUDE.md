# CLAUDE.md — China AI Blog

## Project Overview
China AI is a content-oriented editorial blog built with Astro 5, Tailwind CSS v4,
deployed to Cloudflare Pages as a fully static site (SSG).

The visual design follows a detailed design system document at
`design-reference/China AI-Design-System.md`. Read that file for full component
specs, page layouts, interaction patterns, and responsive rules.

**CRITICAL**: Follow the design system LITERALLY. Do not improvise colors, spacing,
or typography outside the defined tokens.

## Skills & Tools
- Astro Skill: ~/.claude/skills/publishing-astro-websites-agentic-skill/
  (covers Content Collections, Pagefind, MDX, Shiki, RSS, performance patterns)
- Astro Docs MCP: https://mcp.docs.astro.build/mcp
  (real-time API documentation lookup)
- Use the Skill's patterns for Astro-specific implementation details.
- Use this CLAUDE.md for China AI-specific design, layout, and architecture rules.
- When the Skill and this file conflict, THIS FILE wins (project-specific overrides general).

## Tech Stack
- Astro 5.x with Content Collections (glob loader, Zod schemas)
- Tailwind CSS v4 + @tailwindcss/typography
- TypeScript strict mode
- Pagefind for build-time search indexing
- @astrojs/sitemap + @astrojs/rss
- Shiki for code syntax highlighting
- Cloudflare Pages (static hosting)
- Google Fonts: Playfair Display 400/700, Inter 400/600

## Architecture Rules
- ALL pages statically generated — no SSR adapter, no `output: 'server'`
- Content in `src/content/blog/` as .md or .mdx
- Schema in `src/content.config.ts` with Zod validation
- Use `getCollection('blog')` to query; filter `draft: true` in production
- Dynamic routes use `getStaticPaths()`
- NO heavy JS libraries (no GSAP, no Framer Motion, no jQuery)
- Client islands ONLY for: search widget, mobile menu toggle
- All `<img>` use Astro's `<Image>` from astro:assets with lazy loading
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`

## Design System Summary

### Colors (use Tailwind theme tokens — NEVER hardcode hex)
- Black: #000000 (headings, primary text, button bg)
- White: #FFFFFF (page bg, button text on dark)
- Gray 900: #111111 (footer bg)
- Gray 800: #222222 (article body text)
- Gray 600: #666666 (secondary text, excerpts, dates)
- Gray 500: #999999 (placeholder text)
- Gray 400: #AAADB0 (disabled/badge text)
- Gray 300: #CCCCCC (input default border)
- Gray 200: #E2E2E2 (decorative border)
- Gray 100: #E6E6E6 (dividers)
- Blue 500: #0000EE (links)
- Blue 400: #3898EC (input focus border)

### Typography
- Serif: "Playfair Display", serif → headings, article body
- Sans: "Inter", sans-serif → nav, UI, buttons, meta, tags
- Hero title: 48px/1.1/700 serif (mobile: 32px)
- H1: 36px/1.17/700 serif uppercase (mobile: 28px)
- H2: 30px/1.2/400 serif uppercase (mobile: 24px)
- H3: 20px/1.2/400 serif (card titles)
- Body: 18px/1.6-1.8/400 serif (article text, mobile: 16px)
- UI: 14px/1.43/400 sans (buttons, inputs, nav)
- Meta: 11px/1.27/400 sans uppercase (author byline)
- Overline: 10px/1.2/600 sans uppercase (category labels)
- Caption: 12px/1.5/400 sans (copyright)

### Spacing (8px base grid)
- space-1: 4px | space-2: 8px | space-3: 12px | space-4: 16px
- space-6: 24px | space-8: 32px | space-10: 40px
- space-12: 48px | space-16: 64px | space-24: 96px

### Layout
- Container: 1200px max, centered, padding 48px desktop / 24px mobile
- Article content: 680px max, centered
- Article header: 800px max, centered
- NO border-radius on cards (editorial aesthetic)
- Card shadow: none default, `0 2px 8px rgba(0,0,0,0.08)` on hover (optional)

### Key Interaction Patterns
- Header: NOT sticky, scrolls with page, height 80px
- ArticleCard hover: image scale(1.05) 0.3s + title opacity 0.7
- GhostButton hover: bg black, text white, 0.3s transition
- NavItem hover: opacity 0.7 or underline, 0.2s
- No scroll-triggered animations (keep it editorial/clean)
- All images: loading="lazy"

### Responsive Breakpoints
- Desktop: ≥992px
- Tablet: 768–991px
- Mobile Landscape: 480–767px
- Mobile Portrait: ≤479px

### Grid Column Rules
- HeroSection: 60%/40% desktop → stack mobile
- FeaturedGrid: 3col → 2col tablet → 1col mobile
- LatestPosts: 4col → 2col tablet → 1col mobile
- PostsGrid: 3col → 2col tablet → 1col mobile
- BottomGrid: 2col → 1col mobile
- Footer BottomRow: 5col → 3col tablet → 1col mobile

## Content Schema
Required: title, description, pubDate, tags, draft
Optional: updatedDate, heroImage, featured

## Pages
1. `/` — Homepage: Hero + FeaturedGrid (6) + LatestPosts (8) + BottomGrid (4) + FullFooter
2. `/latest` (or `/blog`) — Latest Posts: PageHeader + PostsGrid (paginated) + MinimalFooter
3. `/blog/[slug]` — Article: ArticleHeader + HeroImage + ArticleContent + MinimalFooter
4. `/about` — About page
5. `/tags/` — Tag listing
6. `/tags/[tag]` — Posts by tag
7. `/rss.xml` — RSS feed
8. `/404` — Not found

## Naming
- Blog files: kebab-case.md
- Components: PascalCase.astro
- Utilities: camelCase.ts

## Commands
- `npm run dev` → localhost:4321
- `npm run build` → astro build && pagefind --site dist
- `npm run preview` → preview production build
- `npx astro sync` → regenerate types after schema changes

## Deployment
- Push to main → Cloudflare Pages auto-builds
- Build command: `npm run build`
- Build output: `dist/`
