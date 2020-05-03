import * as mongoose from 'mongoose';

export interface CardInterface extends mongoose.Document {
  author: string;
  title: string;
  readtime?: string;
  description?: string;
  category: string;
  value: number;
  url: string;
  icon?: string;
  createdAt: Date;
  _doc: CardInterface;
}

const CardSchema = new mongoose.Schema({
  author: { type: String, required:true},
  title: {type: String, required:true},
  readtime: {type: String, required: false, default: ""},
  category: { type: String, required: true, enum: [
    "tools", "habits", "invest"
  ] },
  description: { type: String, required: false, default: "" },
  icon: { type: String, required: false, default: ""},
  url: { type: String, required: true},
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<CardInterface>('Card',CardSchema);