import React from "react";
import Body from "./components/body";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import SearchBox from "./components/search-box";
const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <SearchBox />
      <Body />
      <Footer />
    </>
  );
};
export default App;
