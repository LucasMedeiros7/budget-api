import { Product } from '../models/product';
import { User } from '../models/user';

export function calculateBudget(user: User, products: Product[]): Number {
  const budget = products.reduce((sum, product) => {
    const tax = user.tax / 100;
    const productPrice = product.price + (product.price * tax) / 100;
    return sum + productPrice;
  }, 0);

  return Math.trunc(budget);
}
