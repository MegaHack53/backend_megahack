import { Router } from 'express';
import Transaction from '../models/Transaction';

const transactionRouter = Router();

transactionRouter.get('/', async (request,response) => {
  try {
    const transactions = await Transaction.find();

    const income = transactions.reduce(
      (worker, transaction) => (transaction.type === 'income' ? worker + transaction.value : worker),0
    );

    const outcome = transactions.reduce(
      (worker, transaction) => (transaction.type === 'outcome' ? worker + transaction.value : worker),0
    );

    const total = income - outcome;

    const balance = {income, outcome, total}

    return response.json({transactions, balance});
  }
  catch(err){
    return response.json({error: err.message});
  }
})

transactionRouter.post('/',async (request,response) => {
  try {
    const transaction = await Transaction.create(request.body);

    return response.json(transaction);
  } 
  catch(err){
    return response.status(400).json({message: err.message})
  }
})

export default transactionRouter;