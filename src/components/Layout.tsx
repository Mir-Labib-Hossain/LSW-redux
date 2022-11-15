import Footer from "./Footer";
import Header from "./Header";
interface Props {
  children: React.ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="container">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
