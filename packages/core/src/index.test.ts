import { describe, expect, it } from 'vitest';
import { Hello } from './index.js';

describe('Hello interface', () => {
  it('hello', () => {
    class Sample implements Hello {
      hello(): void {
        console.log('Hello from core');
      }
    }
    const sample = new Sample();
    sample.hello();
    expect(true).toBe(true);
  });
});
