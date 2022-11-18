import { useState } from "react";
import { Link } from "react-router-dom";
import Transactions from "../components/Transactions";
import useDebounce from "../hooks/useDebounce";

interface Props {
  transactions: ITransactions;
}

function List({ transactions }: Props) {
  const [filterType, setFilterType] = useState<string>("");

  const handleChange = useDebounce((inputText: string) => {
    console.log(inputText);
  });

  return (
    <>
      <Link to="/" className="show_more">
        Home
      </Link>
      <div className="filter_container">
        <div className="form-group radio">
          <div className="radio_group">
            <input
              type="radio"
              onChange={() => {
                setFilterType("income");
              }}
              value="income"
              name="transaction_type"
              checked={filterType === "income"}
            />
            <label htmlFor="transaction_type">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              onChange={() => {
                setFilterType("expense");
              }}
              value="expense"
              name="transaction_type"
              checked={filterType === "expense"}
            />
            <label htmlFor="transaction_type">Expense</label>
          </div>
        </div>
        <input type="text" className="search" placeholder="Search here . . . " onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)} />
      </div>
      <Transactions transactions={transactions} />
    </>
  );
}

export default List;
