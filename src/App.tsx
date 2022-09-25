import { Provider } from "react-redux";
import DynamicCounter from "./components/dynamicCounter";
import Counter from "./components/counter";
import store from "./redux/store";

type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <div>
        <Counter/>
        <DynamicCounter />
      </div>
    </Provider>
  );
};

export default App;
