import express from 'express';
import { budgetRoutes, productsRoutes, userRoutes } from './routes';

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(productsRoutes);
app.use(budgetRoutes);

export { app };
