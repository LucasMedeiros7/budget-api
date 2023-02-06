import { describe, expect, it } from 'vitest';
import { fetchProducts } from '../../src/services/api/fetch-products';

describe('Fetch Users', () => {
  it('Should be able fetch all users', async () => {
    const { products } = await fetchProducts();

    expect(products[0]).toHaveProperty('id');
    expect(products[0]).toHaveProperty('name');
    expect(products[0]).toHaveProperty('price');
  });
});
