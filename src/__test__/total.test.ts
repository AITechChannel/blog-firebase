import { total } from '../helpers/test';

import { describe, expect, it } from 'vitest';

describe('adds 1 + 2 to equal 3', () => {
  it('return', () => {
    expect(total(1, 2)).toBe(5);
  });
});
