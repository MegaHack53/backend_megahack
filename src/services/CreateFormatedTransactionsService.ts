import Transaction from '../models/Transaction';
import { getBalance , Balance} from '../utils/getBalance';

interface TransactionInterface {
  id:string; 
  category: string;
  description: string;
  value: number;
  type: string;
  createdAt: Date;
}

interface FormatedTransactions {
  transactions: TransactionInterface[];
  balance: Balance;
}

class CreateFormatedTransactionService {
  async run ():Promise<FormatedTransactions>{
    const transactions = await Transaction.find();

    const transactionsWithFormatedId = transactions.map( transaction=> ({
      id:transaction._id, 
      category: transaction.category,
      description: transaction.description,
      value: transaction.value,
      type: transaction.type,
      createdAt: transaction.createdAt
      }));

    const balance = getBalance(transactions);

    return { transactions: transactionsWithFormatedId, balance }
  }
}

export default CreateFormatedTransactionService;