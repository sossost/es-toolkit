import { describe, expect, it } from 'vitest';
import { randomInt } from './randomInt';

describe('randomInt function', () => {
  it('generates a random integer between min (inclusive) and max (inclusive)', () => {
    const min = 1;
    const max = 10;
    for (let i = 0; i < 100; i++) {
      const result = randomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it('swaps min and max if min is greater than max', () => {
    const min = 10;
    const max = 1;
    for (let i = 0; i < 100; i++) {
      const result = randomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(max);
      expect(result).toBeLessThanOrEqual(min);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it('handles edge cases where min and max are the same', () => {
    const min = 5;
    const max = 5;
    const result = randomInt(min, max);
    expect(result).toBe(min);
    expect(result).toBe(max);
  });

  it('works with negative ranges', () => {
    const min = -10;
    const max = -1;
    for (let i = 0; i < 100; i++) {
      const result = randomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });

  it('works with a mix of negative and positive ranges', () => {
    const min = -5;
    const max = 5;
    for (let i = 0; i < 100; i++) {
      const result = randomInt(min, max);
      expect(result).toBeGreaterThanOrEqual(min);
      expect(result).toBeLessThanOrEqual(max);
      expect(Number.isInteger(result)).toBe(true);
    }
  });
});
