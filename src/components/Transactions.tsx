import { useGetTransactionQuery } from "../service/transactionAPI";
import Transaction from "./Transaction";

const Transactions = () => {
  const { data } = useGetTransactionQuery();
  return (
    <>
      <p className="second_heading">Your Transactions:</p>
      <div className="conatiner_of_list_of_transactions">
        <ul>
          {data?.map((transaction: ITransaction) => (
            <Transaction key={transaction.id} data={transaction} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Transactions;
