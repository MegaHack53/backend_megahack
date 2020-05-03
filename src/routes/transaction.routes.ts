import { Router } from 'express';
import Transaction from '../models/Transaction';
import CreateFormatedTransactionsService from '../services/CreateFormatedTransactionsService';

const transactionRouter = Router();

transactionRouter.get('/', async (request,response) => {
  try {
    const CreateTransactionService = new CreateFormatedTransactionsService();

    const transactions = await CreateTransactionService.run();

    return response.json(transactions);
  }
  catch(err){
    return response.json({error: err.message});
  }
})

transactionRouter.post('/',async (request,response) => {
  try {
    const transaction = await Transaction.create(request.body);

    const {__v, _id : id, ...rest} = transaction._doc;
    return response.json({id , ...rest});
  } 
  catch(err){
    return response.status(400).json({message: err.message})
  }
})

export default transactionRouter;