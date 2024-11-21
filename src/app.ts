import cors from 'cors';
import express, { Application } from 'express';
import { CarRoute } from './app/modules/car/car.route';
import { OrderRoute } from './app/modules/order/order.route';

const app: Application = express();

// PARSERS
app.use(express.json());
app.use(cors());

// ROUTES
app.use('/api/cars', CarRoute);
app.use('/api/orders', OrderRoute);

export default app;