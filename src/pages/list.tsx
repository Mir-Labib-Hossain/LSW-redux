import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import Pagination from "../components/Pagination";
import Transactions from "../components/Transactions";
import { resetFilter, setFilterSearch, setFilterType } from "../features/filterSlice";
import useDebounce from "../hooks/useDebounce";

interface Props {
  transactions: ITransactions;
}

function List({ transactions }: Props) {
  const { type, search } = useAppSelector((state) => state.filter);
  const [input, setInput] = useState(search);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();

  const handleFilterSearch = useDebounce((inputText: string) => {
    dispatch(setFilterSearch(inputText));
  });

  const handleChange = (inputText: string) => {
    handleFilterSearch(inputText);
    setInput(inputText);
  };

  const handleReset = () => {
    dispatch(resetFilter());
    setInput("");
  };

  const limit = 5;
  const start = currentPage * limit - limit;
  const end = currentPage * limit;
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
                dispatch(setFilterType("income"));
              }}
              value="income"
              name="transaction_type"
              checked={type === "income"}
            />
            <label htmlFor="transaction_type">Income</label>
          </div>
          <div className="radio_group">
            <input
              type="radio"
              onChange={() => {
                dispatch(setFilterType("expense"));
              }}
              value="expense"
              name="transaction_type"
              checked={type === "expense"}
            />
            <label htmlFor="transaction_type">Expense</label>
          </div>
        </div>
        <input type="text" value={input} className="search" placeholder="Search here . . . " onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value)} />
        <button onClick={handleReset}>X</button>
      </div>
      <Transactions transactions={transactions.slice(start, end)} />
      {transactions.length > limit && <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPage={Math.ceil(transactions.length / limit)} />}
    </>
  );
}

export default List;
