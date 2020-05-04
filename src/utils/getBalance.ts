import {TransactionInterface} from '../models/Transaction';

export interface Balance {
  income: number;
  outcome: number;
  total: number;
}

export function getBalance(transactions: TransactionInterface[]):Balance{
  const income = transactions.reduce(
    (worker, transaction) => (transaction.type === 'income' ? worker + transaction.value : worker),0
  );

  const outcome = transactions.reduce(
    (worker, transaction) => (transaction.type === 'outcome' ? worker + transaction.value : worker),0
  );

  const total = income - outcome;

  const balance = {income, outcome, total}

  return balance;
}