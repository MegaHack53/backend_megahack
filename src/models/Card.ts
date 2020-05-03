import * as mongoose from 'mongoose';

export interface TransactionInterface extends mongoose.Document {
  author: string;
  title: string;
  readtime: string;
  description: string;
  category: string;
  value: number;
  url: string;
  icon: string;
}

const TransactionSchema = new mongoose.Schema({
  author: { type: String, required:true},
  title: {type: String, required:true},
  category: { type: String, required: true },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  type: { type: String, required: true },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<TransactionInterface>('Transaction',TransactionSchema);