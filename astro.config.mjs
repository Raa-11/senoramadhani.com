import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(), 
    tailwind({
      applyBaseStyles: false,
    }), 
    mdx()
  ],
  site: "https://senoramadhani.com",
  markdown: {
    shikiConfig: {
      theme: "light-plus"
    }
  },
  vite: {
    resolve: {
      alias: {
        "~/*": path.resolve("src"),
      },
    },
  },
});