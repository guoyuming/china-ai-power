import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://chinaaidigest.com',
  integrations: [
    sitemap({
      serialize(item) {
        return {
          ...item,
          lastmod: new Date().toISOString().split('T')[0],
        };
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
    },
  },
});
