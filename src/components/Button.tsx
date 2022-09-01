import React from "react";
const Button: React.FC<{ children: any; handler: any }> = ({ children, handler }) => {
  return <button onClick={handler}>{children}</button>;
};
export default Button;
