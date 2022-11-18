import { Link } from "react-router-dom";
import Form from "../components/Form";
import TopCard from "../components/TopCard";
import Transactions from "../components/Transactions";

interface Props {
  transactions: ITransactions;
}

const Home = ({ transactions }: Props) => {
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
