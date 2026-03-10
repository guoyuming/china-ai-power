/**
 * Submit all sitemap URLs to IndexNow for fast indexing by Bing, Yandex, and Naver.
 *
 * Run after deploying to production:
 *   bun scripts/submit-indexnow.ts
 *
 * IndexNow key file must be live at:
 *   https://chinaaidigest.com/a3f8b2c4d5e6789012345678901abcde.txt
 */

const KEY = 'a3f8b2c4d5e6789012345678901abcde';
const HOST = 'chinaaidigest.com';
const API = 'https://api.indexnow.org/indexnow';

async function main() {
  // Read the built sitemap from dist/
  const sitemapPath = new URL('../dist/sitemap-0.xml', import.meta.url);
  let xml: string;

  try {
    xml = await Bun.file(sitemapPath).text();
  } catch {
    console.error('Error: dist/sitemap-0.xml not found. Run `npm run build` first.');
    process.exit(1);
  }

  // Parse all <loc> URLs
  const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);

  if (urls.length === 0) {
    console.error('No URLs found in sitemap.');
    process.exit(1);
  }

  console.log(`Submitting ${urls.length} URLs to IndexNow...`);

  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: urls,
    }),
  });

  if (res.ok) {
    console.log(`IndexNow: ${res.status} — submitted ${urls.length} URLs successfully.`);
  } else {
    const body = await res.text();
    console.error(`IndexNow: ${res.status} error — ${body}`);
    process.exit(1);
  }
}

main();
