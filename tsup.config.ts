import { defineConfig } from 'tsup';

export default defineConfig([
  // for ESModule
  {
    entry: ['src/mjs/index.mts'],
    format: 'esm',
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    dts: true,
  },
  // for CommonJS
  {
    entry: ['src/cjs/index.cts'],
    format: 'cjs',
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    dts: true,
  },
]);
