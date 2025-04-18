import { defineConfig } from 'tsup';

export default defineConfig([
  // for ESModule
  {
    entry: ['src/index.mts'],
    format: 'esm',
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    dts: true,
  },
  // for CommonJS
  {
    entry: ['src/index.cts'],
    format: 'cjs',
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    dts: true,
  },
]);
