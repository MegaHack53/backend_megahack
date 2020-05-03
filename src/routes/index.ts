import { Router } from 'express';
import cardRouter from './card.routes';
import transactionRouter from './transaction.routes'

const routes = Router();

routes.get('/', (req,res) => res.json({message: 'hello megahack !'}))

routes.use('/transactions', transactionRouter);
routes.use('/cards', cardRouter);

export default routes;