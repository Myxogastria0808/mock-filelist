import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    // @vitest/coverage-v8
    coverage: {
      provider: 'v8',
      enabled: true,
      reporter: ['html'],
      include: ['src/**/*.ts'],
    },
    // @vitest/ui
    reporters: ['default', 'html'],
  },
});
