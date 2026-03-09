# Human Operator Guide — China AI Digest Content Workflow

## What This Is
A step-by-step reference for publishing a Chinese-language article to chinaaidigest.com.
The pipeline: drop source → Claude translates + generates cover → review → deploy.

---

## Before You Start

### Requirements
- Claude Code running with Opus 4.6: `claude --model claude-opus-4-6`
- `.env` exists at project root with `API_KEY=...` (newapi.pro key)
- Internet connection (for Gemini image generation)

---

## Step 1 — Prepare the Source File

Save each Chinese article as a `.md` file in `_inbox/raw/`.

### File format
```
_inbox/raw/my-article.md
```

### Frontmatter (all fields optional but recommended)
```yaml
---
sourceUrl: "https://original-source.com/article"
sourceDate: 2026-03-09
featured: false        # true = homepage hero (use for only one article at a time)
tags: ["policy"]       # Claude will suggest tags if omitted
---

[Paste Chinese article body here]
```

### Important notes
- Filename does not matter — Claude derives the English slug from the translated title
- Multiple files can be dropped at once for batch processing
- `featured: true` makes the article the homepage hero — only one article should have this at a time
- Tags are optional; Claude will suggest them based on content if not provided
- `sourceDate` sets the publish date; defaults to today if omitted

---

## Step 2 — Initiate Processing

Open Claude Code and type:

```
process inbox
```

For batch with no approval pauses:
```
process inbox, auto-approve all
```

For a single specific file:
```
process inbox — file: my-article.md
```

---

## Step 3 — Checkpoints (standard mode)

There are **2 checkpoints per article**:

### Checkpoint 1 — Translation review
Claude shows the full English translation.
- Type `approve` to continue
- Type `refine` to run another polish pass
- Or give specific feedback: `the second paragraph is too informal, revise`

### Checkpoint 2 — Cover image parameters
Claude shows 6 parameters for the cover image:
1. Palette
2. Rendering style
3. Mood
4. Title text overlay
5. Composition notes
6. Aspect ratio

- Type `approve` to generate the image
- Or adjust a parameter: `change palette to monochrome`

---

## Step 4 — After Processing

Claude will have:
- Written `src/content/blog/{slug}.md`
- Copied the cover image to `public/images/{slug}.png`
- Archived the source to `_inbox/processed/{slug}-zh.md`

### What to check
1. **Preview the site locally:**
   ```bash
   npm run dev
   ```
   Open http://localhost:4321 and verify:
   - Article appears on homepage (if `featured: true`, it should be the hero)
   - Article page loads at `/blog/{slug}`
   - Cover image displays correctly
   - Title, date, and tags are correct

2. **Check the article file** `src/content/blog/{slug}.md`:
   - Title reads naturally in English
   - Description (used for SEO and card excerpt) is one clean sentence
   - `pubDate` is correct
   - `tags` are relevant

3. **Check the cover image** `public/images/{slug}.png`:
   - Opens and displays correctly
   - Aspect ratio looks right (should be 3:2)

---

## Step 5 — Deploy

```bash
git add src/content/blog/{slug}.md public/images/{slug}.png
git commit -m "publish: {slug}"
git push
```

Cloudflare Pages auto-deploys on push to `main`. Check the build at the Cloudflare dashboard.

---

## Step 6 — Clean Up Temporary Files (IMPORTANT)

The pipeline generates large working files that are NOT committed but accumulate on disk.
**Delete these after each session** to avoid wasting storage.

### Translation working files
```bash
rm -rf _inbox/raw/*-en/
```
Per-article folders like `_inbox/raw/my-article-en/` containing 5–6 intermediate markdown
files (analysis, draft, critique, revision, etc.).

### Cover image working files
```bash
rm -rf cover-image/
```
Contains prompt files and the working `cover.png` for every article processed.
The final image is already copied to `public/images/` — this folder is safe to delete.

### Archived source files (optional)
```bash
rm -rf _inbox/processed/*.md
```
The original Chinese source files. Keep them if you want a local archive; delete if
storage is a concern. They are gitignored and serve no function after publishing.

### One-liner to clean everything at once
```bash
rm -rf _inbox/raw/*-en/ cover-image/ _inbox/processed/*.md
```

---

## File Path Reference

| Asset | Path | Committed to git |
|-------|------|-----------------|
| Chinese source | `_inbox/raw/{filename}.md` | No |
| Translation working files | `_inbox/raw/{filename}-en/` | No — DELETE after use |
| Cover working files | `cover-image/{slug}/` | No — DELETE after use |
| Archived source | `_inbox/processed/{slug}-zh.md` | No |
| Published article | `src/content/blog/{slug}.md` | Yes |
| Hero image | `public/images/{slug}.png` | Yes |

---

## Troubleshooting

**Image generation fails**
- Check `.env` has `API_KEY=...` at project root
- Verify the key is valid at newapi.pro

**Translation looks off**
- Use `refine` at Checkpoint 1, or give specific feedback
- Make sure you are running Claude with Opus 4.6 (`claude --model claude-opus-4-6`) for best quality

**Article does not appear on site**
- Check `draft: false` in the article frontmatter
- Run `npx astro sync` to regenerate types, then `npm run dev` again

**Build fails on Cloudflare**
- Run `npm run build` locally first to catch errors before pushing
