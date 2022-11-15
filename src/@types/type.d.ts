interface ITransaction {
  id: number;
  name: string;
  type: string;
  amount: number;
}

type ITransactions = ITransaction[];
