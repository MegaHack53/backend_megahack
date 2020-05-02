import * as mongoose from 'mongoose';

export interface TransactionInterface extends mongoose.Document {
  category: string;
  description: string;
  value: number;
  type: 'income' | 'outcome';
}

const TransactionSchema = new mongoose.Schema({
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