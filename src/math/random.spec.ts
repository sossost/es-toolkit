import { describe, expect, it } from 'vitest';
import { random } from './random';

describe('random function', () => {
  it('generates a random floating-point number between min (inclusive) and max (exclusive)', () => {
    const min = 0;
    const max = 5;
    for (let i = 0; i < 100; i++) {
      const result = random(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThan(max);
    }
  });

  it('swaps min and max if min is greater than max', () => {
    const min = 5;
    const max = 0;
    for (let i = 0; i < 100; i++) {
      const result = random(min, max);
      expect(result).toBeGreaterThanOrEqual(max);
      expect(result).toBeLessThan(min);
    }
  });

  it('handles edge cases where min and max are the same', () => {
    const min = 5;
    const max = 5;
    const result = random(min, max);
    expect(result).toBe(min);
  });

  it('works with negative ranges', () => {
    const min = -10;
    const max = -1;
    for (let i = 0; i < 100; i++) {
      const result = random(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThan(max);
    }
  });

  it('works with a mix of negative and positive ranges', () => {
    const min = -5;
    const max = 5;
    for (let i = 0; i < 100; i++) {
      const result = random(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThan(max);
    }
  });
});