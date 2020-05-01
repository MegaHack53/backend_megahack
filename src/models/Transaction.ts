import mongoose , {Schema, Document} from 'mongoose';

interface TransactionInterface extends Document {
  category: string;
  description: string;
  value: string;
  type: 'income' | 'outcome';
}

const TransactionSchema:Schema = new mongoose.Schema({
  category: { type: String, required: true },
  description: { type: String, required: true },
  value: {type: String, required: true},
  type: {type: "income" || "outcome", required: true}
})

export default mongoose.model<TransactionInterface>('Transaction',TransactionSchema);