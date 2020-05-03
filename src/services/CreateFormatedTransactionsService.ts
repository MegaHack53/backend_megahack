import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

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

    const income = transactions.reduce(
      (worker, transaction) => (transaction.type === 'income' ? worker + transaction.value : worker),0
    );

    const outcome = transactions.reduce(
      (worker, transaction) => (transaction.type === 'outcome' ? worker + transaction.value : worker),0
    );

    const total = income - outcome;

    const balance = {income, outcome, total}

    const transactionsWithFormatedId = transactions.map( transaction=> ({
      id:transaction._id, 
      category: transaction.category,
      description: transaction.description,
      value: transaction.value,
      type: transaction.type,
      createdAt: transaction.createdAt
      }));

    return { transactions: transactionsWithFormatedId, balance }
  }
}

export default CreateFormatedTransactionService;