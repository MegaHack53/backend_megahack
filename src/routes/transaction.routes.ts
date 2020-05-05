import { Router } from 'express';
import Transaction from '../models/Transaction';
import CreateFormatedTransactionsService from '../services/CreateFormatedTransactionsService';
import ListCategoryDetailsService from '../services/ListCategoryDetailsService';
import ListCategoriesAvialableService from '../services/ListCategoriesAvailableService';

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

transactionRouter.get('/:category', async (request,response) => {
  const { category } = request.params;
  
  if(category.toLowerCase() === 'categories'){
    const listCategoriesService = new ListCategoriesAvialableService();

    const categories = await listCategoriesService.run();

    return response.json(categories);
  }
  const listCategoryDetail = new ListCategoryDetailsService();

  const balance = await listCategoryDetail.run(category);

  return response.json({category, balance})
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