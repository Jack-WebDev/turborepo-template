import { defineConfig, options } from '@codeforge/buildkit';

const external = options.external.concat(['vite-tsconfig-paths']);

export default defineConfig({
  ...options,
  external,
});
