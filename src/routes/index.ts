import { Router } from 'express';
import cardRouter from './card.routes';
import transactionRouter from './transaction.routes'
import postRouter from './post.routes';

const routes = Router();

routes.get('/', (req,res) => res.json({message: 'hello megahack !'}))

routes.use('/transactions', transactionRouter);
routes.use('/cards', cardRouter);
routes.use('/posts', postRouter);

export default routes;