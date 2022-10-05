import React from "react";
import { Provider } from "react-redux";
import Body from "./components/body";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SearchBox from "./components/search-box";
import store from "./redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Navbar />
      <SearchBox />
      <Body />
      <Footer />
    </Provider>
  );
};

export default App;
