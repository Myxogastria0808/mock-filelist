import { describe, expect, it } from 'vitest';
import { Sample } from './index.js';

describe('Hello interface', () => {
  it('hello', () => {
    const sample = new Sample();
    sample.hello();
    expect(true).toBe(true);
  });
});
