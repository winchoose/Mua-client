import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        icon: true, // viewBox 유지 + size 제어 쉬움
        replaceAttrValues: {
          black: 'currentColor',
          '#B0B0B0': 'currentColor',
        },
      },
    }),
  ],
});
