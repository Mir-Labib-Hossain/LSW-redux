import { updated } from "../actions";

const updateText = (todoId: number, todoText: boolean) => {
  return async (dispatch: any) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ text: todoText }),
    });

    const todo = await response.json();
    dispatch(updated(todo.id, todo.Text));
  };
};

export default updateText;
