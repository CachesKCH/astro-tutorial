import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://astro-tutorial-caches.netlify.app/',
  integrations: [tailwind(), preact()]
});