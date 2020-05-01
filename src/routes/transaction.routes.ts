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

transactionRouter.post('/',(request,response) => {
  try {

  }
  catch(err){

  }
})

export default transactionRouter;