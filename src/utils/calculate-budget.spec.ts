import { describe, expect, it } from 'vitest';
import { Product } from '../models/product';
import { User } from '../models/user';
import { calculateBudget } from './calculate-budget';

describe('Calculate Budget', () => {
  it('should calculates budget correctly', () => {
    const user: User = {
      id: 1,
      name: 'John Doe',
      tax: 11,
    };

    const products: Product[] = [
      {
        id: 1,
        name: 'Product 1',
        price: 2000,
      },
      {
        id: 2,
        name: 'Product 2',
        price: 1500,
      },
    ];

    const budget = calculateBudget(user, products);
    expect(budget).toBe(3503);
  });
});
