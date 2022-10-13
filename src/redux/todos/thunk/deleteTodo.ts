import { deleted } from "../actions";

const deleteTodo = (todoId: number) => {
  return async (dispatch: any) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });

    dispatch(deleted(todoId));
  };
};

export default deleteTodo;
