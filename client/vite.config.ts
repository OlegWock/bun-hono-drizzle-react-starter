import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  root: import.meta.dir,
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 8441
  }
});
