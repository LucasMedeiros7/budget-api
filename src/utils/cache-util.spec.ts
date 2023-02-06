import { describe, expect, it } from 'vitest';
import { cacheUtil } from './cache-util';

describe('Cache util', () => {
  it('should persist value in cache', () => {
    cacheUtil.set({ key: 'value', data: { value: 100 } });
    const value = cacheUtil.get('value');
    expect(value).toEqual({ value: 100 });
  });
});
