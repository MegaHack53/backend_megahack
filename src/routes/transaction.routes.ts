import { Router } from 'express';

const transactionRouter = Router();

transactionRouter.get('/', (request,response) => {
  try {
    return response.json({message: "transaction route"})
  }
  catch(err){
    return response.json({error: err.message});
  }
})

export default transactionRouter;