import { it, expect } from 'vitest';
import { plusOne } from './';

it('should plus one', () => {
  expect(plusOne(2)).toBe(3);
});
