import { DECREMENT, INCREMENT } from "./actionTypes";

type actionProps = { type: string; payload: number };
const initialState = {
  value: 0,
};
const counterReducer = (state = initialState, { type, payload }: actionProps) => {
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        value: state.value + payload,
      };

    case DECREMENT:
      return {
        ...state,
        value: state.value - payload,
      };

    default:
      return state;
  }
};
export default counterReducer;
