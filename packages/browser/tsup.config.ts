import { defineConfig } from 'tsup';

export default defineConfig([
  // for ESModule
  {
    entry: ['src/index.mts', '!src/**/*.test.mts'],
    format: ['esm'],
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    dts: true,
    target: 'es2022',
  },
]);
