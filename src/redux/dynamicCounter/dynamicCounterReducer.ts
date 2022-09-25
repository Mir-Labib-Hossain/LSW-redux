import { DDECREMENT, DINCREMENT } from "./actionTypes";

type actionProps = { type: string; payload: number };
const initialState = {
  value: 0,
};
const dynamicCounterReducer = (state = initialState, { type, payload }: actionProps) => {
  switch (type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + payload,
      };

    case DDECREMENT:
      return {
        ...state,
        value: state.value - payload,
      };

    default:
      return state;
  }
};
export default dynamicCounterReducer;
