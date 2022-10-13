import { added } from "../actions";

const addTodo = (todoText: string) => {
  return async (dispatch: any) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ text: todoText, completed: false }),
    });

    const todo = (await response).json();
    dispatch(added(await todo));
  };
};

export default addTodo;
