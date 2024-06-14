/**
 * Generates a random integer between minimum (inclusive) and maximum (inclusive).
 * If minimum is greater than maximum, the values are swapped.
 *
 * @param {number} minimum - The lower bound (inclusive).
 * @param {number} maximum - The upper bound (inclusive).
 * @returns {number} A random integer between minimum (inclusive) and maximum (inclusive).
 *
 * @example
 * const result = randominimumt(1, 10); // result will be a random integer between 1 and 10
 * const result2 = randominimumt(10, 1); // result2 will also be a random integer between 1 and 10
 */
export function randomInt(minimum: number, maximum: number): number {
  if (minimum > maximum) {
    [minimum, maximum] = [maximum, minimum];
  }
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}
