import { defineConfig } from 'tsup';

export default defineConfig([
  // for CommonJS
  {
    entry: ['src/index.cts', '!src/**/*.test.cts', '!src/test_assets/'],
    format: 'cjs',
    outDir: 'dist',
    splitting: false,
    sourcemap: true,
    dts: true,
    target: 'es2022',
  },
]);
