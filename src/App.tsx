import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import Layout from "./components/Layout";
import Home from "./pages/home";
import List from "./pages/list";
import { useGetTransactionQuery } from "./service/transactionAPI";

const App: React.FC = () => {
  const { type: filterType, search: filterSearch } = useAppSelector((state) => state.filter);
  const { data } = useGetTransactionQuery({ filterType, filterSearch });
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home transactions={data || []} />} />
          <Route path="/list" element={<List transactions={data || []} />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
};

export default App;
