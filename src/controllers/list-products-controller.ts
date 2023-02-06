import { Request, Response } from 'express';
import { fetchProducts } from '../services/api/fetch-products';

async function ListProductsController(_request: Request, response: Response) {
  try {
    const products = await fetchProducts();
    return response.json(products);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
}

export { ListProductsController };
