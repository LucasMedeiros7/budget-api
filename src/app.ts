import express from 'express';
import { productsRoutes, userRoutes } from './routes';

const app = express();

app.use(express.json());

app.use(userRoutes);
app.use(productsRoutes);

export { app };
