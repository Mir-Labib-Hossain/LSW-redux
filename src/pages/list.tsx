import { Link } from "react-router-dom";
import Transactions from "../components/Transactions";
type Props = {
  transactions: ITransactions;
};

function List({ transactions }: Props) {
  return (
    <>
      <Link to="/" className="show_more">
        Home
      </Link>
      <Transactions transactions={transactions} />
    </>
  );
}

export default List;
