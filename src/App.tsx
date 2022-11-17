import React from "react";
import Form from "./components/Form";
import Layout from "./components/Layout";
import TopCard from "./components/TopCard";
import Transactions from "./components/Transactions";
import { useGetTransactionQuery } from "./service/transactionAPI";

const App: React.FC = () => {
  const { data } = useGetTransactionQuery();
  return (
    <Layout>
      <>
        <TopCard transactions={data || []} />
        <Form />
        <Transactions transactions={data || []} />
      </>
    </Layout>
  );
};

export default App;
