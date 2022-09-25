import { DECREMENT, INCREMENT } from "./actionTypes";

type actionProps = { type: string };
const initialState = {
  value: 0,
};
const counterReducer = (state = initialState, { type }: actionProps) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + 1,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - 1,
      };

    default:
      return state;
  }
};
export default counterReducer;
