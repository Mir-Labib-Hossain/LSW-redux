import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter/actions";
type Props = {};

const Counter = (props: Props) => {
  const count = useSelector((state: any) => state.counterReducer.value);
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(increment());
  };

  const decrementHandler = () => {
    dispatch(decrement());
  };
  return (
    <div>
      Counter {count}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
    </div>
  );
};

export default Counter;
