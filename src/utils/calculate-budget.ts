import { Product } from '../models';
import { User } from '../models';

export function calculateBudget(user: User, products: Product[]): Number {
  const budget = products.reduce((sum, product) => {
    const tax = (product.price * user.tax) / 100;
    const productPrice = product.price + tax;
    return sum + productPrice;
  }, 0);

  return Math.trunc(budget);
}
