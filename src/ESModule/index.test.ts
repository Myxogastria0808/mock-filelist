import { describe, expect, test } from 'vitest';
import { helloWorld } from './index.mts';

describe('mjs test.', () => {
  test('helloWorld', () => {
    expect(helloWorld()).toBe('Hello, World from ESM (browser)!');
  });
});
