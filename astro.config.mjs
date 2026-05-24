import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // Tailwind v4 is handled via postcss.config.cjs with @tailwindcss/postcss plugin
});
