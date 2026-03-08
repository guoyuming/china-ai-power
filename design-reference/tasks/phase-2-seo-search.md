# Phase 2: SEO & Search

## Prerequisites
Phase 1 complete. `npm run build` succeeds. All pages render.

## Task: Full SEO infrastructure, RSS, Pagefind search, reading time

### 1. SEO Utilities

**src/utils/seo.ts:**
- Helper function that takes post data and returns all meta properties
- Generates: title, description, og:*, twitter:*, canonical, JSON-LD

**src/utils/date.ts:**
- Format dates with `Intl.DateTimeFormat('en-US', { year, month: 'long', day: 'numeric' })`

**src/utils/readingTime.ts:**
- Strip markdown, count words, divide by 200, round up
- Return string like "5 min read"

### 2. JSON-LD Structured Data

Add to BlogPost.astro layout `<head>` via BaseHead:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{title}",
  "description": "{description}",
  "image": "{heroImage}",
  "datePublished": "{pubDate ISO}",
  "dateModified": "{updatedDate ISO}",
  "author": { "@type": "Person", "name": "{author}" },
  "publisher": { "@type": "Organization", "name": "NOICELAND" }
}
```

### 3. RSS Feed

**src/pages/rss.xml.ts:**
- Use `@astrojs/rss`
- Title: "NOICELAND"
- Description: site description
- Include all non-draft posts sorted by pubDate desc
- Each item: title, description, pubDate, link, categories (tags)

### 4. Discovery

- Verify `@astrojs/sitemap` generates `sitemap-index.xml` on build
- Create `public/robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://noiceland.com/sitemap-index.xml
  ```

### 5. Pagefind Search

- Verify pagefind runs in build script: `astro build && pagefind --site dist`
- Create **Search.astro** component:
  - Loads Pagefind UI CSS and JS dynamically
  - Search input styled to match NOICELAND design: font-sans, 14px,
    border 1px solid gray-300, focus border blue-400
  - Results overlay/modal
- Add `data-pagefind-body` to article content wrapper in BlogPost.astro
- Add `data-pagefind-ignore` to header, footer, sidebar elements
- Place search icon/trigger in Header.astro navigation

### 6. Reading Time

- Display reading time in:
  - ArticleCard.astro (next to author byline)
  - BlogPost.astro ArticleHeader (next to author name)
- Style: font-sans, 11px, uppercase, gray-600 (same as meta style)

### 7. Cache Headers

Create **public/_headers**:
```
/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate

/pagefind/*
  Cache-Control: public, max-age=86400
```

### 8. Verify

- `npm run build` → zero errors
- `dist/` contains: sitemap-index.xml, rss.xml, pagefind/ directory
- RSS feed is valid XML with correct items
- Search works in preview: `npm run preview`, test a query
- JSON-LD appears in page source on article pages
- Reading time displays correctly
