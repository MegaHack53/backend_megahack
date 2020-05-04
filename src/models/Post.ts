import {Schema, model, Document} from 'mongoose';

interface PostInterface extends Document{
  topic: string;
  author: string;
  avatar: string;
  ocupation: string;
  definition: string;
  trusted: number;
  comments: CommentInterface [];
  createdAt: Date;
  _doc: PostInterface;
}

export interface CommentInterface {
  name: string;
  message: string;
  avatar: string;
  createdAt?: Date;
  _id?: string;
  id ?: string;
}

const CommentSchema = new Schema({
  name: String,
  message: String,
  avatar: String,
  createdAt: { type : Date, default: Date.now}
})

const PostSchema = new Schema({
  topic: {type: String, required: true},
  author: {type: String, required: true},
  avatar: {type: String, required: true},
  ocupation: {type: String, required: true},
  definition: {type: String, required: true},
  trusted: Number,
  comments: [CommentSchema],
  createdAt: { type: Date, default: Date.now},
})

export default model<PostInterface>('KnowledgePost', PostSchema);