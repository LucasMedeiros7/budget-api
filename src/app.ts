import express from 'express';
import cors from 'cors';
import { budgetRoutes, productsRoutes, userRoutes } from './routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(userRoutes);
app.use(productsRoutes);
app.use(budgetRoutes);

export { app };
