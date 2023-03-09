import { Product } from '../models';
import { User } from '../models';

export function calculateBudget(user: User, products: Product[]): Number {
  const budget = products.reduce((sum, product) => {
    const tax = user.tax / 100;
    const paymentAmount = product.price * tax;
    return sum + paymentAmount;
  }, 0);

  return Math.trunc(budget);
}
