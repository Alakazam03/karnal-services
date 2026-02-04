// astro.config.mjs — Astro + Tailwind + React, hybrid output for dynamic routes
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  integrations: [tailwind(), react()],
  site: 'https://karnal-services.example.com',
  vite: {
    resolve: {
      alias: { '@': '/src' }
    }
  }
});
