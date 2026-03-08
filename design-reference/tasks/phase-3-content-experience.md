# Phase 3: Content Experience

## Prerequisites
Phases 1-2 complete. SEO and search working.

## Task: Tags, TOC, related posts, dark mode, social sharing

### 1. Tag System

**src/pages/tags/index.astro:**
- Page title: "TOPICS" — font-serif, 36px bold uppercase (same style as Latest Posts H1)
- Display all tags as a flex-wrap list of pill-style links
- Each tag shows post count: "TECHNOLOGY (12)"
- Style: font-sans, 14px, uppercase, letter-spacing 1px
  border 1px solid black, padding 8px 24px (like GhostButton but smaller)
  hover: bg black, text white
- MinimalFooter

**src/pages/tags/[tag].astro:**
- getStaticPaths extracts unique tags from all posts
- Page title: "{TAG NAME}" — same H1 style as Latest Posts
- PostsGrid: 3-column, gap 32px (same as blog listing)
- MinimalFooter

### 2. Table of Contents

**TableOfContents.astro:**
- Extract h2 and h3 headings from rendered article content
- Desktop: sticky sidebar, positioned to the left or right of article content
  (if design system doesn't specify, put it as a right sidebar on desktop
  at widths ≥ 1200px, otherwise inline above content)
- Mobile: collapsible `<details>` section above article content
- Active heading highlight using IntersectionObserver (client:load island)
- Style: font-sans, 14px, gray-600, active item in black
- Smooth scroll on click
- Only show if article has 3+ headings

### 3. Related Posts

**RelatedPosts.astro:**
- Find 3 posts sharing the most tags with the current post
- Exclude the current post
- Display as a section below article content, above footer:
  - Section title: "RELATED ARTICLES" — overline style (10px sans uppercase)
  - 3-column grid, gap 32px (1col mobile)
  - Use ArticleCard size="small"

### 4. Dark Mode

Since the NOICELAND design system is a clean editorial black-on-white aesthetic,
dark mode is OPTIONAL for Phase 3. If implementing:

- DarkModeToggle.astro (client:load island, vanilla JS)
- Tailwind darkMode: 'class' strategy
- Dark palette: bg #111111, text #E6E6E6, cards bg #1A1A1A
- Persist choice in cookie, default to system preference
- Place toggle in Header next to nav

If skipping dark mode, move on to next items.

### 5. Code Blocks

- Configure Shiki in astro.config.mjs: theme `github-dark`
- Add copy-to-clipboard button:
  - Small inline `<script>` that adds a "Copy" button to each `<pre>` block
  - Button: font-sans, 12px, position absolute top-right, opacity 0.6, hover opacity 1
  - On click: copy textContent, show "Copied!" for 2 seconds

### 6. Social Sharing

**ShareButtons.astro:**
- Props: `title`, `url`
- Links: Twitter/X, LinkedIn, Copy URL
- Use intent URLs (no JS SDKs):
  - Twitter: `https://twitter.com/intent/tweet?text={title}&url={url}`
  - LinkedIn: `https://www.linkedin.com/sharing/share-offsite/?url={url}`
  - Copy: small inline JS to copy URL to clipboard
- Style: font-sans, 11px, uppercase, gray-600, inline flex, gap 16px
- Position: below article title in ArticleHeader, or at article bottom

### 7. Newsletter Enhancement

If not already functional from Phase 1:
- Wire up Newsletter.astro in Footer to use a form action endpoint
- Add a standalone newsletter section on homepage (between BottomGrid and Footer)
- Style exactly per design system section 2.4 Column 5 newsletter spec

### 8. Verify

- All tag pages generate correctly
- Tag counts are accurate
- TOC shows and highlights active section on scroll
- Related posts appear on article pages with relevant suggestions
- Code blocks have copy button
- Social share links open correct intent URLs
- `npm run build` → zero errors
