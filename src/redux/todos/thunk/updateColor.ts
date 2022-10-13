import { setColor } from "../actions";

const updateColor = (todoId: number, todoColor: boolean) => {
  return async (dispatch: any) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ color: todoColor }),
    });

    const todo = await response.json();
    dispatch(setColor(todo.id, todo.color));
  };
};

export default updateColor;
