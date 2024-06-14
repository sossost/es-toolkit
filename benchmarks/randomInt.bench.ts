import { bench, describe } from 'vitest';
import { randomInt as randomIntToolkit } from 'es-toolkit';
import { random as randomIntLodash } from 'lodash';

describe('randomInt', () => {
  bench('es-toolkit', () => {
    randomIntToolkit(1, 10);
  });

  bench('lodash', () => {
    randomIntLodash(1, 10);
  });
});
