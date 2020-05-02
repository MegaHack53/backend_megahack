import { Router } from 'express';

import transactionRouter from './transaction.routes'

const routes = Router();

routes.get('/', (req,res) => res.json({message: 'hello megahack !'}))

routes.use('/transactions', transactionRouter);

export default routes;