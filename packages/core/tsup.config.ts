import { defineConfig } from 'tsup';

export default defineConfig([
  // for ESModule
  {
    entry: ['src/index.ts', '!src/**/*.test.ts'],
    format: 'esm',
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    dts: true,
  },
  // for CommonJS
  {
    entry: ['src/index.ts', '!src/**/*.test.ts'],
    format: 'cjs',
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    dts: true,
  },
]);
