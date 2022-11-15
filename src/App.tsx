import React from "react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import Form from "./components/Form";
import Layout from "./components/Layout";
import TopCard from "./components/TopCard";
import Transactions from "./components/Transactions";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Layout>
        <>
          <TopCard />
          <Form />
          <Transactions />
        </>
      </Layout>
    </Provider>
  );
};

export default App;
