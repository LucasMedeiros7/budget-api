import { Request, Response } from 'express';
import { fetchProducts } from '../services/fetch-products';
import { fetchUsers } from '../services/fetch-users';
import { calculateBudget } from '../utils/calculate-budget';

async function GetBudgetController(
  request: Request,
  response: Response
): Promise<Response> {
  const { userId, productsId } = request.body;

  if (!userId) {
    return response.status(400).json({ message: 'UserId is required!' });
  }

  if (!productsId || !productsId.length) {
    return response.status(400).json({
      message:
        'ProductsId is required, please provide at least one product id!',
    });
  }

  const usersData = await fetchUsers();
  const productsData = await fetchProducts();

  const user = usersData.users.find(user => user.id === userId);
  const products = productsData.products.filter(product =>
    productsId.includes(product.id)
  );

  const budget = calculateBudget(user, products);

  return response.json({
    user,
    products,
    total_budget: budget,
  });
}

export { GetBudgetController };
