import { Router } from 'express';
import { ListUsersController } from '../controllers';

const userRoutes = Router();

userRoutes.get('/users', ListUsersController);

export { userRoutes };
