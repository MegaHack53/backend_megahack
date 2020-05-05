import Transaction from '../models/Transaction';

interface CategoryInterface {
  id: string;
  value: string;
}

class ListCategoriesAvialableService {
  async run () : Promise<CategoryInterface[]> {
    const categorys:CategoryInterface[] = [];

    const transactions = await Transaction.find();

    transactions.forEach(transaction => {
      if(!categorys.find(category => category.value === transaction.category)){
        categorys.push({
          id: transaction.id,
          value: transaction.category
        })
      }
    })
    
    return categorys;
  }
}

export default ListCategoriesAvialableService;