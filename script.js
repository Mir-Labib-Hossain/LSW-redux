const actions = [
  { type: "increment", payload: 1 },
  { type: "increment", payload: 1 },
  { type: "decrement", payload: 1 },
  { type: "increment", payload: 1 },
];

const initialState = { value: 0 };

const counterReducer = (state, action) => {
  if (action.type == "increment") {
    return {
      ...state,
      value: action.payload + 1,
    };
  } else if (action.type == "decrement") {
    return {
      ...state,
      value: action.payload - 1,
    };
  }
};

console.log(actions.reduce(counterReducer, initialState)); // expected output is 2
