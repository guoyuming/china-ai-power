#!/usr/bin/env bun
/**
 * generate-cover.ts
 *
 * Reads a baoyu-cover-image prompts/cover.md file, assembles a text prompt,
 * calls Gemini via newapi.pro, and saves cover.png alongside the prompt file.
 *
 * Usage:
 *   bun scripts/generate-cover.ts cover-image/{slug}/prompts/cover.md
 *
 * Env vars (in .env at project root):
 *   API_KEY=...   newapi.pro API key
 */

import { readFileSync, writeFileSync, existsSync } from "fs";
import { resolve, dirname, join } from "path";

// ---------------------------------------------------------------------------
// Load .env from project root
// ---------------------------------------------------------------------------
const projectRoot = resolve(dirname(new URL(import.meta.url).pathname), "..");
const envPath = join(projectRoot, ".env");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const val = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = val;
  }
}

// ---------------------------------------------------------------------------
// Parse args
// ---------------------------------------------------------------------------
const promptFilePath = process.argv[2];
if (!promptFilePath) {
  console.error("Usage: bun scripts/generate-cover.ts <path/to/prompts/cover.md>");
  process.exit(1);
}

const absPromptPath = resolve(promptFilePath);
if (!existsSync(absPromptPath)) {
  console.error(`Error: prompt file not found: ${absPromptPath}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Parse cover.md — extract key fields
// ---------------------------------------------------------------------------
function extractField(content: string, label: string): string {
  const patterns = [
    new RegExp(`^\\*?\\*?${label}\\*?\\*?\\s*[:：]\\s*(.+)`, "im"),
    new RegExp(`\\|\\s*${label}\\s*\\|\\s*([^|]+)\\|`, "im"),
  ];
  for (const re of patterns) {
    const m = content.match(re);
    if (m) return m[1].trim();
  }
  return "";
}

const coverMd = readFileSync(absPromptPath, "utf8");

const title       = extractField(coverMd, "Title(?: text)?");
const palette     = extractField(coverMd, "Palette");
const rendering   = extractField(coverMd, "Rendering(?: style)?");
const mood        = extractField(coverMd, "Mood");
const composition = extractField(coverMd, "Composition(?: notes)?");
const aspect      = extractField(coverMd, "Aspect(?: ratio)?");

// Derive image dimensions from aspect ratio
function parseDimensions(aspect: string): { width: number; height: number } {
  const parts = aspect.replace(":", "/").split(/[:/]/);
  if (parts.length === 2) {
    const [w, h] = parts.map(Number);
    if (w && h) {
      // Normalise to ~1MP while preserving ratio
      const scale = Math.sqrt((1024 * 1024) / (w * h));
      return {
        width: Math.round((w * scale) / 64) * 64,
        height: Math.round((h * scale) / 64) * 64,
      };
    }
  }
  return { width: 1024, height: 683 }; // default 3:2
}

const { width, height } = parseDimensions(aspect || "3:2");

// Build compact prompt text
const promptText = [
  `${rendering || "flat-vector"} style editorial cover image,`,
  `${palette || "dark"} color palette,`,
  `mood: ${mood || "balanced"},`,
  title ? `overlaid serif title text: "${title}",` : "",
  composition ? `composition: ${composition},` : "",
  "high contrast, no photorealism, no people, clean editorial aesthetic.",
].filter(Boolean).join(" ");

console.log(`\nPrompt: ${promptText}`);
console.log(`Dimensions: ${width}x${height}`);

// ---------------------------------------------------------------------------
// Output path: sibling of prompts/ directory
// ---------------------------------------------------------------------------
const outputDir = dirname(dirname(absPromptPath)); // cover-image/{slug}/
const outputPath = join(outputDir, "cover.png");

// ---------------------------------------------------------------------------
// Generate via gpt-image-1 (OpenAI-compatible images endpoint)
// ---------------------------------------------------------------------------
async function generateImage(): Promise<void> {
  const key = process.env.API_KEY;
  if (!key) throw new Error("API_KEY not set");

  const size = `${width}x${height}` as string;
  console.log(`\nCalling gpt-image-1 — size ${size}...`);

  const response = await fetch(
    "https://newapi.deepwisdom.ai/v1/images/generations",
    {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${key}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-image-1",
        prompt: promptText,
        n: 1,
        size: "1536x1024",
        output_format: "png",
      }),
    }
  );

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Image API error ${response.status}: ${body}`);
  }

  const result = await response.json() as {
    data: Array<{ b64_json?: string; url?: string }>;
  };

  const imageData = result.data?.[0];
  if (!imageData) throw new Error("No image data in response");

  if (imageData.b64_json) {
    const buffer = Buffer.from(imageData.b64_json, "base64");
    writeFileSync(outputPath, buffer);
  } else if (imageData.url) {
    const imgResponse = await fetch(imageData.url);
    const arrayBuf = await imgResponse.arrayBuffer();
    writeFileSync(outputPath, Buffer.from(arrayBuf));
  } else {
    throw new Error("No b64_json or url in image response");
  }

  console.log(`\nSaved: ${outputPath}`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------
try {
  if (!process.env.API_KEY) {
    console.error("Error: No API key found. Set API_KEY in .env");
    process.exit(1);
  }
  await generateImage();
} catch (err) {
  console.error("Generation failed:", err);
  process.exit(1);
}
