import { Router } from 'express';
import { ListUsersController } from '../controllers/list-users-controller';

const userRoutes = Router();

userRoutes.get('/users', ListUsersController);

export { userRoutes };
