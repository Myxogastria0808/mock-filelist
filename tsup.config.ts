import { defineConfig } from 'tsup';

export default defineConfig([
  // for ESModule
  {
    entry: ['src/ESModule/index.mts', '!src/**/*.test.ts', '!src/test_assets/'],
    format: 'esm',
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    dts: true,
  },
  // for CommonJS
  {
    entry: ['src/CommonJS/index.cts', '!src/**/*.test.ts', '!src/test_assets/'],
    format: 'cjs',
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    dts: true,
  },
]);
