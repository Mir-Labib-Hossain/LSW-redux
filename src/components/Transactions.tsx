import { useGetTransactionQuery } from "../service/transactionAPI";
import Transaction from "./Transaction";

const Transactions = () => {
  const { data } = useGetTransactionQuery();
  console.log(data);

  return (
    <>
      <p className="second_heading">Your Transactions:</p>
      <div className="conatiner_of_list_of_transactions">
        <ul>
          <Transaction />
        </ul>
      </div>
    </>
  );
};

export default Transactions;
