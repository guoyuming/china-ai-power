# NOICELAND Blog — Claude Code CLI Step-by-Step Guide

## Overview

You have 5 files that work together:

```
noiceland/
├── CLAUDE.md                                    ← Claude Code reads this EVERY session
├── design-reference/
│   ├── NOICELAND-Design-System.md               ← Your full design system (source of truth)
│   └── tasks/
│       ├── phase-1-foundation.md                ← Build core site
│       ├── phase-2-seo-search.md                ← SEO + Pagefind
│       ├── phase-3-content-experience.md        ← Tags, TOC, sharing
│       └── phase-4-polish-launch.md             ← Polish + deploy
```

---

## Before You Start

### 1. Install Claude Code CLI

```bash
npm install -g @anthropic-ai/claude-code
```

### 2. Add Astro Docs MCP Server

This gives Claude Code real-time access to the latest Astro documentation:

```bash
claude mcp add --transport http astro-docs "https://mcp.docs.astro.build/mcp"
```

### 3. Create Project Folder

```bash
mkdir noiceland && cd noiceland
mkdir -p design-reference/tasks
```

### 4. Place Your Files

Copy these files into the project folder:
- `CLAUDE.md` → project root
- `NOICELAND-Design-System.md` → `design-reference/`
- All 4 phase task files → `design-reference/tasks/`

---

## Phase 1: Foundation (Day 1-2)

### Start Claude Code

```bash
cd noiceland
claude
```

### Give the Command

```
Read design-reference/tasks/phase-1-foundation.md and implement everything
step by step.

The full design system is at design-reference/NOICELAND-Design-System.md —
read it first to understand all component specs, page layouts, and responsive rules.

Start with project initialization, then build components, then layouts,
then pages. Create sample content last. Verify npm run dev works after
each major step.
```

### What to Expect

Claude Code will:
1. Initialize the Astro project
2. Install dependencies
3. Configure Tailwind with NOICELAND tokens
4. Build all components one by one
5. Build layouts and pages
6. Create sample blog posts

This may take 15-30 minutes of Claude Code working.

### After Phase 1: Manual Check

```bash
npm run dev
```

Open http://localhost:4321 in your browser. Check:
- [ ] Homepage renders with hero 60/40 split
- [ ] Featured grid shows 3 columns
- [ ] Latest posts section shows 4 columns
- [ ] Article pages have 800px header, 680px body
- [ ] Mobile (375px) looks correct — everything stacks
- [ ] Hover effects work on cards (zoom + fade)

Fix any issues before moving on:

```
# Still in Claude Code session:
The homepage hero section is too narrow. The image should be 60% width.
Fix the CSS grid to match the design system: grid-template-columns: 60% 40%.
```

### Commit

```
Initialize a git repo and commit all files with message "Phase 1: Foundation complete"
```

---

## Phase 2: SEO & Search (Day 3)

### Start New Session

```bash
claude
```

### Give the Command

```
Read design-reference/tasks/phase-2-seo-search.md and implement everything.
Refer to CLAUDE.md for architecture rules.
```

### After Phase 2: Manual Check

```bash
npm run build
```

Check dist/ folder:
- [ ] `sitemap-index.xml` exists
- [ ] `rss.xml` exists and is valid XML
- [ ] `pagefind/` directory exists

```bash
npm run preview
```

- [ ] Search works (type a keyword, results appear)
- [ ] View source on an article page — JSON-LD script tag present
- [ ] Reading time shows on cards and article pages

### Commit

```
Commit with message "Phase 2: SEO and search complete"
```

---

## Phase 3: Content Experience (Day 4-5)

### Start New Session

```bash
claude
```

### Give the Command

```
Read design-reference/tasks/phase-3-content-experience.md and implement everything.
Refer to CLAUDE.md for architecture rules and the design system for styling.
```

### After Phase 3: Manual Check

- [ ] `/tags/` page shows all tags with post counts
- [ ] `/tags/technology` (or any tag) shows filtered posts
- [ ] Table of contents appears on articles with 3+ headings
- [ ] Related posts section shows at bottom of articles
- [ ] Code blocks have copy button
- [ ] Social share links open Twitter/LinkedIn intent URLs

### Commit

```
Commit with message "Phase 3: Content experience complete"
```

---

## Phase 4: Polish & Launch (Day 6-7)

### Start New Session

```bash
claude
```

### Give the Command

```
Read design-reference/tasks/phase-4-polish-launch.md and implement everything.
Run through the entire QA checklist at the end and fix any issues you find.
```

### After Phase 4: Final Checks

```bash
npm run build
npm run preview
```

Go through the QA checklist in phase-4 manually. Then:

```
Push this project to a new GitHub repo called noiceland-blog, then I will
connect it to Cloudflare Pages.
```

---

## Troubleshooting Common Issues

### "Cannot find module 'astro:content'"
```
Run npx astro sync to regenerate content types.
```

### Build fails with cryptic error about quotes
Smart quotes (curly quotes) from copy-pasted content break Astro.
```
Find and replace all smart quotes in markdown files with straight quotes.
Check all .md files in src/content/blog/ for characters like "" and ''.
Replace with "" and ''.
```

### Tailwind classes not applying
```
Check that all component files are in the content array in tailwind.config.mjs.
It should include './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue}'.
```

### Pagefind returns no results
```
Make sure data-pagefind-body is on the article content wrapper, not the whole page.
Make sure data-pagefind-ignore is on header, footer, nav.
Rebuild: npm run build (pagefind runs after astro build).
```

### Images not optimizing
```
Make sure you're using Astro's <Image> component from 'astro:assets',
not regular <img> tags. Astro's Image component requires width and height props.
```

---

## Tips for Effective Sessions

1. **One phase per session.** Claude Code works best with focused tasks.

2. **Start each session by saying "Read CLAUDE.md"** — but usually Claude Code
   reads it automatically from the project root.

3. **Use screenshots for visual feedback.** If something doesn't look right:
   ```
   The card title font should be Playfair Display serif, but it's showing as
   Inter sans-serif. Fix the ArticleCard title to use font-serif class.
   ```

4. **Don't fight wrong output — redirect.** If Claude Code builds something
   incorrectly, don't try to patch it:
   ```
   Delete src/components/Header.astro and rebuild it from scratch.
   Follow the spec in NOICELAND-Design-System.md section 2.1 exactly.
   ```

5. **Commit after each phase.** This gives you rollback points.

6. **Update CLAUDE.md if you make decisions** not in the original design system
   (e.g., you decide to add dark mode, change a color). Future sessions will
   pick up the changes automatically.
