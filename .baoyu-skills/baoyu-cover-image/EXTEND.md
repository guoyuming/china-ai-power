# baoyu-cover-image EXTEND.md — China AI Digest

## Project defaults

default_output_dir: independent
quick_mode: false
aspect: 3:2
palette: dark
rendering: flat-vector
text: title-only
mood: balanced
font: serif
lang: en

## Notes

- aspect 3:2 matches `aspect-ratio: 3/2` in ArticleCard.astro
- palette "dark" = premium editorial feel matching the black/white design system
- rendering "flat-vector" = clean, modern; matches zero-border-radius editorial aesthetic
- font "serif" matches Playfair Display used on the site
- After generate-cover.ts runs, Claude copies cover.png to public/images/{slug}.png
- Output directory pattern: cover-image/{slug}/
