import * as mongoose from 'mongoose';

export interface TransactionInterface extends mongoose.Document {
  id: string;
  category: string;
  description: string;
  value: number;
  type: 'income' | 'outcome';
  createdAt: Date;
  _doc: TransactionInterface;
}

const TransactionSchema = new mongoose.Schema({
  category: { type: String,lowercase: true, required: true },
  description: { type: String, required: true },
  value: { type: Number, required: true },
  type: { type: String, enum: ["income","outcome"], required: true },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model<TransactionInterface>('Transaction',TransactionSchema);