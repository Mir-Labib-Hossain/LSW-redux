import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import Form from "../components/Form";
import TopCard from "../components/TopCard";
import Transactions from "../components/Transactions";
import { resetFilter } from "../features/filterSlice";

interface Props {
  transactions: ITransactions;
}

const Home = ({ transactions }: Props) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(resetFilter());
    console.log("Reset");
    
  }, []);
  return (
    <>
      <TopCard transactions={transactions} />
      <Form />
      <Transactions transactions={transactions.slice(0, 5)} />
      <Link to="/list" className="show_more">
        Show More
      </Link>
    </>
  );
};

export default Home;
