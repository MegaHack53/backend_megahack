import Transaction from '../models/Transaction';
import { getBalance, Balance} from '../utils/getBalance';


class ListCategoryDetail {
  async run(category: string): Promise<Balance>{
    const lowerCaseCategory = category.toLowerCase();
    const transactions = await Transaction.find({ category : lowerCaseCategory });

    const balance = getBalance(transactions);
    return balance;
  }
}

export default ListCategoryDetail;