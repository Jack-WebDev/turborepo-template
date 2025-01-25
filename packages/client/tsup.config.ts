import { defineConfig, options } from '@codeforge/buildkit';

export default defineConfig({
  ...options,
  external: ['next'],
});
