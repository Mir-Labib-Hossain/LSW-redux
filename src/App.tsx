import { Provider } from "react-redux";
import store from "./redux/store";

type Props = {};

const App = (props: Props) => {
  return (
    <Provider store={store}>
      <div>App</div>
    </Provider>
  );
};

export default App;
