import { describe, expect, it } from 'vitest';
import { Sample } from './index.mjs';

describe('Sample class', () => {
  it('hello', () => {
    const sample = new Sample();
    sample.hello();
    expect(true).toBe(true);
  });
});
