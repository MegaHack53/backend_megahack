import { Router, response } from 'express';
import Card from '../models/Card';

const cardRouter = Router();

cardRouter.get('/:category', async (request, response) => {
  try {
    const { category } = request.params;

    const cards = await Card.find({category});
    
    const cardsWithIdFormatted = cards.map( card => {
      const {__v, _id : id, ...rest } = card._doc;

      const cardFormatted = {id, ...rest};

      return cardFormatted;
    })

    return response.json(cardsWithIdFormatted);
  }
  catch(err){
    return response.json({error : err.message});
  }
})

cardRouter.get('/', async (request,response) => {
  try {
    const cards = await Card.find();

    const formattedCards = cards.map(card => {
      const { __v, _id: id, ...rest} = card._doc;

      const formatted = { id , ...rest};

      return formatted;
    })

    return response.json(formattedCards);
  }
  catch(err){
    return response.json({error : err.message})
  }
})

cardRouter.post('/', async (request, response) => {
  try {
    const card = await Card.create(request.body);

    const {__v, _id: id, ...rest} = card._doc;

    return response.json({id, ...rest});
  }
  catch(err){
    return response.json({ error: err.message })
  }
})

cardRouter.delete('/:id', async ( request,response ) => {
  try {
    const card = await Card.findById(request.params.id);

    await card?.remove();

    return response.status(204).send();
  }
  catch(err){
    return response.json({error: err.message});
  }
})

export default cardRouter;