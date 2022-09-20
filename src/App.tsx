import React, { useState } from "react";
import Counter from "./components/Counter";
import Sum from "./components/Sum";
const initialValues = [
  { id: 1, count: 0 },
  { id: 2, count: 0 },
];
const App: React.FC = () => {
  const [state, setState] = useState(initialValues);
  const sum = state.reduce((total, state) => total + state.count, 0);
  const inc = (id: number) => {
    const updatedState = state.map((counter) => {
      if (counter.id == id) {
        return {
          ...counter,
          count: counter.count + 1,
        };
      } else {
        return { ...counter };
      }
    });
    setState(updatedState);
  };

  const dec = (id: number) => {
    const updatedState = state.map((counter) => {
      if (counter.id == id)
        return {
          ...counter,
          count: counter.count - 1,
        };
      else return { ...counter };
    });
    setState(updatedState);
  };

  return (
    <>
      {state.map(({ id, count }) => {
        return <Counter key={id} id={id} count={count} inc={inc} dec={dec} />;
      })}
      <Sum sum={sum} />
    </>
  );
};
export default App;
