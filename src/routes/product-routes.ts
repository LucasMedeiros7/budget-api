import { Router } from 'express';
import { ListProductsController } from '../controllers';

const productsRoutes = Router();

productsRoutes.get('/products', ListProductsController);

export { productsRoutes };
