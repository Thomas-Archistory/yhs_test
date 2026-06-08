import { defineConfig } from 'vite';

// Minimal vite config to act as a static web server
// and satisfy the isolated preview environments
export default defineConfig(() => {
  return {
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
