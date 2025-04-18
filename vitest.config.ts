import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // @vitest/coverage-v8
    coverage: {
      enabled: true,
      reporter: ['html'],
      exclude: [
        '.direnv/**/*',
        '.github/**/*',
        '.vscode/**/*',
        'coverage/**/*',
        'dist/**/*',
        'html/**/*',
        'docs/**/*',
        'node_modules/**/*',
        '.envrc',
        '.gitignore',
        '.prettierrc',
        'COPYING',
        'flake.lock',
        'flake.nix',
        'package-lock.json',
        'package.json',
        'README.md',
        'renovate.json',
        'tsup.config.ts',
        'typedoc.json',
        'vitest.config.ts',
      ],
    },
    // @vitest/ui
    reporters: ['default', 'html'],
  },
});
