import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['./vitest.setup.ts'],
    environment: 'happy-dom',
    // @vitest/coverage-v8
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['html'],
      include: ['src/**/*.mts'],
    },
    // @vitest/ui
    reporters: ['default', 'html'],
  },
});
