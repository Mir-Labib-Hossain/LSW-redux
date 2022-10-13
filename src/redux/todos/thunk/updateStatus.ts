import { toggled } from "../actions";

const updateStatus = (todoId: number, todoCompleted: boolean) => {
  return async (dispatch: any) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ completed: !todoCompleted }),
    });

    const todo = await response.json();
    dispatch(toggled(todo.id));
  };
};

export default updateStatus;
