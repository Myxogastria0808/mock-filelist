import { describe, expect, test } from 'vitest';
import { helloWorld } from './index.cts';

describe('cjs test.', () => {
  test('helloWorld', () => {
    expect(helloWorld()).toBe('Hello, World from CJS (Node.js)!');
  });
});
