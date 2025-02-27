import { defineConfig } from '@solidjs/start/config';
import tailwindcss from '@tailwindcss/vite';
import devtools from 'solid-devtools/vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
  vite: {
    plugins: [
      devtools({
        /* features options - all disabled by default */
        autoname: true, // e.g. enable autoname
      }),
      tailwindcss(),
      Icons({
        compiler: 'solid',
      }),
    ],
    ssr: { external: ['drizzle-orm'] },
  },
});
