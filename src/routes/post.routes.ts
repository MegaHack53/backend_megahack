import { Router, response } from 'express';
import Post, {CommentInterface} from '../models/Post';

const postRouter = Router();

postRouter.get('/:topic',async (request, response) => {
  try {
    const { topic } = request.params;

    const posts = await Post.find({topic});
    if(posts.length > 0)
      {
        const formattedPostsId = posts.map(post => {
          post._doc.id = post._doc._id;

          delete post._doc._id;
          return post;
        })

        return response.json(formattedPostsId);
      }
    return response.status(400).json({message : "theres is no registers with this topic"})
  }
  catch(err){
    return response.json({error: err.message});
  }
})

postRouter.post('/',async (request, response) => {
  try {
   const trusted = 0;
   const comments: CommentInterface[] = [];

   const post = await Post.create({...request.body, trusted,comments})
   
   // just formatting _id to id
   const id = post._doc._id;
   delete post._doc._id;

   return response.json({
     id,
     ...post._doc
   });
  }
  catch(err){
    return response.status(400).json({error: err.message});
  }
})

postRouter.put('/', async (request,response) => {
  try {
    const { name, message, avatar, topicId } = request.body;
  
    const post = await Post.findById(topicId);
    
    if(post){
      post.comments.push({name,message,avatar});
      const savedPost = await post.save();

      if(savedPost)
        return response.status(204).send();
    }

    return response.status(400).json({ error : "topic does not exists"})
  }
  catch(err){
    return response.json({error: err.message});
  }
  })


postRouter.put('/trust/:id', async (request,response) => {
  try {
    const { id } = request.params;
  
    const post = await Post.findById(id);
    
    if(post){

      post.trusted+=1;

      const savedPost = await post.save();

      if(savedPost)
        return response.status(204).send();
    }

    return response.status(400).json({ error : "topic does not exists"})
  }
  catch(err){
    return response.json({error: err.message});
  }
})


export default postRouter;

