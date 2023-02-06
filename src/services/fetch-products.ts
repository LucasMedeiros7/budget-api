import { api } from './api';
import { cacheUtil } from '../utils/cache-util';
import { Product } from '../models';

interface FetchProductsResponse {
  products: Product[];
}

export async function fetchProducts(): Promise<FetchProductsResponse> {
  const productsData = cacheUtil.get('product-data') as Product[];

  if (!productsData) {
    const { data } = await api.get<Product[]>('/products');
    cacheUtil.set({ key: 'product-data', data });
    return {
      products: data,
    };
  }

  return {
    products: productsData,
  };
}
