// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  // Static export for Cloudflare Pages
  output: 'static',

  outDir: 'dist',

  // TODO: replace with the real production URL before deploy
  site: 'https://sri-vigneshwara-hospital.pages.dev',

  vite: {
    plugins: [tailwindcss()]
  },

  adapter: cloudflare()
});