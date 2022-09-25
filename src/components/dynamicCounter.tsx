import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/dynamicCounter/actions";
type Props = {};

const DynamicCounter = (props: Props) => {
  const count = useSelector((state: any) => state.dynamicCounterReducer.value);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(increment(2));
  };

  const decrementHandler = () => {
    dispatch(decrement(2));
  };
  return (
    <div>
      DynamicCounter {count}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default DynamicCounter;
