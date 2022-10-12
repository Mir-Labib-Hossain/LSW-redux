import { loaded } from "../actions";

const fetchTodos = async (dispatch: any) => {
  const response = await fetch("http://localhost:9000/todos");
  const todos = (await response).json();
  dispatch(loaded(await todos));
};

export default fetchTodos;
