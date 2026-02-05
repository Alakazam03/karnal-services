// astro.config.mjs — Astro + Tailwind + React, hybrid output for dynamic routes
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

export default defineConfig({
  adapter: vercel(),
  integrations: [tailwind(), react()],
  site: 'https://karnal-services.example.com',
  vite: {
    resolve: {
      alias: { '@': '/src' }
    }
  }
});