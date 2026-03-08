# Phase 4: Polish & Launch

## Prerequisites
Phases 1-3 complete. All features working.

## Task: Performance, accessibility, final QA, production deploy

### 1. Analytics

- Add Cloudflare Web Analytics beacon to BaseHead.astro
- Only in production: `{import.meta.env.PROD && <script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "YOUR_TOKEN"}' />}`
- Alternatively: Plausible script tag (lightweight, privacy-friendly)

### 2. Performance Optimization

- All images: Astro `<Image>` component with explicit width/height
- Google Fonts: ensure preconnect is in BaseHead (already done in Phase 1)
- Font display: verify `display=swap` in Google Fonts URL
- Verify: zero client-side JS on pages without interactive islands
- Verify: Pagefind JS only loads on pages with search interaction
- Check: no unused CSS (Tailwind purges automatically)
- Add `<link rel="preload">` for hero image on homepage if LCP is slow

### 3. Accessibility (per design system section 4.2 focus states)

- **Skip-to-content link**: first element in BaseLayout body
  `<a href="#main-content" class="sr-only focus:not-sr-only ...">Skip to content</a>`
- **Heading hierarchy**: one `<h1>` per page, then h2, h3 in order
- **Focus styles**: per design system — `outline: 2px solid #3898EC, outline-offset: 2px`
  on all `a:focus-visible` and `button:focus-visible`
- **Alt text**: every `<img>` and Astro `<Image>` has descriptive alt
- **aria-label**: on `<nav>`, search button, mobile menu toggle
- **Keyboard navigation**: tab through header nav, search, all links
- **Color contrast**: verify black text on white bg passes WCAG AA (it does)
- **Semantic HTML**: already using `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`

### 4. View Transitions

- Add `import { ViewTransitions } from 'astro:transitions'` to BaseLayout
- Add `<ViewTransitions />` in `<head>`
- Add `transition:name="hero-image"` to hero images for smooth article open
- Ensure back button works correctly with transitions

### 5. Progressive Enhancement

- Site fully readable with JS disabled
- Search widget hidden when JS disabled (wrap in JS-added class or use noscript)
- Mobile menu: ensure it works or has a fallback without JS
- All content is in semantic HTML, not JS-rendered

### 6. Redirects

Create **public/_redirects** (if needed):
```
/feed  /rss.xml  301
/atom.xml  /rss.xml  301
/latest  /blog  301
```

### 7. Final QA Checklist

Run through every item:

**Build:**
- [ ] `npm run build` → zero errors, zero warnings
- [ ] dist/ contains all expected files

**Pages:**
- [ ] Homepage: hero 60/40 layout, featured grid 3-col, latest 4-col, bottom 2-col
- [ ] Blog listing: 3-col grid, pagination works
- [ ] Article page: 800px header, 680px content, hero image, author row
- [ ] Tags index: all tags with counts
- [ ] Tag archive: filtered posts correct
- [ ] About page: renders
- [ ] 404 page: renders with link home

**SEO:**
- [ ] sitemap-index.xml in dist/
- [ ] rss.xml in dist/, valid XML
- [ ] Every page has unique `<title>` and `<meta description>`
- [ ] OG tags present on all pages (test: opengraph.xyz)
- [ ] JSON-LD on article pages
- [ ] Canonical URLs on all pages
- [ ] robots.txt references sitemap

**Search:**
- [ ] Pagefind index in dist/pagefind/
- [ ] Search returns results in preview

**Responsive:**
- [ ] 1440px: all grids at full column count
- [ ] 992px: grids collapse per design system
- [ ] 768px: tablet layout
- [ ] 375px: single column, mobile menu, readable type

**Interactions:**
- [ ] ArticleCard hover: image zoom + title fade
- [ ] GhostButton hover: bg flip
- [ ] Nav link hover: opacity/underline
- [ ] Footer link hover: color to white
- [ ] Code block copy button works
- [ ] Social share links open correctly

**Performance:**
- [ ] Lighthouse Performance: target 95+
- [ ] Lighthouse Accessibility: target 95+
- [ ] Lighthouse SEO: target 100
- [ ] No layout shift (CLS near 0)
- [ ] First Contentful Paint < 1.5s

### 8. Deploy to Cloudflare Pages

1. Initialize git, commit all files:
   ```bash
   git init
   git add .
   git commit -m "NOICELAND blog: complete build"
   ```

2. Push to GitHub:
   ```bash
   gh repo create noiceland-blog --private --push
   ```
   Or create repo manually and push.

3. Cloudflare Dashboard → Workers & Pages → Create → Pages → Import Git
4. Build settings:
   - Framework preset: Astro
   - Build command: `npm run build`
   - Output directory: `dist`
5. Deploy and verify at `*.pages.dev` URL

### 9. Post-Launch

- [ ] Add custom domain in Cloudflare Pages settings
- [ ] SSL active and working
- [ ] Submit sitemap to Google Search Console
- [ ] Test RSS feed in a reader
- [ ] Share a link on social media — verify OG preview card
