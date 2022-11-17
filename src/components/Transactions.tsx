import { useGetTransactionQuery } from "../service/transactionAPI";
import Transaction from "./Transaction";

interface Props{
  transactions:ITransactions
}
const Transactions = ({transactions}:Props) => {
  
  return (
    <>
      <p className="second_heading">Your Transactions:</p>
      <div className="conatiner_of_list_of_transactions">
        <ul>
          {transactions.map((transaction: ITransaction) => (
            <Transaction key={transaction.id} data={transaction} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Transactions;
