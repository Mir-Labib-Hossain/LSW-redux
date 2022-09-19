import React from "react";
import Button from "./Button";
const Counter: React.FC<{ id: number; count: number; inc: any; dec: any }> = ({ id, count, inc, dec }) => {
  return (
    <>
      <h1>Counter {id} :{count} </h1>
      <Button handler={()=>inc(id)}  >Increment</Button>
      <Button handler={()=>dec(id)}  >Decrement</Button>
    </>
  );
};
export default Counter;
