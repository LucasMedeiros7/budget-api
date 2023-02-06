import { Router } from 'express';
import { GetBudgetController } from '../controllers/get-budget-controller';

const budgetRoutes = Router();

budgetRoutes.post('/budget', GetBudgetController);

export { budgetRoutes };
