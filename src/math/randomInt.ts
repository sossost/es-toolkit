/**
 * Generates a random integer between minimum (inclusive) and maximum (exclusive).
 * If minimum is greater than maximum, the values are swapped.
 *
 * @param {number} minimum - The lower bound (inclusive).
 * @param {number} maximum - The upper bound (exclusive).
 * @returns {number} A random integer between minimum (inclusive) and maximum (exclusive).
 *
 * @example
 * const result = randominimumt(0, 5); // result will be a random integer between 0 and 5
 * const result2 = randominimumt(0, 5); // result2 will also be a random integer between 0 and 5
 */
export function randomInt(minimum: number, maximum: number): number {
  if (minimum > maximum) {
    [minimum, maximum] = [maximum, minimum];
  }
  return Math.floor(Math.random() * (maximum - minimum)) + minimum;
}
