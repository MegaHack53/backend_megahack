import { Router } from 'express';
import Transaction from '../models/Transaction';

const transactionRouter = Router();

transactionRouter.get('/', async (request,response) => {
  try {
    const transactions = await Transaction.find();

    return response.json(transactions);
  }
  catch(err){
    return response.json({error: err.message});
  }
})

transactionRouter.post('/',async (request,response) => {
  try {
    const transaction = Transaction.create(request.body);

    return response.json(transaction);
  } 
  catch(err){
    return response.status(400).json({message: err.message})
  }
})

export default transactionRouter;